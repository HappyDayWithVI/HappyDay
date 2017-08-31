import { Injectable } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';

// import { UserModels } from '../../models/user/user.models';

@Injectable()
export class UserManager {

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

  login(data:any){
    // alert(data);
    
    // alert(data.username);

    return this.httpmanagerService.get('login/?username='+data.username+'&password='+data.password);
    // console.log(data);
  }
}
