import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weekly-view',
  templateUrl: './weekly-view.component.html',
  styleUrls: ['./weekly-view.component.css']
})
export class WeeklyViewComponent implements OnInit {

  cityName : string;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.getCityDescription();
  }

  getCityDescription():void{
    this.cityName =  this.activatedRoute.snapshot.paramMap.get('cityDescription');
  }

}
