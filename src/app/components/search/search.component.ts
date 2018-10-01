import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artista: Array<any>;

  constructor( private _service: SpotifyService) { }

  ngOnInit() {
  }

  search(artist: string) {
    this._service.getArtist( artist )
        .subscribe( (data: any) => {
          this.artista = data;
    });
  }

}
