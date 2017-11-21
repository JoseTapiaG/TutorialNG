import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroes:any[];

  constructor(private router:Router,
              private _heroeService:HeroesService) { }

  ngOnInit() {}

  buscarHeroe(nombre:string){
    this.router.navigate(['/heroes', nombre]);
  }

}
