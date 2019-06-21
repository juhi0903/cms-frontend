import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../shared/services/category/category.service';


@Component({
  selector: 'app-content-provider',
  templateUrl: './content-provider.component.html',
  styleUrls: ['./content-provider.component.scss']
})
export class ContentProviderComponent implements OnInit {

  name : any;

  constructor(private _CategoryService : CategoryService ) { }

  ngOnInit() {
  }

  saveContentProvider = async () => {
    let data = {
      cpname : this.name
    }
    console.log(data);
    this._CategoryService.addNewCP(data).then(data => {
     alert(data);
     this.name = "";
    });

  }

}
