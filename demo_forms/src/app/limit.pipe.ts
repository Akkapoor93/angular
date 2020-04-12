import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  arr=[];
  transform(value: any, args: any): any {
    if(args)
    {
      for(let i=0; i<args; i++)
      {
        this.arr.push(value[i])
      }
      return this.arr;
    }
    else
    {
      return value;
    }
  }

}
