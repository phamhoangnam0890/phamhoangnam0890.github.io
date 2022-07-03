import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CommonService} from "../services/common.service";
import {CookieService} from "ngx-cookie-service";

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanActivate {
    env = environment;
    tokenInfo: any;

    constructor(private cookieService: CookieService, private router: Router, private http: HttpClient, private commonService: CommonService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!localStorage.getItem("Public-IP")) {
            this.commonService.loaderEmitter.emit(true);
            return new Promise((resolve, reject) => {
                try {
                    this.http.get(this.env.ipUrl).subscribe((res: any) => {
                        this.do(resolve, next, state, res.ip);
                    });
                } catch (e) {
                    // whatever
                    this.do(resolve, next, state, "");
                }
            });
        } else {
            return new Promise((resolve, reject) => {
                this.do(resolve, next, state, localStorage.getItem("Public-IP"));
            });
        }
    }

    getResolvedUrl(route: ActivatedRouteSnapshot): string {
        return route.pathFromRoot.map((v) => v.url.map((segment) => segment.toString()).join("/")).join("/");
    }

    do(resolve: any, next: any, state: any, ipAddress: any) {
        this.commonService.loaderEmitter.emit(false);
        if (ipAddress !== "") {
            localStorage.setItem("Public-IP", ipAddress);
        }

        try {
            if (!localStorage.getItem(environment.cookieName)) {
                // cookie check
                if (this.cookieService.check(environment.cookieName)) {
                    // local saving
                    localStorage.setItem(environment.cookieName, this.cookieService.get(environment.cookieName));
                }
            } else {
                // Shared localStorage -> Cookie
                if (!this.cookieService.check(environment.cookieName)) {
                    // @ts-ignore
                    this.commonService.cookieSaving(JSON.parse(decodeURIComponent(localStorage.getItem(environment.cookieName))));
                    resolve(true);
                }
            }

            this.tokenInfo = JSON.parse(decodeURIComponent(atob(this.cookieService.get(environment.cookieName))));
            if (this.tokenInfo && this.tokenInfo.token) {
                if (new JwtHelperService().isTokenExpired(this.tokenInfo.token)) {
                    this.commonService.cookieDelete();
                    this.router.navigate(["/login"], {queryParams: {returnUrl: this.getResolvedUrl(next)}});
                    resolve(false);
                }
                resolve(true);
            } else {
                this.router.navigate(["/login"], {queryParams: {returnUrl: this.getResolvedUrl(next)}});
                resolve(false);
            }
        } catch (e) {
            console.log(e);
            this.commonService.cookieDelete();
            this.router.navigate(["/login"], {queryParams: {returnUrl: this.getResolvedUrl(next)}});
            resolve(false);
        }
    }
}
