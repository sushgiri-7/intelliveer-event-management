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
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay',
      },
      height: 500, //  calendar height
      contentHeight: 300, // Further compact it
      aspectRatio: 1.8, // Adjust proportions for better visibility
      events: [],
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
      },
      eventColor: '#ff4081', // Nice highlight color
      themeSystem: 'bootstrap',
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
