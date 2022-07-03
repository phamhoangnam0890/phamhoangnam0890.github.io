import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Lightbox } from "ngx-lightbox";
import { CommonService } from "../../../services/common.service";
import { DomSanitizer } from "@angular/platform-browser";
import { environment } from "../../../../environments/environment";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { ProductItemsService } from "../../../protoServices/shop/product-items.service";
import { GetProductItemInfoRequest } from "../../../../proto/shop/product-items.pb";
import { CreateRakutenEventProductData, CreateRakutenEventProductRequest, ListRakutenEventProductRequest, RakutenEventInfoRequest, ReflectionRakutenEventRequest } from "../../../../proto/shop/rakuten-events.pb";
import { RakutenEventsService } from "../../../protoServices/shop/rakuten-events.service";

@Component({
  selector: "app-item-event-item-info",
  templateUrl: "./item-event-item-info.component.html",
  styleUrls: ["../../../../assets/scss/item-events.scss"],
})
export class ItemEventItemInfoComponent implements OnInit {
  images: any[] = [];
  sourceImages: any[] = [];
  itemId: any;
  itemEventId: any;
  productInfo: any;
  rakutenEvent: any;

  constructor(private rakutenEventsService: RakutenEventsService, private sanitizer: DomSanitizer, private route: ActivatedRoute, private lightbox: Lightbox, private productItemsService: ProductItemsService, public commonService: CommonService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get("itemId");
      this.itemEventId = params.get("itemEventId");
      this.dataGet();

      const getProductItemInfoRequest = new GetProductItemInfoRequest();
      getProductItemInfoRequest.productItemId = this.itemId;
      this.productItemsService
        .getProductItemInfo(getProductItemInfoRequest)
        .then((result) => {
          if (result) {
            this.productInfo = result.toObject();
            console.log(this.productInfo);

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
        .catch((err) => {});
    });
  }

  dataGet() {
    if (this.itemEventId) {
      const rakutenEventInfoRequest = new RakutenEventInfoRequest();
      rakutenEventInfoRequest.rakutenEventId = this.itemEventId;
      this.rakutenEventsService
        .rakutenEventInfo(rakutenEventInfoRequest)
        .then((result) => {
          console.log(result);

          this.rakutenEvent = result;
        })
        .catch((err) => {
          try {
            alert(err["statusMessage"]);
          } catch (e) {
            alert(String(e));
          }
        });
    }
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
}
