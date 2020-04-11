import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  constructor(private er:ElementRef, private ren:Renderer) {

    this.er.nativeElement.style.color="red";
    this.ren.setElementStyle(this.er.nativeElement, 'background', 'pink');
    // this.er.nativeElement - this refers to element where directive is applied.
   }

   @HostListener('mouseenter') onmouseenter()
   {
     this.ren.setElementStyle(this.er.nativeElement, 'background', 'grey')
     this.ren.setElementStyle(this.er.nativeElement, 'fontSize', '40px')
   }
   @HostListener('mouseleave') onmouseleave()
   {
    this.ren.setElementStyle(this.er.nativeElement, 'background', 'yellow')
    this.ren.setElementStyle(this.er.nativeElement, 'fontSize', '28px')

   }

}
