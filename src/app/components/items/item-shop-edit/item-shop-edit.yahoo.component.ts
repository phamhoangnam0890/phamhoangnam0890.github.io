import { Component, OnInit } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { ActivatedRoute, Router } from "@angular/router";
import { NgZone } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { YahooItemsService } from "../../../protoServices/shop/yahoo-items.service";
import * as googleProtobuf001 from "@ngx-grpc/well-known-types";
import { GetYahooProductRequest, GetYahooProductSpecRequest, UpdateYahooProductRequest, YahooProductSpecValue } from "../../../../proto/shop/yahoo-items.pb";

@Component({
  selector: "app-item-shop-yahoo-edit",
  templateUrl: "./item-shop-edit.yahoo.component.html",
  styleUrls: ["../../../../assets/scss/items.scss"],
})
export class ItemShopYahooEditComponent implements OnInit {
  // API Document
  // https://developer.yahoo.co.jp/webapi/shopping/editItem.html

  itemId: any;
  baseProductInfo: any;
  countNumItemName = 0;
  countNumCatchcopy = 0;
  countNumItemInformation = 0;
  yahooProductCategories: any[] = [];

  itemInputForm = new FormGroup({
    basic: new FormGroup({
      itemName: new FormControl("", [Validators.required]),
      yahooProductCategory: new FormControl(null, [Validators.required]),
      yahooProductCategoryName: new FormControl(null, [Validators.required]),
      pageOpen: new FormControl(1, [Validators.required]),
      price: new FormControl(0),
      salesPrice: new FormControl(0),
      catchcopy: new FormControl(""),
      itemInformation: new FormControl(""),
      specArray: new FormArray([
        new FormGroup({
          selectionType: new FormControl(0),
          specId: new FormControl(0),
          specName: new FormControl({ value: "", disabled: false }),
          dataArray: new FormArray([
            new FormGroup({
              valueId: new FormControl(0),
              valueName: new FormControl(""),
              valueChecked: new FormControl(false),
            }),
          ]),
        }),
      ]),
    }),
  });

  constructor(private router: Router, private ngZone: NgZone, private route: ActivatedRoute, private yahooItemsService: YahooItemsService) {}

