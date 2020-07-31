import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdministratorDetail } from './administrator-detail.model';

@Injectable({
  providedIn: 'root'
})
export class AdministratorDetailService {

  formData: AdministratorDetail;
  readonly rootURL = 'https://localhost:44318/';
  list: AdministratorDetail[];

  constructor(private http: HttpClient) { }

  postAdministratorDetail() {
    return this.http.post(this.rootURL + 'api/Administrators', this.formData);
  }
  putAdministratorDetail() {
    return this.http.put(this.rootURL + 'api/Administrators/' + this.formData.AdminId, this.formData);
  }
  deleteAdministratorDetail(id) {
    return this.http.delete(this.rootURL + 'api/Administrators/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + 'api/Administrators')
      .toPromise()
      .then(res => this.list = res as AdministratorDetail[]);
  }
}
