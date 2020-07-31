import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublisherDetail } from './publisher-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PublisherDetailService {

  formData: PublisherDetail;
  readonly rootURL = 'https://localhost:44318/';
  list: PublisherDetail[];

  constructor(private http: HttpClient ) { }

  postPublisherDetail() {
    return this.http.post(this.rootURL + 'api/Publishers', this.formData);
  }
  putPublisherDetail() {
    return this.http.put(this.rootURL + 'api/Publishers/' + this.formData.PublisherId, this.formData);
  }
  deletePublisherDetail(id) {
    return this.http.delete(this.rootURL + 'api/Publishers/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + 'api/Publishers')
      .toPromise()
      .then(res => this.list = res as PublisherDetail[]);
  }
}
