import { Component, OnInit } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { Router, ActivatedRoute } from "@angular/router";
import { NgZone } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CommonService } from "../../../services/common.service";
import { RakutenShopCategoryService } from "../../../protoServices/shop/rakuten-shop-category.service";
import { CreateRakutenShopCategoryRequest, GetRakutenShopCategoryRequest, ListRakutenShopCategoryProductRequest } from "../../../../proto/shop/rakuten-shop-category.pb";
import { StringValue, Timestamp } from "@ngx-grpc/well-known-types";

@Component({
  selector: "app-item-category-edit",
  templateUrl: "./item-category-edit.component.html",
  styleUrls: ["../../../../assets/scss/item-categories.scss"],
})
export class ItemCategoryEditComponent implements OnInit {
  shopCategoryName: any = "";
  modalListOrderChange: any;
  modalListOrderChangeEvent: any;

  getShopCategoryData: any[] = [];
  itemData: any[] = [];
  itemCategoryId: any;

  searchForm = new FormGroup({
    basic: new FormGroup({
      itemId: new FormControl(""),
      itemName: new FormControl(""),
      dateStart: new FormControl(""),
      dateEnd: new FormControl(""),
    }),
  });

  constructor(public commonService: CommonService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone, private rakutenShopCategoryService: RakutenShopCategoryService) {}

  dataInit() {
    this.shopCategoryName = localStorage.getItem("shopCategoryName");

    const getRakutenShopCategoryRequest = new GetRakutenShopCategoryRequest();
    getRakutenShopCategoryRequest.rakutenShopCategoryId = this.itemCategoryId;

    this.rakutenShopCategoryService
      .getShopCategory(getRakutenShopCategoryRequest)
      .then((result) => {
        if (result) {
          const resultObj = result.toObject();
          if (resultObj && resultObj.data) {
            this.getShopCategoryData = resultObj.data;
          }
        }
        console.log(this.getShopCategoryData);
      })
      .catch((err) => {
        try {
          alert(err["statusMessage"]);
        } catch (e) {
          alert(String(e));
        }
      });
  }

  ngOnInit() {
    this.modalListOrderChangeEvent = document.getElementById("modalListOrderChange");
    this.modalListOrderChangeEvent.addEventListener("hidden.bs.modal", () => {
      console.log("CLOSED");
    });
    this.modalListOrderChangeEvent.addEventListener("show.bs.modal", () => {
      this.onSubmit();
    });

    this.route.paramMap.subscribe((params) => {
      this.itemCategoryId = params.get("itemCategoryId");
      console.log(this.itemCategoryId);
      this.dataInit();
    });
  }

  onModalListOrderChange() {
    // default
    // open modal stop
    this.modalListOrderChange = new Bootstrap.Modal(document.getElementById("modalListOrderChange")).show();
  }

  onSubmit() {
    this.searchForm.disable();
    const listRakutenShopCategoryProductRequest = new ListRakutenShopCategoryProductRequest();
    if (this.searchForm.controls.basic.controls.itemId.value) {
      const productIdValue = new StringValue();
      productIdValue.value = this.searchForm.controls.basic.controls.itemId.value.toString();
      listRakutenShopCategoryProductRequest.productId = productIdValue;
    }

    if (this.searchForm.controls.basic.controls.itemName.value) {
      const productItemNameValue = new StringValue();
      productItemNameValue.value = this.searchForm.controls.basic.controls.itemName.value.toString();
      listRakutenShopCategoryProductRequest.productItemName = productItemNameValue;
    }

    if (this.searchForm.controls.basic.controls.dateStart.value) {
      const startValue = new Timestamp();
      startValue.seconds = (Date.parse(this.searchForm.controls.basic.controls.dateStart.value.toString()) / 1000).toString();
      listRakutenShopCategoryProductRequest.createdAtStart = startValue;
    }

    if (this.searchForm.controls.basic.controls.dateEnd.value) {
      const endValue = new Timestamp();
      endValue.seconds = (Date.parse(this.searchForm.controls.basic.controls.dateEnd.value.toString()) / 1000).toString();
      listRakutenShopCategoryProductRequest.createdAtFinish = endValue;
    }

    this.rakutenShopCategoryService
      .listShopCategoryProduct(listRakutenShopCategoryProductRequest)
      .then((result) => {
        if (result) {
          const resultObj = result.toObject();
          if (resultObj && resultObj.data) {
            this.itemData = resultObj.data;
            if (this.itemData.length > 0) {
              for (let idx = 0; idx < this.itemData.length; idx++) {
                this.itemData[idx].isChecked = false;

                for (let jdx = 0; jdx < this.getShopCategoryData.length; jdx++) {
                  if (this.getShopCategoryData[jdx].productItemId === this.itemData[idx].productItemId) {
                    this.itemData[idx].isChecked = true;
                    break;
                  }
                }
              }
            }
          }
        }
        console.log(this.itemData);
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

  onDismiss() {
    if (this.itemData.length > 0) {
      for (let idx = 0; idx < this.itemData.length; idx++) {
        this.itemData[idx].isChecked = false;
      }
    }

    // @ts-ignore
    document.getElementById("dismissButton").click();
  }

  onSelect() {
    if (!this.itemCategoryId) {
      return;
    }

    console.log(this.itemData);
    if (this.itemData && this.itemData.length > 0) {
      const createRakutenShopCategoryRequest = new CreateRakutenShopCategoryRequest();
      createRakutenShopCategoryRequest.rakutenShopCategoryId = this.itemCategoryId;

      const idList = [];
      for (let idx = 0; idx < this.itemData.length; idx++) {
        if (this.itemData[idx].isChecked === true) {
          idList.push(this.itemData[idx].productItemId);
        }
      }
      createRakutenShopCategoryRequest.productItemId = idList;
      this.rakutenShopCategoryService
        .createShopCategory(createRakutenShopCategoryRequest)
        .then((result) => {
          if (result) {
            this.itemData = [];
            // @ts-ignore
            document.getElementById("dismissButton").click();
            this.dataInit();
          }
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

  onChanged(idx: number) {
    if (this.itemData && this.itemData[idx]) {
      this.itemData[idx].isChecked = !this.itemData[idx].isChecked;
    }
  }
}
