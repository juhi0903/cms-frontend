import { Component, OnInit } from '@angular/core';
import {UploadService} from '../../../shared/services/upload/upload.service'
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { contentType } from 'app/app.config';
import {CategoryService} from '../../../shared/services/category/category.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.component.html',
  styleUrls: ['./upload-content.component.scss']
})
export class UploadContentComponent implements OnInit {
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
  
  
  constructor(private _uploadService:UploadService, private _CategoryService :CategoryService,private router : Router ) { }

  ngOnInit() {
    //this._initForm();
  this.contentType = contentType;
  this.getCP();
  }
  upload(){
    console.log(this.selectedFiles.name);
    console.log(this.content);
    console.log(this.category)
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles;
    this._uploadService.pushFileToStorage(this.currentFileUpload,this.content,this.category).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
    this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
    console.log('File is completely uploaded!');
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
  // console.log(this.content);

  this.categoryList = await this._CategoryService.getCategoryList(this.content);

}
redirect(){
  this.router.navigate(['/dashboard'])
}

getCP = async()=>{
  this.cp = await this._CategoryService.getCP();
}


}
