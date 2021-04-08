import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { DrinkType } from 'src/app/models/drink-type.model';
import { drinkTypes } from '../../data/drink-types';

@Component({
  selector: 'app-barista',
  templateUrl: './barista.component.html',
  styleUrls: ['./barista.component.scss']
})
export class BaristaComponent {
  public drinkTypes: DrinkType[] = drinkTypes;
  constructor(private viewportScroller: ViewportScroller) {
  }

  public scrollTo(slug: string): void {
    this.viewportScroller.scrollToAnchor(slug);
  }
}
