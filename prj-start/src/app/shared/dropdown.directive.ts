import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() {
  }

  @HostBinding('class.open') open: boolean = false;

  @HostListener('click') click() {
    this.open = !this.open;
  }

  @HostListener('mouseleave') leave(){
    this.open = false;
  }

}
