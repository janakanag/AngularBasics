import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hourly-view',
  templateUrl: './hourly-view.component.html',
  styleUrls: ['./hourly-view.component.css']
})
export class HourlyViewComponent implements OnInit {

  cityName : string;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.getCityDescription();
  }

  getCityDescription():void{
    this.cityName =  this.activatedRoute.snapshot.paramMap.get('cityDescription');
  }

}
