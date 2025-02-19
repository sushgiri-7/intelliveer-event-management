import { Injectable } from '@angular/core';
import { Event } from '../state/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: Event[] = [];

  constructor() {
    const storedEvents = localStorage.getItem('events');
    this.events = storedEvents ? JSON.parse(storedEvents) : [];
  }

  getEvents() {
    return this.events;
  }

  getEventById(id: number) {
    return this.events.find((event) => event.id === id);
  }

  addEvent(event: Event) {
    event.id = this.events.length + 1;
    this.events.push(event);
    this.saveEvents();
  }

  updateEvent(updatedEvent: Event) {
    const index = this.events.findIndex(
      (event) => event.id === updatedEvent.id
    );
    if (index !== -1) {
      this.events[index] = updatedEvent;
      this.saveEvents();
    }
  }

  deleteEvent(id: number) {
    this.events = this.events.filter((event) => event.id !== id);
    this.saveEvents();
  }

  private saveEvents() {
    localStorage.setItem('events', JSON.stringify(this.events));
  }
}
