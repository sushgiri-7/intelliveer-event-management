import { Injectable } from '@angular/core';
import { Event } from '../state/event.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: Event[] = [];

  constructor(private router: Router, private snackBar: MatSnackBar) {
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
    event.id = Math.floor(Math.random() * 1000000);
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
    this.showSnackbar('Event Deleted successfully!', 'success');
  }

  private saveEvents() {
    localStorage.setItem('events', JSON.stringify(this.events));
  }

  // Converts date to 'YYYY-MM-DD' (ignores time zone)
  formatDateToUTC(date: any): string {
    let d = new Date(date);
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); // Adjust for timezone
    return d.toISOString().split('T')[0]; // Return only date part
  }

  // Converts 'YYYY-MM-DD' back to a Date object (local time)
  convertToLocalDate(dateStr: string): Date {
    let [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day); // Create date without shifting time
  }

  // redirectToList Page
  redirectToListPage() {
    this.router.navigate(['/']);
    this.showSnackbar('Back to List Page!', 'success');
  }

  showSnackbar(message: string, type: 'success' | 'error') {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: type,
    });
  }
}
