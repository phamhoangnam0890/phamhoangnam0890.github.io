import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../services/common.service";
import { SystemService } from "../../protoServices/shop/system.service";
import { InitService } from "../../protoServices/shop/init.service";
import * as googleProtobuf001 from "@ngx-grpc/well-known-types";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["../../../assets/scss/dashboard.scss"],
})
export class DashboardComponent implements OnInit {
  systemLicense: any;
  warnings: any[] = [];

  constructor(private initService: InitService, public commonService: CommonService, private systemService: SystemService) {}

  ngOnInit(): void {
    // this.systemService.getSystemService(new googleProtobuf001.Empty()).then((result) => {
    //   if (result) {
    //     this.systemLicense = result.toObject();
    //   }
    //   console.log(result);
    // });
    //
    // this.initService
    //   .initCheck(new googleProtobuf001.Empty())
    //   .then((result) => {
    //     if (result) {
    //       const resultObj = result.toObject();
    //       if (resultObj && resultObj.warnType) {
    //         this.warnings = resultObj.warnType;
    //       }
    //     }
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     try {
    //       alert(err["statusMessage"]);
    //     } catch (e) {
    //       alert(String(e));
    //     }
    //   });
  }
}
