import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ListaItem, Lista } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  i: number;
  lista: Lista;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _listaDeseosService: ListaDeseosService,
    public alertCtrl: AlertController
  ) {
    this.i = navParams.get("i");
    this.lista = navParams.get("lista");
  }

  actualizar(item: ListaItem) {
    item.completo = !item.completo;

    let todosTerminados = true;
    for (let item of this.lista.items) {
      if(!item.completo){
        todosTerminados = false;
        break;
      }
    }
    this.lista.terminada = todosTerminados;
    this._listaDeseosService.actualizarData();
  }

  borrarLista() {
    let confirm = this.alertCtrl.create({
      title: 'Borrar lista',
      message: `¿Está seguro que desea borrar la lista ${this.lista.nombre}?`,
      buttons: [
        'Cancelar',
        {
          text: 'Aceptar',
          handler: () => {
            this._listaDeseosService.borrarLista(this.i);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();

  }

}
