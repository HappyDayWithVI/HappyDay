import { Injectable } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';

import 'rxjs/add/operator/toPromise';

import { UserModels } from '../../models/user/user.models';

@Injectable()
export class UserManager {

  constructor(private httpmanagerService:HttpManagerService){

  }

  options;

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
    // return this.httpmanagerService.post(data,'api/user')
  }

  putUser(data:any){
    return this.httpmanagerService.put(data,'api/user/'+data.id)
  }

  deleteUser(data:number){
    return this.httpmanagerService.delete('api/user/'+data)
  }

  login(data:any){
    return this.httpmanagerService.get('login/?username='+data.username+'&password='+data.password);
  }

  registerUser(data) {
    console.log(data);
    this.options = '';
    // return this.httpmanagerService.get('login/?username='+data.username+'&password='+data.password);
    return this.httpmanagerService.post({ 'foo': 'bar' }, 'register/', this.options).map(res=>res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
