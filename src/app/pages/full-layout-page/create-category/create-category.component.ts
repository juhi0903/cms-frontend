import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

import {urls,contentType} from '../../../../app/app.config'
import {CategoryService} from '../../../shared/services/category/category.service';


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
   arabic : any;
   russian : any;
   french : any;
   italic : any;
   thai : any;
   greek : any;

  constructor(private _formBuilder: FormBuilder, private _CategoryService : CategoryService) {
   }

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
        arabic : new FormControl('',[Validators.required]),
        russian : new FormControl('',[Validators.required]),
        french  : new FormControl('',[Validators.required]),
        italic : new FormControl('',[Validators.required]),
        greek  : new FormControl('',[Validators.required]),
        thai   : new FormControl('',[Validators.required])
      }),
    })
  }

  selectCategory = async()=>{
    let category = this.contentForm.value.contentInformation.content;
    this.adderror = false;
    // this.contentForm.get('contentInformation.category').enable();
    this.categoryList = await this._CategoryService.getCategoryList(category);
    // console.log(this.categoryList);

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
      cm_ct_id : id,
      cm_name : name,
      cm_name_arabic : this.contentForm.value.contentInformation.arabic,
      cm_name_russian : this.contentForm.value.contentInformation.russian,
      cm_name_french : this.contentForm.value.contentInformation.french,
      cm_name_italic : this.contentForm.value.contentInformation.italic,
      cm_name_greek  : this.contentForm.value.contentInformation.greek,
      cm_name_thai : this.contentForm.value.contentInformation.thai,
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

  errorCheck= async () =>{
    if(this.adderror == true)
      this.adderror = false;
    if(this.updateerror == true)
      this.updateerror = false;
    if(this.deleteerror == true)
      this.deleteerror = false;
   let id = this.contentForm.value.contentInformation.category;
     await this._CategoryService.getCategory(id).then(value =>{
      this.contentForm.patchValue({
        contentInformation :{
          arabic : value[0]['cm_name_arabic'],
          french : value[0]['cm_name_french'],
          greek : value[0]['cm_name_greek'],
          italic : value[0]['cm_name_italic'],
          russian : value[0]['cm_name_russian'],
          thai : value[0]['cm_name_thai']
        },
      });
       
     });
     
     
  }

  translateCategory = async () => {
    let name = this.contentForm.value.contentInformation.subcategory;

    console.log(name);
    

    this._CategoryService.translateArabic(name).then(data => {
        this.arabic = data[1][0][1][1];
        console.log("Arabic>>>>>>>>>>>>> " +data[1][0][1][1]);
        this.contentForm.patchValue({
          contentInformation :{
            arabic : this.arabic,
          },
        });

        

    });
    this._CategoryService.translateFrench(name).then(data => {
      this.french = data[1];
      this.contentForm.patchValue({
        contentInformation :{
          french : this.french,
        },
      });
    });
    this._CategoryService.translateGreek(name).then(data => {
      this.greek = data[1][0][1][1];
      this.contentForm.patchValue({
        contentInformation :{
          greek : this.greek,
        },
      });
    });
    this._CategoryService.translateItalic(name).then(data => {
      this.italic = data[1];
      this.contentForm.patchValue({
        contentInformation :{
          italic : this.italic,
        },
      });
    });
    this._CategoryService.translateRussian(name).then(data => {
      this.russian = data[1][0][1][1];
      this.contentForm.patchValue({
        contentInformation :{
          russian : this.russian,
        },
      });
    });
    this._CategoryService.translateThai(name).then(data => {
      this.thai = data[1][0][1][1];
      this.contentForm.patchValue({
        contentInformation :{
          thai : this.thai,
        },
      });
    });
   }
  }

