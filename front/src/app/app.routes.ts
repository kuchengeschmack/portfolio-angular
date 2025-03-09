import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'book',
    title: 'Marie-Cécile Caron | Book',
    loadComponent: () => import('./gallery/gallery').then((m) => m.Gallery),
  },
  {
    path: 'piano',
    title: 'Marie-Cécile Caron | Cours de piano',
    loadComponent: () => import('./piano/piano').then((m) => m.Piano),
  },
  {
    path: '**',
    redirectTo: 'book',
  },
];
