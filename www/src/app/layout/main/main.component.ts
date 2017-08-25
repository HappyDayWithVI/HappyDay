import { Component, ViewChild, OnInit } from '@angular/core';
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

 titleModal:string = "";
 messModal = new MessageModels();
 typeModal:number = 1;

	arrayMessage:Array<MessageModels> = [];
	mess = new MessageModels();
  numero: number = 0;

public myForm: FormGroup;

    constructor(public MessageManage:MessageManager, private router: Router){

      this.myForm = new FormGroup({
        message: new FormControl(''),
       });
    }


    public showAddModal(id:number):void {
  		this.titleModal = "Fiche Détaillé";
  	  this.messModal.name = this.arrayMessage[id].name;
      this.messModal.resume = this.arrayMessage[id].resume;
  	  this.messModal.image = this.arrayMessage[id].image;
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
      // météo <ville>
      if (data.id == "1-1"){
          this.numero = 2;
     			this.mess = data.result;
      }
      // météo semaine <ville>
      else if (data.id == "1-2")
      {
        this.numero = 3;
        this.mess = data.result;
        this.arrayMessage = data.result.week;
      }
      // série <nomserie> et série genre <nomgenre>
      else if (data.id == "2-1" || data.id == "2-2")
      {
        this.numero = 4;
        this.mess = data.result;
        this.arrayMessage = data.result.shows;
      }
      // série personnage <nomserie>
      else if (data.id == "2-3")
      {
        this.numero = 5;
        this.mess = data.result.serie_data;
        this.arrayMessage = data.result.character_data;
      }
      // <acteur/actrice> joué dans <nomserie>
      else if (data.id == "2-4")
      {
        this.numero = 6;
        this.mess = data.result;
        this.arrayMessage = data.result.role_data;
      }
      // nouveau film et film <nomfilm> et film genre <nomgenre>
      else if (data.id == "3-1" || data.id == "3-4" || data.id == "3-5")
      {
        this.numero = 7;
        this.arrayMessage = data.result;
      }
      // film personnage <nomfilm>
      else if (data.id == "3-2")
      {
        this.numero = 8;
        this.mess = data.result.movie_data;
        this.arrayMessage = data.result.character_data;
      }
      // <acteur/actrice> joué dans <nomfilm>
      else if (data.id == "3-3")
      {
        this.numero = 9;
        this.mess = data.result;
        this.arrayMessage = data.result.role_data;
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
