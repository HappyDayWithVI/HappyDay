import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthManager } from '../shared/services/auth/auth.manager';
import { UserModels } from '../shared/models/user/user.models';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    providers: [AuthManager],
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
  export class SignupComponent implements OnInit {

      constructor() { }

      ngOnInit() { }
  }
