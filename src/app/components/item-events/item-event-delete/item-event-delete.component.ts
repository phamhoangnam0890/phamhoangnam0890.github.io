import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";
// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { RakutenEventsService } from "../../../protoServices/shop/rakuten-events.service";
import { CommonService } from "../../../services/common.service";
import { RakutenEventDeleteRequest, RakutenEventInfoRequest } from "../../../../proto/shop/rakuten-events.pb";

@Component({
  selector: "app-item-event-delete",
  templateUrl: "./item-event-delete.component.html",
  styleUrls: ["../../../../assets/scss/item-events.scss"],
})
export class ItemEventDeleteComponent implements OnInit {
  itemEventId: any;
  rakutenEvent: any;

  constructor(public commonService: CommonService, private rakutenEventsService: RakutenEventsService, private router: Router, private route: ActivatedRoute, private ngZone: NgZone) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.itemEventId = params.get("itemEventId");
      if (this.itemEventId) {
        const rakutenEventInfoRequest = new RakutenEventInfoRequest();
        rakutenEventInfoRequest.rakutenEventId = this.itemEventId.toString();
        this.rakutenEventsService
          .rakutenEventInfo(rakutenEventInfoRequest)
          .then((result) => {
            if (result) {
              this.rakutenEvent = result.toObject();
            }
          })
          .catch((err) => {
            try {
              alert(err["statusMessage"]);
            } catch (e) {
              alert(String(e));
            }
          });
      }
    });
  }

  onDelete() {
    if (!this.itemEventId) {
      return;
    }
    const rakutenEventDeleteRequest = new RakutenEventDeleteRequest();
    rakutenEventDeleteRequest.rakutenEventId = this.itemEventId;
    this.rakutenEventsService
      .rakutenEventDelete(rakutenEventDeleteRequest)
      .then((result) => {
        if (result) {
          const modalTarget = document.getElementById("modalDeleteComplete");
          const modalDeleteComplete = new Bootstrap.Modal(modalTarget);
          modalDeleteComplete.show();

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
          alert(err["statusMessage"]);
        } catch (e) {
          alert(String(e));
        }
      });
  }
}
