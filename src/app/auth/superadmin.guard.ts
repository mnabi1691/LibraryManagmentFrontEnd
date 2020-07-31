import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SuperadminGuard implements CanActivate {

  constructor(private router: Router, private toastr: ToastrService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('AdminRole') != null 
      && localStorage.getItem('AdminRole') == 'SuperAdmin'){
      return true;
    }
      else{
        this.toastr.error("You are not authorized to access this page. Please login as SuperAdmin", "Admin Page");
        //this.router.navigate(['/login']);
        return false;
      }
  }
  
}
