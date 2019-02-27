import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: 'create',
     component: CreateUserComponent,
    data: {
      title: 'Create User Page'
    },    
  },
  {
    path: 'view',
     component: ViewComponent,
    data: {
      title: 'View User Page'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule { }
