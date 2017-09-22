import { Component, OnInit } from '@angular/core';
import {JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy';
  answer: string;
  flash: string;
  question: string;
  questionInfo;
  score = 0;

  submitQuestion(question) {
    if (question === this.questionInfo.answer) {
      this.score += this.questionInfo.value;
      this.flash = "Correct!";
    } else {
      this.flash = "Sorry, that was incorrect.";
    }
    this.getDataFromService()
    //Clear the flash
    setTimeout(()=> this.clearFlash(), 2000)
 }

  clearFlash() {
    this.flash = "";
  }

  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];

        }
      )
  }

  ngOnInit(){
    this.getDataFromService()
  }

}
