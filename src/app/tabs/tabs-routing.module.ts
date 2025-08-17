import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('./tab1/tab1.module').then(m => m.Tab1PageModule),
      },
      {
        path: 'beranda',
        loadChildren: () => import('./beranda/beranda.module').then(m => m.BerandaPageModule)
      },
      {
        path: 'perangkat',
        loadChildren: () => import('./perangkat/perangkat.module').then(m => m.PerangkatPageModule)
      },
      {
        path: 'peta',
        loadChildren: () => import('./peta/peta.module').then(m => m.PetaPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/beranda',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
