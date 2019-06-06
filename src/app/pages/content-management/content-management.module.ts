import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UploadContentComponent } from './upload-content/upload-content.component';
import {ContentManagementRoutingModule } from './content-management-routing.module';
import { ApproveContentComponent } from './approve-content/approve-content.component';
import { PortalService } from '../../shared/services/portal/portal.service';
import {UploadService} from '../../shared/services/upload/upload.service';
import {CategoryService} from '../../shared/services/category/category.service'

@NgModule({
  imports: [
    CommonModule,
    ContentManagementRoutingModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [UploadContentComponent, ApproveContentComponent],
  providers  : [UploadService,PortalService,CategoryService]
})
export class ContentManagementModule { }
