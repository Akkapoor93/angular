import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class StrDirective {

  constructor(private view:ViewContainerRef, private temp:TemplateRef<any>) { }

  @Input() set myIf(shouldadd)
  {
    if(shouldadd)
    {
      this.view.createEmbeddedView(this.temp);
    }
    else{
      this.view.clear()
    }
  } 

}
