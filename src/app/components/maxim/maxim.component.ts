import { Component, Input, OnChanges } from '@angular/core';
import { maxims } from 'src/app/data/maxims';
import { Maxim } from 'src/app/models/maxim.model';
@Component({
  selector: 'app-maxim',
  templateUrl: './maxim.component.html',
  styleUrls: ['./maxim.component.scss']
})
export class MaximComponent implements OnChanges {
  public maxims: Maxim[] = maxims;

  @Input() public index: number = Math.floor(Math.random() * this.maxims.length);
  public ngOnChanges(): void {
    this.index = Math.floor(Math.random() * this.maxims.length);
  }
}
