import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      if(params["termino"]){
        this.heroes = this._heroesService.buscarHeroe(params["termino"]);
      } else {
        this.heroes = this._heroesService.getHeroes();
      }


    });

  }

  verHeroe(id: number){
    this.router.navigate(['/heroe', id])
  }

}
