import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientMenuModuleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllClientMenuModule(serviceId: number): Observable<any> {
    return this.httpClient.get(`${environment.globalCms}/global/cms/api/v1/clientMenuModule/service/${serviceId}`)
  }

  addClientMenuModule(payload: any): Observable<any> {
    return this.httpClient.post(`${environment.globalCms}/global/cms/api/v1/clientMenuModule`, payload)
  }
}
