import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Lightbox} from "ngx-lightbox";
import {CommonService} from "../../../services/common.service";
import {DomSanitizer} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import {RakutenEventsService} from "../../../protoServices/shop/rakuten-events.service";
import {RakutenItemsService} from "../../../protoServices/shop/rakuten-items.service";
import {YahooItemsService} from "../../../protoServices/shop/yahoo-items.service";
import {BaseItemService} from "../../../protoServices/shop/base-item.service";
import {StockService} from "../../../protoServices/shop/stock.service";
import {ApplayRakutenProductRequest} from "../../../../proto/shop/rakuten-items.pb";
import {ApplayYahooProductRequest} from "../../../../proto/shop/yahoo-items.pb";
import {ApplayBaseProductRequest} from "../../../../proto/shop/base-items.pb";
import {CreateStockRequest} from "../../../../proto/shop/stock.pb";
import {ProductsService} from "../../../protoServices/products/products.service";
import {GetProductItemInfoRequest} from "../../../../proto/products/products.pb";

@Component({
    selector: "app-item-info",
    templateUrl: "./item-info.component.html",
    styleUrls: ["../../../../assets/scss/items.scss"],
})
export class ItemInfoComponent implements OnInit {
    modalCopyCheck: any;

    sourceNum: any;

    reflections: any[] = [];
    rakutenEvents: any[] = [];
    images: any[] = [];
    sourceImages: any[] = [];
    productItemId: any;
    productInfo: any;
    selectedCopyType = null;

    saleStopOpenStatusFlg = true;
    saleStopStatuFlg: string | undefined; // ステータス「販売停止」か？

    constructor(
        private stockService: StockService,
        private rakutenEventsService: RakutenEventsService,
        private rakutenItemsService: RakutenItemsService,
        private yahooItemsService: YahooItemsService,
        private baseItemService: BaseItemService,
        private sanitizer: DomSanitizer,
        private route: ActivatedRoute,
        private router: Router,
        private lightbox: Lightbox,
        private productsService: ProductsService,
        public commonService: CommonService
    ) {
    }


