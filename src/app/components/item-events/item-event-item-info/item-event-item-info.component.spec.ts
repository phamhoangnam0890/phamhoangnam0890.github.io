import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEventItemInfoComponent } from './item-event-item-info.component';

describe('ItemEventItemInfoComponent', () => {
  let component: ItemEventItemInfoComponent;
  let fixture: ComponentFixture<ItemEventItemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEventItemInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemEventItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
