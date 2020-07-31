import { Component, OnInit } from '@angular/core';
import { LibraryUserRegistrationRequestDetailsService } from './../shared/library-user-registration-request-details.service';
import { ToastrService } from 'ngx-toastr';
import { RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-library-user-request-details',
  templateUrl: './library-user-request-details.component.html',
  styleUrls: ['./library-user-request-details.component.css']
})
export class LibraryUserRequestDetailsComponent implements OnInit {

  constructor(public service: LibraryUserRegistrationRequestDetailsService, public toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.detail = Object.assign({}, selectedRecord);
    this.router.navigate(['/library-user-request-detail']);
  }

}