  ngOnInit(): void {
    const specArray = <FormArray>this.itemInputForm.controls.basic.controls.specArray;
    specArray.clear();

    this.itemInputForm.disable();
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get("itemId");
      if (this.itemId) {
        const getYahooProductRequest = new GetYahooProductRequest();
        getYahooProductRequest.productItemId = this.itemId;
        this.yahooItemsService
          .getProduct(getYahooProductRequest)
          .then((result) => {
            this.itemInputForm.enable();
            this.baseProductInfo = result;
            this.itemInputForm.controls.basic.controls.itemName.setValue(this.baseProductInfo.productItemName);
            this.itemInputForm.controls.basic.controls.price.setValue(this.baseProductInfo.price);
            this.itemInputForm.controls.basic.controls.salesPrice.setValue(this.baseProductInfo.salePrice);
            this.itemInputForm.controls.basic.controls.catchcopy.setValue(this.baseProductInfo.catchCopy);
            this.itemInputForm.controls.basic.controls.itemInformation.setValue(this.baseProductInfo.productDetail);
            this.itemInputForm.controls.basic.controls.pageOpen.setValue(this.baseProductInfo.openStatus);
            this.itemInputForm.controls.basic.controls.yahooProductCategoryName.setValue(this.baseProductInfo.productCategoryName);
            console.log(this.baseProductInfo);

            this.yahooItemsService.getProductCategories(new googleProtobuf001.Empty()).then((result2) => {
              if (result2) {
                const result2Obj = result2.toObject();
                if (result2Obj && result2Obj.data) {
                  this.yahooProductCategories = result2Obj.data;

                  if (this.yahooProductCategories.length > 0) {
                    this.yahooProductCategories.forEach((ypc) => {
                      if (this.baseProductInfo.productCategoryId === ypc.productCategoryId.toString()) {
                        this.itemInputForm.controls.basic.controls.yahooProductCategory.setValue(this.baseProductInfo.productCategoryId);
                        this.getProductSpec(Number(this.baseProductInfo.productCategoryId));
                      }
                    });
                  }
                }
              }
              console.log(this.yahooProductCategories);
            });
          })
          .catch((err) => {
            try {
              alert(err["statusMessage"]);
            } catch (e) {
              alert(String(e));
            }
          });
      }
    });
  }

  checkTextCount(type: number) {
    if (type == 1) {
      if (this.itemInputForm.controls.basic.controls.itemName.value) {
        const count = this.itemInputForm.controls.basic.controls.itemName.value.toString();
        this.countNumItemName = encodeURI(count).replace(/%../g, "*").length;
      }
    } else if (type == 2) {
      if (this.itemInputForm.controls.basic.controls.catchcopy.value) {
        const count = this.itemInputForm.controls.basic.controls.catchcopy.value.toString();
        this.countNumCatchcopy = encodeURI(count).replace(/%../g, "*").length;
      }
    } else if (type == 3) {
      if (this.itemInputForm.controls.basic.controls.itemInformation.value) {
        const count = this.itemInputForm.controls.basic.controls.itemInformation.value.toString();
        this.countNumItemInformation = encodeURI(count).replace(/%../g, "*").length;
      }
    }
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

    console.log(this.itemInputForm.controls);
    if (this.itemInputForm.invalid) {
      return;
    }

    this.itemInputForm.disable();
    const updateYahooProductRequest = new UpdateYahooProductRequest();
    updateYahooProductRequest.productItemId = this.itemId;
    updateYahooProductRequest.productCategoryId = this.baseProductInfo.productCategoryId;
    updateYahooProductRequest.openStatus = this.itemInputForm.controls.basic.controls.pageOpen.value?.toString();
    updateYahooProductRequest.productItemName = this.itemInputForm.controls.basic.controls.itemName.value?.toString();
    updateYahooProductRequest.price = this.itemInputForm.controls.basic.controls.price.value?.toString();
    updateYahooProductRequest.salePrice = this.itemInputForm.controls.basic.controls.salesPrice.value?.toString();
    updateYahooProductRequest.catchCopy = this.itemInputForm.controls.basic.controls.catchcopy.value?.toString().toString();
    updateYahooProductRequest.productDetail = this.itemInputForm.controls.basic.controls.itemInformation.value?.toString().toString();

    let qList: any[] = [];

    const specArray = <FormArray>this.itemInputForm.controls.basic.controls.specArray;
    for (let idx = 0; idx < specArray.length; idx++) {
      const dataArray = <FormArray>specArray.at(idx).get("dataArray");
      for (let jdx = 0; jdx < dataArray.length; jdx++) {
        if (dataArray.at(jdx).get("valueChecked")?.value === true) {
          console.log(dataArray.at(jdx).get("valueId")?.value);
          const yahooProductSpecValue = new YahooProductSpecValue();
          yahooProductSpecValue.specValueId = dataArray.at(jdx).get("valueId")?.value;
          yahooProductSpecValue.specValueName = dataArray.at(jdx).get("valueName")?.value;
          qList.push(yahooProductSpecValue);
        }
      }
    }

    updateYahooProductRequest.q = qList;
    this.yahooItemsService
      .updateProduct(updateYahooProductRequest)
      .then((result) => {
        if (result) {
          const modalTarget = document.getElementById("modalSaveComplete");
          const modalSaveComplete = new Bootstrap.Modal(modalTarget);
          modalSaveComplete.show();
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
        this.itemInputForm.enable();
      });
  }

  onProductCategoryChanged(event: any) {
    console.log(event.target.value);
    this.getProductSpec(Number(event.target.value));
  }

  getProductSpec(productCategoryId: number) {
    const getYahooProductSpecRequest = new GetYahooProductSpecRequest();
    getYahooProductSpecRequest.productCategoryId = productCategoryId.toString();
    this.yahooItemsService.getProductSpec(getYahooProductSpecRequest).then((result) => {
      this.deleteSpec(-1);
      if (result) {
        const resultObj = result.toObject();
        if (resultObj && resultObj.data) {
          this.deleteSpec(-1);
          resultObj.data.forEach((d: any) => {
            this.addSpec(d.specId, d.specName, d.selectionType, d.values);
          });
        }
      }

      console.log(this.itemInputForm);
    });
  }

  deleteSpec(index: number) {
    const specArray = <FormArray>this.itemInputForm.controls.basic.controls.specArray;
    if (index === -1) {
      specArray.clear();
    } else {
      specArray.removeAt(index);
    }
  }

  addSpec(specId: string, specName: string, selectionType: number, valuesList: any) {
    const dataArray = new FormArray([
      new FormGroup({
        valueId: new FormControl(1),
        valueName: new FormControl("Hogehoge"),
        valueChecked: new FormControl(false),
      }),
    ]);
    dataArray.clear();

    if (valuesList) {
      valuesList.forEach((data: any) => {
        let valueChecked = false;
        if (this.baseProductInfo && this.baseProductInfo.specValue && this.baseProductInfo.specValue.length > 0) {
          this.baseProductInfo.specValue.forEach((sv: any) => {
            if (data.specValueId === sv.specValueId) {
              valueChecked = true;
            }
          });
        }

        dataArray.push(
          new FormGroup({
            valueId: new FormControl(data.specValueId),
            valueName: new FormControl(data.specValueName),
            valueChecked: new FormControl(valueChecked),
          })
        );
      });
    }

    const specArray = <FormArray>this.itemInputForm.controls.basic.controls.specArray;
    specArray.push(
      new FormGroup({
        selectionType: new FormControl(selectionType),
        specId: new FormControl(specId),
        specName: new FormControl(specName),
        dataArray: dataArray,
      })
    );
  }

  onRadioChanged(spec: any, d: any) {
    const dataArray = <FormArray>spec.get("dataArray");
    // reset to false
    for (let idx = 0; idx < dataArray.length; idx++) {
      dataArray
        .at(idx)
        .get("valueChecked")
        ?.setValue(false);
    }

    // check
    for (let idx = 0; idx < dataArray.length; idx++) {
      if (dataArray.at(idx).get("valueId")?.value === d.get("valueId").value) {
        d.get("valueChecked").setValue(!d.get("valueChecked").value);
        break;
      }
    }
  }
}
