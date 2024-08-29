import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((c) => c.TabsPage),
    children: [
      { path: '', redirectTo: 'tab-1', pathMatch: 'full' },
      {
        path: 'tab-1',
        loadComponent: () => import('./tab1/tab1.page').then((c) => c.Tab1Page),
      },
      {
        path: 'tab-2',
        loadComponent: () => import('./tab2/tab2.page').then((c) => c.Tab2Page),
      },
      {
        path: 'tab-3',
        loadComponent: () => import('./tab3/tab3.page').then((c) => c.Tab3Page),
      },
    ],
  },
];
