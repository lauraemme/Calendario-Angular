import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWrapperComponent } from './day-wrapper.component';

describe('DayWrapperComponent', () => {
  let component: DayWrapperComponent;
  let fixture: ComponentFixture<DayWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
