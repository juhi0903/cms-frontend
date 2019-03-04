import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadContentComponent } from './upload-content/upload-content.component';
import {ApproveContentComponent} from './approve-content/approve-content.component';


const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'upload',
            component: UploadContentComponent,
            data: {
              title: 'Upload Content Page'
            }
          },{
            path: 'approve',
            component: ApproveContentComponent,
            data: {
              title: 'Approve Content Page'
            }
          }
        ]
      }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentManagementRoutingModule { }