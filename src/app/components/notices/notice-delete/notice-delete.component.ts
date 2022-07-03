import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";
import { CommonService } from "../../../services/common.service";
import { RakutenNewsService } from "../../../protoServices/shop/rakuten-news.service";
import { RakutenNewsDeleteRequest, RakutenNewsInfoRequest } from "../../../../proto/shop/rakuten-news.pb";

@Component({
  selector: "app-notice-delete",
  templateUrl: "./notice-delete.component.html",
  styleUrls: ["../../../../assets/scss/notices.scss"],
})
export class NoticeDeleteComponent implements OnInit {
  noticeId: any;
  rakutenNews: any;
  errorMessage: any;

  constructor(private rakutenNewsService: RakutenNewsService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone, public commonService: CommonService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.noticeId = params.get("noticeId");

      if (this.noticeId) {
        const rakutenNewsInfoRequest = new RakutenNewsInfoRequest();
        rakutenNewsInfoRequest.rakutenNewsId = this.noticeId;
        this.rakutenNewsService
          .rakutenNewsInfo(rakutenNewsInfoRequest)
          .then((result) => {
            this.rakutenNews = result;
            console.log(this.rakutenNews);
          })
          .catch((err) => {
            try {
              this.errorMessage = err["statusMessage"];
            } catch (e) {
              this.errorMessage = String(e);
            }
          });
      }
    });
  }

  onDelete() {
    if (!this.noticeId) {
      return;
    }

    this.errorMessage = null;
    const rakutenNewsDeleteRequest = new RakutenNewsDeleteRequest();
    rakutenNewsDeleteRequest.rakutenNewsId = this.noticeId;

    this.rakutenNewsService
      .rakutenNewsDelete(rakutenNewsDeleteRequest)
      .then((result) => {
        const modalTarget = document.getElementById("modalDeleteComplete");
        const modalDeleteComplete = new Bootstrap.Modal(modalTarget);
        modalDeleteComplete.show();

        if (modalTarget) {
          modalTarget.addEventListener("hide.bs.modal", () => {
            this.ngZone.run(() => {
              this.router.navigate(["/notices"]);
            });
          });
        }
      })
      .catch((err) => {
        try {
          this.errorMessage = err["statusMessage"];
        } catch (e) {
          this.errorMessage = String(e);
        }
      });
  }
}
