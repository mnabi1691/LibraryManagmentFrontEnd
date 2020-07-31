import { Component, OnInit } from '@angular/core';
import { LibraryuserDetailService } from './../../shared/libraryuser-detail.service';
import { ToastrService } from 'ngx-toastr';
import { RouterStateSnapshot, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-libraryuser-detail',
  templateUrl: './libraryuser-detail.component.html',
  styles: [
  ]
})
export class LibraryuserDetailComponent implements OnInit {

  constructor(public service: LibraryuserDetailService, public toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  filterStatus(filterVal: any)
  {
    this.service.detail.AccountStatus = filterVal;
  }

  onSubmit(form: NgForm) {
    this.service.putLibraryuserDetail().subscribe(
      res => {
        this.toastr.info('Submitted successfully', 'Libraryuser Update');
        this.router.navigate(['/libraryuser-details']);
      },
      err => {
          this.toastr.error(err.status,"Libraryuser Update");
          console.log(err);
        
      }
    )
  }

}
