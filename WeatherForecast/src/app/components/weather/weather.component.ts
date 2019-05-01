import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  testValue : string = 'hello Interpolation';
  imgLocation : string ='assets/intermittent.jpg';
  twowayvalue : string;

  testArrayValue : string[] = ['hello','to', 'Directives'];


  showAlert(){
    alert("Button clicked via Event binding !!!!");
  }

  constructor() { }

  ngOnInit() {
  }

}
