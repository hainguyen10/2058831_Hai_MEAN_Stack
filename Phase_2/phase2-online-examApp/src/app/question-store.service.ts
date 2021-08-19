import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionAnswer } from './questionsAnswers.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionStoreService {
  constructor(public http: HttpClient) { }

  checkQuestionInfo():Observable<QuestionAnswer[]>{
    return this.http.get<QuestionAnswer[]>("/assets/testQues.json");
  }
  addcontrol():Observable<QuestionAnswer[]>{
    return this.http.get<QuestionAnswer[]>("/assets/testQues.json");
  }
}
