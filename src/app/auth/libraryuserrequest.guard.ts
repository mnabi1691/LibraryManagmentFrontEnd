import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LibraryUserRegistrationRequestDetailsService } from './../shared/library-user-registration-request-details.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryUserRequestGuard implements CanActivate {

  constructor(private router: Router, private toastr: ToastrService, private service: LibraryUserRegistrationRequestDetailsService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('token') != null && this.service.detail != null)
    {
      return true;
    }
    else
    {
      this.router.navigate(['/library-user-request-details']);
      return false;
    }
  }
  
}
