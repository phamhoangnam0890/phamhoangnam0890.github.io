import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Location } from "@angular/common";
import { PagerService } from "../../../services/pager.service";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../../../services/common.service";
import { environment } from "../../../../environments/environment";
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";
import { RakutenEventsService } from "../../../protoServices/shop/rakuten-events.service";
import { BasicService } from "../../../protoServices/shop/basic.service";
import { StockService } from "../../../protoServices/shop/stock.service";
import { RakutenEventListRequest } from "../../../../proto/shop/rakuten-events.pb";
import * as googleProtobuf000 from "@ngx-grpc/well-known-types";

@Component({
  selector: "app-item-event-list",
  templateUrl: "./item-event-list.component.html",
  styleUrls: ["../../../../assets/scss/item-events.scss"],
})
export class ItemEventListComponent implements OnInit {
  env = environment;
  offset: any;
  pager: any = {};
  stocks: any;
  categories: any[] = [];
  sortings: boolean = true;
  rakutenEvents: any[] = [];

  searchForm = new FormGroup({
    basic: new FormGroup({
      eventName: new FormControl(""),
      // eventMonth: new FormControl(""),
      // dateStart: new FormControl(0),
      // dateEnd: new FormControl(null),
    }),
  });

  constructor(public commonService: CommonService, private rakutenEventsService: RakutenEventsService, private basicService: BasicService, private router: Router, private ngZone: NgZone, private route: ActivatedRoute, private location: Location, private stockService: StockService, private pagerService: PagerService) {}

  ngOnInit(): void {
    this.offset = 0;

    this.route.queryParams.subscribe((params) => {
      if (params["page"]) {
        this.offset = Number(params["page"]) - 1;
      }

      if (params["eventName"]) {
        this.searchForm.controls.basic.controls.eventName.setValue(params["eventName"]);
      }
    });

    this.getEvents(this.offset + 1);
  }

  getEvents(page: number) {
    if (page < 1) {
      return;
    }

    this.offset = page - 1;

    const offsetValue = new googleProtobuf000.Int64Value();
    offsetValue.value = this.offset;
    const rakutenEventListRequest = new RakutenEventListRequest();

    rakutenEventListRequest.offset = offsetValue;
    if (this.searchForm.controls.basic.controls.eventName.value) {
      rakutenEventListRequest.eventName = this.searchForm.controls.basic.controls.eventName.value.toString();
    }

    let url = "";
    if (page > 0) {
      url += "&page=" + page;
    }

    localStorage.removeItem("shop_item_event_rakuten");

    if (!url.includes("?")) {
      url = url.replace("&", "?");
    }

    localStorage.setItem("shop_item_event_rakuten", page.toString());
    if (this.searchForm.controls.basic.controls.eventName.value) {
      url += "&eventName=" + this.searchForm.controls.basic.controls.eventName.value.toString();
      localStorage.setItem("shop_item_event_rakuten", this.searchForm.controls.basic.controls.eventName.value.toString());
    }

    this.location.replaceState(`item-events/rakuten` + url);
    this.searchForm.disable();

    console.log(rakutenEventListRequest);

    this.rakutenEventsService
      .rakutenEventList(rakutenEventListRequest)
      .then((result) => {
        if (result) {
          const resultObj = result.toObject();
          if (resultObj && resultObj.data) {
            this.pager = this.pagerService.getPager(resultObj.data.length, Number(resultObj.total), this.offset + 1, 10); // or whatever
            this.rakutenEvents = resultObj.data;
          }
        }

        console.log(this.rakutenEvents);
        console.log(this.pager);
      })
      .catch((err) => {
        try {
          alert(err["statusMessage"]);
        } catch (e) {
          alert(String(e));
        }
      })
      .finally(() => {
        this.searchForm.enable();
      });
  }
}
