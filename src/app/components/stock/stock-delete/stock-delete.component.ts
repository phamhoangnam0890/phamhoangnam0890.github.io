import { Component, OnInit } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";

@Component({
  selector: "app-stock-delete",
  templateUrl: "./stock-delete.component.html",
  styleUrls: ["../../../../assets/scss/stock.scss"],
})
export class StockDeleteComponent implements OnInit {
  constructor(private router: Router, private ngZone: NgZone) {}

  ngOnInit(): void {}

  onDelete() {
    const modalTarget = document.getElementById("modalDeleteComplete");
    const modalDeleteComplete = new Bootstrap.Modal(modalTarget);
    modalDeleteComplete.show();

    if (modalTarget) {
      modalTarget.addEventListener("hide.bs.modal", () => {
        this.ngZone.run(() => {
          this.router.navigate(["/stock"]);
        });
      });
    }
  }
}
