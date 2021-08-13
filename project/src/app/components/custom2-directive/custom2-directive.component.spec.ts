import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custom2DirectiveComponent } from './custom2-directive.component';

describe('Custom2DirectiveComponent', () => {
  let component: Custom2DirectiveComponent;
  let fixture: ComponentFixture<Custom2DirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Custom2DirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Custom2DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
