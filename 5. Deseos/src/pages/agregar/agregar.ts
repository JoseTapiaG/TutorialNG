import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { ListaItem, Lista } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public _listaDeseosService: ListaDeseosService
  ) {
  }

  nombreLista: string = "";
  nombreItem: string = "";

  items: ListaItem[] = [];


  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  agregar() {
    if (this.nombreItem.length == 0) {
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);

    this.nombreItem = '';
  }

  eliminar(index: number) {
    this.items.splice(index, 1);
  }

  guardarLista(){
    if(this.nombreLista.length == 0){
      let alert = this.alertController.create({
        title: 'Nombre de la lista',
        subTitle: 'El nombre de la lista es necesario',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let lista = new Lista(this.nombreLista);
    lista.items = this.items;
    this._listaDeseosService.agregarLista(lista);
    this.navCtrl.pop();
  }

}
