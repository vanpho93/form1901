import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css']
})

export class FormSignUpComponent implements OnInit {
  formSignUp: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: ['vanpho@gmail.com'],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
    }, { validator: passwordMustMatch });
  }

  get shouldShowPasswordError() {
    const passwordControl = this.formSignUp.get('password');
    const rePasswordControl = this.formSignUp.get('rePassword');
    return passwordControl.touched && rePasswordControl.dirty && this.formSignUp.errors && this.formSignUp.errors.passwordMustMatch;
  }
}

function passwordMustMatch(formGroup: FormGroup) {
  const passwordControl = formGroup.get('password');
  const rePasswordControl = formGroup.get('rePassword');
  if (passwordControl.value === rePasswordControl.value) return null;
  return { passwordMustMatch: true };
}
