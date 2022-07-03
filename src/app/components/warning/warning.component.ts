import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../../services/common.service";
import { InitService } from "../../protoServices/shop/init.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { environment } from "../../../environments/environment";
import * as googleProtobuf002 from "@ngx-grpc/well-known-types";

@Component({
  selector: "app-warning",
  templateUrl: "./warning.component.html",
  styleUrls: ["../../../assets/scss/dashboard.scss"],
})
export class WarningComponent implements OnInit {
  userName: any;
  warnings: any[] = [];
  env = environment;

  systemSettingRakutenForm = new FormGroup({
    basic: new FormGroup({
      licenseKey: new FormControl("", [Validators.required]),
    }),
  });

  constructor(private router: Router, public commonService: CommonService, private initService: InitService) {}

  ngOnInit() {
    this.userName = this.commonService.getUserName();
    if (localStorage.getItem("warn_count")) {
      const cnt = Number(localStorage.getItem("warn_count"));
      for (let idx = 0; idx < cnt; idx++) {
        this.warnings.push(localStorage.getItem("warn_" + idx));
      }
    } else {
      this.router.navigate(["/"]);
      return;
    }

    // double check from server
    this.initService
      .initCheck(new googleProtobuf002.Empty())
      .then((result) => {
        console.log(result);

        if (result) {
          const resultObj = result.toObject();
          if (resultObj && resultObj.warnType) {
            if (resultObj.warnType.length === 0) {
              this.reset();
            } else {
              localStorage.setItem("warn_count", resultObj.warnType.length.toString());
              for (let idx = 0; idx < resultObj.warnType.length; idx++) {
                localStorage.setItem("warn_" + idx, resultObj.warnType[idx]);
              }
            }
          }
        }
      })
      .catch((err) => {
        try {
          alert(err["statusMessage"]);
        } catch (e) {
          alert(String(e));
        }
      })
      .finally(() => {});
  }

  reset() {
    if (localStorage.getItem("warn_count")) {
      const total = Number(localStorage.getItem("warn_count"));
      for (let idx = 0; idx < total; idx++) {
        localStorage.removeItem("warn_" + idx);
      }
      localStorage.removeItem("warn_count");
    }
    this.router.navigate(["/"]);
  }

  logOut() {
    this.commonService.cookieDelete();
    this.router.navigate(["/login"]);
  }

  onSaveRakutenLicense() {
    const form = document.getElementsByClassName("needs-validation")[0] as HTMLFormElement;

    if (!form.checkValidity()) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    form.classList.add("was-validated");

    console.log(form.checkValidity());
    if (!form.checkValidity()) {
      return;
    }

    console.log(this.systemSettingRakutenForm.controls);
    if (this.systemSettingRakutenForm.invalid) {
      return;
    }
  }
}
