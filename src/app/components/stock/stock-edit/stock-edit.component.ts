import { Component, OnInit } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { ActivatedRoute, Router } from "@angular/router";
import { NgZone } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { Lightbox } from "ngx-lightbox";
import { environment } from "../../../../environments/environment";
import { BasicService } from "../../../protoServices/shop/basic.service";
import { StockService } from "../../../protoServices/shop/stock.service";
import Cropper from "cropperjs";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import * as googleProtobuf001 from "@ngx-grpc/well-known-types";
import { StockInfoRequest, StockUpdateRequest, UploadStockImageRequest } from "../../../../proto/shop/stock.pb";

@Component({
  selector: "app-stock-edit",
  templateUrl: "./stock-edit.component.html",
  styleUrls: ["../../../../assets/scss/stock.scss"],
})
export class StockEditComponent implements OnInit {
  deletePictureIds: any[] = [];
  errorMessage: any;
  stockInfo: any;
  itemId: any;
  uploadImageModal: any;
  uploadImageModalEvent: any;

  activeIndex: any;
  images: any[] = [];

  categories: any[] = [];
  purchasing: any[] = [];
  currencies: any[] = [];

  itemInputForm = new FormGroup({
    basic: new FormGroup({
      category: new FormControl(1, [Validators.required]),
      itemName: new FormControl("", [Validators.required]),
      purchasePrice: new FormControl(0, [Validators.required]),
      purchasePriceUnit: new FormControl(1, [Validators.required]),
      purchaseNo: new FormControl(1, [Validators.required]),
      purchaseUrl: new FormControl(""),
      note: new FormControl("", [Validators.required]),
      buyUnitPrice: new FormControl(0, [Validators.required]),
    }),
  });

  // 画像トリミング
  imgUpTrimFlg = false;
  cropper: any;
  base64StringRaw: any;
  fileName: any;

  constructor(private stockService: StockService, private basicService: BasicService, private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private ngZone: NgZone, private lightbox: Lightbox) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.itemInputForm.disable();
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get("itemId");

