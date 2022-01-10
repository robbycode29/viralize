import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginBtn: any
  signupBtn: any
  formContainer: any
  login: any
  signup: any

  constructor() { }

  ngOnInit(): void {
    this.loginBtn = document.getElementById('loginBtn') 
    this.signupBtn = document.getElementById('signupBtn')
    this.formContainer = document.getElementById('form-container')
    this.login = document.getElementById('login')
    this.signup = document.getElementById('signup')
  }

  switchToLogin() {
    this.loginBtn?.classList.add("border-b-2", "border-gray-500")
    this.signupBtn?.classList.remove("border-b-2", "border-gray-500")
    this.signup.style.display = 'none'
    this.login.style.display = 'flex'
  }

  switchToSignup() {
    this.loginBtn?.classList.remove("border-b-2", "border-gray-500")
    this.signupBtn?.classList.add("border-b-2", "border-gray-500")
    this.login.style.display = 'none'
    this.signup.style.display = 'flex'
  }

}
