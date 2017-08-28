import { Injectable } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';

@Injectable()
export class MovieManager {

  constructor(private httpmanagerService:HttpManagerService){

  }

  getMovie(id:number){
    return this.httpmanagerService.get('movie/detail/'+id)
  }
}
