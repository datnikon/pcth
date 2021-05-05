import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaximComponent } from '../components/maxim/maxim.component';
import { ScrollToTopComponent } from '../components/scroll-to-top/scroll-to-top.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MaximComponent, ScrollToTopComponent],
    exports: [MaximComponent, ScrollToTopComponent]

})
export class ShareModule { }
