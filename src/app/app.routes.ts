import { Routes } from '@angular/router';
import { HomePageComponent } from './view/home-page/home-page.component';
import { ErrorPageComponent } from './view/error-page/error-page.component';
import { AboutPageComponent } from './view/about-page/about-page.component';
import { FormComponent } from './view/home-page/form/form.component';

export const routes: Routes = [
    { path: '',redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent, children: [
        { path: 'login', component: FormComponent},
    ]},
    { path: 'about', component: AboutPageComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: '**', redirectTo: '/error' }
];
