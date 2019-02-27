import { Injectable } from '@angular/core';
import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../../../app.config';
import { catchError, map, tap } from 'rxjs/operators';
// import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable()
export class CategoryService {
  httpOptions: any;

  constructor(private _httpService: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };  
  }

  public addNewCategory = async (data): Promise<any[]> => {

    let parameterList = "?" + Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');

    const result = await this._httpService.post(urls.BASE_URL + urls.category, data, {responseType: 'text'}).toPromise() as any;
    return result;
  }

  public getCategoryList = async (contentid): Promise<any[]> => {

    return this._httpService.get(urls.BASE_URL + urls.category +'/' +contentid).toPromise() as any;

  }

  public deleteCategory = async (id): Promise<any[]> => {
    return this._httpService.delete(urls.BASE_URL + urls.category +'/' +id , this.httpOptions).toPromise() as any;
  }

  public updateCategory = async (id,name): Promise<any[]> => {
    return this._httpService.put(urls.BASE_URL + urls.category +'/' +id +'/' +name , this.httpOptions).toPromise() as any;
  }
}
