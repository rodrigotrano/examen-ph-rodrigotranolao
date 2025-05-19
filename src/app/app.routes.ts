import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'avisos',
    loadComponent: () => import('./pages/avisos/avisos.page').then( m => m.AvisosPage)
  },
  {
    path: 'crear-aviso',
    loadComponent: () => import('./pages/crear-aviso/crear-aviso.page').then( m => m.CrearAvisoPage)
  },
];
