import { Component, OnInit } from '@angular/core';
import {  WeatherDetail} from '../../model/WeatherDetail';
import { WeatherService} from '../../services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherDetails : WeatherDetail[]=[];

  selectedCity : string;

  constructor(private weatherService:WeatherService) { }

  onCitySelect(city :string ): void {
    this.selectedCity = city;
  }

  ngOnInit() {
    
    const weatherObservable = this.weatherService.getWeatherSummaryObservable();
        weatherObservable.subscribe(
          //next notification
          weatherDetail => {
            this.weatherDetails.push(weatherDetail);
          },
          //error notification
          error=> {
            console.log(" got error "+ error);
          }, 
          // complete notification
          ()=>{
            console.log(" completed");
          },
      );                    
  }
}
