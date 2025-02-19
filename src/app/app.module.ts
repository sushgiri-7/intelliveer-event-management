import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from 'src/mat/mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { DateFilterDialogComponent } from './shared-components/date-filter-dialog/date-filter-dialog.component';

@NgModule({
  declarations: [AppComponent, EventListComponent, EventDetailsComponent, EventFormComponent, DateFilterDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
