import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHorizontalMouseScroll]'
})
export class HorizontalMouseScrollDirective {
  element: HTMLElement;
  constructor(private elRef: ElementRef) {
    this.element = this.elRef.nativeElement;
    this.element.addEventListener('wheel',( event:any) => {
      const toLeft  = event.deltaY < 0 && this.element.scrollLeft > 0
      const toRight = event.deltaY > 0 && this.element.scrollLeft < this.element.scrollWidth - this.element.clientWidth
    
      if (toLeft || toRight) {
        event.preventDefault()
        this.element.scrollLeft += event.deltaY
      }
    })
  }
}
