import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ListTitlePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'listTitle',
})
export class ListTitlePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    if (!value) {
      return "Nueva Lista";
    } else {
      return value
    }
  }
}
