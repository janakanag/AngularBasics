import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { DescriptionConverterPipe } from './pipes/description-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DescriptionConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [WeatherComponent]
})
export class AppModule { }
