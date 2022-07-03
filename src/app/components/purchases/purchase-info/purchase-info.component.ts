import { Component, OnInit } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { Lightbox } from "ngx-lightbox";
import { PurchaseListModel } from "../../../model";

@Component({
  selector: "app-purchase-info",
  templateUrl: "./purchase-info.component.html",
  styleUrls: ["../../../../assets/scss/purchases.scss"],
})
export class PurchaseInfoComponent implements OnInit {
  purchaseData: PurchaseListModel | undefined;
  images: any[] = [];

  constructor(private lightbox: Lightbox) {}

  ngOnInit(): void {
    this.purchaseData = new PurchaseListModel("4432", "ネックレス", 30, "仕入れA", "2022/03/28", "Nham", 2, false);
    for (let i = 0; i < 10; i++) {
      this.images.push({
        no: "this.productInfo.imagesList[i].imageNo",
        caption: "this.productInfo.imagesList[i].imageName",
        alt: "this.productInfo.imagesList[i].imageAlt",
        name: "this.productInfo.imagesList[i].imageName",
        path: "this.productInfo.imagesList[i].imagePath",
        src: "https://placehold.jp/450x850.png",
        // src: this.sanitizer.bypassSecurityTrustResourceUrl(environment.imageUrl + this.productInfo.imagesList[i].imagePath + "?thum=1"),
      });

      this.images.sort((a, b) => a.no - b.no);
      console.log(this.images);
    }
  }

  statuChangeCheck() {
    const modalStatusChangeCheck = new Bootstrap.Modal(document.getElementById("modalStatusChangeCheck"));
    modalStatusChangeCheck.show();
  }

  statuChange() {
    const modalStatusChangeComplete = new Bootstrap.Modal(document.getElementById("modalStatusChangeComplete"));
    modalStatusChangeComplete.show();
  }

  openImageView(index: number): void {
    this.lightbox.open(this.images, index, {
      wrapAround: true,
      showImageNumberLabel: true,
    });
  }
}
