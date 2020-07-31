import { Injectable } from '@angular/core';
import { BookDetail } from './book-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookDetailService {

  formData: BookDetail;
  readonly rootURL = 'https://localhost:44318/';
  list: BookDetail[];

  constructor(private http: HttpClient) { 
  }

  postBookDetail() {
    return this.http.post(this.rootURL + 'api/Books', this.formData);
  }
  putBookDetail() {
    return this.http.put(this.rootURL + 'api/Books/' + this.formData.BookId, this.formData);
  }
  deleteBookDetail(id) {
    return this.http.delete(this.rootURL + 'api/Books/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + 'api/Books')
      .toPromise()
      .then(res => this.list = res as BookDetail[]);
  }
}
