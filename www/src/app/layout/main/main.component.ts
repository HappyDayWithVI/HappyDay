import { Component, ViewChild, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { MessageManager } from '../../shared/services/message/message.manager';
import { MessageModels } from '../../shared/models/message/message.models';
//import { HistoActiviteModels } from '../../shared/models/histoActivite/histoActivite.models';

import { MovieManager } from '../../shared/services/movie/movie.manager';
import { MovieModels } from '../../shared/models/movie/movie.models';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { SpinnerService } from 'angular-spinners';

import { Carousel } from 'ngx-carousel';

@Component({
  	moduleId: module.id,
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [MessageManager, MovieManager]
})

export class MainComponent {

 kyou: SafeResourceUrl;

public carouselOne: Carousel;

 error:string = "";

 titleModal:string = "";
 messModal = new MessageModels();
 typeModal:number = 1;

	arrayMessage:Array<MessageModels> = [];
	mess = new MessageModels();
  test = new MessageModels();
  mess_result_id = new MessageModels();
  numero: number = 0;

 movie = new MovieModels();
 movieModal = new MovieModels();
 arrayMovie:Array<MovieModels> = [];

public myForm: FormGroup;

    constructor(public MessageManage:MessageManager, public MovieManage:MovieManager, public sanitizer: DomSanitizer, protected spinnerService: SpinnerService, private router: Router){

      this.myForm = new FormGroup({
        message: new FormControl(''),
       });
    }

    ngOnInit() {
       this.carouselOne = {
         grid: {xs: 4, sm: 4, md: 4, lg: 4, all: 0},
         slide: 1,
         speed: 400,
         interval: 2000,
         point: false,
         load: 2,
         custom: 'banner',
         dynamicLength: true
       }
     }

    public showAddModalSerie(id:number):void {
      this.messModal.name = this.arrayMessage[id].name;
   		this.messModal.resume = this.arrayMessage[id].resume;
  	 	this.messModal.image = this.arrayMessage[id].image;
  		this.messModal.channel = this.arrayMessage[id].channel;
      this.messModal.runtime = this.arrayMessage[id].runtime;
      this.messModal.season = this.arrayMessage[id].season;
      this.messModal.episode = this.arrayMessage[id].episode;
      this.messModal.rating = this.arrayMessage[id].rating;
      this.messModal.status = this.arrayMessage[id].status;
    }

    public showAddModalBook(id:number):void {
      this.messModal.name = this.arrayMessage[id].name;
      this.messModal.author = this.arrayMessage[id].author;
      this.messModal.image = this.arrayMessage[id].image;
      this.messModal.resume = this.arrayMessage[id].resume;
      this.messModal.published_year = this.arrayMessage[id].published_year;
    }

    public showAddModalMovie(id:number):void {
      this.spinnerService.show('mySpinner');
      this.MovieManage.getMovie(id)
        .subscribe(
          (data) => this.setSuccessMovie(data),
          (err) => this.setError(err.json())
       );
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
      // météo semaine <ville>serie
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
      // série personnage <nidMovieomserie>item
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
      // nouveau film et film <nomfilm> et film geitemnre <nomgenre>
      else if (data.id == "3-1" || data.id == "3-4" || data.id == "3-5")
      {
        this.numero = 7;
        this.arrayMessage = data.result;
        //this.mess_result_id = data.result.id;

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
      // livre <nomlivre> et film de <nomauteur>
      else if (data.id == "4-1" || data.id == "4-2")
      {
        this.numero = 10;
        this.arrayMessage = data.result;
      }
      // Télé <nomlivre> et film de <nomauteur>
      else if (data.id == "6-1" || data.id == "6-2")
      {
        this.numero = 11;
        this.arrayMessage = data.result;
      }
      // Restaurant
      else if (data.id == "5-1" || data.id == "5-2")
      {
        this.numero = 12;
        this.arrayMessage = data.result;
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

  private setSuccessMovie(data:any){
    this.movieModal.name =  data.result.name;
    this.movieModal.image =  data.result.image;
    this.movieModal.resume =  data.result.resume;
    this.movieModal.video =  data.result.video;
    this.movieModal.rating =  data.result.rating;
    this.movieModal.year =  data.result.year;
    this.movieModal.runtime = data.result.runtime;
    this.movieModal.genre = data.result.genre;

    this.spinnerService.hide('mySpinner');
  }

  cleanURL(oldURL : string): SafeResourceUrl{
  return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }

  public carouselBannerLoad(evt: any) {

    const len = this.arrayMessage.length
    // if (len <= 10) {
    //   for (let i = len; i < len + 10; i++) {
    //     this.arrayMessage.push[i];
    //   }
    // }
    for (let i = len; i < len; i++) {
       this.arrayMessage.push[i];
      }

  }

}
