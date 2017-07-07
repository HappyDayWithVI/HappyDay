import { Injectable } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';

@Injectable()
export class MessageManager {

  constructor(private httpmanagerService:HttpManagerService){

  }

  getMessage(data:any){
    return this.httpmanagerService.get('message/'+data.message)
  }
}
