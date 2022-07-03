import { Component, OnInit } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { Router, ActivatedRoute } from "@angular/router";
import { NgZone } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RakutenNewsService } from "../../../protoServices/shop/rakuten-news.service";
import { RakutenNewsCreateRequest } from "../../../../proto/shop/rakuten-news.pb";

@Component({
  selector: "app-notice-create",
  templateUrl: "./notice-create.component.html",
  styleUrls: ["../../../../assets/scss/notices.scss"],
})
export class NoticeCreateComponent implements OnInit {
  errorMessage: any;
  noticeInputForm = new FormGroup({
    basic: new FormGroup({
      title: new FormControl("", [Validators.required]),
      status: new FormControl(1, [Validators.required]),
      content: new FormControl("", [Validators.required]),
    }),
  });

  constructor(private rakutenNewsService: RakutenNewsService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone) {}

  ngOnInit() {}

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

    if (this.noticeInputForm.invalid) {
      return;
    }

    this.errorMessage = null;
    const rakutenNewsCreateRequest = new RakutenNewsCreateRequest();
    if (this.noticeInputForm.controls.basic.controls.title.value) {
      rakutenNewsCreateRequest.title = this.noticeInputForm.controls.basic.controls.title.value.toString();
    }
    if (this.noticeInputForm.controls.basic.controls.content.value) {
      rakutenNewsCreateRequest.content = this.noticeInputForm.controls.basic.controls.content.value.toString();
    }
    if (this.noticeInputForm.controls.basic.controls.status.value) {
      rakutenNewsCreateRequest.status = this.noticeInputForm.controls.basic.controls.status.value.toString();
    }

    this.noticeInputForm.disable();
    this.rakutenNewsService
      .rakutenNewsCreate(rakutenNewsCreateRequest)
      .then((result) => {
        if (result) {
          const modalTarget = document.getElementById("modalSaveComplete");
          const modalSaveComplete = new Bootstrap.Modal(modalTarget);
          modalSaveComplete.show();

          if (modalTarget) {
            modalTarget.addEventListener("hide.bs.modal", () => {
              this.ngZone.run(() => {
                setTimeout(() => {
                  this.router.navigate(["/notices"]);
                }, 600);
              });
            });
          }
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
        this.noticeInputForm.enable();
      });
  }
}
