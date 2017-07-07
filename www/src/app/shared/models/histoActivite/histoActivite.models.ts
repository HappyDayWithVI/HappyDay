import { Injectable } from '@angular/core';
import { HistoActiviteManager } from '../../services/histoActivite/histoActivite.manager';

@Injectable()
export class HistoActiviteModels {

  public historical_id : number;
  public historical_longitude: number;
  public historical_latitute: number;
  public historical_date: Date;
  public historical_characteristics: string;
  public user_id: number;
  public location_id: number;
  public activity_id: number;
}
