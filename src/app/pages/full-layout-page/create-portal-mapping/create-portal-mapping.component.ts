import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

import {urls,contentType} from '../../../../app/app.config'
import {CategoryService} from '../../../shared/services/category/category.service';
import { PortalService } from '../../../shared/services/portal/portal.service'

@Component({
  selector: 'app-create-portal-mapping',
  templateUrl: './create-portal-mapping.component.html',
  styleUrls: ['./create-portal-mapping.component.scss']
})
export class CreatePortalMappingComponent implements OnInit {

  categoryPortalForm : FormGroup;
  categoryList : any = [];
  contentType : any =[];
  portalList : any = [];
  countryList : any = [];
  operatorList : any = [];
  show = false;
  rowdata  : any = [];
  status = 1;

  constructor(private _formBuilder: FormBuilder, private _CategoryService : CategoryService, private _portalService : PortalService) {
    this.getPortalList(); 
    this.getCountryList();  
  }

  ngOnInit() {
    this._initForm();
    this.contentType = contentType;
  }

  selectCategory = async()=>{
    let content = this.categoryPortalForm.value.categoryPortalInformation.contentType;
    this.categoryPortalForm.get('categoryPortalInformation.category').enable();
    this.categoryList = await this._CategoryService.getCategoryList(content);
  }

  _initForm = ():void => {
    this.categoryPortalForm = this._formBuilder.group({
      categoryPortalInformation : this._formBuilder.group({
        contentType : new FormControl('',[Validators.required]),
        country : new FormControl('',[Validators.required]),
        operator : new FormControl({value:'',disabled:true}),
        category : new FormControl({value:'',disabled:true}),
        portal :  new FormControl('',[Validators.required]),
      }),
    })

  }

  getPortalList = async () => {
    this.portalList = await this._portalService.getAllPortals();
  }

  getCountryList = async () => {
    this.countryList = await this._CategoryService.getAllCountry();
       

  }

  selectOperator = async() => {
    let country = this.categoryPortalForm.value.categoryPortalInformation.country;
    this.categoryPortalForm.get('categoryPortalInformation.operator').enable();
    this.operatorList = await this._CategoryService.getOperatorList(country);

  }

  categoryPortalMapping = async () =>{

    let data : any = {
      portal_id   :  this.categoryPortalForm.value.categoryPortalInformation.portal,
      country_id   : this.categoryPortalForm.value.categoryPortalInformation.country,  
      operator_id    : this.categoryPortalForm.value.categoryPortalInformation.operator,
      content_type_id : this.categoryPortalForm.value.categoryPortalInformation.contentType,
      category_id   : this.categoryPortalForm.value.categoryPortalInformation.category,
    }

    console.log(data);
    // let d = await this._CategoryService.saveContentPortalMapping(data);
    // this.uploadedSuccessfully();
    // window.alert("Mapping Done SUccessfully");
    // console.log(d);

  }

  viewCategoryPortalMapping = async() => {

      let portalid   =  this.categoryPortalForm.value.categoryPortalInformation.portal;
      let operatorid    =  this.categoryPortalForm.value.categoryPortalInformation.operator;
      let categoryid   =  this.categoryPortalForm.value.categoryPortalInformation.category;

      this.rowdata  = await this._CategoryService.viewContentPortalMapping(portalid,categoryid,operatorid);

      this.show = true;
  }

 

  convertToArraywithId(array) {
    console.log(array);
    if (array == null) {
      return [];
    }
    let finalArray = [];
    for(let i=0;i<array.length;i++) {
      finalArray.push(array[i]['cdm_id']);
    }
    return finalArray;
    }

    uploadedSuccessfully(){
      this.categoryPortalForm.patchValue({
        categoryPortalInformation :{
        contentType :'',
        country : '',
        operator : '',
        category : '',
        portal :  '',
        contentId :'',
        }
      });
    }

    changeStatus= async(event1,event2)=> {

      if(event2==='Active')
        this.status = 0;
        if(event2==='Pause')
        this.status = 1;

         await this._CategoryService.changeContentStatus(event1,this.status);
          this.viewCategoryPortalMapping();
         
    }

}
