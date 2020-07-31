import { Component, OnInit } from '@angular/core';
import { BookrequestDetailService } from './../shared/bookrequest-detail.service';
import { ToastrService } from 'ngx-toastr';
import { RouterStateSnapshot, Router } from '@angular/router';


@Component({
  selector: 'app-bookrequest-details',
  templateUrl: './bookrequest-details.component.html',
  styles: []
})
export class BookrequestDetailsComponent implements OnInit {

  constructor(public service: BookrequestDetailService, public toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.detail = Object.assign({}, selectedRecord);
    this.router.navigate(['/bookrequest-detail']);
  }


}
