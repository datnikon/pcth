import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheoryComponent } from '../components/theory/theory.component';
import { ShareModule } from './share.module';
const quizRouter: Routes = [
    {
        path: '',
        component: TheoryComponent
    }
];
@NgModule({
    declarations: [TheoryComponent],
    imports: [RouterModule.forChild(quizRouter), ShareModule],
    exports: [RouterModule]
})
export class TheoryModule { }
