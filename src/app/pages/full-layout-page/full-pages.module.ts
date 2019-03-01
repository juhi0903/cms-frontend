import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AgGridModule } from 'ag-grid-angular';
import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { FullLayoutPageComponent } from './full-layout-page.component';
import { TicketService} from "../../shared/services/ticket.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StorageServiceModule } from 'angular-webstorage-service';
import { CreateCategoryComponent } from './create-category/create-category.component';
import {CategoryService} from '../../shared/services/category/category.service'

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FullPagesRoutingModule,
    HttpModule,
    HttpClientModule,
    NgbModule,
    StorageServiceModule,
    NgxChartsModule
  ],
    entryComponents: [

    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA],
    declarations: [       
        FullLayoutPageComponent,
        CreateCategoryComponent
    ],
    providers: [
      TicketService,
      CategoryService
    ]
})
export class FullPagesModule { }
