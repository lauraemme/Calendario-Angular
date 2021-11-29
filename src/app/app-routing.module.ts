import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { EventCreatorComponent } from './event-creator/event-creator.component';
import { EventResumeComponent } from './event-resume/event-resume.component';


const routes: Routes = [
  {path:'novo-evento', component: EventCreatorComponent},
  {path:'calendar', component: CalendarWrapperComponent},
  {path:'event/:id', component: EventResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
