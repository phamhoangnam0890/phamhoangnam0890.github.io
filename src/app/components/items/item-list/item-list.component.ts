import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {PagerService} from "../../../services/pager.service";
import {CommonService} from "../../../services/common.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {LoaderService} from "../../../services/loader.service";
import * as googleProtobuf000 from "@ngx-grpc/well-known-types";
import {RakutenEventsService} from "../../../protoServices/shop/rakuten-events.service";
import {ListProductItemRequest, ProductItemSortModel} from "../../../../proto/products/products.pb";
import {ProductsService} from "../../../protoServices/products/products.service";
import {CategoriesService} from "../../../protoServices/products/categories.service";
import {CategoriesListRequest} from "../../../../proto/products/categories.pb";

@Component({
    selector: "app-item-list",
    templateUrl: "./item-list.component.html",
    styleUrls: ["../../../../assets/scss/items.scss"],
})
export class ItemListComponent implements OnInit {

    sortings: any[] = [];
    selectedSorting: any;

    offset: any;
    categories: any;
    pager: any = {};
    products: any;
    searchForm = new FormGroup({
        basic: new FormGroup({
            keyword: new FormControl(""),
            supplier: new FormControl(0),
            category: new FormControl(0),
            rakutenEventType: new FormControl(0),
            status: new FormControl(false),
        }),
    });

    constructor(private categoriesService: CategoriesService, private loaderService: LoaderService, private rakutenEventsService: RakutenEventsService, private route: ActivatedRoute, private location: Location, private productsService: ProductsService, private pagerService: PagerService, public commonService: CommonService) {
    }

    ngOnInit(): void {

        this.categoriesService.categoriesList(new CategoriesListRequest()).then(result => {
            if (result && result.toObject()) {
                this.categories = result.toObject().data;
            }
        });
        this.sortings.push({type: 1, asc: true});
        this.sortings.push({type: 2, asc: true});
        this.sortings.push({type: 3, asc: true});
        this.getProducts(this.offset + 1, this.selectedSorting);

        /*

        this.offset = (localStorage.getItem("item_page") ? Number(localStorage.getItem("item_page")) : 1) - 1;

        if (localStorage.getItem("item_product_title")) {
          this.searchForm.controls.basic.controls.itemName.setValue(localStorage.getItem("item_product_title"));
        }
        if (localStorage.getItem("item_category")) {
          this.searchForm.controls.basic.controls.category.setValue(Number(localStorage.getItem("item_category")));
        }
        if (localStorage.getItem("item_supplier")) {
          this.searchForm.controls.basic.controls.supplier.setValue(Number(localStorage.getItem("item_supplier")));
        }
        if (localStorage.getItem("item_status")) {
          this.searchForm.controls.basic.controls.status.setValue(Number(localStorage.getItem("item_status")) === 1);
        }
        if (localStorage.getItem("item_rakuten_event_type")) {
          this.searchForm.controls.basic.controls.rakutenEventType.setValue(Number(localStorage.getItem("item_rakuten_event_type")));
        }

        this.route.queryParams.subscribe((params) => {
          // new edit

          if (params["page"]) {
            this.offset = Number(params["page"]) - 1;
          }

          if (params["itemName"]) {
            this.searchForm.controls.basic.controls.itemName.setValue(params["itemName"]);
          }
          if (params["category"]) {
            this.searchForm.controls.basic.controls.category.setValue(Number(params["category"]));
          }
          if (params["supplier"]) {
            this.searchForm.controls.basic.controls.supplier.setValue(Number(params["supplier"]));
          }
          if (params["rakutenEventType"]) {
            this.searchForm.controls.basic.controls.rakutenEventType.setValue(Number(params["rakutenEventType"]));
          }
          if (params["status"]) {
            this.searchForm.controls.basic.controls.status.setValue(Number(params["status"]) == 1);
          }
        });

        this.getProducts(this.offset + 1, this.selectedSorting);
        this.basicService.listCategories(new googleProtobuf001.Empty()).then((result) => {
          if (result) {
            const resultObj = result.toObject();
            if (resultObj && resultObj.data) {
              this.categories = resultObj.data;
            }
          }
        });

        this.basicService.listPurchasing(new googleProtobuf001.Empty()).then((result) => {
          if (result) {
            const resultObj = result.toObject();
            if (resultObj && resultObj.data) {
              this.purchasing = resultObj.data;
            }
          }
        });

        this.rakutenEventsService.rakutenEventList(new RakutenEventListRequest()).then((result) => {
          if (result) {
            const resultObj = result.toObject();
            if (resultObj && resultObj.data) {
              this.rakutenEvents = resultObj.data;
            }
          }
        });

         */
    }

