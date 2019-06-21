import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UploadContentComponent } from './upload-content/upload-content.component';
import {ContentManagementRoutingModule } from './content-management-routing.module';
import { ApproveContentComponent } from './approve-content/approve-content.component';
import { PortalService } from '../../shared/services/portal/portal.service';
import {UploadService} from '../../shared/services/upload/upload.service';
import {CategoryService} from '../../shared/services/category/category.service';
import { ShowImageComponent } from '../full-layout-page/show-image/show-image.component';
import { FullPagesModule } from '../full-layout-page/full-pages.module';
import { ContentProviderComponent } from './content-provider/content-provider.component';


@NgModule({
  imports: [
    CommonModule,
    ContentManagementRoutingModule,
    FullPagesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [UploadContentComponent, ApproveContentComponent, ContentProviderComponent],
  providers  : [UploadService,PortalService,CategoryService],
  entryComponents: [
    ShowImageComponent
  ],
})
export class ContentManagementModule { }
