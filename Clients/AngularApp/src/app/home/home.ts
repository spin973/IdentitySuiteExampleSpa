import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  constructor(private auth: AuthService) { }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  isLoggedIn(): boolean {
    return this.auth.isAuthenticated();
  }
}
