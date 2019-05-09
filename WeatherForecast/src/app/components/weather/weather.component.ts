import { Component, OnInit } from '@angular/core';
import {  WeatherDetail} from '../../model/WeatherDetail';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherDetails : WeatherDetail[];



  showAlert(){
    alert("Button clicked via Event binding !!!!");
  }

  constructor() { }

  ngOnInit() {
    this.weatherDetails = [ {city:'Melbourne',description:'Sunny',temperature:22},
                            {city:'Sydney',description:'Partially sunny',temperature:20},
                            {city:'New York',description:'Rain',temperature:16},
                            {city:'Delhi',description:'Sunny',temperature:30}];                       
  }
}
