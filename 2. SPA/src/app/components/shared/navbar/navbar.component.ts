import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroes:any[];

  constructor(private activatedRoute:ActivatedRoute,
              private _heroeService:HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroeService.buscarHeroe(params["termino"]);
    });
  }

  buscarHeroe(nombre:string){
    
  }

}
