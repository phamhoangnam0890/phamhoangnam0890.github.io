import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEventDeleteComponent } from './item-event-delete.component';

describe('ItemEventDeleteComponent', () => {
  let component: ItemEventDeleteComponent;
  let fixture: ComponentFixture<ItemEventDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEventDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEventDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
