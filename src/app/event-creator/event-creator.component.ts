import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '../models/event';
import {v4 as uuidv4} from 'uuid';
import { PersistenceService } from '../persistence.service';
import { Router } from '@angular/router';
import { DayGenerateService } from '../day-generate.service';
import { Day } from '../models/day';


@Component({
  selector: 'app-event-creator',
  templateUrl: './event-creator.component.html',
  styleUrls: ['./event-creator.component.css']
})

export class EventCreatorComponent implements OnInit {

  @Output() eventCreated = new EventEmitter<string>();

  currentDay: Day = new Day(0,0,0);

  newEvent: Event = new Event('','','','')

  eventID: string = this.EventId(this.createEvent())

  createEventForm = new FormGroup({
    name: new FormControl(this.newEvent.name, Validators.required),
    info: new FormControl(this.newEvent.info)
  });

  constructor(
    private persistenceServe: PersistenceService,
    private router: Router,
    private handleDay: DayGenerateService
  ){ 
    this.currentDay = this.handleDay.loadCurrentDay();
  }

  ngOnInit(): void {
  }


  goBackToCalendar ():void{
    this.router.navigate(['/calendar'])
  }

  createEvent(): Event{
    const eventId = uuidv4()
    const eventName = this.createEventForm.get('name')?.value;
    const eventDate = this.currentDay.dateString
    const eventInfo = this.createEventForm.get('info')?.value;

    const newEvent: Event = new Event(eventId, eventName, eventDate, eventInfo);

    this.persistenceServe.addToLocalStorage(newEvent)

    return newEvent
  }

  EventId (newEvent: Event): string{
    const eventId: string = newEvent.id
    return eventId
  }

  submit(): void{

    console.log(this.eventID)

    this.goBackToCalendar()

    this.eventCreated.emit(this.eventID);
  }
}