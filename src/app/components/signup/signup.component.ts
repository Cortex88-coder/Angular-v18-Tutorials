import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  userForm!: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      middlename: new FormControl(''),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),

      // Password must contain at least 10 and at most 20 characters, one uppercase letter, one lowercase letter, one number, and one special character
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/
        ),
      ]),
    });
  }

  handleFormSubmit() {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) return console.log('Invalid form');
  }
}
