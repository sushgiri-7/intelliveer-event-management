import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EventService } from '../../services/event.service';
import { Event } from '../../state/event.model';
import { DateFilterDialogComponent } from 'src/app/shared-components/date-filter-dialog/date-filter-dialog.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['details', 'actions'];

  dataSource = new MatTableDataSource<Event>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private eventService: EventService, public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.data = this.eventService.getEvents(); // Load event data
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Attach paginator after view init
  }

  applyFilter(event: any) {
    const query = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = query;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage(); // Reset to first page on filter
    }
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id);
    this.dataSource.data = this.eventService.getEvents(); // Refresh table data
  }

  openDateFilter() {
    const dialogRef = this.dialog.open(DateFilterDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((selectedDate) => {
      if (selectedDate) {
        this.dataSource.data = this.eventService
          .getEvents()
          .filter(
            (event) =>
              event.date === this.eventService.formatDateToUTC(selectedDate)
          );
      } else {
        this.dataSource.data = this.eventService.getEvents(); // Reset filter
      }

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    });
  }
}
