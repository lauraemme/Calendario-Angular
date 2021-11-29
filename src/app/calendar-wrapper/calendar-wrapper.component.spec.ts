import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWrapperComponent } from './calendar-wrapper.component';

describe('CalendarWrapperComponent', () => {
  let component: CalendarWrapperComponent;
  let fixture: ComponentFixture<CalendarWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
