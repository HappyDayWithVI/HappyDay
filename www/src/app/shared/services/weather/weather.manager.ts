import { Injectable } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';

@Injectable()
export class WeatherManager {

  constructor(private httpmanagerService:HttpManagerService){

  }

  getWeather(data:any){
    return this.httpmanagerService.get('weather/'+data.message)
  }
}
