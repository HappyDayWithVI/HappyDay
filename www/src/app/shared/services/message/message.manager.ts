// import { Injectable } from '@angular/core';
import { Injectable, Component,Inject,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { HttpManagerService } from '../http/http.manager';

@Injectable()
export class MessageManager {

  constructor(private httpmanagerService:HttpManagerService){

  }

  getMessage(data:any){
  	console.log( document.getElementById("message").innerHTML );
  	var unit = document.getElementById("message");


    return this.httpmanagerService.get('message/' + data.message)
  }
}