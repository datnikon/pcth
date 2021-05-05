import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaristaComponent } from '../components/barista/barista.component';
import { DrinkComponent } from '../components/drink/drink.component';
import { DrinksComponent } from '../components/drinks/drinks.component';
import { RecipeComponent } from '../components/recipe/recipe.component';
import { ShareModule } from './share.module';

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
        DrinkComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(baristaRoters),
        ShareModule,
    ],
    exports: [RouterModule]

})
export class BaristaModule { }
