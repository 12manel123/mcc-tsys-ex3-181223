import { Component, inject } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  servToker = inject(TokenStorageService)
  constructor(private router: Router) {}
  logOut() {
    this.servToker.singOut();
    this.router.navigate(['/']);
  }
  rAbout() {
    this.servToker.singOut();
    this.router.navigate(['/about']);
  }
  rHome() {
    this.servToker.singOut();
    this.router.navigate(['/home']);
  }
  rLogin() {
    this.servToker.singOut();
    this.router.navigate(['/home/login']);
  }
}
