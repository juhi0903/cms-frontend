import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutPageComponent } from 'app/pages/full-layout-page/full-layout-page.component';
import { CreateCategoryComponent } from '../../pages/full-layout-page/create-category/create-category.component';
import { ContentApproveComponent } from '../../pages/full-layout-page/content-approve/content-approve.component';
import { UploadContentComponent } from '../../pages/full-layout-page/upload-content/upload-content.component';



const routes: Routes = [
  {
    path: 'dashboard',
     component: FullLayoutPageComponent,
    data: {
      title: 'Full Layout Page'
    },    
  },
  {
    path: 'createcategory',
     component: CreateCategoryComponent,
    data: {
      title: 'Create Category Page'
    },
  },
  {
    path: 'approvecontent',
     component: ContentApproveComponent,
    data: {
      title: 'Content Approve'
    },
  },
   {
    path: 'uploadcontent',
     component: UploadContentComponent,
    data: {
      title: 'Upload Content'
    },
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