    getProducts(page: any, input: any) {
        if (page < 1) {
            return;
        }

        this.offset = page - 1;

        const offsetValue = new googleProtobuf000.Int64Value();
        offsetValue.value = this.offset;
        const listProductItemRequest = new ListProductItemRequest();
        listProductItemRequest.offset = offsetValue;
        //
        if (input) {
            const productItemSortModel = new ProductItemSortModel();
            productItemSortModel.asc = input.asc;
            productItemSortModel.type = input.type?.toString();
            listProductItemRequest.sorting = productItemSortModel;
        }
        //
        if (this.searchForm.controls.basic.controls.keyword.value) {
            const keywordValue = new googleProtobuf000.StringValue();
            keywordValue.value = this.searchForm.controls.basic.controls.keyword.value.toString();
            listProductItemRequest.keyWord = keywordValue;
        }
        if (this.searchForm.controls.basic.controls.category.value && Number(this.searchForm.controls.basic.controls.category.value.toString()) !== 0) {
            const categoryValue = new googleProtobuf000.Int64Value();
            categoryValue.value = this.searchForm.controls.basic.controls.category.value.toString();
            listProductItemRequest.category = categoryValue;
        }

        //
        if (this.searchForm.controls.basic.controls.status.value) {
            const statusValue = new googleProtobuf000.Int64Value();
            statusValue.value = (this.searchForm.controls.basic.controls.status.value == true ? 1 : 0).toString();
            listProductItemRequest.status = statusValue;
        }
        //
        // if (this.searchForm.controls.basic.controls.rakutenEventType.value && Number(this.searchForm.controls.basic.controls.rakutenEventType.value.toString()) !== 0) {
        //     const rakutenEventTypeValue = new googleProtobuf001.Int64Value();
        //     rakutenEventTypeValue.value = this.searchForm.controls.basic.controls.rakutenEventType.value.toString();
        //     listProductItemRequest.rakutenEventId = rakutenEventTypeValue;
        // }

        // let url = "";
        // if (page > 0) {
        //     url += "&page=" + page;
        // }
        //
        // localStorage.removeItem("item_page");
        // localStorage.removeItem("item_product_title");
        // localStorage.removeItem("item_category");
        // localStorage.removeItem("item_supplier");
        // localStorage.removeItem("item_status");
        // localStorage.removeItem("item_rakuten_event_type");
        //
        // if (!url.includes("?")) {
        //     url = url.replace("&", "?");
        // }
        //
        // localStorage.setItem("item_page", page.toString());
        // if (this.searchForm.controls.basic.controls.itemName.value) {
        //     url += "&itemName=" + this.searchForm.controls.basic.controls.itemName.value.toString();
        //     localStorage.setItem("item_product_title", this.searchForm.controls.basic.controls.itemName.value.toString());
        // }
        //
        // if (this.searchForm.controls.basic.controls.category.value) {
        //     url += "&category=" + this.searchForm.controls.basic.controls.category.value.toString();
        //     localStorage.setItem("item_category", this.searchForm.controls.basic.controls.category.value.toString());
        // }
        //
        // if (this.searchForm.controls.basic.controls.supplier.value) {
        //     url += "&itemName=" + this.searchForm.controls.basic.controls.supplier.value.toString();
        //     localStorage.setItem("item_supplier", this.searchForm.controls.basic.controls.supplier.value.toString());
        // }
        //
        // if (this.searchForm.controls.basic.controls.status.value) {
        //     url += "&status=" + (this.searchForm.controls.basic.controls.status.value == true ? "1" : "0");
        //     localStorage.setItem("item_status", this.searchForm.controls.basic.controls.status.value == true ? "1" : "0");
        // }
        //
        // if (this.searchForm.controls.basic.controls.rakutenEventType.value) {
        //     url += "&rakutenEventType=" + this.searchForm.controls.basic.controls.rakutenEventType.value.toString();
        //     localStorage.setItem("item_rakuten_event_type", this.searchForm.controls.basic.controls.rakutenEventType.value.toString());
        // }
        //
        // this.location.replaceState(`items` + url);
        this.productsService
            .listProductItems(listProductItemRequest)
            .then((result: any) => {
                if (result) {
                    this.products = result.toObject();
                    console.log(this.products);
                    this.pager = this.pagerService.getPager(this.products.data.length, Number(this.products.total), Number(this.offset) + 1, 50); // or whatever
                    // if (resultObj && resultObj.data) {
                    //     this.pager = this.pagerService.getPager(resultObj.data.length, Number(resultObj.total), this.offset + 1, 50); // or whatever
                    //
                    //     for (let idx = 0; idx < this.products.data.length; idx++) {
                    //         const newStatus: any[] = [];
                    //         newStatus.push({value: "1", active: false, displayName: "楽"});
                    //         newStatus.push({value: "2", active: false, displayName: "Y"});
                    //         newStatus.push({value: "3", active: false, displayName: "B"});
                    //
                    //         this.products.data[idx].openStatus.forEach((status: any) => {
                    //             for (let jdx = 0; jdx < newStatus.length; jdx++) {
                    //                 if (status === newStatus[jdx].value) {
                    //                     newStatus[jdx].active = true;
                    //                     break;
                    //                 }
                    //             }
                    //         });
                    //         this.products.data[idx].newStatus = newStatus;
                    //     }
                    // }
                }
            })
            .catch((err: any) => {
                console.log(err);
                try {
                    alert(err["statusMessage"]);
                } catch (e) {
                    alert(String(e));
                }
            });
    }

    onSortingUpdated(input: any) {
        if (this.loaderService.isLoading()) {
            return;
        }

        if (input) {
            input.asc = !input.asc;
            this.selectedSorting = input;
            this.getProducts(1, input);
        }
    }
}
