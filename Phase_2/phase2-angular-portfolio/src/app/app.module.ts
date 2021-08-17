import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    PortfolioComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
