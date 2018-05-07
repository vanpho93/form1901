import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
      email: new FormControl('vanpho01@gmail.com'),
      password: new FormControl(),
    });
  }

}
