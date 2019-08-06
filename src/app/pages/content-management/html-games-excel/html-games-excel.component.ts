import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { contentType ,content_url} from 'app/app.config';
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
  contentForm : FormGroup;
  contentType : any;
  cp : any;
  content : any;
  content_url : any;
  showTable : any = false;


  constructor(private _CategoryService : CategoryService ,private _formBuilder :FormBuilder ) {
    // this.selectCategory();
   }

  ngOnInit() {
    this._initForm();
    this.contentType = contentType;
    this.content_url = content_url;
    this.getCP();
  }

  _initForm = ():void => {
    this.contentForm = this._formBuilder.group({
      contentInformation : this._formBuilder.group({
        contentType : new FormControl('',[Validators.required]),
        // category : new FormControl({value:'',disabled:true}),
        cp :  new FormControl('',[Validators.required]),
      }),
    })

  }

  // selectCategory = async()=>{
  //   this.content = this.contentForm.value.contentInformation.contentType;
  //   this.contentForm.get('contentInformation.category').enable();
  //   this.categoryList = await this._CategoryService.getCategoryList( this.content);
  // }

  getHtmlGameData = async () => {
      let content = this.contentForm.value.contentInformation.contentType;
      let cp =   this.contentForm.value.contentInformation.cp;
      console.log(content , ">>>>>>>>>" , cp);

      this.rowdata = await this._CategoryService.getHtmlGamesData(content,cp);
      this.showTable = true;
  }


  getCP = async()=>{
    this.cp = await this._CategoryService.getCP();

  }
}
