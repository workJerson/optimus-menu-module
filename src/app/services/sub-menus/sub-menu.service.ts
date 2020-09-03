import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SubMenuService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Get all Client Sub Menu by Menu Id
   *
   * @param {number} clientMenuId
   * @returns {Observable<any>}
   * @memberof SubMenuService
   */
  getSubMenuByMenuId(clientMenuId: number): Observable<any> {
    return this.httpClient.get(`${environment.globalCms}/global/cms/api/v1/ClientSubMenu/client-menu/${clientMenuId}`)
  }

  addSubMenu(payload: any): Observable<any> {
    return this.httpClient.post(`${environment.globalCms}/global/cms/api/v1/ClientSubMenu`, payload)
  }
}
