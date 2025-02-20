import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkMode = false;
  constructor(private eventService: EventService) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  redirectToListPage() {
    this.eventService.redirectToListPage();
  }
}
