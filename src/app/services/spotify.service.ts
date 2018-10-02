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
      'Authorization': 'Bearer BQDgejDmVpKTBto9o-0KgMfBAvxVbq5CB8KAuykbZ27O2LNCSREAF2-fD7F0jldYhLGHqNKouz5ZBzf3CaQ'
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

  getUniqueArtist( artistId: string) {
    return this.getQuery(`artists/${ artistId }`);
  }

  getTopTracks( id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map(data => data['tracks']));
  }

}
