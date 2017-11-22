import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getArtistas() {
    let url = "";

    let headers = new HttpHeaders({
      authorization: 'Bearer BBasdaspojd'
    });

    return this.http.get(url, { headers })
      .map(resp => { return 'Carro'; });
  }

}
