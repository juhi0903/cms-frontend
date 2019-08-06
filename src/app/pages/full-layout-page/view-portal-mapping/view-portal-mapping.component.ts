import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


import {urls,contentType,content_url} from '../../../../app/app.config'
import {CategoryService} from '../../../shared/services/category/category.service';
import { PortalService } from '../../../shared/services/portal/portal.service';
import { ShowImageComponent } from '../show-image/show-image.component'


@Component({
  selector: 'app-view-portal-mapping',
  templateUrl: './view-portal-mapping.component.html',
  styleUrls: ['./view-portal-mapping.component.scss']
})
export class ViewPortalMappingComponent implements OnInit {

  categoryPortalForm : FormGroup;
  categoryList : any = [];
  contentType : any =[];
  portalList : any = [];
  countryList : any = [];
  operatorList : any = [];
  contentDataList : any = [];
  selectedContent : any = [];
  dropdownContentSettings = {};
  content_url : any;
  optionsChecked = [];

  

  constructor(private _formBuilder: FormBuilder, private _CategoryService : CategoryService, 
    private _portalService : PortalService , private modalService : NgbModal ) {
    this.getPortalList(); 
    this.getCountryList();  
    this.content_url = content_url;
  }

  ngOnInit() {
    this._initForm();
    this.contentType = contentType;
    // this.dropdownContentSettings = {
    //   singleSelection: false,
    //   text:"Select Content",
    //   enableSearchFilter: true,
    //   primaryKey: "cdm_id",
    //   limitSelection: 50,
    //   labelKey: "cdm_title",
    //   selectAllText:'Select All',
    //   unSelectAllText:'UnSelect All',
    //   classes:"myclass custom-class",
    //   };

      this.dropdownContentSettings = {
        singleSelection: false,
        idField: 'cdm_id',
        textField: 'cdm_title',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 103,
        allowSearchFilter: true
      };
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
        contentId : new FormControl([]),
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
    this.approveInBulk();
    let data : any = {
      portal_id   :  this.categoryPortalForm.value.categoryPortalInformation.portal,
      country_id   : this.categoryPortalForm.value.categoryPortalInformation.country,  
      operator_id    : this.categoryPortalForm.value.categoryPortalInformation.operator,
      content_type_id : this.categoryPortalForm.value.categoryPortalInformation.contentType,
      category_id   : this.categoryPortalForm.value.categoryPortalInformation.category,
      content_array : this.convertToArraywithId(this.optionsChecked),
    }

    console.log(data);
    let d = await this._CategoryService.saveContentPortalMapping(data);
    this.uploadedSuccessfully();
    this.contentDataList = [];
    this.optionsChecked = [];
    window.alert("Mapping Done SUccessfully");
    console.log(d);

  }

  selectContent = async() => {
    let content = this.categoryPortalForm.value.categoryPortalInformation.contentType;
    let category = this.categoryPortalForm.value.categoryPortalInformation.category;

    this.contentDataList = await this._CategoryService.getContentData(content,category);
    console.log(this.contentDataList);
  }

  convertToArraywithId(array) {
    console.log(array);
    if (array == null) {
      return [];
    }
    let finalArray = [];
    for(let i=0;i<array.length;i++) {
      finalArray.push(array[i]);
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

    onSelectAll (items){
      console.log(items);
    }

    onDeSelectAll (items){
      console.log(items);
    }

  //   updateCheckedOptions(object, event) {
  //     let check = event.target.checked;
  //     const index: number = this.optionsChecked.indexOf(object['cdm_id']);
  //     if(check == true)
  //     this.optionsChecked.push(object['cdm_id'])
  //     else if(check == false && index!== -1)
  //     this.optionsChecked.splice(index, 1);

  //  }

  myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("summaryTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  expandImage(obj){
    let link = this.content_url + obj['cdm_content_path'];
    console.log(link);
    const modalRef = this.modalService.open(ShowImageComponent, {size: 'lg'});
    modalRef.componentInstance.imageUrl = link;
  }

  checkAll(ev) {
    this.contentDataList.forEach(x => {
      x.state = ev.target.checked;
      console.log(x.state);

    });
  }

  approveInBulk(){
    this.contentDataList.forEach(x => {
      const index: number = this.optionsChecked.indexOf(x.cdm_id);
      if(x.state == true)
      this.optionsChecked.push(x.cdm_id);
      else if(index!== -1)
      this.optionsChecked.splice(index, 1);
    });
  }

}
