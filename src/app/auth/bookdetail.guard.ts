import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { BookrequestDetailService } from './../shared/bookrequest-detail.service';

@Injectable({
  providedIn: 'root'
})
export class BookdetailGuard implements CanActivate {

  constructor(private router: Router, private toastr: ToastrService, private service: BookrequestDetailService) {
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
      this.router.navigate(['/bookrequest-details']);
      return false;
    }
  }
  
}
