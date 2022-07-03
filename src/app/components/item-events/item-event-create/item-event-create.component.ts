import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RakutenEventsService } from "../../../protoServices/shop/rakuten-events.service";
import { RakutenEventCreateRequest } from "../../../../proto/shop/rakuten-events.pb";
import { Timestamp } from "@ngx-grpc/well-known-types";

@Component({
  selector: "app-item-event-create",
  templateUrl: "./item-event-create.component.html",
  styleUrls: ["../../../../assets/scss/item-events.scss"],
})
export class ItemEventCreateComponent implements OnInit {
  errorMessage: any;
  itemEventInputForm = new FormGroup({
    basic: new FormGroup({
      eventName: new FormControl(null, [Validators.required]),
      eventMonth: new FormControl(null, [Validators.required]),
      dateStart: new FormControl(null, [Validators.required]),
      dateEnd: new FormControl(null, [Validators.required]),
    }),
  });

  constructor(private rakutenEventsService: RakutenEventsService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone) {}

  ngOnInit() {}

  onCreate() {
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

    if (this.itemEventInputForm.invalid) {
      return;
    }

    const rakutenEventCreateRequest = new RakutenEventCreateRequest();

    if (this.itemEventInputForm.controls.basic.controls.dateStart.value) {
      const periodStartTs = new Timestamp();
      periodStartTs.seconds = (Date.parse(this.itemEventInputForm.controls.basic.controls.dateStart.value) / 1000).toString();
      rakutenEventCreateRequest.periodStart = periodStartTs;
    }

    if (this.itemEventInputForm.controls.basic.controls.dateEnd.value) {
      const periodEndTs = new Timestamp();
      periodEndTs.seconds = (Date.parse(this.itemEventInputForm.controls.basic.controls.dateEnd.value) / 1000).toString();
      rakutenEventCreateRequest.periodEnd = periodEndTs;
    }

    const createdAtTs = new Timestamp();
    createdAtTs.seconds = Math.floor(Date.now() / 1000).toString();
    rakutenEventCreateRequest.createdAt = createdAtTs;

    if (this.itemEventInputForm.controls.basic.controls.eventName.value) {
      rakutenEventCreateRequest.rakutenEventName = this.itemEventInputForm.controls.basic.controls.eventName.value;
    }
    if (this.itemEventInputForm.controls.basic.controls.eventMonth.value) {
      rakutenEventCreateRequest.startYearMonth = this.itemEventInputForm.controls.basic.controls.eventMonth.value;
    }

    this.itemEventInputForm.disable();
    this.errorMessage = null;
    this.rakutenEventsService
      .rakutenEventCreate(rakutenEventCreateRequest)
      .then((result) => {
        if (result) {
          const modalTarget = document.getElementById("modalSaveComplete");
          const modalSaveComplete = new Bootstrap.Modal(modalTarget);
          modalSaveComplete.show();

          if (modalTarget) {
            modalTarget.addEventListener("hide.bs.modal", () => {
              this.ngZone.run(() => {
                setTimeout(() => {
                  this.router.navigate(["/item-events/rakuten/"]);
                }, 600);
              });
            });
          }
        }
      })
      .catch((err) => {
        try {
          this.errorMessage = err["statusMessage"];
        } catch (e) {
          this.errorMessage = String(e);
        }
      })
      .finally(() => {
        this.itemEventInputForm.enable();
      });
  }
}
