import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-error-component',
  imports: [],
  templateUrl: './login-error-component.html',
  styleUrl: './login-error-component.css'
})
export class LoginErrorComponent {
@Input() form!: FormGroup
@Input() loginError = false;

get email() {
  return this.form?.get('email')
}

get password(){
  return this.form?.get('password')
}

}
