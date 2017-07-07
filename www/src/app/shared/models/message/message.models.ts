import { Injectable } from '@angular/core';
import { MessageManager } from '../../services/message/message.manager';

@Injectable()
export class MessageModels {

//meteo jour
  public city : string;
  public temp: number;
  public desc: string;

  //meteo semaine
  public date: Date;
}
