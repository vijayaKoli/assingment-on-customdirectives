import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  
  constructor(private ele:ElementRef) {}
  

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('blue');
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('yellow');
  }

  setcolor(color:string)
  {
    this.ele.nativeElement.style.background=color;
  }
}



