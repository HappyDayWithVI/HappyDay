import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserManager } from '../shared/services/user/user.manager';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  providers: [UserManager]
})


export class LoginComponent implements OnInit {

  user = {
      username: '',
      password: ''
  };

  constructor(public UserManage:UserManager, private router:Router) { }

  public loadScript() {
    let node = document.createElement('script');
    node.src = 'https://apis.google.com/js/platform.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

    let js = document.createElement('script');
    js.src = '../assets/js/main.js?v=0.0.29';
    js.type = 'text/javascript';
    js.async = true;
    js.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(js);
  }

  ngOnInit() {

    if(localStorage.getItem('isAuthenticate')){
      this.router.navigateByUrl('/main');
    }
    this.loadScript();
  }

  ngAfterContentChecked(){  }


  login(usercreds) {
    this.UserManage.login(usercreds)
      .subscribe(
        (data) => this.setSuccess(data),
        (err) => this.setError(err.json())
      );
  }

  onLoggedout(){
    console.log("Déconnexion ?");
  }

  googlesubmit(usercreds){
    var googleID = (<HTMLInputElement>document.getElementById("g_login")).value;
  }

  private setSuccess(data:any){
    if(!data.error){
      console.log(data);
      localStorage.setItem('token', data.subtoken);
      localStorage.setItem('isAuthenticate', '1');
      localStorage.setItem('name', data.firstname);


      this.router.navigateByUrl('/main');
    } else {
      this.setError(data);
    }
  }
    
  private setError(err:any){
      //this.error = err.message;
  }

}
