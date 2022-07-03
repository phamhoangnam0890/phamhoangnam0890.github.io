import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEventInfoComponent } from './item-event-info.component';

describe('ItemEventInfoComponent', () => {
  let component: ItemEventInfoComponent;
  let fixture: ComponentFixture<ItemEventInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEventInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEventInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
