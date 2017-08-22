import { Injectable } from '@angular/core';
import { MessageManager } from '../../services/message/message.manager';

@Injectable()
export class MessageModels {

//meteo jour
  public city : string;
  public temp: number;
  public desc: string;
  public icon: string;

  //meteo semaine
  public date: Date;

  //genre serie
  public genre: string;
  public name: string;
  public resume: string;
  public image: string;


}
