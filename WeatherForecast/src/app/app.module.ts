import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { DescriptionConverterPipe } from './pipes/description-converter.pipe';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeeklyViewComponent } from './components/weather-details/weekly-view/weekly-view.component';
import { HourlyViewComponent } from './components/weather-details/hourly-view/hourly-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DescriptionConverterPipe,
    WeatherDetailsComponent,
    WeeklyViewComponent,
    HourlyViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [WeatherComponent]
})
export class AppModule { }
