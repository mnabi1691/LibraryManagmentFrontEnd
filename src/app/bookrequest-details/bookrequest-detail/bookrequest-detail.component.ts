import { Component, OnInit } from '@angular/core';
import { BookrequestDetailService } from './../../shared/bookrequest-detail.service';
import { ToastrService } from 'ngx-toastr';
import { RouterStateSnapshot, Router } from '@angular/router';


@Component({
  selector: 'app-bookrequest-detail',
  templateUrl: './bookrequest-detail.component.html',
  styles: [
  ]
})
export class BookrequestDetailComponent implements OnInit {

  constructor(public service: BookrequestDetailService, public toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.flag = -1;
  }

  onUpdate(requestId: number, requestFlag: number){
    this.service.requestId = requestId;
   
    this.service.flag = requestFlag;
    this.service.putBookRequestDetail().subscribe(
      res => {
        if(requestFlag == 1){
          this.toastr.info('Submitted successfully', 'Book Request Approved');
        }
        else if(requestFlag == 0){
          this.toastr.info('Submitted successfully', 'Book Request Rejected');
        }
        else{
          this.toastr.info('Submitted successfully', 'Book Return Processed');
        }
          this.router.navigate(['/bookrequest-details']);
      },
      err => {
        console.log(err);
      }
    )
    this.router.navigate(['/bookrequest-detail']);
  }
}
