import { Component, OnInit } from '@angular/core';
import { AuthorDetailService } from '../../shared/author-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styles: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  constructor(public service: AuthorDetailService, public toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
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

  onSubmit(form: NgForm) {
    if(this.service.formData.AuthorId == 0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }
  reset()
  {
    this.resetForm();
  }
  updateRecord(form: NgForm) {
    this.service.putAuthorDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Author Update');
        this.service.refreshList();
      },
      err => {
        if(err.status == 403)
        {
          this.toastr.error("You are not authorized to perform this action","Author Update");
        }
        else
        {
           this.toastr.error(err.status,"Author Update");
            console.log(err);
        }
      }
    )
  }

  insertRecord(form: NgForm) {
    this.service.postAuthorDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'New Author');
        this.service.refreshList();
      },
      err => { 
        if(err.status == 403)
        {
          this.toastr.error("You are not authorized perform this action", "New Author");
        }
        console.log(err); 
      }
    )
  }

}
