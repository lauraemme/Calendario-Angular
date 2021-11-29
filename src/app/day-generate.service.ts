import { Injectable } from '@angular/core';
import { Day } from './models/day';

@Injectable({
  providedIn: 'root'
})
export class DayGenerateService {

  constructor() { }

  createDays(monthNumber: number, year: number){
    let daysArray: Day[] = []

    for(let counter = 1; counter <= 30; counter++){
      const day: Day = new Day(counter, monthNumber, year)
      daysArray = [...daysArray, day]
    } 

    return daysArray
  }

  currentDay: Day[] = [];

  storageCurrentDay(day: Day): void{
    this.currentDay = [day];
  }

  loadCurrentDay(){
    let importDay: Day = this.currentDay[0];
    return importDay
  }
}
