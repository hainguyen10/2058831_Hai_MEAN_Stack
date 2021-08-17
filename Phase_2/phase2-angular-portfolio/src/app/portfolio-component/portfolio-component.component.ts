import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PersonalNamePhoneRec } from '../PersonalInfoRecord.model';
import {portfolioShareMethod} from '../portfolioSharedMethod.service'

@Component({
  selector: 'app-portfolio-component',
  templateUrl: './portfolio-component.component.html',
  styleUrls: ['./portfolio-component.component.css']
})
export class PortfolioComponentComponent implements OnInit {
  portfolioFormShow?:boolean;
  constructor(public pR: portfolioShareMethod) { }
  ngOnInit(): void {}
  msg:string='';
  addportfolioPersonalRecord: Array<PersonalNamePhoneRec>=[]
  showPersonalRecord: Array<PersonalNamePhoneRec>=[]

  loadData(){
    this.portfolioFormShow = this.pR.getPortfolioFormShow();
    if(this.portfolioFormShow != undefined){
      this.msg = this.pR.getwelcomeUser();
      console.log(this.msg);
    }
  }
  addName(nameRef:any, phoneRef:any){
    let per1:PersonalNamePhoneRec={personName:nameRef.value,personPhoneNumb: phoneRef.value};
    this.addportfolioPersonalRecord.push(per1);
    this.pR.setPhoneNameArray(this.addportfolioPersonalRecord);
  }
  showPersonalInfoData(){
    this.showPersonalRecord = this.pR.getPhoneNameArray();
  }
}
