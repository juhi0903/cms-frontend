import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { CreatePortalComponent } from './create-portal/create-portal.component';
import { PortalManagementRoutingModule } from './portal-management-routing.module'
import { PortalService } from '../../shared/services/portal/portal.service';
import { ViewPortalComponent,PortalEditUrl } from './view-portal/view-portal.component';
import {CategoryService} from '../../shared/services/category/category.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AgGridModule.withComponents([PortalEditUrl]),
    HttpClientModule,
    PortalManagementRoutingModule
  ],
  declarations: [CreatePortalComponent, ViewPortalComponent,PortalEditUrl],
  entryComponents: [

  ],
  providers: [
    PortalService,
    CategoryService
  ]
})
export class PortalManagementModule { }
