import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { MessageManager } from '../../shared/services/message/message.manager';
import { MessageModels } from '../../shared/models/message/message.models';
//import { HistoActiviteModels } from '../../shared/models/histoActivite/histoActivite.models';

@Component({
  	moduleId: module.id,
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [MessageManager]
})

export class MainComponent {

 error:string = "";

	arrayMessage:Array<MessageModels> = [];
	mess = new MessageModels();
  numero: number = 0;

public myForm: FormGroup;

    constructor(public MessageManage:MessageManager, private router: Router){

      this.myForm = new FormGroup({
        message: new FormControl(''),
       });
    }

    afficher(data:any): void {
      this.MessageManage.getMessage(data)
      .subscribe(
        (data) => this.setSuccess(data),
        (err) => this.setError(err.json())
     );
    }
//
  private setSuccess(data:any){
 		if(!data.error){
      if (data.id == 2){
          this.numero = 2;
     			this.mess = data.result;
      }
      else if (data.id == 3)
      {
        this.numero = 3;
        this.mess = data.result;
        this.arrayMessage = data.result.week
      }
    }
    else {
 			this.setError(data);
 		}
 	}
//
 private setError(err:any){
   this.error = err.message;
 }

}