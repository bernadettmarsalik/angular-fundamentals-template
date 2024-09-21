import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild('loginForm') public loginForm!: NgForm;

  loginData = {
    email: '',
    password: '',
  };

  onSubmit(loginForm: NgForm) {
    console.log('Submitting form...'); // Debug log
    console.log('Form invalid:', loginForm.invalid); // Check if form is invalid
    console.log('Form value:', loginForm.value); // Check submitted values

    if (loginForm.invalid) {
        loginForm.form.markAllAsTouched();
        console.log('Form is invalid.');
        return;
    }

    console.log('Form Submitted:', loginForm.value);
    this.loginForm.reset();

}
}