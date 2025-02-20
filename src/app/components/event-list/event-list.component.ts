import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../state/event.model';
import { MatDialog } from '@angular/material/dialog';
import { DateFilterDialogComponent } from 'src/app/shared-components/date-filter-dialog/date-filter-dialog.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  selectedDate: string | null = null;
  enableDateInput: boolean = false;

  constructor(private eventService: EventService, public dialog: MatDialog) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();

    this.filteredEvents = [...this.events];
  }

  applyFilter(event: any) {
    const query = (event?.target as HTMLInputElement).value.toLowerCase();
    this.filteredEvents = this.events.filter(
      (e) =>
        e.title.toLowerCase().includes(query) ||
        e.location.toLowerCase().includes(query)
    );
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id);
    this.ngOnInit();
  }

  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.filteredEvents = this.filteredEvents.slice(startIndex, endIndex);
  }

  openDateFilter() {
    const dialogRef = this.dialog.open(DateFilterDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((selectedDate) => {
      if (selectedDate) {
        this.filteredEvents = this.events.filter(
          (event) => event.date === selectedDate.toISOString()
        );
      } else {
        this.filteredEvents = [...this.events]; // Reset filter if no date selected
      }
    });
  }
}
