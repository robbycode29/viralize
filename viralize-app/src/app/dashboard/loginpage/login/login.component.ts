import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { groupBy } from 'rxjs/internal/operators/groupBy';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  loginForm: FormGroup | any

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  logIn() {
    console.log(this.email.value, this.password.value)
  }
}
