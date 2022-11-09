import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypeManageComponent } from './event-type-manage.component';

describe('EventTypeManageComponent', () => {
  let component: EventTypeManageComponent;
  let fixture: ComponentFixture<EventTypeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTypeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTypeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
