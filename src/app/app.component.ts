import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'LibraryManagementAdministration';

  constructor(private router: Router) {
  }

  ngOnInit() {

    window.addEventListener('storage', (event) => {
        if (event.storageArea == localStorage) {
             let token = localStorage.getItem('token_name');
             if(token == undefined) { 
               // Perform logout
               //Navigate to login/home
               location.reload();
                this.router.navigate(['']); 
             }
        }
    });
  }

}
