import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formSignIn: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formSignIn = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(4)),
    });
  }

  signIn() {
    console.log(this.formSignIn);
  }

  get emailInvalid() {
    const emailControl = this.formSignIn.get('email');
    return emailControl.touched && emailControl.invalid;
  }

  get passwordInvalid() {
    return this.formSignIn.get('password').invalid;
  }
}
