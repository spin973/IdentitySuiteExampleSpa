import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProfileComponent } from './profile/profile';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];
