import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizPlayerComponent } from '../components/quiz-player/quiz-player.component';
import { QuizComponent } from '../components/quiz/quiz.component';
import { ShareModule } from './share.module';
const quizRouter: Routes = [
    {
        path: '',
        component: QuizComponent
    },
    {
        path: ':id',
        component: QuizPlayerComponent
    },

];
@NgModule({
    declarations: [QuizComponent, QuizPlayerComponent],
    imports: [CommonModule, RouterModule.forChild(quizRouter), ShareModule],
    exports: [RouterModule]

})
export class QuizModule { }
