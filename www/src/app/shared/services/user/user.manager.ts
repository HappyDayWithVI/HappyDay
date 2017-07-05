import { Injectable } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';

@Injectable()
export class UsersManager {

  constructor(private httpmanagerService:HttpManagerService){

  }

  getUsers(){
    return this.httpmanagerService.get('api/user')
  }

  getUser(id:number){
    return this.httpmanagerService.get('api/user/'+id)
  }

  getUserMe(id:number){
    return this.httpmanagerService.get('api/user/me')
  }

  postUser(data:Object){
    return this.httpmanagerService.post(data,'api/user')
  }

  putUser(data:any){
    return this.httpmanagerService.put(data,'api/user/'+data.id)
  }

  deleteUser(data:number){
    return this.httpmanagerService.delete('api/user/'+data)
  }
}
