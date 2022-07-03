import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "../services/common.service";
import { InitService } from "../protoServices/shop/init.service";
import * as googleProtobuf002 from "@ngx-grpc/well-known-types";

@Injectable({
  providedIn: "root",
})
export class WarningGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router, private http: HttpClient, private commonService: CommonService, private initService: InitService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.commonService.loaderEmitter.emit(true);
    return new Promise((resolve, reject) => {
      this.reset();
      this.initService
        .initCheck(new googleProtobuf002.Empty())
        .then((result) => {
          this.do(resolve, next, state, result);
        })
        .catch((err) => {
          try {
            alert(err["statusMessage"]);
          } catch (e) {
            alert(String(e));
          }
          this.do(resolve, next, state, null);
        })
        .finally(() => {
          this.commonService.loaderEmitter.emit(false);
        });
    });
  }

  do(resolve: any, next: any, state: any, result: any) {
    this.reset();
    if (result && result["warnTypeList"]) {
      if (result["warnTypeList"].length === 0) {
        resolve(true);
        return;
      }

      localStorage.setItem("warn_count", result["warnTypeList"].length);
      for (let idx = 0; idx < result["warnTypeList"].length; idx++) {
        localStorage.setItem("warn_" + idx, result["warnTypeList"][idx]);
      }

      this.router.navigate(["/warning"], { queryParams: { returnUrl: this.getResolvedUrl(next) } });
      resolve(true);
      return;
    }

    resolve(true);
  }

  getResolvedUrl(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot.map((v) => v.url.map((segment) => segment.toString()).join("/")).join("/");
  }

  reset() {
    if (localStorage.getItem("warn_count")) {
      const total = Number(localStorage.getItem("warn_count"));
      for (let idx = 0; idx < total; idx++) {
        localStorage.removeItem("warn_" + idx);
      }
      localStorage.removeItem("warn_count");
    }
  }
}
