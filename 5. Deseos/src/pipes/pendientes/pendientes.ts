import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../app/clases/index';

/**
 * Generated class for the PendientesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(listas: Lista[], terminada: boolean = false): Lista[] {

    let nuevaLista: Lista[] = [];

    for (let lista of listas) {
      if (lista.terminada == terminada) {
        nuevaLista.push(lista);
      }
    }

    return nuevaLista;
  }
}
