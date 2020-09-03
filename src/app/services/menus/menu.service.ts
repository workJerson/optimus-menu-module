import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'


@Injectable({providedIn: 'root'})
export class MenuService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   *
   * Get All list of Service
   * @returns {Observable<any>}
   * @memberof MenuService
   */
  getServiceType(): Observable<any> {
    return this.httpClient.get(`${environment.globalCms}/global/cms/api/v1/service`)
  }

  /**
   *
   * Get Menu Listing by ServiceId
   * @param {string} serviceId
   * @returns {Observable<any>}
   * @memberof MenuService
   */
  getMenuList(serviceId: string): Observable<any> {
    return this.httpClient.get(`${environment.globalCms}/global/cms/api/v1/dashboard/menu/${serviceId}`)
  }

  /**
   * Create new menu
   *
   * @param {*} payload
   * @returns {Observable<any>}
   * @memberof MenuService
   */
  addMenu(payload: any): Observable<any> {
    return this.httpClient.post(`${environment.globalCms}/global/cms/api/v1/dashboard/menu`, payload)
  }
}
