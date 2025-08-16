import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab1',
    loadComponent: () => import('./tabs/tab1/tab1.page').then( m => m.Tab1Page)
  },
  {
    path: 'tab2',
    loadComponent: () => import('./tabs/tab2/tab2.page').then( m => m.Tab2Page)
  },
  {
    path: 'tab3',
    loadComponent: () => import('./tabs/tab3/tab3.page').then( m => m.Tab3Page)
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tabs/tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'tab3',
    loadComponent: () => import('./tab3/tab3.page').then( m => m.Tab3Page)
  },
  {
    path: 'tab2',
    loadComponent: () => import('./tab2/tab2.page').then( m => m.Tab2Page)
  },
  {
    path: 'tab1',
    loadComponent: () => import('./tab1/tab1.page').then( m => m.Tab1Page)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./pages/onboarding/onboarding.page').then( m => m.OnboardingPage)
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services.page').then( m => m.ServicesPage)
  },
  {
    path: 'firebase',
    loadComponent: () => import('./firebase/firebase.page').then( m => m.FirebasePage)
  },
  {
    path: 'peta',
    loadComponent: () => import('./tabss/peta/peta.page').then( m => m.PetaPage)
  },
];
