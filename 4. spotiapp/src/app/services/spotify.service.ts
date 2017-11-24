import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  urlSpotify: string = "https://api.sporitfy.com/v1";
  artistas = [];

  getArtistas(termino: string) {
    let url = "";

    let headers = new HttpHeaders({
      authorization: 'Bearer BBasdaspojd'
    });

    return this.http.get(url, { headers })
      .map(resp => { return 'Carro'; });
  }

  getArtista(id: string) {
    let url = `${this.urlSpotify}/artists/${id}`;

    let headers = new HttpHeaders({
      authorization: 'Bearer BBasdaspojd'
    });

    return this.http.get(url, { headers })
      .map(resp => { return 'Carro'; });
  }

}
