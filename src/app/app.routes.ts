import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(
        (m) => m.Contact
      ),
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./pages/project/project').then((m) => m.Project),
  },
  {
    path: 'projects',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/projects/projects').then(
        (m) => m.Projects
      ),
  },
  {
    path: 'notes/:slug',
    loadComponent: () =>
      import('./pages/note/note').then((m) => m.Note),
  },
  {
    path: 'notes',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/notes/notes').then((m) => m.Notes),
  },
  {
    path: 'hire-me',
    loadComponent: () =>
      import('./pages/hire-me/hire-me').then((m) => m.HireMe),
  },
  {
    path: 'now',
    loadComponent: () =>
      import('./pages/now/now').then((m) => m.Now),
  },
  {
    path: 'uses',
    loadComponent: () =>
      import('./pages/uses/uses').then((m) => m.Uses),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
