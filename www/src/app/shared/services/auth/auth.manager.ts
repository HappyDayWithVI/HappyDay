import { Injectable } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';
import { UserModels } from '../../models/user/user.models';

@Injectable()
export class AuthManager {

  constructor(private httpmanagerService:HttpManagerService){

   }

    //  authenticate(user:UserModels) {
    //    return this.httpmanagerService.post({grant_type:'password', client_id:'1', client_secret:this.httpmanagerService.clientSecret, username:user.user_username, password:user.user_password, scope:''},'oauth/token')
    //  }
     //
    //  getUser(){
    //    return this.httpmanagerService.get('api/user/me')
    //  }
     //
    //  register(user:UserModels) {
    //    return this.httpmanagerService.post({grant_type:'password', client_id:'1', client_secret:this.httpmanagerService.clientSecret, username:user.user_username, password:user.user_password, scope:''},'oauth/token')
    //  }
     //
    //  createDir(){
    //    return this.httpmanagerService.get('api/ftp/create')
    //  }

}
