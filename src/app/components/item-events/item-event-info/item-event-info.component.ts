import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../../../services/common.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgZone } from "@angular/core";

// @ts-ignore
import Bootstrap from "../../../../assets/js/bootstrap.bundle.min";
import { RakutenEventsService } from "../../../protoServices/shop/rakuten-events.service";
import { CreateRakutenEventProductData, CreateRakutenEventProductRequest, ListRakutenEventProductRequest, RakutenEventInfoRequest, ReflectionRakutenEventRequest } from "../../../../proto/shop/rakuten-events.pb";

@Component({
  selector: "app-item-event-info",
  templateUrl: "./item-event-info.component.html",
  styleUrls: ["../../../../assets/scss/item-events.scss"],
})
export class ItemEventInfoComponent implements OnInit {
  updateFlg: any;
  modalEntryItemList: any;
  modalEntryItemListEvent: any;

  itemEventId: any;
  rakutenEvent: any;
  itemData: any[] = [];
  registerItemData: any[] = [];
  entryData: any[] = [];

  itemEventInputForm = new FormGroup({
    basic: new FormGroup({
      eventName: new FormControl(null, [Validators.required]),
      eventMonth: new FormControl(null, [Validators.required]),
      dateStart: new FormControl(null, [Validators.required]),
      dateEnd: new FormControl(null, [Validators.required]),
    }),
  });

  constructor(private rakutenEventsService: RakutenEventsService, private ngZone: NgZone, private route: ActivatedRoute, public commonService: CommonService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.itemEventId = params.get("itemEventId");
      this.dataGet();
    });

    this.modalEntryItemListEvent = document.getElementById("modalEntryItemList");
    this.modalEntryItemListEvent.addEventListener("hidden.bs.modal", () => {
      this.dataGet();
    });
    this.modalEntryItemListEvent.addEventListener("show.bs.modal", () => {});
  }

  dataGet() {
    if (this.itemEventId) {
      const rakutenEventInfoRequest = new RakutenEventInfoRequest();
      rakutenEventInfoRequest.rakutenEventId = this.itemEventId;
      this.rakutenEventsService
        .rakutenEventInfo(rakutenEventInfoRequest)
        .then((result) => {
          this.rakutenEvent = result;
          console.log(result);

          if (result) {
            const resultObj = result.toObject();

            if (resultObj && resultObj.productItems) {
              this.itemData = resultObj.productItems;
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

  onEntryItemList() {
    if (!this.itemEventId) {
      return;
    }

    const listRakutenEventProductRequest = new ListRakutenEventProductRequest();
    listRakutenEventProductRequest.rakutenEventId = this.itemEventId;
    this.rakutenEventsService
      .listRakutenEventProducts(listRakutenEventProductRequest)
      .then((result) => {
        console.log(result);

        this.registerItemData = [];
        if (result) {
          const resultObj = result.toObject();
          if (resultObj && resultObj.data) {
            this.registerItemData = resultObj.data;
          }

          if (this.registerItemData.length > 0) {
            for (let idx = 0; idx < this.registerItemData.length; idx++) {
              this.registerItemData[idx].isChecked = false;
              this.registerItemData[idx].inputStock = this.registerItemData[idx].stock;
              this.registerItemData[idx].initStock = this.registerItemData[idx].stockInventory + this.registerItemData[idx].stock; // trick

              for (let jdx = 0; jdx < this.itemData.length; jdx++) {
                if (this.registerItemData[idx].productItemId === this.itemData[jdx].productItemId) {
                  this.registerItemData[idx].isChecked = true;
                  break;
                }
              }
            }
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
        this.modalEntryItemList = new Bootstrap.Modal(document.getElementById("modalEntryItemList")).show();
      });

    // const modalTarget = document.getElementById("modalEntryItemList");
    // const modalEntryItemList = new Bootstrap.Modal(modalTarget);
    // modalEntryItemList.show();
    //
    // modalTarget.addEventListener("hide.bs.modal", () => {
    //   this.ngZone.run(() => {
    //     setTimeout(() => {}, 600);
    //   });
    // });
  }

  onChanged(idx: number, event: any) {
    console.log(event.target.className);
    if (!event.target.className.match(/num-stock/) && !event.target.className.match(/event-label/)) {
      if (this.registerItemData && this.registerItemData[idx]) {
        console.log(this.registerItemData);
        this.registerItemData[idx].isChecked = !this.registerItemData[idx].isChecked;

        // updateFlg
        this.updateFlg = true;
        this.registerItemData.forEach((rid) => {
          if (rid.stockInventory < 0 && rid.isChecked === true) {
            this.updateFlg = false;
          }
        });
      }
    }
  }

  changeStock(idx: number) {
    if (this.registerItemData && this.registerItemData[idx]) {
      this.registerItemData[idx].stockInventory = this.registerItemData[idx].initStock - this.registerItemData[idx].inputStock;

      // updateFlg
      this.updateFlg = true;
      this.registerItemData.forEach((rid) => {
        if (rid.stockInventory < 0 && rid.isChecked === true) {
          this.updateFlg = false;
        }
      });
    }
    /*
              if (this.itemData && this.itemData[idx]) {
                  const stockSum = this.itemData[idx].currentStockFixed - this.itemData[idx].stock;
                  this.itemData[idx].currentStock = stockSum;
              }
             */
  }

  onSubmit() {
    if (!this.itemEventId) {
      return;
    }
    const createRakutenEventProductRequest = new CreateRakutenEventProductRequest();
    createRakutenEventProductRequest.rakutenEventId = this.itemEventId;

    this.entryData = [];
    this.registerItemData.forEach((rid) => {
      if (rid.isChecked === true) {
        const ed = new CreateRakutenEventProductData();
        ed.stockNum = rid.inputStock;
        ed.productId = rid.productId;
        ed.productItemId = rid.productItemId;
        this.entryData.push(ed);
      }
    });

    createRakutenEventProductRequest.entryData = this.entryData;
    this.rakutenEventsService
      .createRakutenEventProducts(createRakutenEventProductRequest)
      .then((result) => {})
      .catch((err) => {})
      .finally(() => {
        // @ts-ignore
        document.getElementById("closeButton").click();
      });
  }

  onRakutenReflection() {
    const reflectionRakutenEventRequest = new ReflectionRakutenEventRequest();
    reflectionRakutenEventRequest.rakutenEventId = this.itemEventId;

    this.rakutenEventsService
      .reflectionRakutenEvent(reflectionRakutenEventRequest)
      .then((_) => {})
      .catch((err) => {
        try {
          alert(err["statusMessage"]);
        } catch (e) {
          alert(String(e));
        }
      })
      .finally(() => {
        // reload
        this.dataGet();
      });
  }
}
