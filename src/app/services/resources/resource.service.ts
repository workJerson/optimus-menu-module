import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllResources(): Observable<any> {
    return this.httpClient.get(`${environment.globalCms}/global/cms/api/v1/resource`)
  }

  addResource(payload: any): Observable<any> {
    return this.httpClient.post(`${environment.globalCms}/global/cms/api/v1/resource`, payload)
  }
}
