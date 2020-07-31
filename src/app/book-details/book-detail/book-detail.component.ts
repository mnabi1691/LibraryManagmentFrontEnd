import { Component, OnInit } from '@angular/core';
import { BookDetailService } from './../../shared/book-detail.service';
import { ToastrService } from 'ngx-toastr';
import { AuthorDetailService } from './../../shared/author-detail.service';
import { PublisherDetailService } from './../../shared/publisher-detail.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styles: [
  ]
})
export class BookDetailComponent implements OnInit {
  constructor(public service: BookDetailService, 
    public authorService: AuthorDetailService, 
    public publisherService: 
    PublisherDetailService, 
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.authorService.refreshList();
    this.publisherService.refreshList();
    this.resetForm();
  }

  reset()
  {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      BookId: 0,
      Tittle: '',
      BookType: '',
      BookDescription: '',
      AuthId: 0,
      PubId: 0,
      BookStatus: 'Available',
      Auth: null,
      Pub: null
    }
  }
  filterPublisher(filterVal: any){
    this.service.formData.PubId = filterVal;
  }

  filterAuthor(filterVal: any){
    this.service.formData.AuthId = filterVal;
  }

  insertRecord(form: NgForm) {
    this.service.postBookDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'New Book');
        this.service.refreshList();
      },
      err => { 
        console.log(err); 
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putBookDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Book Update');
        this.service.refreshList();
      },
      err => {
          this.toastr.error(err.status,"Book Update");
          console.log(err);
        
      }
    )
  }

  onSubmit(form: NgForm) {
    if(this.service.formData.BookId == 0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }

}
