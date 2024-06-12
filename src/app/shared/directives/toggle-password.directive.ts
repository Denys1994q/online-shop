import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[togglePassword]',
  standalone: true
})
export class TogglePasswordDirective {
  private _shown = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const parent = this.el.nativeElement.parentNode;
    parent.classList.add('flex');
    const matIcon = document.createElement('mat-icon');
    matIcon.classList.add('mat-icon', 'notranslate', 'material-icons', 'mat-ligature-font', 'mat-icon-no-color', 'cursor-pointer');
    matIcon.setAttribute('role', 'img');
    matIcon.setAttribute('aria-hidden', 'true');
    matIcon.setAttribute('data-mat-icon-type', 'font');
    matIcon.textContent = 'visibility_off';
    parent.appendChild(matIcon);
    matIcon.addEventListener('click', () => {
      this.toggle(matIcon);
    });
  }

  toggle(matIcon: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      matIcon.textContent = 'visibility';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      matIcon.textContent = 'visibility_off';
    }
  }
}
