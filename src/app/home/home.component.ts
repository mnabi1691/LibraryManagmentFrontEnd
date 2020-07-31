import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  adminName : string;
  adminRole: string;
  adminId: string;

  ngOnInit(): void {
    if(localStorage.getItem("AdminName") != null)
    {
      this.adminName = localStorage.getItem("AdminName");
      this.adminRole = localStorage.getItem("AdminRole");
      this.adminId = localStorage.getItem("AdminId");
    }
    else
    {
      this.adminName = null;
      this.adminRole = null;
      this.adminId = null;
    }
  }

}
