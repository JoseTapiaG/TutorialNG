import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas'

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = [];

  constructor() {
  }

  actualizarData(){
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarData(){
    let temp = JSON.parse(localStorage.getItem("data"))
    this.listas = temp ? temp : [];
  }

  agregarLista(lista: Lista){
    this.listas.push(lista);
    this.actualizarData();
  }

  borrarLista(idx: number){
    this.listas.splice(idx, 1);
    this.actualizarData();
  }
}
