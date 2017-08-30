// import { Injectable } from '@angular/core';
import { Injectable, Component,Inject,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';

@Injectable()
export class MessageManager {

  constructor(private httpmanagerService:HttpManagerService){

  }

  getMessage(data:any){
  	var message = (<HTMLInputElement>document.getElementById("message")).value;
    return this.httpmanagerService.get('message/' + message);
  }
}