import { Injectable } from '@angular/core';
import { UserManager } from '../../services/user/user.manager';

@Injectable()
export class UserModels {

  public user_id : number;
  public user_name: string;
  public user_firstname: string;
  public user_birthdate: Date;
  public user_mail: string;
  public user_token: string;
  public user_city: string;
  public user_zipcode: number;
  public user_lastupdate: Date;
  public user_username: string;
  public user_password: string;
}
