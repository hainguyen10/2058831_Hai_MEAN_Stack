import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {portfolioShareMethod} from '../portfolioSharedMethod.service'
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginRef = new FormGroup({
    user: new FormControl("",[Validators.required]),
    pass: new FormControl("",[Validators.required])
  })
  constructor(public uR: portfolioShareMethod) {}   
   msg:string='';
   loginformShow?:boolean = this.uR.getLoginFormShow();
   userValidCheck:boolean = false;
  ngOnInit(): void {
  }
  loadLoginPage(){
    this.loginformShow = this.uR.getLoginFormShow();
  }
  checkUser(){
    let login = this.loginRef.value
    this.userValidCheck = this.uR.checkUserValidation(login);
    if(this.userValidCheck == true){
      this.uR.setLoginFormShow(false);
      this.loginformShow = this.uR.getLoginFormShow();
      this.uR.setPortfolioFormShow(true);
      this.uR.setwelcomeUser(login);
      //let resultBolean = this.uR.getPortfolioFormShow();
      //console.log("AFter set portfolio from: "+resultBolean)
      alert("Successfully Login!")
    }else{
      this.msg  = "Incorrect!!! Try once again..!"
    }
    this.loginRef.reset();
  }
  registerAccount(){
    this.uR.setLoginFormShow(false);
    this.loginformShow = this.uR.getLoginFormShow();
    this.uR.setSignUpFormShow(true);
  }
}
