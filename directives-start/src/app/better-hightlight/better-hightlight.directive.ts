import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() higtlightColor: string = 'blue';
  @Output('outer') outer = new EventEmitter();

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
  ) {
  }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.higtlightColor;
    this.outData(this.backgroundColor);
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
    this.outData(this.backgroundColor);
  }

  outData(data) {
    this.outer.emit(data);
  }

}
