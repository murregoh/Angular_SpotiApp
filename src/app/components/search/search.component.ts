import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artista: Array<any>;
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor( private _service: SpotifyService) {
  }

  search(artist: string) {

    // TODO: Error cuando elimino lo que se habia buscado.
    this.loading = true;
    this._service.getArtist( artist )
        .subscribe( (data: any) => {
          this.artista = data;
          this.loading = false;
    }, ( errorService ) => {
      this.loading = false;
      this.error = true;
      this.errorMessage = errorService['error']['error']['message'];
      console.log( errorService );
    });
  }

}
