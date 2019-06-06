import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  httpOptions: any;

  constructor(private _httpService: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };  
  }
  public addNewPortal = async (data): Promise<any[]> => {

    let parameterList = "?" + Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');

    const result = await this._httpService.post(urls.BASE_URL + urls.portal, data, {responseType: 'text'}).toPromise() as any;
    return result;
  }

  public getAllPortals = async (): Promise<any[]> => {
    return await this._httpService.get(urls.BASE_URL + urls.portal).toPromise() as any;
  }

  public getPortalData = async (id): Promise<any[]> => {
    return await this._httpService.get(urls.BASE_URL + urls.portal +"/" +id).toPromise() as any;
  }

  public updatePortal = async (data): Promise<any[]> => {

    let parameterList = "?" + Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&');

    const result = await this._httpService.put(urls.BASE_URL + urls.portal, data, {responseType: 'text'}).toPromise() as any;
    return result;
  }
}
