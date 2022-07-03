import { Component, OnInit } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { NgZone } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-item-shop-rakuten-edit",
  templateUrl: "./item-shop-edit.rakuten.component.html",
  styleUrls: ["../../../../assets/scss/items.scss"],
})
export class ItemShopRakutenEditComponent implements OnInit {
  // API Document

  itemId: any;
  itemInputForm = new FormGroup({
    basic: new FormGroup({
      price: new FormControl(0, [Validators.required]),
      stock: new FormControl(false),
      note: new FormControl("", [Validators.required]),
    }),
  });

  constructor(private router: Router, private ngZone: NgZone, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get("itemId");
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

    const modalTarget = document.getElementById("modalSaveComplete");
    const modalSaveComplete = new Bootstrap.Modal(modalTarget);
    modalSaveComplete.show();
  }
}
