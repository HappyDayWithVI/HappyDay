import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SignupRoutingModule
  ],
  declarations: [SignupComponent],
  exports: [SignupComponent]
})
export class SignupModule { }
