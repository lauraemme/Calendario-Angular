import { Component, OnInit } from '@angular/core';
import { DayGenerateService } from '../day-generate.service';
import { Day } from '../models/day';

@Component({
  selector: 'app-calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.css']
})
export class CalendarWrapperComponent implements OnInit {

  monthNumber: number = 11;

  monthString: string = "Novembro"

  year: number = 2021;

  daysList: Day[] = [];

  constructor(private daysCreator: DayGenerateService) { 
    this.daysList = this.daysCreator.createDays(this.monthNumber,this.year)
  }

  ngOnInit(): void {
  }

}
