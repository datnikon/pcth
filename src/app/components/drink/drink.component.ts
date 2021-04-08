import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
  @Input() drink?: Drink;
  public isShowRecipe = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onClickDrink(): void {
    this.isShowRecipe = !this.isShowRecipe;
  }

}
