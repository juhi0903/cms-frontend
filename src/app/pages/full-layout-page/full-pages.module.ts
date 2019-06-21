import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AgGridModule } from 'ag-grid-angular';
import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { FullLayoutPageComponent } from './full-layout-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StorageServiceModule } from 'angular-webstorage-service';
import { CreateCategoryComponent } from './create-category/create-category.component';
import {CategoryService} from '../../shared/services/category/category.service';
import { PortalService } from '../../shared/services/portal/portal.service';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { AngularMultiSelectModule } from 'angular4-multiselect-dropdown/angular4-multiselect-dropdown';

// import { CategoryPortalMappingComponent } from './category-portal-mapping/category-portal-mapping.component';
// import { CategoryOperatorMappingComponent } from './view-mapping/category-operator-mapping.component'

import { CreatePortalMappingComponent } from './create-portal-mapping/create-portal-mapping.component'
import { ViewPortalMappingComponent } from './view-portal-mapping/view-portal-mapping.component';
import { ShowImageComponent } from './show-image/show-image.component';

 
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
    NgxChartsModule,
    // AngularMultiSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
    entryComponents: [
      ShowImageComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA],
    declarations: [       
        FullLayoutPageComponent,
        CreateCategoryComponent,
        // CategoryPortalMappingComponent,
        CreatePortalMappingComponent,
        ViewPortalMappingComponent,
        ShowImageComponent
        // CategoryOperatorMappingComponent
    ],
    providers: [
      CategoryService,
      PortalService
    ]
})
export class FullPagesModule { }
