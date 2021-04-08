import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink';
import { drinks } from 'src/app/data/drinks';
import { DrinkType } from 'src/app/models/drink-type.model';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  @Input() type?: DrinkType;
  public drinks?: Drink[] = [];
  constructor() { }

  ngOnInit(): void {
    this.drinks = drinks.filter(drink => drink.type === this.type?.type);
  }

}
