import { Component, OnInit } from '@angular/core';
import { portfolioShareMethod } from '../portfolioSharedMethod.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {
  regisRef = new FormGroup({
    user: new FormControl("",[Validators.required]),
    pass: new FormControl("",[Validators.required])
  })
  constructor(public uR: portfolioShareMethod) { }
  ngOnInit(): void {
  }
  signUpFormShow?:boolean= this.uR.getSignUpFormShow();
  loadPage(){
    this.signUpFormShow = this.uR.getSignUpFormShow();
  }
  registerUser(fname:any,lname:any,){
    let regis = this.regisRef.value
    this.uR.registerStoreUserRecord(fname,lname,regis.user,regis.pass);
    alert("Register Successful!!")
    this.uR.setSignUpFormShow(false);
    this.uR.setLoginFormShow(true);
    this.signUpFormShow = this.uR.getSignUpFormShow();
  }


}
