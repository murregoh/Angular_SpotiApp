import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
