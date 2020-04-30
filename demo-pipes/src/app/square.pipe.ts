import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(args)
    {
      return value*args;
    }
    else{
      return value*value;
    }
  }

}
