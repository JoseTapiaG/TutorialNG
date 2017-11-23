import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino = "";

  constructor(private _spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscarArtista(){
    console.log(this.termino);
  }

}
