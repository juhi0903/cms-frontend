import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutPageComponent } from 'app/pages/full-layout-page/full-layout-page.component';
import { CreateCategoryComponent } from '../../pages/full-layout-page/create-category/create-category.component';



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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
