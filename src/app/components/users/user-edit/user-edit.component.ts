import {Component, OnInit} from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import {Router, ActivatedRoute} from "@angular/router";
import {NgZone} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../protoServices/products/users.service";
import {UserEntryRequest, UserInfoRequest} from "../../../../proto/products/users.pb";
import * as googleProtobuf000 from "@ngx-grpc/well-known-types";
import {ProductsCommonService} from "../../../protoServices/products/products-common.service";

@Component({
    selector: "app-user-edit",
    templateUrl: "./user-edit.component.html",
    styleUrls: ["../../../../assets/scss/users.scss"],
})
export class UserEditComponent implements OnInit {

    errorMessage: string = '';
    userId: any;
    userData: any;
    roles: any;

    userInputForm = new FormGroup({
        basic: new FormGroup({
            userName: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.required]),
            roleId: new FormControl("", [Validators.required]),
            loginId: new FormControl("", [Validators.required]),
        }),
    });

    passwordInputForm = new FormGroup({
        basic: new FormGroup({
            currenPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
            newPassword1: new FormControl("", [Validators.required, Validators.minLength(6)]),
            newPassword2: new FormControl("", [Validators.required, Validators.minLength(6)]),
        }),
    });

    constructor(private productsCommonService: ProductsCommonService, private usersService: UsersService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone) {
    }

    ngOnInit(): void {

        this.productsCommonService.rolesList(new googleProtobuf000.Empty()).then(result => {
            if (result && result.toObject()) {
                this.roles = result.toObject().data;
            }
            console.log(this.roles);
        });

        this.route.paramMap.subscribe((params) => {
            this.userId = params.get("userId");
            if (this.userId) {

                const userInfoRequest = new UserInfoRequest();
                userInfoRequest.userId = this.userId;
                this.usersService.userInfo(userInfoRequest).then(result => {

                    if (result) {
                        this.userData = result.toObject();
                        this.userInputForm.controls.basic.controls.roleId.setValue(this.userData.userRoleId);
                        this.userInputForm.controls.basic.controls.userName.setValue(this.userData.userName);
                        this.userInputForm.controls.basic.controls.email.setValue(this.userData.email);
                        this.userInputForm.controls.basic.controls.loginId.setValue(this.userData.loginId);
                    }
                    console.log(this.userData);
                }).catch(err => {
                    try {
                        this.errorMessage = (err['statusMessage'])
                    } catch (e: any) {
                        this.errorMessage = (e.toString());
                    }
                });
            }
        });
    }

    onSave() {
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

        if (this.userInputForm.invalid) {
            return;
        }

        this.userEntry(false);
    }

    userEntry(passwordChanged: boolean) {

        const userEntryRequest = new UserEntryRequest();
        const userIdValue = new googleProtobuf000.StringValue();
        userIdValue.value = this.userId;

        userEntryRequest.userId = userIdValue;
        userEntryRequest.userName = this.userInputForm.controls.basic.controls.userName.value?.toString();
        userEntryRequest.email = this.userInputForm.controls.basic.controls.email.value?.toString();
        userEntryRequest.loginId = this.userInputForm.controls.basic.controls.loginId.value?.toString();
        userEntryRequest.userRoleId = this.userInputForm.controls.basic.controls.roleId.value?.toString();

        if (passwordChanged) {

            const passwordThenValue = new googleProtobuf000.StringValue();
            passwordThenValue.value = this.passwordInputForm.controls.basic.controls.currenPassword.value?.toString();

            const passwordNowValue = new googleProtobuf000.StringValue();
            passwordNowValue.value = this.passwordInputForm.controls.basic.controls.newPassword1.value?.toString();

            userEntryRequest.passwordThen = passwordThenValue;
            userEntryRequest.passwordNow = passwordNowValue;
        }


        this.usersService.userEntry(userEntryRequest).then(result => {
            if (result) {

                if (!passwordChanged) {
                    const modalTarget = document.getElementById("modalSaveComplete");
                    const modalSaveComplete = new Bootstrap.Modal(modalTarget);
                    modalSaveComplete.show();

                    if (modalTarget) {
                        modalTarget.addEventListener("hide.bs.modal", () => {
                            this.ngZone.run(() => {
                                setTimeout(() => {
                                    this.router.navigate(["/users/info/" + this.userId]);
                                }, 200);
                            });
                        });
                    }
                } else {

                    const modalTarget = document.getElementById("modalPasswordChangeComplete");
                    const modalPasswordChangeComplete = new Bootstrap.Modal(modalTarget);
                    modalPasswordChangeComplete.show();
                }
            }
        }).catch(err => {
            try {
                this.errorMessage = (err["statusMessage"]);
            } catch (e: any) {
                this.errorMessage = e.toString();
            }
        });
    }

    onPasswordChange() {
        const modalTarget = document.getElementById("modalPasswordChange");
        const modalPasswordChange = new Bootstrap.Modal(modalTarget);
        modalPasswordChange.show();

        if (modalTarget) {
            modalTarget.addEventListener("hide.bs.modal", () => {
                this.ngZone.run(() => {
                    setTimeout(() => {
                        const form = document.getElementsByClassName("needs-validation")[1] as HTMLFormElement;
                        form.classList.remove("was-validated");
                    }, 200);
                });
            });
        }
    }

    onPasswordSet() {
        console.log(this.passwordInputForm);
        const form = document.getElementsByClassName("needs-validation")[1] as HTMLFormElement;

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

        if (this.passwordInputForm.invalid) {
            return;
        }

        // double check
        if (
            this.passwordInputForm.controls.basic.controls.currenPassword.toString().length < 6 ||
            (this.passwordInputForm.controls.basic.controls.newPassword1.value && this.passwordInputForm.controls.basic.controls.newPassword1.value.toString().length < 6) ||
            (this.passwordInputForm.controls.basic.controls.newPassword2.value && this.passwordInputForm.controls.basic.controls.newPassword2.value.toString().length < 6)
        ) {
            // console.log("パスワード6文字以上");
            return;
        }

        if (this.passwordInputForm.controls.basic.controls.newPassword1.value && this.passwordInputForm.controls.basic.controls.newPassword2.value && this.passwordInputForm.controls.basic.controls.newPassword1.value.length !== this.passwordInputForm.controls.basic.controls.newPassword2.value.length) {
            // console.log("パスワードの文字数が一致しない");
            return;
        }

        if (this.passwordInputForm.controls.basic.controls.newPassword1.value && this.passwordInputForm.controls.basic.controls.newPassword2.value && this.passwordInputForm.controls.basic.controls.newPassword1.value.toString() !== this.passwordInputForm.controls.basic.controls.newPassword2.value.toString()) {
            // console.log("パスワードの文字列が一致しない");
            return;
        }
        this.userEntry(true);
    }
}
