import { Injectable } from '@angular/core';
import { WeatherManager } from '../../services/weather/weather.manager';

@Injectable()
export class WeatherModels {

  public city : string;
  public temp: number;
  public desc: string;
}
