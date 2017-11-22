import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): any {
    let valueTemp = "";
    if (activar) {
      for (let i = 0; i < value.length; i++) {
        valueTemp = valueTemp + "*";
      }
      return valueTemp;
    }
    return value;
  }

}
