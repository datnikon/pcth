import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShareModule } from './modules/share.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'test',
    loadChildren: () => import('./modules/quiz.module').then(q => q.QuizModule)
  }
  ,
  {
    path: 'pha-che',
    loadChildren: () => import('./modules/barista.module').then(b => b.BaristaModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ShareModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
