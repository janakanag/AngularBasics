import { Injectable } from '@angular/core';
import { WeatherDetail } from '../model/WeatherDetail';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  weatherDetails =  [ {city:'Melbourne',description:'Sunny',temperature:22},
                      {city:'Sydney',description:'Partially sunny',temperature:20},
                      {city:'New York',description:'Rain',temperature:16},
                      {city:'Delhi',description:'Sunny',temperature:30}];

  getWeatherSummary(): WeatherDetail[]{
    return this.weatherDetails;
  }
}
