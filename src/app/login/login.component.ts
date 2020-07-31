import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../shared/login.service'
import { browser } from 'protractor';
import { NgLocalization } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  formModel = {
    Uname: '',
    Upassword: ''
  }

  constructor(private service: LoginService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        let jwtData = res.token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);

        let AdminId = decodedJwtData.AdminId;
        let AdminName = decodedJwtData.AdminName
        let AdminRole = decodedJwtData.AdminRole;

        localStorage.setItem('token', res.token);
        localStorage.setItem('AdminId', AdminId);
        localStorage.setItem('AdminName', AdminName);
        localStorage.setItem('AdminRole', AdminRole);

        location.reload();
       // this.router.navigateByUrl('');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }
}
