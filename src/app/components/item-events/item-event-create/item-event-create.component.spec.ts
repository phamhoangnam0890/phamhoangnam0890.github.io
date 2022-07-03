import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEventCreateComponent } from './item-event-create.component';

describe('ItemEventCreateComponent', () => {
  let component: ItemEventCreateComponent;
  let fixture: ComponentFixture<ItemEventCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEventCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEventCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
