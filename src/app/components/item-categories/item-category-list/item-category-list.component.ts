import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../../services/common.service";
import { Router } from "@angular/router";
import { RakutenShopCategoryService } from "../../../protoServices/shop/rakuten-shop-category.service";
import { ApplayRakutenProductCategoryRequest, ListRakutenShopCategoryProductRequest } from "../../../../proto/shop/rakuten-shop-category.pb";

@Component({
  selector: "app-item-category-list",
  templateUrl: "./item-category-list.component.html",
  styleUrls: ["../../../../assets/scss/item-categories.scss"],
})
export class ItemCategoryListComponent implements OnInit {
  constructor(private router: Router, public commonService: CommonService, private rakutenShopCategoryService: RakutenShopCategoryService) {}

  shopCategories: any[] = [];

  ngOnInit() {
    this.dataSetup();
  }

  reflection() {
    this.rakutenShopCategoryService
      .applayCategoryProduct(new ApplayRakutenProductCategoryRequest())
      .then((result) => {})
      .catch((err) => {
        try {
          alert(err["statusMessage"]);
        } catch (e) {
          alert(String(e));
        }
      })
      .finally(() => {
        this.dataSetup();
      });
  }

  dataSetup() {
    this.rakutenShopCategoryService
      .listShopCategorys(new ListRakutenShopCategoryProductRequest())
      .then((result) => {
        if (result) {
          const resultObj = result.toObject();
          if (resultObj && resultObj.data) {
            this.shopCategories = resultObj.data;
          }
        }
        console.log(this.shopCategories);
      })
      .catch((err) => {
        try {
          alert(err["statusMessage"]);
        } catch (e) {
          alert(String(e));
        }
      });
  }

  onRoute(shopCategoryName: string, rakutenShopCategoryId: string) {
    localStorage.setItem("shopCategoryName", shopCategoryName);
    this.router.navigate(["/item-categories/rakuten/edit/" + rakutenShopCategoryId]);
  }
}
