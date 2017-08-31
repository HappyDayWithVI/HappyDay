import { Component } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';

import { SpinnerModule } from 'angular-spinners';

import { CarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SpinnerModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAwcL3UxLjA7Cm9hIzOxZSvhLxZyGkJ1xM",
      libraries: ["places"]
    })
  ],
  declarations: [MainComponent]
})
export class MainModule { }
