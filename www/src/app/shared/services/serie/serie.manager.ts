import { Injectable } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';

@Injectable()
export class SerieManager {

  constructor(private httpmanagerService:HttpManagerService){

  }

  getSerie(data:any){
    return this.httpmanagerService.get('tvshow/search'+data.message)
  }
}
