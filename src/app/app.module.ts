import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormSignUpComponent } from './form-sign-up/form-sign-up.component';
import { PipeExamComponent } from './pipe-exam/pipe-exam.component';
import { MyJsonPipe } from './my-json.pipe';
import { RoundPipe } from './round.pipe';
import { SortAgePipe } from './sort-age.pipe';
import { SortPropPipe } from './sort-prop.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    FormSignUpComponent,
    PipeExamComponent,
    MyJsonPipe,
    RoundPipe,
    SortAgePipe,
    SortPropPipe
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
