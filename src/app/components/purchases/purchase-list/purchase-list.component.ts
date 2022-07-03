import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { PurchaseListModel } from "../../../model";

@Component({
  selector: "app-purchase-list",
  templateUrl: "./purchase-list.component.html",
  styleUrls: ["../../../../assets/scss/purchases.scss"],
})
export class PurchaseListComponent implements OnInit {
  searchForm = new FormGroup({
    basic: new FormGroup({
      itemNo: new FormControl(""),
      itemName: new FormControl(""),
      supplier: new FormControl(""),
      dateStart: new FormControl(""),
      dateEnd: new FormControl(""),
      userName: new FormControl(""),
      status1: new FormControl(true),
      status2: new FormControl(true),
    }),
  });

  selectedStatusChange: number = 1;
  selectedCountNum: number = 0;
  purchasesData: PurchaseListModel[] = [];

  constructor() {}

  ngOnInit(): void {
    this.purchasesData = [];
    this.purchasesData.push(new PurchaseListModel("11", "ピアス1", 3000, "ベトナム", "2022/03/28", "大和田", 1, false));
    this.purchasesData.push(new PurchaseListModel("134", "アクセサリー", 200, "楽天（A店）", "2022/03/28", "山田", 1, false));
    this.purchasesData.push(new PurchaseListModel("1134", "イヤリング", 30, "Amazon（A店）", "2022/03/28", "田中", 1, false));
    this.purchasesData.push(new PurchaseListModel("4432", "ネックレス", 30, "11", "2022/03/28", "Nham", 2, false));
  }

  onCheckItems(i: number) {
    if (this.purchasesData[i]["selected"]) {
      this.purchasesData[i]["selected"] = false;
      this.selectedCountNum--;
    } else {
      this.purchasesData[i]["selected"] = true;
      this.selectedCountNum++;
    }

    console.log(this.selectedCountNum);
  }

  statuChangeCheck(event: any) {
    this.selectedStatusChange = Number(event.target.value);

    if (this.selectedStatusChange !== 0) {
      const modalStatusChangeCheck = new Bootstrap.Modal(document.getElementById("modalStatusChangeCheck"));
      modalStatusChangeCheck.show();
    }
  }

  statuChange() {
    const modalStatusChangeComplete = new Bootstrap.Modal(document.getElementById("modalStatusChangeComplete"));
    modalStatusChangeComplete.show();
  }
}
