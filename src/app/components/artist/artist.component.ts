import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  @Input() artista: any;

  constructor() { }

  ngOnInit() {
  }

}
