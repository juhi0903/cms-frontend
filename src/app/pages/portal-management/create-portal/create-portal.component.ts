import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute , Router , NavigationEnd , RoutesRecognized} from '@angular/router';


import { PortalService } from '../../../shared/services/portal/portal.service';
import {CategoryService} from '../../../shared/services/category/category.service';




@Component({
  selector: 'app-create-portal',
  templateUrl: './create-portal.component.html',
  styleUrls: ['./create-portal.component.scss']
})
export class CreatePortalComponent implements OnInit {

  portalForm : FormGroup;
  id : any;

  constructor(private _formBuilder: FormBuilder , private _PortalService : PortalService,private router: Router, private route: ActivatedRoute,private _CategoryService : CategoryService) {
    this.id= this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this._initForm();
    if(this.id >  0 ){
      this.getPortalDetails();
    }
  }

  _initForm = ():void => {
    this.portalForm = this._formBuilder.group({
      portalInformation : this._formBuilder.group({
        name : new FormControl('',[Validators.required]),
        title : new FormControl('',[Validators.required]),
        titleArabic : new FormControl('',[Validators.required]),
        titleRussian : new FormControl('',[Validators.required]),
        titleFrench : new FormControl('',[Validators.required]),
        titleItalic  : new FormControl('',[Validators.required]),
        titleGreek : new FormControl('',[Validators.required]),
        titleThai  : new FormControl('',[Validators.required]),
        footer : new FormControl('',[Validators.required]),
        footerArabic : new FormControl('',[Validators.required]),
        footerRussian : new FormControl('',[Validators.required]),
        footerFrench : new FormControl('',[Validators.required]),
        footerItalic  : new FormControl('',[Validators.required]),
        footerGreek : new FormControl('',[Validators.required]),
        footerThai  : new FormControl('',[Validators.required]),
      }),
    })
  }

  addNewPortal = async() =>{

    let data : any ={
      pm_name : this.portalForm.value.portalInformation.name, 
      pm_title : this.portalForm.value.portalInformation.title,
      pm_title_arabic : this.portalForm.value.portalInformation.titleArabic,
      pm_title_russian : this.portalForm.value.portalInformation.titleRussian,
      pm_title_french : this.portalForm.value.portalInformation.titleFrench,
      pm_title_italic : this.portalForm.value.portalInformation.titleItalic,
      pm_title_greek  : this.portalForm.value.portalInformation.titleGreek,
      pm_title_thai : this.portalForm.value.portalInformation.titleThai,
      pm_footer : this.portalForm.value.portalInformation.footer,
      pm_footer_arabic : this.portalForm.value.portalInformation.footerArabic,
      pm_footer_russian : this.portalForm.value.portalInformation.footerRussian,
      pm_footer_french : this.portalForm.value.portalInformation.footerFrench,
      pm_footer_italic : this.portalForm.value.portalInformation.footerItalic,
      pm_footer_greek  : this.portalForm.value.portalInformation.footerGreek,
      pm_footer_thai : this.portalForm.value.portalInformation.footerThai,
    }
    if(this.id > 0){
      data.pm_id = this.id;
      await this._PortalService.updatePortal(data).then(data =>{
        this.router.navigate([ '/portal/view'], { relativeTo: this.route.parent });
      });
    }
    else{
    await this._PortalService.addNewPortal(data).then(data =>{
      this.router.navigate([ '/portal/view'], { relativeTo: this.route.parent });
    });
  }

  }

  getPortalDetails = async() => {
    await this._PortalService.getPortalData(this.id).then(data =>{
      this._patchForm(data);
      
    });
  }

  _patchForm = (value):void => {
    this.portalForm.patchValue({
      portalInformation :{
        name : value['pm_name'],
        title : value['pm_title'],
        titleArabic : value['pm_title_arabic'],
        titleRussian : value['pm_title_russian'],
        titleFrench : value['pm_title_french'],
        titleItalic : value['pm_title_italic'],
        titleGreek : value['pm_title_greek'],
        titleThai : value['pm_title_thai'],
        footer : value['pm_footer'],
        footerArabic : value['pm_footer_arabic'],
        footerRussian : value['pm_footer_russian'],
        footerFrench : value['pm_footer_french'],
        footerItalic : value['pm_footer_italic'],
        footerGreek : value['pm_footer_greek'],
        footerThai : value['pm_footer_thai']
      },
    });
  } 

  translatePortalTitle = async () => {
  
    let name = this.portalForm.value.portalInformation.title;
    this._CategoryService.translateArabic(name).then(data => {
        this.portalForm.patchValue({
          portalInformation :{
            titleArabic : data[1][0][1][1],
          },
        });
    });
    this._CategoryService.translateFrench(name).then(data => {
      this.portalForm.patchValue({
        portalInformation :{
          titleFrench : data[1],
        },
      });
    });
    this._CategoryService.translateGreek(name).then(data => {
      // this.greek = data[1][0][1][1];
      this.portalForm.patchValue({
        portalInformation :{
          titleGreek : data[1][0][1][1],
        },
      });
    });
    this._CategoryService.translateItalic(name).then(data => {
      // this.italic = data[1];
      this.portalForm.patchValue({
        portalInformation :{
          titleItalic : data[1],
        },
      });
    });
    this._CategoryService.translateRussian(name).then(data => {
      // this.russian = data[1][0][1][1];
      this.portalForm.patchValue({
        portalInformation :{
          titleRussian : data[1][0][1][1],
        },
      });
    });
    this._CategoryService.translateThai(name).then(data => {
      // this.thai = data[1][0][1][1];
      this.portalForm.patchValue({
        portalInformation :{
          titleThai : data[1][0][1][1],
        },
      });
    });
  }

  translatePortalFooter = async () =>{
    let name = this.portalForm.value.portalInformation.footer;
    this._CategoryService.translateArabic(name).then(data => {
        this.portalForm.patchValue({
          portalInformation :{
            footerArabic : data[1][0][1][1],
          },
        });
    });
    this._CategoryService.translateFrench(name).then(data => {
      this.portalForm.patchValue({
        portalInformation :{
          footerFrench : data[1],
        },
      });
    });
    this._CategoryService.translateGreek(name).then(data => {
      // this.greek = data[1][0][1][1];
      this.portalForm.patchValue({
        portalInformation :{
          footerGreek : data[1][0][1][1],
        },
      });
    });
    this._CategoryService.translateItalic(name).then(data => {
      // this.italic = data[1];
      this.portalForm.patchValue({
        portalInformation :{
          footerItalic : data[1],
        },
      });
    });
    this._CategoryService.translateRussian(name).then(data => {
      // this.russian = data[1][0][1][1];
      this.portalForm.patchValue({
        portalInformation :{
          footerRussian : data[1][0][1][1],
        },
      });
    });
    this._CategoryService.translateThai(name).then(data => {
      // this.thai = data[1][0][1][1];
      this.portalForm.patchValue({
        portalInformation :{
          footerThai : data[1][0][1][1],
        },
      });
    });
  }
}
