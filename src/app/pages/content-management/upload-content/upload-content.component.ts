import { Component, OnInit } from '@angular/core';
import {UploadService} from '../../../shared/services/upload/upload.service'
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { contentType } from 'app/app.config';
import {CategoryService} from '../../../shared/services/category/category.service';
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.component.html',
  styleUrls: ['./upload-content.component.scss']
})
export class UploadContentComponent implements OnInit {

  contentForm : FormGroup;
  selectedFiles : any;
  currentFileUpload: any;
  filename: any;
  file: any;
  contentType : any;
  progress: { percentage: number } = { percentage: 0 };
  content : any;
  categoryList : any;
  category : any;
  cp : any;
  showDone = false;
  
  
  constructor(private _uploadService:UploadService, private _CategoryService :CategoryService,private router : Router,private _formBuilder :FormBuilder ) { }

  ngOnInit() {
  this._initForm();
  this.contentType = contentType;
  this.getCP();
  }

  _initForm = ():void => {
    this.contentForm = this._formBuilder.group({
      contentInformation : this._formBuilder.group({
        contentType : new FormControl('',[Validators.required]),
        category : new FormControl({value:'',disabled:true}),
        cp :  new FormControl('',[Validators.required]),
      }),
    })

  }

  upload(){
    this.content = this.contentForm.value.contentInformation.contentType;
    this.category = this.contentForm.value.contentInformation.category;
    let cp = this.contentForm.value.contentInformation.cp;
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles;
    this._uploadService.pushFileToStorage(this.currentFileUpload,this.content,this.category,cp).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
    this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
    console.log('File is completely uploaded!');
    this.showDone = true;
    }
    });
    
    this.selectedFiles = undefined;
   
}

selectFile(event){
  // console.log(event);
  this.selectedFiles = event.target.files[0];
  this.filename = this.selectedFiles.name;
  this.file = true;

}

selectCategory = async()=>{
  this.content = this.contentForm.value.contentInformation.contentType;
  this.contentForm.get('contentInformation.category').enable();
  this.categoryList = await this._CategoryService.getCategoryList(this.content);

}
redirect(){
  this.router.navigate(['/dashboard'])
}

getCP = async()=>{
  this.cp = await this._CategoryService.getCP();
}


}
