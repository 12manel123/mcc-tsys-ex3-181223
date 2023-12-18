import { Routes } from '@angular/router';
import { HomePageComponent } from './view/home-page/home-page.component';
import { ErrorPageComponent } from './view/error-page/error-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: '**', redirectTo: '/error' }
];
