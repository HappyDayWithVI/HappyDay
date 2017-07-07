import { Injectable } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';

@Injectable()
export class HistoActiviteManager {

  constructor(private httpmanagerService:HttpManagerService){

  }

  // getHistoActivites(){
  //   return this.httpmanagerService.get('api/user')
  // }
  //
  // getHistoActivite(id:number){
  //   return this.httpmanagerService.get('api/user/'+id)
  // }
  //
  // getHistoActiviteMe(id:number){
  //   return this.httpmanagerService.get('api/user/me')
  // }
  //
  // postHistoActivite(data:Object){
  //   return this.httpmanagerService.post(data,'api/user')
  // }

  // putHistoActivite(data:any){
  //   return this.httpmanagerService.put(data,'api/user/'+data.id)
  // }

  // deleteHistoActivite(data:number){
  //   return this.httpmanagerService.delete('api/user/'+data)
  // }

}
