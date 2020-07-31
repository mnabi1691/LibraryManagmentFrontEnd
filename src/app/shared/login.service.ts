import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:44318/';

  formModel = this.fb.group({
    Uname: ['', Validators.required],
    Upasswords: ['', Validators.required]
  });

  
  login(formData) {
    return this.http.post(this.BaseURI + 'api/Login', formData);
  }
}
