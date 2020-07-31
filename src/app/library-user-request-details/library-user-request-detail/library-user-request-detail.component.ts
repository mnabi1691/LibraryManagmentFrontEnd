import { Component, OnInit } from '@angular/core';
import { LibraryUserRegistrationRequestDetailsService } from './../../shared/library-user-registration-request-details.service'
import { ToastrService } from 'ngx-toastr';
import { RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-library-user-request-details',
  templateUrl: './library-user-request-detail.component.html',
  styleUrls: []
})
export class LibraryUserRequestDetailComponent implements OnInit {

  constructor(public service: LibraryUserRegistrationRequestDetailsService, public toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.flag = -1;
  }

  onUpdate(requestId: number, requestFlag: number){
    this.service.requestId = requestId;
   
    this.service.flag = requestFlag;
    this.service.putUserRequestDetail().subscribe(
      res => {
        if(requestFlag == 1){
          this.toastr.info('Submitted successfully', 'User Request Approved');
        }
        else{
          this.toastr.info('Submitted successfully', 'User Request Rejected');
        }
          this.router.navigate(['/library-user-request-details']);
      },
      err => {
        console.log(err);
      }
    )
    this.router.navigate(['/library-user-request-detail']);
  }
}
