import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'event/:id', component: EventDetailsComponent },
  { path: 'create', component: EventFormComponent },
  { path: 'edit/:id', component: EventFormComponent },
  { path: 'calender', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
