import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { PagerService } from "../../../services/pager.service";
import { Location } from "@angular/common";
import { CommonService } from "../../../services/common.service";
import { RakutenNewsService } from "../../../protoServices/shop/rakuten-news.service";
import { RakutenNewsListRequest } from "../../../../proto/shop/rakuten-news.pb";
import * as googleProtobuf000 from "@ngx-grpc/well-known-types";

@Component({
  selector: "app-notice-list",
  templateUrl: "./notice-list.component.html",
  styleUrls: ["../../../../assets/scss/notices.scss"],
})
export class NoticeListComponent implements OnInit {
  offset: any;
  pager: any = {};
  rakutenNews: any[] = [];

  searchForm = new FormGroup({
    basic: new FormGroup({
      content: new FormControl(""),
      status: new FormControl(0),
    }),
  });

  constructor(private location: Location, private rakutenNewsService: RakutenNewsService, private pagerService: PagerService, public commonService: CommonService) {}

  ngOnInit() {
    this.offset = 0;
    this.getRakutenNews(1);
  }

  getRakutenNews(page: number) {
    if (page < 1) {
      return;
    }

    this.offset = page - 1;
    const offsetValue = new googleProtobuf000.Int64Value();
    offsetValue.value = this.offset.toString();
    const rakutenNewsListRequest = new RakutenNewsListRequest();
    rakutenNewsListRequest.offset = offsetValue;

    if (this.searchForm.controls.basic.controls.content.value) {
      rakutenNewsListRequest.content = this.searchForm.controls.basic.controls.content.value.toString();
    }
    if (this.searchForm.controls.basic.controls.status.value) {
      rakutenNewsListRequest.status = this.searchForm.controls.basic.controls.status.value.toString();
    }

    let url = "";
    if (page > 0) {
      url += "&page=" + page;
    }

    localStorage.removeItem("rakuten_news_page");
    localStorage.removeItem("rakuten_news_status");
    localStorage.removeItem("rakuten_news_content");

    if (!url.includes("?")) {
      url = url.replace("&", "?");
    }

    localStorage.setItem("rakuten_news_content", page.toString());

    if (this.searchForm.controls.basic.controls.content.value) {
      url += "&content=" + this.searchForm.controls.basic.controls.content.value.toString();
      localStorage.setItem("rakuten_news_content", this.searchForm.controls.basic.controls.content.value.toString());
    }

    if (this.searchForm.controls.basic.controls.status.value) {
      url += "&status=" + this.searchForm.controls.basic.controls.status.value.toString();
      localStorage.setItem("rakuten_news_status", this.searchForm.controls.basic.controls.status.value.toString());
    }

    this.location.replaceState(`notices` + url);
    this.rakutenNewsService
      .rakutenNewsList(rakutenNewsListRequest)
      .then((result) => {
        if (result) {
          const resultPbj = result.toObject();
          if (resultPbj && resultPbj.data) {
            this.rakutenNews = resultPbj.data;
            this.pager = this.pagerService.getPager(resultPbj.data.length, Number(resultPbj.total), this.offset + 1, 10); // or whatever
          }
        }
        console.log(this.rakutenNews);
      })
      .catch((err) => {
        try {
          alert(err["statusMessage"]);
        } catch (e) {
          alert(String(e));
        }
      });
  }
}
