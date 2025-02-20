import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendarEvents: any[] = [];
  calendarOptions: any;
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin, interactionPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay',
      },
      events: [
        { title: 'Event 1', date: '2025-02-20' },
        { title: 'Event 2', date: '2025-02-21' },
      ],
    };

    this.loadEvents();
  }

  // calender

  loadEvents() {
    this.calendarEvents = this.eventService.getEvents().map((event) => ({
      title: event.title,
      date: event.date,
    }));
  }
}
