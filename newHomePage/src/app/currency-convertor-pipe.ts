import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor'
})
export class CurrencyConvertorPipe implements PipeTransform {

  // here the args is used as a parameter.
  transform(value: number, ...args: number[]): unknown {
    console.log("args: ", args);
    let [data] = args;
    return value*(data || 85);
  }

}
