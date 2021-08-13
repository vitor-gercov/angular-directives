import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDirectiveComponent } from './events-directive.component';

describe('EventsDirectiveComponent', () => {
  let component: EventsDirectiveComponent;
  let fixture: ComponentFixture<EventsDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
