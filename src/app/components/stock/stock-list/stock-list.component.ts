import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Location } from "@angular/common";
import { PagerService } from "../../../services/pager.service";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../../../services/common.service";
import { environment } from "../../../../environments/environment";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";
import { LoaderService } from "../../../services/loader.service";
import * as googleProtobuf001 from "@ngx-grpc/well-known-types";
import { StockListRequest, StockListResponse, StockSortModel } from "../../../../proto/shop/stock.pb";
import { BasicService } from "../../../protoServices/shop/basic.service";
import { StockService } from "../../../protoServices/shop/stock.service";
import * as googleProtobuf000 from "@ngx-grpc/well-known-types";

@Component({
  selector: "app-stock-list",
  templateUrl: "./stock-list.component.html",
  styleUrls: ["../../../../assets/scss/stock.scss"],
})
export class StockListComponent implements OnInit {
  total: any;
  remaining: any;

  sortings: any[] = [];
  selectedSorting: any;

  env = environment;
  offset: any;
  pager: any = {};
  stocks: any;
  categories: any[] = [];

  searchForm = new FormGroup({
    basic: new FormGroup({
      itemNo: new FormControl(""),
      itemName: new FormControl(""),
      category: new FormControl(0),
      priceMin: new FormControl(null),
      priceMax: new FormControl(null),
    }),
  });

  numForm = new FormGroup({
    basic: new FormGroup({
      num: new FormControl(0),
      baseNum: new FormControl(0),
      rakutenNum: new FormControl(0),
      yahooNum: new FormControl(0),
    }),
  });

  constructor(public loaderService: LoaderService, public commonService: CommonService, private basicService: BasicService, private router: Router, private ngZone: NgZone, private route: ActivatedRoute, private location: Location, private stockService: StockService, private pagerService: PagerService) {}

  ngOnInit(): void {
    this.sortings.push({ type: 1, asc: true });
    this.sortings.push({ type: 2, asc: true });
    this.offset = 0;

    this.route.queryParams.subscribe((params) => {
      // 在庫一覧を表示した際に、楽天のlicenceが切れている場合、モーダルを出して通知し、システム設定へ遷移する
      const modalTarget = document.getElementById("modalMoveSystemRakuten");
      const modalMoveSystemRakuten = new Bootstrap.Modal(modalTarget);
      // modalMoveSystemRakuten.show();

      if (modalTarget) {
        modalTarget.addEventListener("hide.bs.modal", () => {
          this.ngZone.run(() => {
            this.router.navigate(["/settings"]);
          });
        });
      }

      // new edit
      if (params["page"]) {
        this.offset = Number(params["page"]) - 1;
      }
      if (params["itemNo"]) {
        this.searchForm.controls.basic.controls.itemNo.setValue(params["itemNo"]);
      }
      if (params["itemName"]) {
        this.searchForm.controls.basic.controls.itemName.setValue(params["itemName"]);
      }
      if (params["category"]) {
        this.searchForm.controls.basic.controls.category.setValue(Number(params["category"]));
      }
      if (params["priceMax"]) {
        this.searchForm.controls.basic.controls.priceMax.setValue(params["priceMax"]);
      }
      if (params["priceMin"]) {
        this.searchForm.controls.basic.controls.priceMin.setValue(params["priceMin"]);
      }
    });

    this.basicService.listCategories(new googleProtobuf001.Empty()).then((result) => {
      if (result) {
        const resultObj = result.toObject();
        if (resultObj && resultObj.data) {
          this.categories = resultObj.data;
        }
      }
    });
    this.getStocks(this.offset + 1, this.selectedSorting);
  }

