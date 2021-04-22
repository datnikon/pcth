import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaximComponent } from '../components/maxim/maxim.component';
import { ScrollToTopComponent } from '../components/scroll-to-top/scroll-to-top.component';

@NgModule({
    declarations: [MaximComponent, ScrollToTopComponent],
    imports: [CommonModule],
    exports: [MaximComponent, ScrollToTopComponent]

})
export class ShareModule { }
