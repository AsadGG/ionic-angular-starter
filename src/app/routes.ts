import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  {
    path: 'splash',
    loadComponent: () =>
      import('./pages/splash/splash.page').then((c) => c.SplashPage),
  },
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./pages/onboarding/onboarding.page').then(
        (c) => c.OnboardingPage
      ),
  },
];
