import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formSignIn: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formSignIn = this.fb.group({
      email: ['', [Validators.required, gmail]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  signIn() {
    console.log(this.formSignIn.get('email'));
  }

  get emailInvalid() {
    const emailControl = this.formSignIn.get('email');
    return emailControl.touched && emailControl.invalid;
  }

  get emailErrorMessage() {
    const emailControl = this.formSignIn.get('email');
    const { gmail, required } = emailControl.errors;
    if (required) return 'Email không được bỏ trống';
    if (gmail) return 'Email phải là gmail';
  }

  get passwordInvalid() {
    const passwordControl = this.formSignIn.get('password');
    return passwordControl.touched && passwordControl.invalid;
  }
}

function gmail(control: FormControl) {
  const value: string = control.value;
  const isGmail = value.trim().endsWith('@gmail.com');
  return isGmail ? null : { gmail: true };
}
