import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newReleases: Array<any>;
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor( private spotify: SpotifyService ) {
    this.error = false;
    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
      this.newReleases = data;
      this.loading = false;
    }, ( errorService ) => {
      this.error = true;
      this.loading = false;
      this.errorMessage = errorService['error']['error']['message'];
    });
  }



  // paises: Array<any> = [];
  // constructor( private http: HttpClient ) {
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe( (data: any) => {
  //       this.paises = data;
  //       console.log(data);
  //     });
  // }

  ngOnInit() {
  }

}
