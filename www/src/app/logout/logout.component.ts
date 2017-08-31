import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: 'logout.component.html',
  styleUrls: ['logout.component.scss']
})


export class LogoutComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('isAuthenticate'));
    console.log(localStorage.getItem('name'));


    localStorage.clear();

    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('isAuthenticate'));
    console.log(localStorage.getItem('name'));
    
    this.router.navigateByUrl('/login');
  }
}
