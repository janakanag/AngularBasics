import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeeklyViewComponent } from './components/weather-details/weekly-view/weekly-view.component';
import { HourlyViewComponent } from './components/weather-details/hourly-view/hourly-view.component';

const routes: Routes = [
  {path:'weeklyView/:cityDescription', component:WeeklyViewComponent},
  {path:'hourlyView/:cityDescription', component:HourlyViewComponent},

  {path: '', redirectTo: '/hourlyView', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
