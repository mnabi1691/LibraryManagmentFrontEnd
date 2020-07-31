import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LibraryuserDetailService } from './../shared/libraryuser-detail.service';


@Injectable({
  providedIn: 'root'
})
export class LibraryuserdetailGuard implements CanActivate {

  
  constructor(private router: Router, private toastr: ToastrService, private service: LibraryuserDetailService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('token') != null 
      && localStorage.getItem('AdminRole') == 'SuperAdmin'
      && this.service != null)
      {
        return true;
      }
      else
      {
        this.router.navigate(['/libraryuser-details']);
        return false;
      }
  }
  
}
