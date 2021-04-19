import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaristaComponent } from '../components/barista/barista.component';
import { DrinkComponent } from '../components/drink/drink.component';
import { DrinksComponent } from '../components/drinks/drinks.component';
import { RecipeComponent } from '../components/recipe/recipe.component';
import { ScrollToTopComponent } from '../components/scroll-to-top/scroll-to-top.component';

const baristaRoters: Routes = [
    {
        path: '',
        component: BaristaComponent
    }
];

@NgModule({
    declarations: [
        BaristaComponent,
        DrinksComponent,
        RecipeComponent,
        ScrollToTopComponent,
        DrinkComponent,
    ],
    imports: [CommonModule, RouterModule.forChild(baristaRoters)],
    exports: [RouterModule]

})
export class BaristaModule { }
