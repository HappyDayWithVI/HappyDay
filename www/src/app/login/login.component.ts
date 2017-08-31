import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router) {

    }

    public loadScript() {
        console.log('preparing to load...')
        let node = document.createElement('script');
        node.src = 'https://apis.google.com/js/platform.js';
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);

        let js = document.createElement('script');
        js.src = '../assets/js/main.js?v=2';
        js.type = 'text/javascript';
        js.async = true;
        js.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(js);
    }

    ngOnInit() {
        this.loadScript();
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    onSignIn() {
      
    }



}
