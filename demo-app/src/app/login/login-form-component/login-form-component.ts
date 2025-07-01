import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../../about-component/about-component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import {
  
  emailValidators,
  passwordValidators,
} from '../../user/user.validation';
import { mockUser } from '../../user/mocked-used/mock.user';
import { LoginErrorComponent } from '../login-error-component/login-error-component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form-component',
  imports: [ReactiveFormsModule, LoginErrorComponent, RouterModule],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.css',
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  loginError = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', emailValidators],
      password: ['', [...passwordValidators]],
    });
  }

  onSubmit() {
  
   this.loginError = false;

    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      if (email === mockUser.email && password === mockUser.password) {
        this.authService.setToken(email);
        this.router.navigate([""])
      } else {
        this.loginError = true;
      }
    } else {
         this.loginError = true;
    }
  }
}
