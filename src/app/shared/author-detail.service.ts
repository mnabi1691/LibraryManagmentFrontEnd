import { Injectable } from '@angular/core';
import { AuthorDetail } from './author-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorDetailService {

  formData: AuthorDetail;
  readonly rootURL = 'https://localhost:44318/';
  list: AuthorDetail[];

  constructor(private http: HttpClient) { }

  postAuthorDetail() {
    return this.http.post(this.rootURL + 'api/Authors', this.formData);
  }
  putAuthorDetail() {
    return this.http.put(this.rootURL + 'api/Authors/' + this.formData.AuthorId, this.formData);
  }
  deleteAuthorDetail(id) {
    return this.http.delete(this.rootURL + 'api/Authors/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + 'api/Authors')
      .toPromise()
      .then(res => this.list = res as AuthorDetail[]);
  }
}
