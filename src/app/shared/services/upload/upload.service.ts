import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls, contentType } from 'app/app.config';
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private  _httpService:HttpClient) { }

  pushFileToStorage(file: File,contentid,categoryid,cp): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    formdata.append('id', contentid);
    formdata.append('categoryid', categoryid);
    formdata.append('cp', cp);
 
    const req = new HttpRequest('POST', urls.BASE_URL+urls.upload, formdata,{
      reportProgress: true,
      responseType: 'text'
    });
    return this._httpService.request(req);
  }
  
  
}


