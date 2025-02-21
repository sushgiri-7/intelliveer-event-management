import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../state/event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  eventForm!: FormGroup;
  eventId: number | null = null;
  minDate: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
    });

    // Check if editing an existing event
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventId = Number(id);
      const event = this.eventService.getEventById(this.eventId);
      if (event) {
        this.eventService.convertToLocalDate(event.date);
        this.eventForm.patchValue(event);
      }
    }
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const eventData: Event = {
        id: this.eventId ?? 0,
        ...this.eventForm.value,
      };
      eventData.date = this.eventService.formatDateToUTC(eventData.date);

      if (this.eventId) {
        this.eventService.updateEvent(eventData);
        this.eventService.showSnackbar(
          'Event updated successfully!',
          'success'
        );
      } else {
        this.eventService.addEvent(eventData);
        this.eventService.showSnackbar(
          'Event created successfully!',
          'success'
        );
      }

      this.router.navigate(['/']);
    }
  }

  redirectToListPage() {
    this.eventService.redirectToListPage();
  }
}
