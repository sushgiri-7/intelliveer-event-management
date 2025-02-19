import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from '../../state/event.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  eventForm!: FormGroup;
  eventId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
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

      if (this.eventId) {
        this.eventService.updateEvent(eventData);
        this.showSnackbar('Event updated successfully!', 'success');
      } else {
        this.eventService.addEvent(eventData);
        this.showSnackbar('Event created successfully!', 'success');
      }

      this.router.navigate(['/']);
    }
  }

  showSnackbar(message: string, type: 'success' | 'error') {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: type,
    });
  }
}
