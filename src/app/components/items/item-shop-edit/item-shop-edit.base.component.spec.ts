import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ItemShopBaseEditComponent } from "./item-shop-edit.base.component";

describe("ItemShopBaseEditComponent", () => {
  let component: ItemShopBaseEditComponent;
  let fixture: ComponentFixture<ItemShopBaseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemShopBaseEditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemShopBaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
