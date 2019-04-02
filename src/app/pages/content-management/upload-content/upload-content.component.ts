import { Component, OnInit } from '@angular/core';
import {UploadService} from '../../../shared/services/upload/upload.service'
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { contentType } from 'app/app.config';
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
  
  
  constructor(private _uploadService:UploadService) { }

  ngOnInit() {
    //this._initForm();
  this.contentType = contentType;
  }
  upload(){
    console.log(this.selectedFiles.name);
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles;
    this._uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
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


}
