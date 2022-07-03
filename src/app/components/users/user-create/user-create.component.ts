import {Component, OnInit} from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import {Router, ActivatedRoute} from "@angular/router";
import {NgZone} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserEntryRequest} from "../../../../proto/products/users.pb";
import * as googleProtobuf000 from "@ngx-grpc/well-known-types";
import {UsersService} from "../../../protoServices/products/users.service";

@Component({
    selector: "app-user-create",
    templateUrl: "./user-create.component.html",
    styleUrls: ["../../../../assets/scss/users.scss"],
})
export class UserCreateComponent implements OnInit {

    errorMessage: string = '';
    userInputForm = new FormGroup({
        basic: new FormGroup({
            userName: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.required]),
            newPassword1: new FormControl("", [Validators.required, Validators.minLength(6)]),
            newPassword2: new FormControl("", [Validators.required, Validators.minLength(6)]),
        }),
    });

    constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone) {
    }

    ngOnInit(): void {
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

        // double check
        if ((this.userInputForm.controls.basic.controls.newPassword1.value && this.userInputForm.controls.basic.controls.newPassword1.value.toString().length < 6) || (this.userInputForm.controls.basic.controls.newPassword2.value && this.userInputForm.controls.basic.controls.newPassword2.value.toString().length < 6)) {
            console.log("パスワード6文字以上");
            return;
        }

        if (this.userInputForm.controls.basic.controls.newPassword1.value && this.userInputForm.controls.basic.controls.newPassword2.value && this.userInputForm.controls.basic.controls.newPassword1.value.length !== this.userInputForm.controls.basic.controls.newPassword2.value.length) {
            // console.log("パスワードの文字数が一致しない");
            return;
        }

        if (this.userInputForm.controls.basic.controls.newPassword1.value && this.userInputForm.controls.basic.controls.newPassword2.value && this.userInputForm.controls.basic.controls.newPassword1.value.toString() !== this.userInputForm.controls.basic.controls.newPassword2.value.toString()) {
            console.log("パスワードの文字列が一致しない");
            return;
        }

        this.userEntry();
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
                    }, 600);
                });
            });
        }
    }

    onPasswordSet() {
        console.log(this.userInputForm);
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

        if (this.userInputForm.invalid) {
            return;
        }

        // double check
        if ((this.userInputForm.controls.basic.controls.newPassword1.value && this.userInputForm.controls.basic.controls.newPassword1.value.toString().length < 6) || (this.userInputForm.controls.basic.controls.newPassword2.value && this.userInputForm.controls.basic.controls.newPassword2.value.toString().length < 6)) {
            console.log("パスワード6文字以上");
            return;
        }

        if (this.userInputForm.controls.basic.controls.newPassword1.value && this.userInputForm.controls.basic.controls.newPassword2.value && this.userInputForm.controls.basic.controls.newPassword1.value.length !== this.userInputForm.controls.basic.controls.newPassword2.value.length) {
            // console.log("パスワードの文字数が一致しない");
            return;
        }

        if (this.userInputForm.controls.basic.controls.newPassword1.value && this.userInputForm.controls.basic.controls.newPassword2.value && this.userInputForm.controls.basic.controls.newPassword1.value.toString() !== this.userInputForm.controls.basic.controls.newPassword2.value.toString()) {
            console.log("パスワードの文字列が一致しない");
            return;
        }

        this.userEntry();
    }

    userEntry() {

        const userEntryRequest = new UserEntryRequest();
        userEntryRequest.userName = this.userInputForm.controls.basic.controls.userName.value?.toString();
        userEntryRequest.email = this.userInputForm.controls.basic.controls.email.value?.toString();


        const passwordThenValue = new googleProtobuf000.StringValue();
        passwordThenValue.value = this.userInputForm.controls.basic.controls.newPassword1.value?.toString();

        const passwordNowValue = new googleProtobuf000.StringValue();
        passwordNowValue.value = this.userInputForm.controls.basic.controls.newPassword2.value?.toString();

        userEntryRequest.passwordThen = passwordThenValue;
        userEntryRequest.passwordNow = passwordNowValue;


        this.errorMessage = '';
        this.usersService.userEntry(userEntryRequest).then(result => {
            if (result) {
                // success
                const modalTarget = document.getElementById("modalSaveComplete");
                const modalSaveComplete = new Bootstrap.Modal(modalTarget);
                modalSaveComplete.show();
                if (modalTarget) {
                    modalTarget.addEventListener("hide.bs.modal", () => {
                        this.ngZone.run(() => {
                            setTimeout(() => {
                                this.router.navigate(["/users"]);
                            }, 200);
                        });
                    });
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

}
