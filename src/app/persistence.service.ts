import { Injectable } from '@angular/core';
import { Event } from './models/event';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  addToLocalStorage(event: Event) {
    const eventId: string = event.id; 

    let list: Event[] = JSON.parse(localStorage.getItem("events") ?? "[]");
    list = [...list, event];
    
    localStorage.setItem(`${eventId}`, JSON.stringify(event));
  }

  loadFromLocalStorage(eventId: string): Event {
    return JSON.parse(localStorage.getItem(`${eventId}`) ?? "[]");
  }
}
