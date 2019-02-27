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
      {headerName : "Id", field:'id' ,width: 130, suppressSizeToFit: true},
      {headerName: "User", field: 'username' , width: 120, suppressSizeToFit: true},
      {headerName: "Email", field: 'email' , width: 200, suppressSizeToFit: true },
      {headerName: "Gender", field: 'gender', width: 180, suppressSizeToFit: true},
      {headerName: "Contact", field: 'phone' , width: 130, suppressSizeToFit: true},
      {headerName: "DOB", field: 'dob', width: 180, suppressSizeToFit: true},
      {headerName: "Status", field: 'status', width: 180, suppressSizeToFit: true},
    ];
  }

  getAllUsers = async () => {
    this.rowdata = await this._userService.getAllUsers();
    console.log(this.rowdata);
  }

}
