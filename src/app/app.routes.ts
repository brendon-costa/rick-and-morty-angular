import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/characteres/characteres.module')
      .then(mod => mod.CharacteresModule)
  },
];
