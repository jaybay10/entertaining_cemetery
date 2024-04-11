import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  @ViewChild('container', {static: true}) container!: ElementRef
  @ViewChild('signUp', { static: true }) signUpButton!: ElementRef;
  @ViewChild('signIn', {static: true}) signInButton!: ElementRef;

  SignUp(): void {   
    this.container.nativeElement.classList.add('active');
  }

  SignIn(): void {
    this.container.nativeElement.classList.remove('active')
  }

}