    ngOnInit(): void {
        this.sourceNum = 0;
        this.route.paramMap.subscribe((params) => {
            this.productItemId = params.get("itemId");

            const getProductItemInfoRequest = new GetProductItemInfoRequest();
            getProductItemInfoRequest.productItemId = this.productItemId;
            this.productsService
                .getProductItemInfo(getProductItemInfoRequest)
                .then((result) => {
                    if (result) {
                        this.productInfo = result.toObject();
                        console.log(this.productInfo);

                        this.saleStopStatuFlg = this.productInfo.productStatus;

                        if (this.productInfo.images.length > 0) {
                            for (let i = 0; i < this.productInfo.images.length; i++) {
                                this.images.push({
                                    no: this.productInfo.images[i].imageNo,
                                    caption: this.productInfo.images[i].imageName,
                                    alt: this.productInfo.images[i].imageAlt,
                                    name: this.productInfo.images[i].imageName,
                                    path: this.productInfo.images[i].imagePath,
                                    src: this.sanitizer.bypassSecurityTrustResourceUrl(environment.imageUrl + this.productInfo.images[i].imagePath + "?thum=1"),
                                });

                                this.images.sort((a, b) => a.no - b.no);
                                console.log(this.images);
                            }
                        }

                        if (this.productInfo.imagesSource.length > 0) {
                            for (let i = 0; i < this.productInfo.imagesSource.length; i++) {
                                this.sourceImages.push({
                                    no: this.productInfo.imagesSource[i].imageNo,
                                    caption: this.productInfo.imagesSource[i].imageName,
                                    alt: this.productInfo.imagesSource[i].imageAlt,
                                    name: this.productInfo.imagesSource[i].imageName,
                                    path: this.productInfo.imagesSource[i].imagePath,
                                    src: this.sanitizer.bypassSecurityTrustResourceUrl(environment.imageUrl + this.productInfo.imagesSource[i].imagePath + "?thum=1"),
                                });

                                this.sourceImages.sort((a, b) => a.no - b.no);
                                console.log(this.sourceImages);
                            }
                        }
                    }
                })
                .catch((err) => {
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

    checkBoxChanged(event: any, r: any) {
        if (event.target.value === "0") {
            r.status = "1";
        }
        if (event.target.value === "1") {
            r.status = "0";
        }

        // if (r.productItemId !== "") {
        //     const shopStatusUpdateRequest = new ShopStatusUpdateRequest();
        //     shopStatusUpdateRequest.newStatus = r.status;
        //     shopStatusUpdateRequest.productItemId = r.productItemId;
        //     shopStatusUpdateRequest.shopTypeId = r.shopTypeId;
        //     this.productItemsService
        //         .shopStatusUpdate(shopStatusUpdateRequest)
        //         .then((result) => {
        //             if (result) {
        //                 this.dataInit();
        //             }
        //         })
        //         .catch((err) => {
        //             try {
        //                 alert(err["statusMessage"]);
        //             } catch (e) {
        //                 alert(String(e));
        //             }
        //         });
        // }
    }

    reflection(r: any) {
        // console.log(r);
        // if (!r || !this.itemId) {
        //     return;
        // }
        // switch (r.shopTypeId) {
        //     case 1:
        //         // 楽天市場
        //         const applayRakutenProductRequest = new ApplayRakutenProductRequest();
        //         applayRakutenProductRequest.itemId = this.itemId;
        //         this.rakutenItemsService
        //             .applayProduct(applayRakutenProductRequest)
        //             .then((result) => {
        //                 if (result) {
        //                     this.dataInit();
        //                 }
        //             })
        //             .catch((err) => {
        //                 try {
        //                     alert(err["statusMessage"]);
        //                 } catch (e) {
        //                     alert(String(e));
        //                 }
        //             });
        //         break;
        //     case 2:
        //         // Yahoo!ショッピング
        //         const applayYahooProductRequest = new ApplayYahooProductRequest();
        //         applayYahooProductRequest.itemId = this.itemId;
        //         this.yahooItemsService
        //             .applayProduct(applayYahooProductRequest)
        //             .then((result) => {
        //                 if (result) {
        //                     this.dataInit();
        //                 }
        //             })
        //             .catch((err) => {
        //                 try {
        //                     alert(err["statusMessage"]);
        //                 } catch (e) {
        //                     alert(String(e));
        //                 }
        //             });
        //         break;
        //     case 3:
        //         // BASE
        //         const applayBaseProductRequest = new ApplayBaseProductRequest();
        //         applayBaseProductRequest.productItemId = this.itemId;
        //         this.baseItemService
        //             .applayProduct(applayBaseProductRequest)
        //             .then((result) => {
        //                 if (result) {
        //                     this.dataInit();
        //                 }
        //             })
        //             .catch((err) => {
        //                 try {
        //                     alert(err["statusMessage"]);
        //                 } catch (e) {
        //                     alert(String(e));
        //                 }
        //             });
        //         break;
        // }
    }

    onCopy() {
        const modalTarget = document.getElementById("modalCopyCheck");
        const modalCopyCheck = new Bootstrap.Modal(modalTarget);
        modalCopyCheck.show();
    }

    onPurchaseEntry() {
        const modalTarget = document.getElementById("modalPurchaseEntry");
        this.modalCopyCheck = new Bootstrap.Modal(modalTarget);
        this.modalCopyCheck.show();
    }

    onSaleStop() {
        const modalTarget = document.getElementById("modalSaleStop");
        const modalSaleStop = new Bootstrap.Modal(modalTarget);
        modalSaleStop.show();
        this.saleStopOpenStatusFlg = false;
        for (let i = 0; this.reflections.length > i; i++) {
            if (this.reflections[i].status == 1) {
                this.saleStopOpenStatusFlg = true;
            }
        }
    }

    onSaleStopComplete() {
        const modalTarget = document.getElementById("modalSaleStopComplete");
        const modalSaleStopComplete = new Bootstrap.Modal(modalTarget);
        modalSaleStopComplete.show();
    }

    onSaleOpenCheck() {
        const modalTarget = document.getElementById("modalSaleOpenCheck");
        const modalSaleOpenCheck = new Bootstrap.Modal(modalTarget);
        modalSaleOpenCheck.show();
    }

    onSaleOpen() {
        this.saleStopStatuFlg = 'OPEN';
        window.scrollTo(0, 0);
    }

    onDeleteCheck() {
        const modalTarget = document.getElementById("modalDeleteCheck");
        const modalDeleteCheck = new Bootstrap.Modal(modalTarget);
        modalDeleteCheck.show();
    }

    onDelete() {
        const modalTarget = document.getElementById("modalDeleteComplete");
        const modalDeleteComplete = new Bootstrap.Modal(modalTarget);
        modalDeleteComplete.show();
    }

    onCreateStock() {
        // if (!this.itemId) {
        //     return;
        // }
        //
        // const createStockRequest = new CreateStockRequest();
        // createStockRequest.num = this.sourceNum;
        // createStockRequest.productItemId = this.itemId;
        //
        // this.stockService
        //     .createStock(createStockRequest)
        //     .then((result) => {
        //         if (result) {
        //             if (this.modalCopyCheck) {
        //                 this.modalCopyCheck.hide();
        //             }
        //         }
        //     })
        //     .catch((err) => {
        //         try {
        //             alert(err["statusMessage"]);
        //         } catch (e) {
        //             alert(String(e));
        //         }
        //     })
        //     .finally(() => {
        //         this.sourceNum = 0;
        //     });
    }

    sourceNumChange(event: any) {
        this.sourceNum = event;
    }

    onCopyMove() {
        if (this.selectedCopyType) {
            this.router.navigate(["/items/create/copy/" + this.selectedCopyType + "/" + this.productItemId]);
        }
    }
}
