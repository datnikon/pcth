import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoTestComponent } from './components/do-test/do-test.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MaximComponent } from './components/maxim/maxim.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestComponent } from './components/test/test.component';
import { BaristaComponent } from './components/barista/barista.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { DrinkComponent } from './components/drink/drink.component';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    TestComponent,
    PageNotFoundComponent,
    DoTestComponent,
    MaximComponent,
    BaristaComponent,
    DrinksComponent,
    DrinkComponent,
    RecipeComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RecipeComponent]
})
export class AppModule { }
