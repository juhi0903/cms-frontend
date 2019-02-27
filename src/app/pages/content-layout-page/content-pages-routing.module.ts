import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LoginPageComponent } from "./login-page/login-page.component";
// import {ResetPasswordComponent} from "./reset-password/reset-password.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forgotpassword',
        component: ForgotPasswordComponent,
        data: {
          title: 'Forgot Password Page'
        }
      },
      {
        path: 'login',
        component: LoginPageComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'resetpassword',
        component: ForgotPasswordComponent,
        data: {
          title: 'Reset Password Page'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule { }