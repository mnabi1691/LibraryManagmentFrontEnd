import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookrequestDetail } from './bookrequest-detail.model';


@Injectable({
  providedIn: 'root'
})
export class BookrequestDetailService {

 requestId: number;
  readonly rootURL = 'https://localhost:44318/';
  list: BookrequestDetail[];
  flag: number;
  detail: BookrequestDetail;

  constructor(private http: HttpClient) { }

  putBookRequestDetail() {
    return this.http.put(this.rootURL + 'api/Requests/' + this.requestId, this.flag);
  }
  
  refreshList() {
    this.http.get(this.rootURL + 'api/Requests')
      .toPromise()
      .then(res => this.list = res as BookrequestDetail[]);
  }
}
