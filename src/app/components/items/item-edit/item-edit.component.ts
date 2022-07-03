import {Component, OnInit} from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import {Router, ActivatedRoute} from "@angular/router";
import {NgZone} from "@angular/core";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Lightbox} from "ngx-lightbox";
import Cropper from "cropperjs";
import {DomSanitizer} from "@angular/platform-browser";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {LoaderService} from "../../../services/loader.service";
import {CommonService} from "../../../services/common.service";
import {RakutenEventsService} from "../../../protoServices/shop/rakuten-events.service";
import {RakutenShopCategoryService} from "../../../protoServices/shop/rakuten-shop-category.service";
import {YahooItemsService} from "../../../protoServices/shop/yahoo-items.service";
import {BasicService} from "../../../protoServices/shop/basic.service";

import {
    GetYahooProductRequest,
    GetYahooProductSpecRequest,
    YahooProductSpecValue
} from "../../../../proto/shop/yahoo-items.pb";
import {CategoriesListRequest} from "../../../../proto/products/categories.pb";
import {CategoriesService} from "../../../protoServices/products/categories.service";
import {ProductsService} from "../../../protoServices/products/products.service";
import {
    CreateProductItemRequest,
    GetProductItemInfoRequest, ProductImageInfo, UpdateProductItemsRequest,
    UploadProductItemsImageRequest
} from "../../../../proto/products/products.pb";
import * as googleProtobuf002 from "@ngx-grpc/well-known-types";

@Component({
    selector: "app-item-edit",
    templateUrl: "./item-edit.component.html",
    styleUrls: ["../../../../assets/scss/items.scss"],
})
export class ItemEditComponent implements OnInit {
    today = this.commonService.datePickerFormat(new Date() + "");

    currencySelectedName: any;
    currencySelectedId: any;
    currencyNote: any = "";

    exchangeRatesInfo: any;
    yahooProductInfo: any;

    deletePictureIds: any[] = [];
    deleteSourcePictureIds: any[] = [];

    shopCategories: any[] = [];
    rakutenEvents: any[] = [];
    errorMessage: any;
    productInfo: any;
    itemId: any;

    uploadImageModal: any;
    uploadImageModalEvent: any;

    activeIndex: any;
    activeSourceIndex: any;
    images: any[] = [];
    sourceImages: any[] = [];

    private imgAlbums: any = [];

    categories: any;
    purchasing: any[] = [];
    currencies: any[] = [];


    itemInputForm = new FormGroup({
        basic: new FormGroup({
            categoryId: new FormControl(1, [Validators.required]),
            productId: new FormControl("", [Validators.required]),
            productItemName: new FormControl("", [Validators.required]),
            inputPrice: new FormControl("", [Validators.required]),
            url: new FormControl(""),
            description: new FormControl("", [Validators.required]),
            priceTax: new FormControl("", [Validators.required]),
            quantity: new FormControl("", [Validators.required]),
            inputDate: new FormControl(this.today),
        }),
    });

    // 画像トリミング

    sequenceCnt: number = 0;
    imgUpTrimFlg = false;
    cropper: any;
    base64StringRaw: any;
    fileName: any;

    sourceBase64StringRaw: any;
    sourceFileName: any;

    constructor(
        public commonService: CommonService,
        private loaderService: LoaderService,
        private rakutenEventsService: RakutenEventsService,
        private rakutenShopCategoryService: RakutenShopCategoryService,
        private categoriesService: CategoriesService,
        private yahooItemsService: YahooItemsService,
        private sanitizer: DomSanitizer,
        private router: Router,
        private route: ActivatedRoute,
        private ngZone: NgZone,
        private lightbox: Lightbox,
        private basicService: BasicService,
        private productsService: ProductsService
    ) {
    }

    drop(event: CdkDragDrop<string[]>) {
        if (this.loaderService.isLoading()) {
            return;
        }
        moveItemInArray(this.images, event.previousIndex, event.currentIndex);
    }

