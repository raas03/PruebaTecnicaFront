import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'students',
    loadComponent: () =>
      import('./components/students/students.component.ts/students.component.ts.component')
        .then(m => m.StudentsComponentTsComponent)
  },

  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'students'
  }
];