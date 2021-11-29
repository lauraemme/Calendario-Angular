import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DayGenerateService } from '../day-generate.service';
import { Day } from '../models/day';
import { Event } from '../models/event';
import { PersistenceService } from '../persistence.service';
 

@Component({
  selector: 'app-day-wrapper',
  templateUrl: './day-wrapper.component.html',
  styleUrls: ['./day-wrapper.component.css']
})
export class DayWrapperComponent implements OnInit {

  @Input(`importedDay`) importedDay: Day = new Day(0,0,0); 

  eventList: Event[] = [];

  constructor(
    private route: Router, 
    private handleDay: DayGenerateService, 
    private persistenceService: PersistenceService) 
  { 
    
  }

  ngOnInit(): void {
  }

  openEventCreator(): void{
    this.route.navigate(['/novo-evento'])
    this.handleDay.storageCurrentDay(this.importedDay)
    console.log(this.importedDay)
  }

  addEvent(newEventId: string): void{
    let newEvent: Event = this.persistenceService.loadFromLocalStorage(newEventId)
    this.eventList = [...this.eventList, newEvent]
  }
}
