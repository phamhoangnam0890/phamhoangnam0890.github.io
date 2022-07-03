import { Component, OnInit } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { ActivatedRoute, Router } from "@angular/router";
import { NgZone } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BaseItemService } from "../../../protoServices/shop/base-item.service";
import { ApplayBaseProductRequest, GetBaseProductRequest, UpdateBaseProductRequest } from "../../../../proto/shop/base-items.pb";

@Component({
  selector: "app-item-shop-base-edit",
  templateUrl: "./item-shop-edit.base.component.html",
  styleUrls: ["../../../../assets/scss/items.scss"],
})
export class ItemShopBaseEditComponent implements OnInit {
  errorMessage: any;
  itemId: any;
  baseItemInfo: any;
  itemInputForm = new FormGroup({
    basic: new FormGroup({
      detail: new FormControl(""),
      price: new FormControl(0, [Validators.required]),
      visible: new FormControl(0), // ※表示順 (任意 デフォルト:一番最後のlist_order)
    }),
  });

  constructor(private router: Router, private ngZone: NgZone, private route: ActivatedRoute, private baseItemService: BaseItemService) {}

  ngOnInit(): void {
    this.itemInputForm.disable();
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get("itemId");
      if (this.itemId) {
        this.getInfo();
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

    if (this.itemInputForm.invalid || !this.itemId) {
      return;
    }

    this.errorMessage = null;
    this.itemInputForm.disable();

    const updateBaseProductRequest = new UpdateBaseProductRequest();
    updateBaseProductRequest.productItemId = this.itemId;
    updateBaseProductRequest.description = this.itemInputForm.controls.basic.controls.detail.value?.toString();
    updateBaseProductRequest.status = this.itemInputForm.controls.basic.controls.visible.value?.toString();
    updateBaseProductRequest.priceTax = this.itemInputForm.controls.basic.controls.price.value?.toString();
    this.baseItemService
      .updateBaseProduct(updateBaseProductRequest)
      .then((result) => {
        if (result) {
          const modalTarget = document.getElementById("modalSaveComplete");
          const modalSaveComplete = new Bootstrap.Modal(modalTarget);
          modalSaveComplete.show();
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
        this.itemInputForm.enable();
      });
  }

  reflect() {
    const applayBaseProductRequest = new ApplayBaseProductRequest();
    applayBaseProductRequest.productItemId = this.itemId;

    this.baseItemService
      .applayProduct(applayBaseProductRequest)
      .then((result) => {
        if (result) {
          this.getInfo();
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
        this.itemInputForm.enable();
      });
  }

  getInfo() {
    const getBaseProductRequest = new GetBaseProductRequest();
    getBaseProductRequest.productItemId = this.itemId;
    this.baseItemService
      .getBaseProduct(getBaseProductRequest)
      .then((result) => {
        this.baseItemInfo = result;
        console.log(this.baseItemInfo);

        this.itemInputForm.controls.basic.controls.detail.setValue(this.baseItemInfo.description);
        this.itemInputForm.controls.basic.controls.visible.setValue(this.baseItemInfo.status);
        this.itemInputForm.controls.basic.controls.price.setValue(this.baseItemInfo.priceTax);
      })
      .catch((err) => {
        try {
          this.errorMessage = err["statusMessage"];
        } catch (e) {
          this.errorMessage = String(e);
        }
      })
      .finally(() => {
        this.itemInputForm.enable();
      });
  }
}
