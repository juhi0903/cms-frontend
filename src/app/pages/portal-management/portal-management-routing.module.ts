import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePortalComponent } from './create-portal/create-portal.component';
import { ViewPortalComponent } from './view-portal/view-portal.component'


const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'new',
            component: CreatePortalComponent,
            data: {
              title: 'Create Portal Page'
            }
          },
          {
            path: 'view',
            component: ViewPortalComponent,
            data: {
              title: 'View Portal Page'
            }
          },
          {
            path: 'edit/:id',
            component: CreatePortalComponent,
            data: {
              title: 'Edit Portal Page'
            }
          }
        ]
      }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalManagementRoutingModule { }