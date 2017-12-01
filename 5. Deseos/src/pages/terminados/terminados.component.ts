import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {

  constructor(
    public _listaDeseos: ListaDeseosService,
    public navCtrl: NavController) {

    this._listaDeseos.cargarData();

  }

  ngOnInit() { }

  irAgregar() {
    this.navCtrl.push(AgregarPage);
  }

  verDetalle(lista, i) {
    this.navCtrl.push(DetallePage, {
      lista,
      i
    });
  }
}
