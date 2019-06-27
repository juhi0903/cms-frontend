import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../shared/services/category/category.service';

@Component({
  selector: 'app-html-games-excel',
  templateUrl: './html-games-excel.component.html',
  styleUrls: ['./html-games-excel.component.scss']
})
export class HtmlGamesExcelComponent implements OnInit {

  categoryList : any = [];
  category : any = 71;
  rowdata : any;

  constructor(private _CategoryService : CategoryService ) {
    this.selectCategory();
   }

  ngOnInit() {
  }

  selectCategory = async()=>{
    this.categoryList = await this._CategoryService.getCategoryList(1008);
  }

  getHtmlGameData = async () => {
      this.rowdata = await this._CategoryService.getHtmlGamesData(this.category);
      console.log(this.rowdata);
  }

  downloadImage(obj){
    console.log(obj);

  }
}
