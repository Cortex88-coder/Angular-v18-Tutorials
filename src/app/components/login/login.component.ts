import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgStyle } from '@angular/common';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgStyle],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userForm!: FormGroup;

  bgImgUrl = "url('/images/2150472996.jpg')";

  constructor() {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  handleSubmit() {
    this.userForm.markAllAsTouched();
  }
}
