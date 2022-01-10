import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
loginForm: FormGroup | any

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadForm()
    this.loginForm = this.fb.group({
      email: 'Email',
      password: 'Password'
    })
  }

  loadForm() {
    
  }

}
