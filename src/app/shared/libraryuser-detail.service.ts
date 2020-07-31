import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibraryuserDetail } from './libraryuser-detail.model';


@Injectable({
  providedIn: 'root'
})
export class LibraryuserDetailService {

  detail: LibraryuserDetail;
  readonly rootURL = 'https://localhost:44318/';
  list: LibraryuserDetail[];

  constructor(private http: HttpClient) { 
  }

  
  putLibraryuserDetail() {
    return this.http.put(this.rootURL + 'api/LibraryUsers/' + this.detail.UserId, this.detail);
  }
  

  refreshList() {
    this.http.get(this.rootURL + 'api/LibraryUsers')
      .toPromise()
      .then(res => this.list = res as LibraryuserDetail[]);
  }
}
