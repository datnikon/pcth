import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() drink?: Drink;
  constructor() { }

  ngOnInit(): void {
  }

}
