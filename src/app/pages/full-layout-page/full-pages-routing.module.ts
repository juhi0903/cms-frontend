import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutPageComponent } from 'app/pages/full-layout-page/full-layout-page.component';
import { CreateCategoryComponent } from '../../pages/full-layout-page/create-category/create-category.component';
// import { CategoryPortalMappingComponent } from './category-portal-mapping/category-portal-mapping.component';
import { CreatePortalMappingComponent } from './create-portal-mapping/create-portal-mapping.component'

import { ViewPortalMappingComponent } from './view-portal-mapping/view-portal-mapping.component'



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
    path: 'createmapping',
     component: ViewPortalMappingComponent,
    data: {
      title: 'Create Portal Mapping'
    },
  },
  {
    path: 'viewmapping',
     component: CreatePortalMappingComponent,
    data: {
      title: 'View Portal Mapping '
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
