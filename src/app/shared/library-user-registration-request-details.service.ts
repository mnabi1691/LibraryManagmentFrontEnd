import { Injectable } from '@angular/core';
import { LibraryUserRegistrationRequestDetail } from './library-user-registration-request-detail.model';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LibraryUserRegistrationRequestDetailsService {

  requestId: number;
  readonly rootURL = 'https://localhost:44318/';
  list: LibraryUserRegistrationRequestDetail[];
  flag: number;
  detail: LibraryUserRegistrationRequestDetail;

  constructor(private http: HttpClient) { }

  putUserRequestDetail() {
    return this.http.put(this.rootURL + 'api/LibraryUserRegistrationRequests/' + this.requestId, this.flag);
  }

  refreshList() {
    this.http.get(this.rootURL + 'api/LibraryUserRegistrationRequests')
      .toPromise()
      .then(res => this.list = res as LibraryUserRegistrationRequestDetail[]);
  }
}