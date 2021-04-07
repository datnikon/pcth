import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaristaComponent } from './components/barista/barista.component';
import { DoTestComponent } from './components/do-test/do-test.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'test/:id',
    component: DoTestComponent
  },
  {
    path: 'pha-che',
    component: BaristaComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