      this.basicService
        .listCategories(new googleProtobuf001.Empty())
        .then((result) => {
          if (result) {
            const resultObj = result.toObject();
            if (resultObj && resultObj.data) {
              this.categories = resultObj.data;
            }
          }
        })
        .finally(() => {
          this.basicService
            .listCurrencies(new googleProtobuf001.Empty())
            .then((result) => {
              if (result) {
                const resultObj = result.toObject();
                if (resultObj && resultObj.data) {
                  this.currencies = resultObj.data;
                }
              }
            })
            .finally(() => {
              this.basicService
                .listPurchasing(new googleProtobuf001.Empty())
                .then((result) => {
                  if (result) {
                    const resultObj = result.toObject();
                    if (resultObj && resultObj.data) {
                      this.purchasing = resultObj.data;
                    }
                  }
                })
                .finally(() => {
                  const stockInfoRequest = new StockInfoRequest();
                  stockInfoRequest.productItemId = this.itemId;
                  this.stockService
                    .stockInfo(stockInfoRequest)
                    .then((result) => {
                      this.stockInfo = result;
                      console.log(this.stockInfo);

                      this.itemInputForm.enable();
                      this.itemInputForm.controls.basic.controls.category.setValue(this.stockInfo.categoryId);
                      this.itemInputForm.controls.basic.controls.itemName.setValue(this.stockInfo.productName);
                      this.itemInputForm.controls.basic.controls.purchasePrice.setValue(this.stockInfo.purchaseUnitPrice);
                      this.itemInputForm.controls.basic.controls.purchasePriceUnit.setValue(this.stockInfo.currencyType);
                      this.itemInputForm.controls.basic.controls.purchaseNo.setValue(this.stockInfo.supplierId);
                      this.itemInputForm.controls.basic.controls.purchaseUrl.setValue(this.stockInfo.categoryId);
                      this.itemInputForm.controls.basic.controls.note.setValue(this.stockInfo.supplierProductUrl);
                      this.itemInputForm.controls.basic.controls.buyUnitPrice.setValue(this.stockInfo.sellingPrice);

                      if (this.stockInfo.imagesList.length > 0) {
                        for (let i = 0; i < this.stockInfo.imagesList.length; i++) {
                          this.images.push({
                            pictureId: this.stockInfo.imagesList[i].pictureId,
                            no: this.stockInfo.imagesList[i].imageNo,
                            alt: this.stockInfo.imagesList[i].imageAlt,
                            caption: "image",
                            src: this.sanitizer.bypassSecurityTrustResourceUrl(environment.imageUrl + this.stockInfo.imagesList[i].imagePath),
                            name: this.stockInfo.imagesList[i].imageName,
                            path: this.stockInfo.imagesList[i].imagePath,
                          });

                          this.images.sort((a, b) => a.no - b.no);
                          console.log(this.images);
                        }
                      }
                    })
                    .catch((err) => {
                      try {
                        this.errorMessage = err["statusMessage"];
                      } catch (e) {
                        this.errorMessage = String(e);
                      }
                      this.itemInputForm.enable();
                    });
                });
            });
        });
    });
  }

  openImageView(index: number): void {
    this.lightbox.open(this.images, index, {
      wrapAround: true,
      showImageNumberLabel: true,
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

    if (this.itemInputForm.invalid) {
      return;
    }

    this.errorMessage = null;
    const stockUpdateRequest = new StockUpdateRequest();
    // stockUpdateRequest.productItemId = (this.itemId);
    // stockUpdateRequest.setCategoryId(Number(this.itemInputForm.get('basic').get('category').value.toString()));
    // stockUpdateRequest.setProductItemName(this.itemInputForm.get('basic').get('itemName').value.toString());
    // stockUpdateRequest.setPurchasingPrice(this.itemInputForm.get('basic').get('purchasePrice').value.toString());
    // stockUpdateRequest.setCurrencyType(Number(this.itemInputForm.get('basic').get('purchasePriceUnit').value.toString()));
    // stockUpdateRequest.setPurchasingSite(Number(this.itemInputForm.get('basic').get('purchaseNo').value.toString()));
    // stockUpdateRequest.setPurchasingUrl(this.itemInputForm.get('basic').get('purchaseUrl').value.toString());
    // stockUpdateRequest.setSalesUnitPrice(this.itemInputForm.get('basic').get('buyUnitPrice').value.toString());
    // stockUpdateRequest.setProductDetails(this.itemInputForm.get('basic').get('note').value.toString());
    //
    // if (this.deletePictureIds.length > 0) {
    //     stockUpdateRequest.setDeletePictureIdList(this.deletePictureIds);
    // }
    // console.log(this.deletePictureIds);
    // console.log(this.images);
    // if (this.images.length > 0) {
    //     const paths: any[] = [];
    //     this.images.forEach((p) => {
    //         console.log(p);
    //         if (p && p.path !== '' && p.newImageFlg && p.newImageFlg === '1') {
    //             const productImageInfo = new ProductImageInfo();
    //             productImageInfo.imageAlt = (p.alt);
    //             productImageInfo.imageName = (p.name);
    //             productImageInfo.imagePath = (p.path);
    //             productImageInfo.pictureId = (p.pictureId);
    //             productImageInfo.imageNo = (p.no);
    //             paths.push(productImageInfo);
    //         }
    //     });
    //     stockUpdateRequest.setImagesList(paths);
    // }

    this.stockService
      .stockUpdate(stockUpdateRequest)
      .then((result) => {
        if (result) {
          const modalTarget = document.getElementById("modalSaveComplete");
          const modalSaveComplete = new Bootstrap.Modal(modalTarget);
          modalSaveComplete.show();

          if (modalTarget) {
            modalTarget.addEventListener("hide.bs.modal", () => {
              this.ngZone.run(() => {
                setTimeout(() => {
                  this.router.navigate(["/items/info/" + this.itemId]);
                }, 600);
              });
            });
          }
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

  imageAdd() {
    if (this.images.length > 20) {
      return;
    }

    this.images.push({ no: this.getImageMaxNo() + 1, caption: "", src: "", name: "", path: "", newImageFlg: "1" });
    console.log(this.images);
  }

  imageDelete(idx: number) {
    if (this.images.length > idx) {
      this.deletePictureIds.push(this.images[idx].pictureId);
      this.images.splice(idx, 1);
    }
    console.log(this.images);
  }

  onImgUpload(idx: number) {
    this.activeIndex = idx;
    this.uploadImageModalEvent = null;
    this.uploadImageModal = null;

    this.imgUpTrimFlg = false;
    this.base64StringRaw = null;

    this.uploadImageModalEvent = document.getElementById("modalUpload");
    this.uploadImageModalEvent.addEventListener("hidden.bs.modal", (evt: any) => {
      console.log(idx);
    });
    this.uploadImageModal = new Bootstrap.Modal(document.getElementById("modalUpload")).show();
  }

  imageLoaded(ev: Event) {
    console.log("a");
    let croppable = false;
    if (this.cropper) {
      this.cropper.destroy();
    }

    const image = ev.target as HTMLImageElement;

    this.cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      autoCropArea: 0.9,
      rotatable: false,
      preview: ".img-preview-img",

      crop(event) {
        console.log("x:" + event.detail.x);
        console.log("y:" + event.detail.y);
        console.log("width:" + event.detail.width);
        console.log("height:" + event.detail.height);
      },
      ready: function() {
        croppable = true;
        // @ts-ignore
        this.cropper.zoom(-0.1);
      },
    });
  }

  imgTrimmingDelete() {
    this.imgUpTrimFlg = false;
    this.base64StringRaw = null;
  }

  imgTrimmingFix() {
    // @ts-ignore
    document.getElementById("modalUploadClose").click();
    this.base64StringRaw = this.cropper.getCroppedCanvas().toDataURL();

    this.images[this.activeIndex].src = this.base64StringRaw;
    this.images[this.activeIndex].caption = "image";
    this.images[this.activeIndex].alt = "alt";
    this.images[this.activeIndex].name = this.fileName;

    const uploadStockImageRequest = new UploadStockImageRequest();
    uploadStockImageRequest.imageData = this.images[this.activeIndex].src;
    uploadStockImageRequest.imageName = this.images[this.activeIndex].name;
    uploadStockImageRequest.productItemId = this.itemId;

    this.stockService
      .uploadStockImage(uploadStockImageRequest)
      .then((result) => {
        if (result) {
          const resultObj = result.toObject();
          if (resultObj && resultObj.image) {
            this.images[this.activeIndex].path = resultObj.image.imagePath;
            this.images[this.activeIndex].pictureId = resultObj.image.pictureId;
            this.images[this.activeIndex].newImageFlg = "1";
          }
        }
        console.log(result);
      })
      .catch((err) => {
        this.images[this.activeIndex].src = "";
        this.images[this.activeIndex].caption = "";
        this.images[this.activeIndex].alt = "";
        this.images[this.activeIndex].name = "";
        this.images[this.activeIndex].path = "";
        this.images[this.activeIndex].pictureId = "";
      });
  }

  getImageMaxNo() {
    let max = 0;
    if (!this.images) {
      return 0;
    }
    this.images.forEach((i) => {
      if (i.no > max) {
        max = i.no;
      }
    });
    return max;
  }

  dragOver(event: DragEvent) {
    // ブラウザで画像を開かないようにする
    event.preventDefault();
  }

  dropFileSelected(event: DragEvent) {
    // ブラウザで画像を開かないようにする
    event.preventDefault();

    if (event.dataTransfer) {
      const file = event.dataTransfer.files[0];
      console.log(file);
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const fileSize = file.size / 1024 / 1024; // in MiB
          if (fileSize > 2) {
            alert("容量が2MB以下であることが必須となります。");
            this.fileName = null;
            this.base64StringRaw = null;
            this.imgUpTrimFlg = false;
          } else {
            this.fileName = file.name.toString();

            if (reader.result) {
              this.base64StringRaw = reader.result.toString(); // upload
              this.imgUpTrimFlg = true;
            }
          }
        };
      }
    }
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    const file = files[0];
    // file.name.substr(file.name.lastIndexOf('.') + 1);
    console.log(file);
    if (files && file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const fileSize = file.size / 1024 / 1024; // in MiB
        if (fileSize > 2) {
          alert("容量が2MB以下であることが必須となります。");
          this.fileName = null;
          this.base64StringRaw = null;
          this.imgUpTrimFlg = false;
        } else {
          this.fileName = file.name.toString();
          if (reader.result) {
            this.base64StringRaw = reader.result.toString(); // upload
            this.imgUpTrimFlg = true;
          }
        }
      };
    }
  }
}
