import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
// @ts-ignore
import Bootstrap from "../../../assets/js/bootstrap.bundle.min";
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SystemService } from "../../protoServices/shop/system.service";
import { CommonService } from "../../services/common.service";
import * as googleProtobuf001 from "@ngx-grpc/well-known-types";
import { UpdateSystemServiceRequest } from "../../../proto/shop/system.pb";
import { Timestamp } from "@ngx-grpc/well-known-types";

@Component({
  selector: "app-system-settings",
  templateUrl: "./system-settings.component.html",
  styleUrls: ["../../../assets/scss/system-settings.scss"],
})
export class SystemSettingsComponent implements OnInit {
  systemLicense: any;
  modalEditRakuten: any;

  systemSettingRakutenForm = new FormGroup({
    basic: new FormGroup({
      licenseKey: new FormControl("", [Validators.required]),
      validDate: new FormControl("", [Validators.required]),
    }),
  });

  constructor(public commonService: CommonService, private systemService: SystemService, private router: Router, private ngZone: NgZone, private location: Location) {}

  ngOnInit() {
    this.modalEditRakuten = new Bootstrap.Modal(document.getElementById("modalEditRakuten"));
    this.dataInit();
  }

  dataInit() {
    this.systemService.getSystemService(new googleProtobuf001.Empty()).then((result) => {
      this.systemLicense = result;
      this.systemSettingRakutenForm.controls.basic.controls.licenseKey.setValue(this.systemLicense.licenseKey);
      this.systemSettingRakutenForm.controls.basic.controls.validDate.setValue(this.commonService.secondsToJpDateFormatWithSeparator(this.systemLicense.expiredAt.seconds ? this.systemLicense.expiredAt.seconds : 0, "-"));
    });
  }

  onEditRakuten() {
    this.modalEditRakuten.show();
  }

  onSaveRakuten() {
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

    this.systemSettingRakutenForm.disable();
    const updateSystemServiceRequest = new UpdateSystemServiceRequest();

    const expiredAtStamp = new Timestamp();
    if (this.systemSettingRakutenForm.controls.basic.controls.validDate.value) {
      expiredAtStamp.seconds = (Date.parse(this.systemSettingRakutenForm.controls.basic.controls.validDate.value.toString()) / 1000).toString();
      updateSystemServiceRequest.expiredAt = expiredAtStamp;
    }
    if (this.systemSettingRakutenForm.controls.basic.controls.licenseKey.value) {
      updateSystemServiceRequest.licenseKey = this.systemSettingRakutenForm.controls.basic.controls.licenseKey.value.toString();
    }

    this.systemService
      .updateSystemService(updateSystemServiceRequest)
      .then((result) => {
        if (result) {
          this.modalEditRakuten.hide();

          const modalTarget = document.getElementById("modalEditRakutenComplete");
          const modalEditRakutenComplete = new Bootstrap.Modal(modalTarget);
          modalEditRakutenComplete.show();
        }
      })
      .catch((err) => {
        try {
          alert(err["statusMessage"]);
        } catch (e) {
          alert(String(e));
        }
      })
      .finally(() => {
        this.systemSettingRakutenForm.enable();
        this.dataInit();
      });
  }
}
