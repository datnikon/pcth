import { Component, Input, OnInit } from '@angular/core';

export interface QuestionAnswer {
  title: string;
  answers: Answer[];
  img?: string;
}

export interface Answer {
  title: string;
  isCorrect?: boolean;
}

@Component({
  selector: 'app-do-test',
  templateUrl: './do-test.component.html',
  styleUrls: ['./do-test.component.scss']
})
export class DoTestComponent implements OnInit {
  @Input() public questions: QuestionAnswer[] = [];
  public questionNumber = 0;
  public correctNumber = 0;
  public isCorrect = false;
  public isShowResult = false;
  public isSelected = false;
  public isShowAllResult = false;


  ngOnInit(): void {
  }

  handleChange(isCorrect: any): void {
    this.isSelected = true;
    this.isCorrect = isCorrect === true;
  }

  canShowCheck(): boolean {
    return !this.isShowResult;
  }

  doCheck(): void {
    this.isShowResult = !this.isShowResult;
    if (this.isCorrect) {
      this.correctNumber++;
    }
  }
  canShowViewResult(): boolean {
    return this.isShowResult && this.questionNumber === this.questions.length - 1;
  }

  showResult(): void {
    this.isShowAllResult = true;
  }

  canShowNextQuestion(): boolean {
    return this.isShowResult && this.questionNumber < this.questions.length - 1;
  }

  nextQuestion(): void {
    this.questionNumber++;
    this.isSelected = false;
    this.isShowResult = false;
  }

  public reset(): void {
    this.questionNumber = 0;
    this.correctNumber = 0;
    this.isShowResult = false;
    this.isSelected = false;
    this.isShowAllResult = false;
  }


}
