import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit{

  @ViewChild('container', {static: true}) container!: ElementRef
  @ViewChild('signUp', { static: true }) signUpButton!: ElementRef;
  @ViewChild('signIn', {static: true}) signInButton!: ElementRef;
  loginForm: FormGroup | any;
  signUpForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });

    this.signUpForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required , Validators.minLength(6)]]
    }); 
  }

  login(){
    if(this.loginForm.valid){
      console.log("Login info ---> ", this.loginForm.value);
      this.router.navigate(["budget-planner/dashboard"]);
    } else {
      console.log("Pop up should be displayed here");
    }
  }

  signup(){
    if(this.signUpForm.valid){
      console.log("Reegister info ---> ", this.signUpForm.value);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(["/budeget-planner/login"]);
    } else {
      console.log("Pop up should be displayed here");
    }
  }

  isEmailLoginInvalid(): boolean {
    return this.loginForm.get('email').touched && this.loginForm.get('email').hasError('email');
}

  isEmailSignUpInvalid(): boolean {
    return this.signUpForm.get('email').touched && this.signUpForm.get('email').hasError('email');
  }

  isPasswordLoginInvalid(): boolean {
    const password = this.loginForm.get('password').value;
    if(password.length < 6){
      return this.loginForm.get('password').touched && this.loginForm.get('password').hasError('minlength')
    } else {
      return false;
    }
  }

  isUsernameSignUpInvalid(): boolean{
    const username = this.signUpForm.get('username').value;
    if(username.length < 3){
      return this.signUpForm.get('username').touched && this.signUpForm.get('username').hasError('minlength');
    } else {
      return false;
    }
  }

  isPasswordSignUpInvalid(): boolean {
    const password = this.signUpForm.get('password').value;
    if(password.length < 6){
      return this.signUpForm.get('password').touched && this.signUpForm.get('password').hasError('minlength')
    } else {
      return false;
    }
  }

  signUpDetails(): void {   
    this.container.nativeElement.classList.add('active');
    this.loginForm.get('email').setValue('');
    this.loginForm.get('password').setValue('');
  }

  loginDetails(): void {
    this.container.nativeElement.classList.remove('active');
    this.signUpForm.get('username').setValue('');
    this.signUpForm.get('email').setValue('');
    this.signUpForm.get('password').setValue('');
  }
}