import { Injectable } from '@angular/core';
import { WeatherDetail } from '../model/WeatherDetail';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from "rxjs";
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseURL:string = "<base URL of the REST service Goes Here>";

  constructor(private httpClient:HttpClient) { }

  weatherDetails =  [ {city:'Melbourne',description:'Sunny',temperature:22},
                      {city:'Sydney',description:'Partially sunny',temperature:20},
                      {city:'New York',description:'Rain',temperature:16},
                      {city:'Delhi',description:'Sunny',temperature:30}];

  getWeatherSummary(): WeatherDetail[]{
    return this.weatherDetails;
  }

  getWeatherSummaryObservable(): Observable<any>{

    //create a new observable and return the weather details
    return this.httpClient.get<any>(this.baseURL+'/summary', { responseType: 'json' })
    .pipe(
      catchError(this.handleError));
    }


    private handleError(err: HttpErrorResponse) {
      console.error(err);
      return throwError(err.message);
    }
  
}
