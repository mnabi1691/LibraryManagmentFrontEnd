import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { browser } from 'protractor';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('AdminName');
    localStorage.removeItem('AdminId');
    localStorage.removeItem('AdminRole');
    location.reload();
   //browser.refresh();
    //this.router.navigate(['']);
  }

}

