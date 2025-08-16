import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('./tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('./tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('./tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'peta',
    loadComponent: () => import('./peta/peta.page').then( m => m.PetaPage)
  },
  {
    path: 'profil',
    loadComponent: () => import('./profil/profil.page').then( m => m.ProfilPage)
  },
  {
    path: 'beranda',
    loadComponent: () => import('./beranda/beranda.page').then( m => m.BerandaPage)
  },
  {
    path: 'perangkat',
    loadComponent: () => import('./perangkat/perangkat.page').then( m => m.PerangkatPage)
  },
  {
    path: 'pengaturan',
    loadComponent: () => import('./pengaturan/pengaturan.page').then( m => m.PengaturanPage)
  },
];
