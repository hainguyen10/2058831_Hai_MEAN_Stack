import { Injectable } from "@angular/core";
import { PersonalNamePhoneRec } from "./PersonalInfoRecord.model";
import { UserRecord } from "./userlogin.model";
@Injectable({
    providedIn: 'root'  // it is equal to provider attribute in app.module.ts file 
})
export class portfolioShareMethod {
    loginFormShow:boolean = true;
    portfolioFormShow?:boolean;
    signUpFormShow?:boolean;
    currentUser?:any;
    //userRecords: Array<UserRecord> = [];
    personalNamePhone:Array<PersonalNamePhoneRec> =[];
    constructor(){}
    //Setter and Getter Started
    setLoginFormShow(result:boolean){
        this.loginFormShow = result;}
    getLoginFormShow(){
        return this.loginFormShow;}
    setPortfolioFormShow(result:boolean){
        this.portfolioFormShow = result;}
    getPortfolioFormShow(){
        return this.portfolioFormShow}
    setSignUpFormShow(result:boolean){
        this.signUpFormShow = result;}
    getSignUpFormShow(){
        return this.signUpFormShow;}
    //End Getter and Setter
    //
    user1:UserRecord = {fname:'John',lname:'Conner',username:'johnC',password:'456'};
    user2:UserRecord = {fname:'Mary',lname:'Alay',username:'MaryA',password:'123'};
    user3:UserRecord ={fname:'Sanchez',lname:'Scott',username:'SanchezS',password:'321'};
    userRecords =[this.user1,this.user2,this.user3];
    //
    registerStoreUserRecord(fname:any,lname:any,username:any, password:any){
        let user:UserRecord={fname:fname,lname:lname,username:username,password:password};
        this.userRecords.push(user);
    }
    checkUserValidation(login:any): boolean{
        for(let i =0; i <this.userRecords.length;i++){
        if(login.user==this.userRecords[i].username && login.pass==this.userRecords[i].password){
            return true;
        } else {}
        }
        return false  
    }
    setwelcomeUser(login:any){
        this.currentUser = login;}
    getwelcomeUser(){
        return this.currentUser.user;}
    setPhoneNameArray(recordp:Array<PersonalNamePhoneRec>):void{
        this.personalNamePhone = recordp;
    }
    getPhoneNameArray(){
        return this.personalNamePhone;
    }
}
