import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class ProfileComponent {
  claims: Record<string, any> = {};
  claimKeys: string[] = [];

  constructor(private auth: AuthService) {
    const idTokenClaims = this.auth.getIdTokenClaims();
    if (idTokenClaims) {
      this.claims = idTokenClaims;
      this.claimKeys = Object.keys(idTokenClaims);
    }
  }
}
