import { Component, OnInit } from '@angular/core';
import {AdministratorDetailService} from './../shared/administrator-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-administrator-details',
  templateUrl: './administrator-details.component.html',
  styles: [
  ]
})
export class AdministratorDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
