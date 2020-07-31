import { Component, OnInit } from '@angular/core';
import { PublisherDetailService } from '../../shared/publisher-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-publisher-detail',
  templateUrl: './publisher-detail.component.html',
  styles: [
  ]
})
export class PublisherDetailComponent implements OnInit {

  constructor(public service: PublisherDetailService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      PublisherId:0,
      PublisherName:'',
      City: '',
      State: '',
      Country: ''
    }
  }

  onSubmit(form: NgForm) {
    if(this.service.formData.PublisherId == 0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }

  updateRecord(form: NgForm) {
    this.service.putPublisherDetail().subscribe(
      res => {
        this.resetForm(form);
       // this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  insertRecord(form: NgForm) {
    this.service.postPublisherDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }

  reset()
  {
    this.resetForm();
  }

}
