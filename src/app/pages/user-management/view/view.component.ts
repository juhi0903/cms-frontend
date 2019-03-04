import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/users/user.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  rowdata : any = [];
  columnDefs =[];
  

  constructor(private _userService : UserService) {
    this.getAllUsers();
   }

  ngOnInit() {
    this.setColumnDefs();
  }

  setColumnDefs(){
    this.columnDefs = [
      {headerName : "Id", field:'ul_id' ,width: 130, suppressSizeToFit: true},
      {headerName: "Name", field: 'ul_name', width: 180, suppressSizeToFit: true},
      {headerName: "UserId", field: 'ul_username' , width: 120, suppressSizeToFit: true},
      {headerName: "Email", field: 'ul_email' , width: 200, suppressSizeToFit: true },
      {headerName: "Contact", field: 'ul_phone' , width: 130, suppressSizeToFit: true},
      {headerName: "Role", field: 'ul_user_role', width: 180, suppressSizeToFit: true},
      {headerName: "Status", field: 'ul_status', width: 180, suppressSizeToFit: true},
    ];
  }

  getAllUsers = async () => {
    this.rowdata = await this._userService.getAllUsers();
    console.log(this.rowdata);
  }

}
