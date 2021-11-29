import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { HeaderComponent } from './header/header.component';
import { EventCreatorComponent } from './event-creator/event-creator.component';
import { DayWrapperComponent } from './day-wrapper/day-wrapper.component';
import { EventResumeComponent } from './event-resume/event-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarWrapperComponent,
    HeaderComponent,
    EventCreatorComponent,
    DayWrapperComponent,
    EventResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
