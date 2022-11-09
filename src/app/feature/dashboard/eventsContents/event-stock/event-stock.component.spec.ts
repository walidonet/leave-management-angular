import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStockComponent } from './event-stock.component';

describe('EventStockComponent', () => {
  let component: EventStockComponent;
  let fixture: ComponentFixture<EventStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
