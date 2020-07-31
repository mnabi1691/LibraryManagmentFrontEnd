import { Component, OnInit } from '@angular/core';
import { LibraryuserDetailService } from './../shared/libraryuser-detail.service';
import { ToastrService } from 'ngx-toastr';
import { RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-libraryuser-details',
  templateUrl: './libraryuser-details.component.html',
  styles: [
  ]
})
export class LibraryuserDetailsComponent implements OnInit {

  constructor(public service: LibraryuserDetailService, public toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    this.service.detail = Object.assign({}, selectedRecord);
    this.router.navigate(['/libraryuser-detail']);
  }

}
