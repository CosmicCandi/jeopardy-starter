import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit-question',
  templateUrl: './submit-question.component.html',
  styleUrls: ['./submit-question.component.css']
})
export class SubmitQuestionComponent implements OnInit {
  @Input() questionInfo: any;
  @Output() submitQuestionEvent = new EventEmitter<void>()
  flash: string;
  score = 0;
  
  question: string;
  answer: string;

  submitQuestion() {
    if (this.question === this.questionInfo.answer) {
      this.score += this.questionInfo.value;
      this.flash = "Correct!";
    } else {
      this.flash = "Sorry, that was incorrect.";
    }
    this.submitQuestionEvent.emit();  
    //Clear the flash
    setTimeout(()=> this.clearFlash(), 2000)
 }

  clearFlash() {
    this.flash = "";
  }


  constructor() { }

  ngOnInit() {
  }

}
