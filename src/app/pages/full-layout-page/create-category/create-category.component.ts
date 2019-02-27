import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

import {urls,contentType} from '../../../../app/app.config'
import {CategoryService} from '../../../shared/services/category/category.service'


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  contentForm : FormGroup;
  addcategory = false;
  updatecategory = false;
  showtextbox = false;
  updateerror = false;
  deleteerror = false;
  adderror = false;
  contentType : any =[];
  categoryList : any = [];
  showerror = false;

  constructor(private _formBuilder: FormBuilder, private _CategoryService : CategoryService) { }

  ngOnInit() {
    this._initForm();
    this.contentType = contentType;
  }

  _initForm = ():void => {
    this.contentForm = this._formBuilder.group({
      contentInformation : this._formBuilder.group({
        content : new FormControl('',[Validators.required]),
        category : new FormControl({value:''}),
        subcategory : new FormControl('',[Validators.required]),
  
      }),
    })
  }

  selectCategory = async()=>{
    let category = this.contentForm.value.contentInformation.content;
    this.adderror = false;
    // this.contentForm.get('contentInformation.category').enable();
    this.categoryList = await this._CategoryService.getCategoryList(category);
    console.log(this.categoryList);

  }

  addCategory(){
    let id = this.contentForm.value.contentInformation.content;

    if(id == ''){
      this.adderror = true;
    }else{
    // this.contentForm.get('contentInformation.category').disable();
    this.addcategory = true;
    this.showtextbox = true;
    this.adderror = false;
    if(this.updatecategory==true)
      this.updatecategory = false;
    }
  }

  putCategory() {
    let id = this.contentForm.value.contentInformation.category;

    console.log(id);

    if(id['value'] == '' || id == '' || id < 0){
      this.updateerror = true;
      this.deleteerror = false;

    }else{
      this.updatecategory = true;
      this.showtextbox = true;
      this.updateerror = false;
      if(this.addcategory==true)
        this.addcategory = false;
      }
  }

  addSubCategory = async() => {
    let id = this.contentForm.value.contentInformation.content;
    let name = this.contentForm.value.contentInformation.subcategory;
    let data = {
      contentid : id,
      name : name

    }
    if(id>0 && (name!='' || name!=null)){
      this.categoryList = [];
      this.showtextbox = false;
      this.addcategory =false;
      await this._CategoryService.addNewCategory(data).then(data =>{
        this.selectCategory();
      });
    }
    else{
      this.adderror = true;
    }
    
    
    
  }

  deleteCategory = async() => {
    let id = this.contentForm.value.contentInformation.category;

    console.log(id);

    if(id>0){
      this.categoryList = [];
      await this._CategoryService.deleteCategory(id).then(data =>{
        this.selectCategory();
     });
    }
    else{
      this.updateerror = false;
      this.deleteerror = true;
    }
  }
  updateCategory = async() => {
    
    let id = this.contentForm.value.contentInformation.category;
    let name = this.contentForm.value.contentInformation.subcategory;

    if(id>0 && (name!='' || name!=null)){
      this.categoryList = [];
      await this._CategoryService.updateCategory(id,name).then(data =>{
        this.selectCategory();
     });
      this.updatecategory = false;
      this.showtextbox = false;
    }
    else{
      this.updateerror = true;
    }
  }

  errorCheck(){
    if(this.adderror == true)
      this.adderror = false;
    if(this.updateerror == true)
      this.updateerror = false;
    if(this.deleteerror == true)
      this.deleteerror = false;
  }
}
