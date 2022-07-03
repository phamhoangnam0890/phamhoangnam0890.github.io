import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["../../../../assets/scss/orders.scss"],
})
export class OrderListComponent implements OnInit {
  searchForm = new FormGroup({
    basic: new FormGroup({
      userName: new FormControl(""),
      itemName: new FormControl(""),
      shopId: new FormControl("0"),
      dateStart: new FormControl(""),
      dateEnd: new FormControl(""),
      status1: new FormControl(true),
      status2: new FormControl(true),
      status3: new FormControl(true),
    }),
  });
  constructor() {}

  ngOnInit(): void {}
}
