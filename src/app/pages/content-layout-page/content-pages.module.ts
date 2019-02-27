import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";
// import { ContentLayoutPageComponent } from './content-layout-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {UserService} from '../../shared/services/users/user.service'



@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule,
        ReactiveFormsModule     
    ],
    declarations: [
        // ContentLayoutPageComponent,
        LoginPageComponent,
        ForgotPasswordComponent
    ],
    providers: [
        UserService
      ]
})
export class ContentPagesModule { }
