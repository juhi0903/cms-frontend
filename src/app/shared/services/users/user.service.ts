import { Injectable } from '@angular/core';
import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../../../app.config';
import { catchError, map, tap } from 'rxjs/operators';
// import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable()
export class UserService {

  httpOptions: any;

  constructor(private _httpService: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };  
  }

  public saveUser = async (data): Promise<any[]> => {

    let parameterList = "?" + Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');

    const result = await this._httpService.post(urls.BASE_URL + urls.user, data, {responseType: 'text'}).toPromise() as any;
    return result;
  }

  public getAllUsers= () : Promise<any[]> =>{
    return this._httpService.get(urls.BASE_URL + urls.user).toPromise() as any;
  }

  public login= (data) : Promise<any[]> =>{

    let parameterList = "?" + Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');

    return this._httpService.post(urls.BASE_URL + urls.login, data).toPromise() as any;
  }

  public forgorPassword = (data) : Promise<any[]> =>{

    let parameterList = "?" + Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');

    return this._httpService.post(urls.BASE_URL + urls.password, data).toPromise() as any;
  }


}
