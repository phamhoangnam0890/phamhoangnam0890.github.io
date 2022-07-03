import { Component, OnInit } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { Router, ActivatedRoute } from "@angular/router";
import { NgZone } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RakutenNewsService } from "../../../protoServices/shop/rakuten-news.service";
import { RakutenNewsInfoRequest, RakutenNewsUpdateRequest } from "../../../../proto/shop/rakuten-news.pb";

@Component({
  selector: "app-notice-edit",
  templateUrl: "./notice-edit.component.html",
  styleUrls: ["../../../../assets/scss/notices.scss"],
})
export class NoticeEditComponent implements OnInit {
  noticeId: any;
  rakutenNews: any;
  errorMessage: any;

  noticeInputForm = new FormGroup({
    basic: new FormGroup({
      status: new FormControl(0, [Validators.required]),
      content: new FormControl("", [Validators.required]),
    }),
  });

  constructor(private rakutenNewsService: RakutenNewsService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone) {}

  ngOnInit() {
    this.noticeInputForm.disable();
    this.route.paramMap.subscribe((params) => {
      this.noticeId = params.get("noticeId");
      if (this.noticeId) {
        const rakutenNewsInfoRequest = new RakutenNewsInfoRequest();
        rakutenNewsInfoRequest.rakutenNewsId = this.noticeId;
        this.rakutenNewsService
          .rakutenNewsInfo(rakutenNewsInfoRequest)
          .then((result) => {
            if (result) {
              const resultObj = result.toObject();
              if (resultObj) {
                this.rakutenNews = resultObj;
                this.noticeInputForm.controls.basic.controls.content.setValue(this.rakutenNews.content);
                this.noticeInputForm.controls.basic.controls.status.setValue(this.rakutenNews.status);
              }
            }
            console.log(this.rakutenNews);
          })
          .catch((err) => {})
          .finally(() => {
            this.noticeInputForm.enable();
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

    if (this.noticeInputForm.invalid) {
      return;
    }

    this.errorMessage = null;
    this.noticeInputForm.disable();

    const rakutenNewsUpdateRequest = new RakutenNewsUpdateRequest();
    rakutenNewsUpdateRequest.rakutenNewsId = this.noticeId;
    if (this.noticeInputForm.controls.basic.controls.content.value) {
      rakutenNewsUpdateRequest.content = this.noticeInputForm.controls.basic.controls.content.value.toString();
    }
    if (this.noticeInputForm.controls.basic.controls.status.value) {
      rakutenNewsUpdateRequest.status = this.noticeInputForm.controls.basic.controls.status.value.toString();
    }

    this.rakutenNewsService
      .rakutenNewsUpdate(rakutenNewsUpdateRequest)
      .then((result) => {
        if (result) {
          const modalTarget = document.getElementById("modalSaveComplete");
          const modalSaveComplete = new Bootstrap.Modal(modalTarget);
          modalSaveComplete.show();

          if (modalTarget) {
            modalTarget.addEventListener("hide.bs.modal", () => {
              this.ngZone.run(() => {
                setTimeout(() => {
                  this.router.navigate(["/notices/info/" + this.noticeId]);
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
