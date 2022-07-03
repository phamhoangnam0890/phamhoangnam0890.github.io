import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ItemShopYahooEditComponent } from "./item-shop-edit.yahoo.component";

describe("ItemShopYahooEditComponent", () => {
  let component: ItemShopYahooEditComponent;
  let fixture: ComponentFixture<ItemShopYahooEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemShopYahooEditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShopYahooEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
