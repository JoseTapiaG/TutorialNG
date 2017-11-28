import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',

})
export class PendientesComponent implements OnInit {

  constructor(
    public _listaDeseos: ListaDeseosService,
    public navCtrl: NavController) {

    this._listaDeseos.cargarData();

  }

  ngOnInit() { }

  irAgregar() {
    this.navCtrl.push(AgregarPage);
  }
}
