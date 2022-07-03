import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEventListComponent } from './item-event-list.component';

describe('ItemEventListComponent', () => {
  let component: ItemEventListComponent;
  let fixture: ComponentFixture<ItemEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
