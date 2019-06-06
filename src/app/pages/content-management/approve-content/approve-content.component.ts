import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../../shared/services/portal/portal.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {urls,status,contentType} from '../../../../app/app.config';
import {CategoryService} from '../../../shared/services/category/category.service';




@Component({
  selector: 'app-approve-content',
  templateUrl: './approve-content.component.html',
  styleUrls: ['./approve-content.component.scss']
})
export class ApproveContentComponent implements OnInit {

  contentForm : FormGroup;
  contentType : any;
  categoryList : any;
  status :  any;
  rowdata : any ;


  constructor(private _portalService : PortalService,private _CategoryService : CategoryService ,private _formBuilder :FormBuilder ) { }

  ngOnInit() {
    this._initForm();
    this.contentType = contentType;
    this.status = status;
  }

  selectCategory = async()=>{
    let content = this.contentForm.value.contentInformation.contentType;
    this.contentForm.get('contentInformation.category').enable();
    this.categoryList = await this._CategoryService.getCategoryList(content);
  }

  _initForm = ():void => {
    this.contentForm = this._formBuilder.group({
      contentInformation : this._formBuilder.group({
        contentType : new FormControl('',[Validators.required]),
        category : new FormControl({value:'',disabled:true}),
        status :  new FormControl('',[Validators.required]),
      }),
    })

  }

  getContentList = async () => {
     let data = {
      cdm_ct_id : this.contentForm.value.contentInformation.contentType,
      cdm_cm_id : this.contentForm.value.contentInformation.category,
      cdm_status : this.contentForm.value.contentInformation.status
     }

     console.log(data);

       this._CategoryService.getContentList(data).then(data => {
        this.rowdata = data;
        console.log(this.rowdata);
     });
  }

  approve = async (id) => {
    console.log(id);
    const data = this._CategoryService.approveContent(id);
    console.log(data);
  }

  reject = async (id) => {
    console.log(id);
    const data = this._CategoryService.rejectContent(id);
    console.log(data);

  }

}
