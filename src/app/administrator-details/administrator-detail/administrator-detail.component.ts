import { Component, OnInit } from '@angular/core';
import {AdministratorDetailService} from './../../shared/administrator-detail.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administrator-detail',
  templateUrl: './administrator-detail.component.html',
  styles: [
  ]
})
export class AdministratorDetailComponent implements OnInit {

  constructor(public service: AdministratorDetailService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
          AdminId: 0,
          FirstName: '',
          LastName: '',
          Nidno: '',
          PassportNo: '',
          Email: '',
          MobileNo: '',
          HomeAddress: '',
          City: '',
          Country: '',
          Uname: '',
          Upassword: '',
          AccountStatus: '',
          AdminLevel: -1
    }
  }

  updateRecord(form: NgForm) {
    this.service.putAdministratorDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Administrator Update');
        this.service.refreshList();
      },
      err => {
        if(err.status == 403)
        {
          this.toastr.error("You are not authorized to perform this action","Administrator Update");
        }
        else
        {
           this.toastr.error(err.status,"Administrator Update");
            console.log(err);
        }
      }
    )
  }

  insertRecord(form: NgForm) {
    console.log(form);
    this.service.postAdministratorDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'New Administrator');
        this.service.refreshList();
      },
      err => { 
        if(err.status == 403)
        {
          this.toastr.error("You are not authorized perform this action", "New Administrator");
        }
        else{
          this.toastr.error(err.status, "New Administrator Insert");
           console.log(err); 
        }
      }
    )
  }

  reset()
  {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if(this.service.formData.AdminId == 0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }

}
