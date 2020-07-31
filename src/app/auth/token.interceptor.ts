import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, public toastr: ToastrService) {}

  

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('token') != null)
    {
      const clonedReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        });

        return next.handle(clonedReq).pipe(
          tap(
              succ => { },
              err => {
                  if (err.status == 401){
                      localStorage.removeItem('token');
                      this.router.navigateByUrl('/login');
                  }
                  if(err.status == 403)
                  {
                    this.toastr.warning("You do not have permission to perform this operation", "Unathorized operation");
                  }
              }
          )
      )
    }
    else
    {
       return next.handle(request.clone());
    }
  }
}
