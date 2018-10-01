import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBCI35PndXkuofii94cwLoix3VCYVnwEq0uzCOUQkaQEwBAGl7UyniLlb2_q2XilhR8v-ObKYNn8BSQZi8'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items ));
  }

  getArtist( artist: string ) {
    return this.getQuery(`search?q=${ artist }&type=artist`)
                .pipe( map(data => data['artists'].items ));
  }

}
