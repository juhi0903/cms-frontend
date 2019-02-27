import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';

import { CreateUserComponent } from './create-user/create-user.component';
import { ViewComponent } from './view/view.component';
import {UserManagementRoutingModule} from './user-management-routing.module';
import {UserService} from '../../shared/services/users/user.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    UserManagementRoutingModule,
    AgGridModule.withComponents([]),
  ],
  entryComponents: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    CreateUserComponent, 
    ViewComponent],
  providers: [
    UserService
  ]
})
export class UserManagementModule { }
