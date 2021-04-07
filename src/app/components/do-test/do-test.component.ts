import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer, QuestionAnswer } from 'src/app/models/question.model';
import { coffeeQuestions, glassQuestion, toolQuestions, syrupQuestions, liqueurSpirit, teaQuestion } from 'src/app/data/question';
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
  constructor(private route: ActivatedRoute) { }
  public answers: Answer[] = [];

  ngOnInit(): void {
    this.processQuestion();
    this.answers = this.shuffleAnswers(this.questions[this.questionNumber].answers);
  }

  processQuestion(): void {
    this.route.params.subscribe(params => {
      switch (params.id) {
        case 'coffee':
          this.questions = coffeeQuestions;
          break;
        case 'glass':
          this.questions = this.shuffleArray(glassQuestion);
          break;
        case 'tool':
          this.questions = this.shuffleArray(toolQuestions);
          break;
        case 'syrup':
          this.questions = syrupQuestions;
          break;
        case 'liqueur-spirit':
          this.questions = liqueurSpirit;
          break;
        case 'tea':
          this.questions = teaQuestion;
          break;
        default:
          this.questions = coffeeQuestions;
      }
    });
  }

  public shuffleArray(a: QuestionAnswer[]): QuestionAnswer[] {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
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
