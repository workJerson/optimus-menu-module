import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ResourceTypeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   *
   *
   * @returns {Observable<any>}
   * @memberof ResourceTypeService
   */
  getAllResourceTypes(): Observable<any> {
    return this.httpClient.get(`${environment.globalCms}/global/cms/api/v1/resourceType`)
  }
}
