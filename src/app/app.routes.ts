import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/nav-bar' },

  {
    path: 'nav-bar',
    component: NavBarComponent,
    data: { animation: 'queryingPage' }
  },
];
