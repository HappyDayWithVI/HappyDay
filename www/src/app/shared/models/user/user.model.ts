import { Injectable } from '@angular/core';
//import { CategorieManager } from '../../services/categorie/categorie.manager';

@Injectable()
export class UserModels {

  public id : number;
  public first_name: string;
  public last_name: string;
  public email: string;
  public password: string;
  public address: string;
  public city: string;
  public code_postal: string;
  public phone: string;
}
