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
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(4)]]
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
    const passwordControl = this.formSignIn.get('password');
    return passwordControl.touched && passwordControl.invalid;
  }
}
