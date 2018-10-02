import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() item: any;

  constructor( private router: Router) { }

  showArtist(item: string) {
    let artistId: string;
    if (item['type'] === 'artist') {
      artistId = item['id'];
    } else {
      artistId = item['artists'][0].id;
    }
    this.router.navigate(['artist', artistId]);
  }

}