  getStocks(page: number, input: any) {
    if (page < 1) {
      return;
    }

    this.offset = page - 1;

    const offsetValue = new googleProtobuf001.Int64Value();
    offsetValue.value = this.offset.toString();
    const stockListRequest = new StockListRequest();
    stockListRequest.offset = offsetValue;

    if (this.searchForm.controls.basic.controls.itemNo.value) {
      const productNoValue = new googleProtobuf000.StringValue();
      productNoValue.value = this.searchForm.controls.basic.controls.itemNo.value.toString();
      stockListRequest.productNo = productNoValue;
    }

    if (this.searchForm.controls.basic.controls.itemName.value) {
      const productTitleValue = new googleProtobuf000.StringValue();
      productTitleValue.value = this.searchForm.controls.basic.controls.itemName.value.toString();
      stockListRequest.productTitle = productTitleValue;
    }

    if (this.searchForm.controls.basic.controls.category.value && Number(this.searchForm.controls.basic.controls.category.value.toString()) !== 0) {
      const categoryValue = new googleProtobuf000.Int64Value();
      categoryValue.value = this.searchForm.controls.basic.controls.category.value.toString();
      stockListRequest.categoryId = categoryValue;
    }

    if (this.searchForm.controls.basic.controls.priceMin.value) {
      const priceMinValue = new googleProtobuf000.StringValue();
      priceMinValue.value = this.searchForm.controls.basic.controls.priceMin.value;
      stockListRequest.priceRangeFrom = priceMinValue;
    }

    if (this.searchForm.controls.basic.controls.priceMax.value) {
      const priceMaxValue = new googleProtobuf000.StringValue();
      priceMaxValue.value = this.searchForm.controls.basic.controls.priceMax.value;
      stockListRequest.priceRangeTo = priceMaxValue;
    }

    let url = "";
    if (page > 0) {
      url += "&page=" + page;
    }

    localStorage.removeItem("stocks_page");
    localStorage.removeItem("stocks_product_no");
    localStorage.removeItem("stocks_product_title");
    localStorage.removeItem("stocks_category");
    localStorage.removeItem("stocks_price_from");
    localStorage.removeItem("stocks_price_to");

    if (!url.includes("?")) {
      url = url.replace("&", "?");
    }

    localStorage.setItem("stocks_page", page.toString());
    if (this.searchForm.controls.basic.controls.itemNo.value) {
      url += "&itemNo=" + this.searchForm.controls.basic.controls.itemNo.value.toString();
      localStorage.setItem("stocks_product_no", this.searchForm.controls.basic.controls.itemNo.value.toString());
    }

    if (this.searchForm.controls.basic.controls.itemName.value) {
      url += "&itemName=" + this.searchForm.controls.basic.controls.itemName.value.toString();
      localStorage.setItem("stocks_product_title", this.searchForm.controls.basic.controls.itemName.value.toString());
    }

    if (this.searchForm.controls.basic.controls.category.value) {
      url += "&category=" + this.searchForm.controls.basic.controls.category.value.toString();
      localStorage.setItem("stocks_category", this.searchForm.controls.basic.controls.category.value.toString());
    }

    if (this.searchForm.controls.basic.controls.priceMin.value) {
      url += "&priceMin=" + this.searchForm.controls.basic.controls.priceMin.value;
      localStorage.setItem("stocks_price_from", this.searchForm.controls.basic.controls.priceMin.value);
    }

    if (this.searchForm.controls.basic.controls.priceMax.value) {
      url += "&priceMax=" + this.searchForm.controls.basic.controls.priceMax.value;
      localStorage.setItem("stocks_price_to", this.searchForm.controls.basic.controls.priceMax.value);
    }

    if (input) {
      const stockSortModel = new StockSortModel();
      stockSortModel.asc = input.asc;
      stockSortModel.type = input.type;
      stockListRequest.sorting = stockSortModel;
    }

    this.location.replaceState(`stock` + url);
    this.searchForm.disable();
    this.stockService
      .stockList(stockListRequest)
      .then((result) => {
        if (result) {
          const resultObj = result.toObject();
          this.stocks = resultObj;
          console.log(this.stocks);
          if (resultObj && resultObj.data) {
            this.pager = this.pagerService.getPager(resultObj.data.length, Number(resultObj.total), this.offset + 1, 50); // or whatever
          }
        }
      })
      .catch((err: any) => {
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

  onStockEdit(data: any) {
    this.numForm.controls.basic.controls.num.setValue(data.num);
    this.numForm.controls.basic.controls.rakutenNum.setValue(data.rakutenNum);
    this.numForm.controls.basic.controls.yahooNum.setValue(data.yahooNum);
    this.numForm.controls.basic.controls.baseNum.setValue(data.baseNum);
    this.remaining = data.num;
    this.total = data.num + data.rakutenNum + data.yahooNum + data.baseNum;

    const modalTarget = document.getElementById("modalStockEdit");
    const modalStockEdit = new Bootstrap.Modal(modalTarget);
    modalStockEdit.show();
  }

  onSortingUpdated(input: any) {
    if (this.loaderService.isLoading()) {
      return;
    }

    if (input) {
      input.asc = !input.asc;
      this.selectedSorting = input;
      this.getStocks(this.offset + 1, input);
    }
  }

  onUpdateStock() {}

  onRakutenNumChanged(event: any) {
    this.remaining =
      this.total -
      Number(this.numForm.controls.basic.controls.rakutenNum.value ? this.numForm.controls.basic.controls.rakutenNum.value : 0) -
      Number(this.numForm.controls.basic.controls.yahooNum.value ? this.numForm.controls.basic.controls.yahooNum.value : 0) -
      Number(this.numForm.controls.basic.controls.baseNum.value ? this.numForm.controls.basic.controls.baseNum.value : 0);
  }

  onYahooNumChanged(event: any) {
    this.remaining =
      this.total -
      Number(this.numForm.controls.basic.controls.rakutenNum.value ? this.numForm.controls.basic.controls.rakutenNum.value : 0) -
      Number(this.numForm.controls.basic.controls.yahooNum.value ? this.numForm.controls.basic.controls.yahooNum.value : 0) -
      Number(this.numForm.controls.basic.controls.baseNum.value ? this.numForm.controls.basic.controls.baseNum.value : 0);
  }

  onBaseNumChanged(event: any) {
    this.remaining =
      this.total -
      Number(this.numForm.controls.basic.controls.rakutenNum.value ? this.numForm.controls.basic.controls.rakutenNum.value : 0) -
      Number(this.numForm.controls.basic.controls.yahooNum.value ? this.numForm.controls.basic.controls.yahooNum.value : 0) -
      Number(this.numForm.controls.basic.controls.baseNum.value ? this.numForm.controls.basic.controls.baseNum.value : 0);
  }
}
