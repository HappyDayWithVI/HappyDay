import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpManagerService {

  //public url:string = "http://192.168.1.115:8000";
  public url:string = "http://localhost:8080";
  //public clientSecret:string = 'CDJlZYPbdvcRCapMdYy3uscavSEcGThCfmbct61B';
  private headers:Headers = new Headers();

  constructor(public http: Http){
    this.headers.set('Content-Type', 'application/json');
    //this.headers.set('Access-Control-Allow-Origin', '*');
    this.headers.set("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    //this.headers.set("Access-Control-Allow-Methods", "GET, PUT, POST");
    this.headers.set("Access-Control-Allow-Credentials", "true");
  }

  // tokenHeader(){
  //   if(localStorage.getItem('token') != undefined && localStorage.getItem('token') != null && localStorage.getItem('token') != ""){
  //     this.headers.set('authorization', 'Bearer '+localStorage.getItem('token'));
  //   }
  // }

  // CRUD API
  get(chaineUrl:string){
    //this.tokenHeader();
    this.headers.set('Access-Control-Allow-Methods', 'GET');

    return this.http.get(this.url+"/"+chaineUrl, {headers:this.headers})
                    .map(response => response.json());
  }

  put(creds:Object, chaineUrl:string){
    //this.tokenHeader();
    this.headers.set('Access-Control-Allow-Methods', 'PUT');

    return this.http.put(this.url+"/"+chaineUrl, creds, {headers:this.headers})
                    .map(response => response.json());
  }

  post(creds:Object, chaineUrl:string){
    //this.tokenHeader();
    this.headers.set('Access-Control-Allow-Methods', 'POST');

    return this.http.post(this.url+"/"+chaineUrl, creds, {headers:this.headers})
                    .map(response => response.json());
  }

  delete(chaineUrl:string){
    //this.tokenHeader();
    this.headers.set('Access-Control-Allow-Methods', 'DELETE');

    return this.http.delete(this.url+"/"+chaineUrl, {headers:this.headers})
                    .map(response => response.json());
  }

}
