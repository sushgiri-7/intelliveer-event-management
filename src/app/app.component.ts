import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EventService } from './services/event.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkMode = false;
  currentPath: String = '';
  isListPageActive: boolean = false;
  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentPath = event.url.split('?')[0]; // Removes query params
        console.log(this.currentPath);
        this.isListPageActive = this.currentPath.includes('calender')
          ? true
          : false;
      });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  redirectToListPage() {
    this.eventService.redirectToListPage();
  }
}
