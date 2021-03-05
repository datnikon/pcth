import { Component, Input } from '@angular/core';
import { Answer, QuestionAnswer } from 'src/app/models/question.model';
@Component({
  selector: 'app-do-test',
  templateUrl: './do-test.component.html',
  styleUrls: ['./do-test.component.scss']
})
export class DoTestComponent {
  @Input() public questions: QuestionAnswer[] = [];
  public questionNumber = 0;
  public correctNumber = 0;
  public isCorrect = false;
  public isShowResult = false;
  public isSelected = false;
  public isShowAllResult = false;

  public answers: Answer[] = [];

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
    this.answers = this.shuffleAnswers(this.questions[this.questionNumber].answers);
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

  public shuffleAnswers(a: Answer[]): Answer[] {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
}
