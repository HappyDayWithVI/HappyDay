import { Injectable } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';
import { UsersModels } from '../../models/users/users.models';

@Injectable()
export class AuthManager {

  constructor(private httpmanagerService:HttpManagerService){

  }

  authenticate(users:UsersModels) {
    return this.httpmanagerService.post({grant_type:'password', client_id:'1', client_secret:this.httpmanagerService.clientSecret, username:users.email, password:users.password, scope:''},'oauth/token')
  }

  getUser(){
    return this.httpmanagerService.get('api/user/me')
  }

  register(users:UsersModels) {
    return this.httpmanagerService.post({grant_type:'password', client_id:'1', client_secret:this.httpmanagerService.clientSecret, username:users.email, password:users.password, scope:''},'oauth/token')
  }

  createDir(){
    return this.httpmanagerService.get('api/ftp/create')
  }
}
