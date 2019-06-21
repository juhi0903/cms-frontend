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

    return this._httpService.get(urls.BASE_URL + urls.content +'/' +contentid).toPromise() as any;

  }

  public getAllCountry = async() : Promise<any[]> => {

    return this._httpService.get(urls.BASE_URL + urls.country).toPromise() as any;
  }

  public deleteCategory = async (id): Promise<any[]> => {
    return this._httpService.delete(urls.BASE_URL + urls.category +'/' +id , this.httpOptions).toPromise() as any;
  }

  public updateCategory = async (data): Promise<any[]> => {
    return this._httpService.put(urls.BASE_URL + urls.category , data , this.httpOptions).toPromise() as any;
  }

  public getCategory = async (id): Promise<any[]> => {

    return this._httpService.get(urls.BASE_URL + urls.category +'/' +id).toPromise() as any;

  }

  public getOperatorList = async (id): Promise<any[]> => {

    return this._httpService.get(urls.BASE_URL + urls.country +'/' +id).toPromise() as any;

  }

  public viewContentPortalMapping = async(portalid,categoryid,operatorid) : Promise<any[]> => {

    return this._httpService.get(urls.BASE_URL + urls.viewcontentmapping +'/' +portalid +'/' +categoryid +'/' +operatorid ).toPromise() as any;

  }

  public changeContentStatus = async(id,status) : Promise<any[]> => {

    return this._httpService.get(urls.BASE_URL + urls.contentmappingstatus +'/' +id +'/' +status , {responseType: 'text'}).toPromise() as any;

  }
  public translateArabic = async (id): Promise<any[]> => {

   return this._httpService.get('https://www.google.com/inputtools/request?text='+id +'&ime=transliteration_en_ar&num=5&ie=utf-8&oe=utf-8&app=jsapi').toPromise() as any;
  }
  public translateFrench = async (id): Promise<any[]> => {

    return this._httpService.get('https://www.google.com/inputtools/request?text='+id +'&ime=transliteration_en_fr&num=5&ie=utf-8&oe=utf-8&app=jsapi').toPromise() as any;
   }
   public translateItalic = async (id): Promise<any[]> => {

    return this._httpService.get('https://www.google.com/inputtools/request?text='+id +'&ime=transliteration_en_it&num=5&ie=utf-8&oe=utf-8&app=jsapi').toPromise() as any;
   }
   public translateRussian = async (id): Promise<any[]> => {

    return this._httpService.get('https://www.google.com/inputtools/request?text='+id +'&ime=transliteration_en_ru&num=5&ie=utf-8&oe=utf-8&app=jsapi').toPromise() as any;
   }
   public translateThai = async (id): Promise<any[]> => {

    return this._httpService.get('https://www.google.com/inputtools/request?text='+id +'&ime=transliteration_en_th&num=5&ie=utf-8&oe=utf-8&app=jsapi').toPromise() as any;
   }
   public translateGreek = async (id): Promise<any[]> => {

    return this._httpService.get('https://www.google.com/inputtools/request?text='+id +'&ime=transliteration_en_el&num=5&ie=utf-8&oe=utf-8&app=jsapi').toPromise() as any;
   }

   public saveContentPortalMapping = async (data): Promise<any[]> => {

    let parameterList = "?" + Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');

    const result = await this._httpService.post(urls.BASE_URL + urls.savecontentmapping, data, {responseType: 'text'}).toPromise() as any;
    return result;
  }

  public getContentData = async(content,category) : Promise<any[]> => {
 
    return this._httpService.get(urls.BASE_URL + urls.content +'/' +content +'/' +category).toPromise() as any;

  }

  public getContentList = async(data) : Promise<any[]> => {
 
    return this._httpService.post(urls.BASE_URL + urls.content , data).toPromise() as any;

  }

  public approveContent = async(id) : Promise<any[]> => {
 
    return this._httpService.get(urls.BASE_URL + urls.content + urls.approve  +'/' +id).toPromise() as any;

  }

  public rejectContent = async(id) : Promise<any[]> => {
 
    return this._httpService.get(urls.BASE_URL + urls.content + urls.reject  +'/' +id).toPromise() as any;

  }

  public addNewCP = async (data): Promise<any[]> => {

    let parameterList = "?" + Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');

    const result = await this._httpService.post(urls.BASE_URL + urls.contentprovider, data, {responseType: 'text'}).toPromise() as any;
    return result;
  }
}
