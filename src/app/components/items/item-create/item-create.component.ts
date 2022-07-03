import {Component, OnInit} from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import {Router, ActivatedRoute} from "@angular/router";
import {NgZone} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Lightbox} from "ngx-lightbox";
import Cropper from "cropperjs";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {DomSanitizer} from "@angular/platform-browser";
import {LoaderService} from "../../../services/loader.service";
import {CommonService} from "../../../services/common.service";
import * as googleProtobuf002 from "@ngx-grpc/well-known-types";
import {ProductsService} from "../../../protoServices/products/products.service";
import {
    CreateProductItemRequest,
    ProductImageInfo,
    UploadProductItemsImageRequest
} from "../../../../proto/products/products.pb";
import {CategoriesListRequest} from "../../../../proto/products/categories.pb";
import {CategoriesService} from "../../../protoServices/products/categories.service";


@Component({
    selector: "app-item-create",
    templateUrl: "./item-create.component.html",
    styleUrls: ["../../../../assets/scss/items.scss"],
})
export class ItemCreateComponent implements OnInit {
    today = this.commonService.datePickerFormat(new Date() + "");


    sourceInfo: any;
    uploadImageModal: any;
    uploadImageModalEvent: any;

    activeIndex: any;
    images: any[] = [];

    selectedMoveShopId = 0;
    selectedMoveCreate = false;
    categories: any[] = [];
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
    imgUpTrimFlg = false;
    cropper: any;
    base64StringRaw: any;
    fileName: any;

    constructor(
        public commonService: CommonService,
        public loaderService: LoaderService,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private router: Router,
        private ngZone: NgZone,
        private lightbox: Lightbox,
        private productsService: ProductsService,
        private categoriesService: CategoriesService,
    ) {
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.images, event.previousIndex, event.currentIndex);
    }

    ngOnInit(): void {

        this.categoriesService.categoriesList(new CategoriesListRequest()).then(result => {
            if (result && result.toObject()) {

                result.toObject().data?.forEach(c => {
                    this.categories.push({categoryId: c.categoryId, categoryName: c.categoryName});
                });
            }
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
            window.scrollTo(0, 0);
            return;
        }

        if (this.itemInputForm.invalid) {
            window.scrollTo(0, 0);
            return;
        }

        const createProductItemRequest = new CreateProductItemRequest();
        createProductItemRequest.categoryId = this.itemInputForm.controls.basic.controls.categoryId.value?.toString();
        createProductItemRequest.productId = this.itemInputForm.controls.basic.controls.productId.value?.toString();
        createProductItemRequest.productItemName = this.itemInputForm.controls.basic.controls.productItemName.value?.toString();
        createProductItemRequest.inputPrice = this.itemInputForm.controls.basic.controls.inputPrice.value?.toString();
        createProductItemRequest.url = this.itemInputForm.controls.basic.controls.url.value?.toString();
        createProductItemRequest.description = this.itemInputForm.controls.basic.controls.description.value?.toString();
        createProductItemRequest.priceTax = this.itemInputForm.controls.basic.controls.priceTax.value?.toString();
        createProductItemRequest.quantity = this.itemInputForm.controls.basic.controls.quantity.value?.toString();

        if (this.itemInputForm.controls.basic.controls.inputDate.value) {
            const inputDateStamp = new googleProtobuf002.Timestamp();
            inputDateStamp.seconds = (Date.parse(this.itemInputForm.controls.basic.controls.inputDate.value.toString()) / 1000).toString();
            createProductItemRequest.inputDate = inputDateStamp;
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
            createProductItemRequest.images = paths;
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
            createProductItemRequest.images = paths;
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
            .createProductItems(createProductItemRequest)
            .then((result) => {
                if (result) {
                    const modalTarget = document.getElementById("modalSaveComplete");
                    const modalSaveComplete = new Bootstrap.Modal(modalTarget);
                    modalSaveComplete.show();


                    if (modalTarget) {
                        modalTarget.addEventListener("hide.bs.modal", () => {
                            this.ngZone.run(() => {
                                setTimeout(() => {
                                    this.router.navigate(["/items/edit/" + result.toObject().productItemId]);
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

    onMoveShop(shopId: number) {
        this.selectedMoveShopId = shopId;
    }

    onMoveCreate() {
        this.selectedMoveCreate = true;
    }

    imageAdd() {
        if (this.images.length > 20) {
            return;
        }
        this.images.push({no: this.getImageMaxNo() + 1, caption: "", src: "", name: "", path: ""});
        console.log(this.images);
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

    imageDelete(idx: number) {
        if (this.images.length > idx) {
            this.images.splice(idx, 1);
        }
        console.log(this.images);
    }

    onFileSelected(event: any) {
        const files = event.target.files;
        const file = files[0];

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
        // @ts-ignore
        document.getElementById("modalUploadClose").click();
        this.base64StringRaw = this.cropper.getCroppedCanvas().toDataURL();

        this.images[this.activeIndex].src = this.base64StringRaw;
        this.images[this.activeIndex].caption = "image";
        this.images[this.activeIndex].alt = "alt";
        this.images[this.activeIndex].name = this.fileName;

        const uploadProductItemsImageRequest = new UploadProductItemsImageRequest();
        uploadProductItemsImageRequest.imageData = this.images[this.activeIndex].src;
        uploadProductItemsImageRequest.imageName = this.images[this.activeIndex].name;
        uploadProductItemsImageRequest.productItemId = "0";

        this.productsService
            .uploadProductItemsImage(uploadProductItemsImageRequest)
            .then((result) => {
                if (result) {
                    const resultObj = result.toObject();
                    if (resultObj && resultObj.image) {
                        this.images[this.activeIndex].path = resultObj.image.imagePath;
                        this.images[this.activeIndex].pictureId = resultObj.image.pictureId;
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

                try {
                    alert(decodeURI(err["message"]));
                } catch {
                    alert(err);
                }
            });
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


    setupQrData() {

        if (this.itemInputForm.controls.basic.controls.url.value) {
            return this.itemInputForm.controls.basic.controls.url.value.toString();
        }
        return '';
    }

    changeStart() {
    }
}
