import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('400ms', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('400ms', style({ transform: 'scale(0)', opacity: 0 }))
      ])
    ]
    )
  ]
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
