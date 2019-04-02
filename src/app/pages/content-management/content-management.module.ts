import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadContentComponent } from './upload-content/upload-content.component';
import {ContentManagementRoutingModule } from './content-management-routing.module';
import { ApproveContentComponent } from './approve-content/approve-content.component'

import {UploadService} from '../../shared/services/upload/upload.service'
@NgModule({
  imports: [
    CommonModule,
    ContentManagementRoutingModule
  ],
  declarations: [UploadContentComponent, ApproveContentComponent],
  providers  : [UploadService]
})
export class ContentManagementModule { }
