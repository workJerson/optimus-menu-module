import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ModuleGroupService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllModuleGroups(): Observable<any> {
    return this.httpClient.get(`${environment.globalCms}/global/cms/api/v1/moduleGroup`)
  }

  addModuleGroup(payload: any) {
    return this.httpClient.post(`${environment.globalCms}/global/cms/api/v1/moduleGroup`, payload)
  }
}
