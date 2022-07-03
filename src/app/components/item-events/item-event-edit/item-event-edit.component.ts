import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RakutenEventsService } from "../../../protoServices/shop/rakuten-events.service";
import { CommonService } from "../../../services/common.service";
import { Timestamp } from "@ngx-grpc/well-known-types";
import { RakutenEventEditRequest, RakutenEventInfoRequest } from "../../../../proto/shop/rakuten-events.pb";

@Component({
  selector: "app-item-event-edit",
  templateUrl: "./item-event-edit.component.html",
  styleUrls: ["../../../../assets/scss/item-events.scss"],
})
export class ItemEventEditComponent implements OnInit {
  rakutenEvent: any;
  itemEventId: any;

  itemEventInputForm = new FormGroup({
    basic: new FormGroup({
      eventName: new FormControl(null, [Validators.required]),
      eventMonth: new FormControl(null, [Validators.required]),
      dateStart: new FormControl("", [Validators.required]),
      dateEnd: new FormControl("", [Validators.required]),
    }),
  });

  constructor(private router: Router, private rakutenEventsService: RakutenEventsService, private route: ActivatedRoute, public commonService: CommonService, private ngZone: NgZone) {}

  ngOnInit() {
    this.itemEventInputForm.disable();

    this.route.paramMap.subscribe((params) => {
      this.itemEventId = params.get("itemEventId");
      if (this.itemEventId) {
        const rakutenEventInfoRequest = new RakutenEventInfoRequest();
        rakutenEventInfoRequest.rakutenEventId = this.itemEventId.toString();
        this.rakutenEventsService
          .rakutenEventInfo(rakutenEventInfoRequest)
          .then((result) => {
            this.rakutenEvent = result;
            this.itemEventInputForm.controls.basic.controls.eventName.setValue(this.rakutenEvent.rakutenEventName);
            this.itemEventInputForm.controls.basic.controls.eventMonth.setValue(this.rakutenEvent.startYearMonth);
            this.itemEventInputForm.controls.basic.controls.dateStart.setValue(this.commonService.secondsToJpDateFormatWithSeparator(this.rakutenEvent.periodStart.seconds, "-"));
            this.itemEventInputForm.controls.basic.controls.dateEnd.setValue(this.commonService.secondsToJpDateFormatWithSeparator(this.rakutenEvent.periodEnd.seconds, "-"));
          })
          .catch((err) => {
            try {
              alert(err["statusMessage"]);
            } catch (e) {
              alert(String(e));
            }
          })
          .finally(() => {
            this.itemEventInputForm.enable();
          });
      }
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

    if (this.itemEventInputForm.invalid) {
      return;
    }

    const rakutenEventEditRequest = new RakutenEventEditRequest();
    rakutenEventEditRequest.rakutenEventId = this.itemEventId;

    if (this.itemEventInputForm.controls.basic.controls.dateStart.value) {
      const periodStartTs = new Timestamp();
      periodStartTs.seconds = (Date.parse(this.itemEventInputForm.controls.basic.controls.dateStart.value) / 1000).toString();
      rakutenEventEditRequest.periodStart = periodStartTs;
    }

    if (this.itemEventInputForm.controls.basic.controls.dateEnd.value) {
      const periodEndTs = new Timestamp();
      periodEndTs.seconds = (Date.parse(this.itemEventInputForm.controls.basic.controls.dateEnd.value) / 1000).toString();
      rakutenEventEditRequest.periodEnd = periodEndTs;
    }

    const createdAtTs = new Timestamp();
    createdAtTs.seconds = Math.floor(Date.now() / 1000).toString();
    rakutenEventEditRequest.createdAt = createdAtTs;

    if (this.itemEventInputForm.controls.basic.controls.eventName.value) {
      rakutenEventEditRequest.rakutenEventName = this.itemEventInputForm.controls.basic.controls.eventName.value;
    }

    if (this.itemEventInputForm.controls.basic.controls.eventMonth.value) {
      rakutenEventEditRequest.startYearMonth = this.itemEventInputForm.controls.basic.controls.eventMonth.value;
    }

    this.itemEventInputForm.disable();
    this.rakutenEventsService
      .rakutenEventEdit(rakutenEventEditRequest)
      .then((result) => {
        if (result) {
          const modalTarget = document.getElementById("modalSaveComplete");
          const modalSaveComplete = new Bootstrap.Modal(modalTarget);
          modalSaveComplete.show();

          if (modalTarget) {
            modalTarget.addEventListener("hide.bs.modal", () => {
              this.ngZone.run(() => {
                setTimeout(() => {
                  this.router.navigate(["/item-events/rakuten/info/" + this.itemEventId]);
                }, 600);
              });
            });
          }
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
        this.itemEventInputForm.enable();
      });
  }
}
