import {EventEmitter, Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
    providedIn: "root",
})
export class CommonService {
    tokenInfo: any;
    public loaderEmitter = new EventEmitter<boolean>(false);

    constructor(private cookieService: CookieService) {
    }


    cookieSaving(input: any) {
        localStorage.setItem(environment.cookieName, btoa(encodeURIComponent(JSON.stringify(input))));
        this.cookieService.delete(environment.cookieName, "/", environment.cookieDomain);
        this.cookieService.set(environment.cookieName, btoa(encodeURIComponent(JSON.stringify(input))), 0, "/", environment.cookieDomain);
    }

    cookieDelete() {
        localStorage.removeItem(environment.cookieName);
        this.cookieService.delete(environment.cookieName, "/", environment.cookieDomain);
    }

    // token ========================= // =========================
    getUserRole() {
        try {
            this.tokenInfo = JSON.parse(decodeURIComponent((atob(this.cookieService.get(environment.cookieName)))));
            const helper = new JwtHelperService();
            const decodedToken = helper.decodeToken(this.tokenInfo.token);
            if (decodedToken.role) {
                return decodedToken.role;
            }
        } catch (e) {
            return '';
        }
        return '';
    }

    getUserToken() {
        try {
            this.tokenInfo = JSON.parse(decodeURIComponent(atob(this.cookieService.get(environment.cookieName))));
            if (this.tokenInfo && this.tokenInfo.token) {
                return this.tokenInfo.token;
            }
        } catch (e) {
            return "";
        }
        return "";
    }

    getUserName() {
        try {
            this.tokenInfo = JSON.parse(decodeURIComponent(atob(this.cookieService.get(environment.cookieName))));
            if (this.tokenInfo && this.tokenInfo.userName) {
                return this.tokenInfo.userName;
            }
        } catch (e) {
            return "";
        }
        return "";
    }

    // utils
    splitLines(content: string) {
        let lines = [];
        lines = content.split("\n");
        return lines;
    }

    secondsToJpDateFormatWithSeparator(sec: number, separator: string) {
        return new Date(1000 * sec).getFullYear() + separator + ((Number(new Date(1000 * sec).getMonth() + 1) < 10 ? "0" : "") + (Number(new Date(1000 * sec).getMonth()) + 1)) + separator + ((new Date(1000 * sec).getDate() < 10 ? "0" : "") + new Date(1000 * sec).getDate());
    }

    secondsToJpDateTime(inputSec: number, separator: string) {
        try {
            const miliSec = Number(inputSec * 1000);

            return (
                new Date(miliSec).getFullYear() +
                separator +
                ((Number(new Date(miliSec).getMonth() + 1) < 10 ? "0" : "") + (Number(new Date(miliSec).getMonth()) + 1)) +
                separator +
                ((new Date(miliSec).getDate() < 10 ? "0" : "") + new Date(miliSec).getDate()) +
                " " +
                ((new Date(miliSec).getHours() < 10 ? "0" : "") + new Date(miliSec).getHours()) +
                ":" +
                ((new Date(miliSec).getMinutes() < 10 ? "0" : "") + new Date(miliSec).getMinutes())
            );
        } catch (e) {
            return "#";
        }
    }

    secondsToJpDateTime2(sec: number) {
        return (
            new Date(1000 * sec).getFullYear() +
            "年" +
            ((Number(new Date(1000 * sec).getMonth() + 1) < 10 ? "0" : "") + (Number(new Date(1000 * sec).getMonth()) + 1)) +
            "月" +
            ((new Date(1000 * sec).getDate() < 10 ? "0" : "") + new Date(1000 * sec).getDate()) +
            "日" +
            " " +
            ((new Date(1000 * sec).getHours() < 10 ? "0" : "") + new Date(1000 * sec).getHours()) +
            ":" +
            ((new Date(1000 * sec).getMinutes() < 10 ? "0" : "") + new Date(1000 * sec).getMinutes())
        );
    }

    secondsToJpDate(inputSec: number, separator: string) {
        try {
            const miliSec = Number(inputSec * 1000);

            return (Number(new Date(miliSec).getMonth() + 1) < 10 ? "0" : "") + (Number(new Date(miliSec).getMonth()) + 1) + separator + ((new Date(miliSec).getDate() < 10 ? "0" : "") + new Date(miliSec).getDate());
        } catch (e) {
            return "#";
        }
    }

    // Datepicker Format (Date > yyyy-MM-dd)
    datePickerFormat(date: string): string {
        const dateFormat = new Date(date.replace("JST", ""));

        const yyyy = dateFormat.getFullYear();
        const mm = dateFormat.getMonth() + 1;
        const dd = dateFormat.getDate();

        return yyyy + "-" + (mm < 10 ? "0" : "") + mm + "-" + (dd < 10 ? "0" : "") + dd;
    }
}
