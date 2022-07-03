import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ItemShopRakutenEditComponent } from "./item-shop-edit.rakuten.component";

describe("ItemShopRakutenEditComponent", () => {
  let component: ItemShopRakutenEditComponent;
  let fixture: ComponentFixture<ItemShopRakutenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemShopRakutenEditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShopRakutenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
