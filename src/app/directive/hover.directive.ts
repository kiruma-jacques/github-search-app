import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor( private elem:ElementRef) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.overlay("rgba(110, 126, 141, 0.527)");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.overlay(null);
  }

  private overlay(color: any) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
