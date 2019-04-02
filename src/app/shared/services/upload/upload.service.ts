import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls, contentType } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private  _httpService:HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    //formdata.append('contentType',contentType);
 
    const req = new HttpRequest('POST', urls.BASE_URL+urls.upload, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this._httpService.request(req);
  }
}
