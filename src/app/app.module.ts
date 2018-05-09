import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormSignUpComponent } from './form-sign-up/form-sign-up.component';
import { PipeExamComponent } from './pipe-exam/pipe-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    FormSignUpComponent,
    PipeExamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
