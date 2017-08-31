import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from './logout.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LogoutRoutingModule,
        FormsModule,
    	ReactiveFormsModule,
    ],
    declarations: [LogoutComponent]
})
export class LogoutModule {
}