    dropSource(event: CdkDragDrop<string[]>) {
        if (this.loaderService.isLoading()) {
            return;
        }
        moveItemInArray(this.sourceImages, event.previousIndex, event.currentIndex);
    }

    ngOnInit(): void {

        this.categoriesService.categoriesList(new CategoriesListRequest()).then(result => {
            if (result && result.toObject()) {
                this.categories = result.toObject().data;
            }
        }).finally(() => {
            this.firstInit();
        });

    }

    firstInit() {
        this.route.paramMap.subscribe((params) => {
            this.itemId = params.get("itemId");

            const getProductItemInfoRequest = new GetProductItemInfoRequest();
            getProductItemInfoRequest.productItemId = this.itemId;
            this.productsService
                .getProductItemInfo(getProductItemInfoRequest)
                .then((result) => {
                    if (result) {
                        this.productInfo = result.toObject();
                        // get all spec
                        const getYahooProductRequest = new GetYahooProductRequest();
                        getYahooProductRequest.productItemId = this.itemId;
                        // ==========================
                        this.itemInputForm.enable();
                        this.itemInputForm.controls.basic.controls.categoryId.setValue(this.productInfo.categoryId);
                        this.itemInputForm.controls.basic.controls.productId.setValue(this.productInfo.productId);
                        this.itemInputForm.controls.basic.controls.productItemName.setValue(this.productInfo.productItemName);
                        this.itemInputForm.controls.basic.controls.url.setValue(this.productInfo.url);
                        this.itemInputForm.controls.basic.controls.inputPrice.setValue(this.productInfo.inputPrice);
                        this.itemInputForm.controls.basic.controls.description.setValue(this.productInfo.description);
                        this.itemInputForm.controls.basic.controls.priceTax.setValue(this.productInfo.priceTax);
                        this.itemInputForm.controls.basic.controls.quantity.setValue(this.productInfo.quantity);

                        if (this.productInfo.inputDate && this.productInfo.inputDate.seconds) {
                            this.itemInputForm.controls.basic.controls.inputDate.setValue(this.commonService.secondsToJpDateFormatWithSeparator(this.productInfo.inputDate.seconds, "-"));
                        }
                    }
                    console.log(this.productInfo);
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
    }

    openImageView(index: number): void {
        this.lightbox.open(this.images, index, {
            wrapAround: true,
            showImageNumberLabel: true,
        });
    }

    openSourceImageView(index: number): void {
        this.lightbox.open(this.sourceImages, index, {
            wrapAround: true,
            showImageNumberLabel: true,
        });
    }

    onSave() {

        if (!this.itemId) {
            return;
        }
        const updateProductItemsRequest = new UpdateProductItemsRequest();
        updateProductItemsRequest.productItemId = this.itemId;
        updateProductItemsRequest.categoryId = this.itemInputForm.controls.basic.controls.categoryId.value?.toString();
        updateProductItemsRequest.productId = this.itemInputForm.controls.basic.controls.productId.value?.toString();
        updateProductItemsRequest.productItemName = this.itemInputForm.controls.basic.controls.productItemName.value?.toString();
        updateProductItemsRequest.inputPrice = this.itemInputForm.controls.basic.controls.inputPrice.value?.toString();
        updateProductItemsRequest.url = this.itemInputForm.controls.basic.controls.url.value?.toString();
        updateProductItemsRequest.description = this.itemInputForm.controls.basic.controls.description.value?.toString();
        updateProductItemsRequest.priceTax = this.itemInputForm.controls.basic.controls.priceTax.value?.toString();
        updateProductItemsRequest.quantity = this.itemInputForm.controls.basic.controls.quantity.value?.toString();

        if (this.itemInputForm.controls.basic.controls.inputDate.value) {
            const inputDateStamp = new googleProtobuf002.Timestamp();
            inputDateStamp.seconds = (Date.parse(this.itemInputForm.controls.basic.controls.inputDate.value.toString()) / 1000).toString();
            updateProductItemsRequest.inputDate = inputDateStamp;
        }

        if (this.images.length > 0) {
            const paths: any[] = [];
            this.images.forEach((p) => {
                console.log(p);

                if (p && p.path !== "") {
                    const productImageInfo = new ProductImageInfo();
                    productImageInfo.imageAlt = p.alt;
                    productImageInfo.imageName = p.name;
                    productImageInfo.imagePath = p.path;
                    productImageInfo.pictureId = p.pictureId;
                    productImageInfo.imageNo = p.no;

                    paths.push(productImageInfo);
                }
            });
            updateProductItemsRequest.images = paths;
        }

        if (this.images.length > 0) {
            const paths: any[] = [];
            this.images.forEach((p) => {
                console.log(p);
                if (p && p.path !== "") {
                    const productImageSourceInfo = new ProductImageInfo();
                    productImageSourceInfo.imageAlt = p.alt;
                    productImageSourceInfo.imageName = p.name;
                    productImageSourceInfo.imagePath = p.path;
                    productImageSourceInfo.pictureId = p.pictureId;
                    productImageSourceInfo.imageNo = p.no;
                    paths.push(productImageSourceInfo);
                }
            });
            updateProductItemsRequest.images = paths;
        }

        // // new period, date start, end
        // if (this.itemInputForm.controls.basic.controls.period) {
        //     createProductItemRequest.periodType = this.itemInputForm.controls.basic.controls.period.value == true ? "1" : "0";
        // }
        //
        // if (this.itemInputForm.controls.basic.controls.period.value && this.itemInputForm.controls.basic.controls.period.value === true) {
        //     if (this.itemInputForm.controls.basic.controls.start.value) {
        //         const startTimeDateStamp = new googleProtobuf002.Timestamp();
        //         startTimeDateStamp.seconds = (Date.parse(this.itemInputForm.controls.basic.controls.start_time_date.value.toString()) / 1000).toString();
        //         createProductItemRequest.periodStart = startTimeDateStamp;
        //     }
        //
        //     if (this.itemInputForm.controls.basic.controls.end_time_date.value) {
        //         const endTimeDateStamp = new googleProtobuf002.Timestamp();
        //         endTimeDateStamp.seconds = (Date.parse(this.itemInputForm.controls.basic.controls.end_time_date.value.toString()) / 1000).toString();
        //         createProductItemRequest.periodEnd = endTimeDateStamp;
        //     }
        // }

        this.productsService
            .updateProductItems(updateProductItemsRequest)
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
                                });
                            });
                        });
                    }

                    // if (modalTarget) {
                    //     modalTarget.addEventListener("hide.bs.modal", () => {
                    //         this.ngZone.run(() => {
                    //             setTimeout(() => {

                    // if (modalTarget) {
                    //     modalTarget.addEventListener("hide.bs.modal", () => {
                    //         this.ngZone.run(() => {
                    //             setTimeout(() => {
                    //                 if (this.selectedMoveShopId === 1) {
                    //                     this.router.navigate(["/items/edit/yahoo/" + result["productItemId"]]);
                    //                 } else if (this.selectedMoveShopId === 2) {
                    //                     this.router.navigate(["/items/edit/rakuten/" + result["productItemId"]]);
                    //                 } else if (this.selectedMoveShopId === 3) {
                    //                     this.router.navigate(["/items/edit/base/" + result["productItemId"]]);
                    //                 } else if (this.selectedMoveCreate) {
                    //                     this.ngOnInit();
                    //
                    //                     const form = document.getElementsByClassName("needs-validation")[0] as HTMLFormElement;
                    //                     form.classList.remove("was-validated");
                    //
                    //                     // @ts-ignore
                    //                     this.itemInputForm = new FormGroup({
                    //                         basic: new FormGroup({
                    //                             category: new FormControl(1, [Validators.required]),
                    //                             itemName: new FormControl("", [Validators.required]),
                    //                             purchasePrice: new FormControl(0, [Validators.required]),
                    //                             purchasePriceUnit: new FormControl(1, [Validators.required]),
                    //                             purchaseNo: new FormControl(1, [Validators.required]),
                    //                             purchaseUrl: new FormControl(""),
                    //                             note: new FormControl("", [Validators.required]),
                    //                             buyUnitPrice: new FormControl(0, [Validators.required]),
                    //                             salesPrice: new FormControl(0),
                    //                             catchcopy: new FormControl(""),
                    //                             specArray: new FormArray([
                    //                                 new FormGroup({
                    //                                     selectionType: new FormControl(0),
                    //                                     specId: new FormControl(0),
                    //                                     specName: new FormControl({value: "", disabled: false}),
                    //                                     dataArray: new FormArray([
                    //                                         new FormGroup({
                    //                                             valueId: new FormControl(0),
                    //                                             valueName: new FormControl(""),
                    //                                             valueChecked: new FormControl(false),
                    //                                         }),
                    //                                     ]),
                    //                                 }),
                    //                             ]),
                    //                         }),
                    //                     });
                    //
                    //                     window.scrollTo(0, 0);
                    //                 } else {
                    //                     this.router.navigate(["/items/info/" + result["productItemId"]]);
                    //                 }
                    //             }, 600);
                    //         });
                    //     });
                    // }
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

    imageAdd() {
        if (this.images.length > 20) {
            return;
        }
        this.images.push({no: this.getImageMaxNo() + 1, caption: "", src: "", name: "", path: "", newImageFlg: "1"});
        console.log(this.images);
    }

    imageDelete(idx: number) {
        if (this.images.length > idx) {
            this.deletePictureIds.push(this.images[idx].pictureId);
            this.images.splice(idx, 1);
        }
        console.log(this.images);
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

                        this.images[this.activeIndex].src = this.base64StringRaw;
                        this.images[this.activeIndex].caption = "image";
                        this.images[this.activeIndex].alt = "alt";
                        this.images[this.activeIndex].name = this.fileName;
                    }
                }
            };
        }
    }

    onImgUpload(idx: any) {
        this.activeIndex = idx;
        this.uploadImageModalEvent = null;
        this.uploadImageModal = null;

        this.imgUpTrimFlg = false;
        this.base64StringRaw = null;

        this.uploadImageModalEvent = document.getElementById("modalUpload");
        this.uploadImageModalEvent.addEventListener("hidden.bs.modal", () => {
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
            ready: function () {
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
        document.getElementById("modalUploadClose")?.click();
        this.base64StringRaw = this.cropper.getCroppedCanvas().toDataURL();

        this.images[this.activeIndex].src = this.base64StringRaw;
        this.images[this.activeIndex].caption = "image";
        this.images[this.activeIndex].alt = "alt";
        this.images[this.activeIndex].name = this.fileName;

        const uploadProductItemsImageRequest = new UploadProductItemsImageRequest();
        uploadProductItemsImageRequest.imageData = this.images[this.activeIndex].src;
        uploadProductItemsImageRequest.imageName = this.images[this.activeIndex].name;
        uploadProductItemsImageRequest.productItemId = this.productInfo.productItemId;

        this.productsService
            .uploadProductItemsImage(uploadProductItemsImageRequest)
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

        const file = event.dataTransfer?.files[0];
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
                    this.base64StringRaw = reader.result?.toString(); // upload
                    this.imgUpTrimFlg = true;
                }
            };
        }
    }

    setupQrData() {

        if (this.itemInputForm.controls.basic.controls.url.value) {
            return this.itemInputForm.controls.basic.controls.url.value.toString();
        }
        return '';
    }

    changeStart() {
    }
}
