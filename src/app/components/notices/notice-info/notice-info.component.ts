import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../../../services/common.service";
import { RakutenNewsService } from "../../../protoServices/shop/rakuten-news.service";
import { RakutenNewsInfoRequest } from "../../../../proto/shop/rakuten-news.pb";

@Component({
  selector: "app-notice-info",
  templateUrl: "./notice-info.component.html",
  styleUrls: ["../../../../assets/scss/notices.scss"],
})
export class NoticeInfoComponent implements OnInit {
  noticeId: any;
  rakutenNews: any;

  constructor(private route: ActivatedRoute, private rakutenNewsService: RakutenNewsService, public commonService: CommonService) {}

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
          .catch((err) => {});
      }
    });
  }
}
