import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any;
  loadingArtist: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotiService: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.getArtist( params['id'] );
    });
  }

  getArtist( id: string) {
    this.loadingArtist = true;
    this.spotiService.getUniqueArtist( id ).subscribe( data => {
      this.artist = data;
      this.loadingArtist = false;
    });
  }

}
