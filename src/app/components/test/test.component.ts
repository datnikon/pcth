import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { coffeeQuestions, glassQuestion, toolQuestions } from 'src/app/data/question';
import { QuestionAnswer } from 'src/app/models/question.model';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  public questions: QuestionAnswer[] = [];

  ngOnInit(): void {
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
}
