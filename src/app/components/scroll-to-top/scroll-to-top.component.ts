import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  public isShowScroll = false;
  @HostListener('window:scroll')
  public detectScroll(): void {
    if (window.pageYOffset > 30 && !this.isShowScroll) {
      this.isShowScroll = true;
      return;
    }
    if (window.pageYOffset < 30 && this.isShowScroll) {
      this.isShowScroll = false;
    }
  }

  public scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
