import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../../services/common.service";
import {LoginService} from "../../protoServices/products/login.service";
import {LoginRequest} from "../../../proto/products/login.pb";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["../../../assets/scss/login.scss"],
})
export class LoginComponent implements OnInit {
    errorMessage: string = '';

    loginForm = new FormGroup({
        loginId: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
    });

    constructor(private router: Router, private loginService: LoginService, private commonService: CommonService) {
    }

    ngOnInit(): void {
        // auto logout
        this.commonService.cookieDelete();
    }

    onLogin() {
        const form = document.getElementsByClassName("needs-validation")[0] as HTMLFormElement;
        if (!form.checkValidity()) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
        form.classList.add("was-validated");
        if (!form.checkValidity()) {
            return;
        }
        if (this.loginForm.invalid) {
            return;
        }

        this.errorMessage = '';
        const loginRequest = new LoginRequest();
        loginRequest.id = this.loginForm.controls.loginId.value?.toString();
        loginRequest.password = this.loginForm.controls.password.value?.toString();

        this.loginForm.disable();
        this.loginService
            .login(loginRequest)
            .then((result) => {
                if (result) {
                    const resultObj = result.toObject();
                    this.commonService.cookieSaving(resultObj);
                    this.router.navigate(["/"]);
                }
            })
            .catch((err) => {
                try {
                    this.errorMessage = err["statusMessage"];
                } catch (e) {
                    this.errorMessage = String(e);
                }
            })
            .finally(() => {
                this.loginForm.enable();
            });
    }
}
