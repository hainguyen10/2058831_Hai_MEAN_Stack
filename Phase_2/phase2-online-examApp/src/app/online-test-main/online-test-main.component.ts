import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionStoreService } from '../question-store.service';
import { QuestionAnswer } from '../questionsAnswers.model';
@Component({
  selector: 'app-online-test-main',
  templateUrl: './online-test-main.component.html',
  styleUrls: ['./online-test-main.component.css']
})
export class OnlineTestMainComponent implements OnInit {
  myForm:FormGroup;
  constructor(public form:FormBuilder, public checkSer:QuestionStoreService) {
    this.myForm=form.group({});
   }
   allQuestion:Array<QuestionAnswer>=[];
   resultmsg:string='';
   correctmsg:string[]=[];
   questionNumber:number=1;
   point:number=0;
  ngOnInit(): void {
    this.checkSer.addcontrol().subscribe(controlName=>{
      for(let controlN of controlName){
        this.myForm.addControl(controlN.question,this.form.control(""));
      }
    })
    this.checkSer.checkQuestionInfo().subscribe(question=>this.allQuestion=question,
      error => console.log(error),()=>console.log("Completed"));
  }
  checkWorkButton(){
    alert("Are you sure to submit")
    for(let i =0; i<this.allQuestion.length;i++){
      let userAnser = this.myForm.controls[this.allQuestion[i].question].value
      if(this.allQuestion[i].correctAns==userAnser){
        this.correctmsg.push(this.questionNumber+": Selected Answer is correct");
        this.point+=1;
      }else{
        this.correctmsg.push(this.questionNumber+": Selected Answer is wrong."+" Correct Answer is: "+this.allQuestion[i].correctAns);
      }
      this.questionNumber+=1;
    }
    if(this.point >=(this.allQuestion.length - 3)){
      this.resultmsg = this.point+"/"+this.allQuestion.length+" Pass";
    }else{
      this.resultmsg = this.point+"/"+this.allQuestion.length+" Fail";
    }
  }
}
