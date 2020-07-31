import { Component, OnInit } from '@angular/core';
import { AuthorDetailService } from '../../shared/author-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-author-detail-list',
  templateUrl: './author-detail-list.component.html',
  styles: []
})
export class AuthorDetailListComponent implements OnInit {

  constructor(public service: AuthorDetailService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(authorId) {
    if (confirm('Are you sure to delete this record ?')) {
      if(this.service.formData.AuthorId == authorId)
      {
        this.service.formData = {
          AuthorId:0,
          FirstName: '',
          LastName: '',
          HomeAddress: '',
          City: '',
          State: '',
          Country: ''
        }
      }
      this.service.deleteAuthorDetail(authorId)
        .subscribe(res => {
          this.toastr.info('Submitted successfully', 'Author Delete');
          this.service.refreshList();
        },
        err => { console.log(err); })
    }
  }

}
