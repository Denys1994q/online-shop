import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appScale]',
  standalone: true
})
export class ScaleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.scale();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.shrink();
  }

  private scale() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease-in-out');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.2)');
  }

  private shrink() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease-in-out');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}
