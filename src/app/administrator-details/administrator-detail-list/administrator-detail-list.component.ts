import { Component, OnInit } from '@angular/core';
import {AdministratorDetailService} from './../../shared/administrator-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-administrator-detail-list',
  templateUrl: './administrator-detail-list.component.html',
  styles: [
  ]
})
export class AdministratorDetailListComponent implements OnInit {

  constructor(public service: AdministratorDetailService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(adminId) {
    if (confirm('Are you sure to delete this record ?')) {
      if(this.service.formData.AdminId == adminId)
      {
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
      this.service.deleteAdministratorDetail(adminId)
        .subscribe(res => {
          this.toastr.info('Submitted successfully', 'Administrator Delete');
          this.service.refreshList();
        },
        err => { 
          this.toastr.error(err.statu, "Administrator operations erro");
          console.log(err); 
        })
    }
  }


}
