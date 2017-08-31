import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthManager } from '../shared/services/auth/auth.manager';
import { UserModels } from '../shared/models/user/user.models';

import { UserManager } from '../shared/services/user/user.manager';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    providers: [AuthManager, UserManager],
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})

  export class SignupComponent implements OnInit {

  	user = {
  		lastname: '',
  		name: '',
  		username: '',
  		password: '',
  		mail: '',
  		zipcode: '',
  		city: '',
  		birthdate: '',
  		googleid: ''
  	}


  	constructor(public UserManager:UserManager) { }

    public loadScript() {
	    let node = document.createElement('script');
	    node.src = 'https://apis.google.com/js/platform.js';
	    node.type = 'text/javascript';
	    node.async = true;
	    node.charset = 'utf-8';
	    document.getElementsByTagName('head')[0].appendChild(node);

	    let js = document.createElement('script');
	    js.src = '../assets/js/main.js';
	    js.type = 'text/javascript';
	    js.async = true;
	    js.charset = 'utf-8';
	    document.getElementsByTagName('head')[0].appendChild(js);
    }

    ngOnInit() {
      this.loadScript();
    }

    register(data){
    	if (data.name == "") {
    		data.name = (<HTMLInputElement>document.getElementById("register_name")).value;
    		data.lastname = (<HTMLInputElement>document.getElementById("register_lastname")).value;
    		data.mail = (<HTMLInputElement>document.getElementById("register_email")).value;
    		data.googleid = (<HTMLInputElement>document.getElementById("register_googleid")).value;
    	}


    	console.log(data);

    	this.UserManager.registerUser(data)
    	   .subscribe(
    	        (data) => this.setSuccess(data),
    	        (err) => this.setError(err)
    	    );


    }

    private setSuccess(data:any){
          if(!data.error){
            console.log(data);
              
              // this.router.navigateByUrl('/main');
          } else {
              this.setError(data);
          }
      }
      
      //
      private setError(err:any){
          //this.error = err.message;
          console.log(err);
      }
	}
