import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/characteres/characters.module')
      .then(mod => mod.CharactersModule)
  },
];
