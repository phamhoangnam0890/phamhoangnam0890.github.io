import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEventEditComponent } from './item-event-edit.component';

describe('ItemEventEditComponent', () => {
  let component: ItemEventEditComponent;
  let fixture: ComponentFixture<ItemEventEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEventEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
