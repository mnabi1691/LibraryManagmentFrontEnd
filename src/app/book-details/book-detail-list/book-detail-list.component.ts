import { Component, OnInit } from '@angular/core';
import { BookDetailService } from './../../shared/book-detail.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-book-detail-list',
  templateUrl: './book-detail-list.component.html',
  styles: [
  ]
})
export class BookDetailListComponent implements OnInit {

  constructor(public service: BookDetailService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(bookId) {
    if (confirm('Are you sure to delete this record ?')) {
      if(this.service.formData.BookId == bookId)
      {
        this.service.formData = {
          BookId: 0,
          Tittle: '',
          BookType:  '',
          BookDescription:  '',
          AuthId:  0,
          PubId: 0,
          BookStatus: 'Available',
          Auth: null,
          Pub: null,
        }
      }
      this.service.deleteBookDetail(bookId)
        .subscribe(res => {
          this.toastr.info('Submitted successfully', 'Author Delete');
          this.service.refreshList();
        },
        err => { console.log(err); })
    }
  }

}
