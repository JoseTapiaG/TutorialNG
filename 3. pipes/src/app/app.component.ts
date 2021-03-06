import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  nombre = "Fernando";
  nombre2 = "fernando alberto heRRera jimeneZ";

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    clave: "Wolverine",
    nombre: "logan",
    edad: 500,
    direccion: {
      calle: "primera",
      casa: "19"
    }
  }

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego la data'), 3500);
  });

  fecha = new Date();

  password = "testasd";
  activar = true;
}
