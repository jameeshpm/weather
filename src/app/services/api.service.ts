import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://samples.openweathermap.org/data/2.5/';
  apiKey: string = '&APPID=5940a41d84d5651975c3470f0f398c11';
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getForcast(city: string) {
    let forcastUrl: string = 'http://api.openweathermap.org/data/2.5/forecast?q=Dublin,IE&mode=json&APPID=5940a41d84d5651975c3470f0f398c11';
    return this.httpClient.get<any>(forcastUrl,{ observe: 'response' }).pipe(tap(res => {
      return res
    }));
  }
  getCurrentWeather(city: string) {
    let currentWeatherUrl: string = 'https://samples.openweathermap.org/data/2.5/weather?q=Dublin,IE&appid=b6907d289e10d714a6e88b30761fae22';
    return this.httpClient.get<any>(currentWeatherUrl,{ observe: 'response' }).pipe(tap(res => {
      return res
    }));
  }
}
