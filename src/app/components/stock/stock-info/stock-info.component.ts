import { Component, OnInit } from "@angular/core";
import { Lightbox } from "ngx-lightbox";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { environment } from "../../../../environments/environment";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { CommonService } from "../../../services/common.service";
import { StockService } from "../../../protoServices/shop/stock.service";
import { StockInfoRequest } from "../../../../proto/shop/stock.pb";

@Component({
  selector: "app-stock-info",
  templateUrl: "./stock-info.component.html",
  styleUrls: ["../../../../assets/scss/stock.scss"],
})
export class StockInfoComponent implements OnInit {
  stockInfo: any;
  itemId: any;
  images: any[] = [];

  constructor(public commonService: CommonService, private sanitizer: DomSanitizer, private route: ActivatedRoute, private lightbox: Lightbox, private stockService: StockService) {}

  ngOnInit(): void {
    // for (let i = 0; i < 10; i++) {
    //     this.images.push({
    //         no: 'imageNo',
    //         caption: 'image',
    //         alt: 'imageAlt',
    //         name: 'imageName',
    //         path: 'imagePath',
    //         src: 'https://placehold.jp/1500x1500.png',
    //     });
    //
    //     console.log(this.images);
    // }
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get("itemId");

      const stockInfoRequest = new StockInfoRequest();
      stockInfoRequest.productItemId = this.itemId;
      this.stockService
        .stockInfo(stockInfoRequest)
        .then((result) => {
          this.stockInfo = result;
          console.log(this.stockInfo);

          if (this.stockInfo.imagesList.length > 0) {
            for (let i = 0; i < this.stockInfo.imagesList.length; i++) {
              this.images.push({
                no: this.stockInfo.imagesList[i].imageNo,
                caption: "image",
                alt: this.stockInfo.imagesList[i].imageAlt,
                name: this.stockInfo.imagesList[i].imageName,
                path: this.stockInfo.imagesList[i].imagePath,
                src: this.sanitizer.bypassSecurityTrustResourceUrl(environment.imageUrl + this.stockInfo.imagesList[i].imagePath),
              });

              this.images.sort((a, b) => a.no - b.no);
              console.log(this.images);
            }
          }
        })
        .catch((err) => {});
    });
  }

  openImageView(index: number): void {
    this.lightbox.open(this.images, index, {
      wrapAround: true,
      showImageNumberLabel: true,
    });
  }

  onStockEdit() {
    const modalTarget = document.getElementById("modalStockEdit");
    const modalStockEdit = new Bootstrap.Modal(modalTarget);
    modalStockEdit.show();
  }
}
