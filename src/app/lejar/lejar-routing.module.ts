import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LejarPage } from './lejar.page';

const routes: Routes = [
  {
    path: '',
    component: LejarPage
  },
  {
    path: 'sewarumah',
    loadChildren: () => import('./sewarumah/sewarumah.module').then( m => m.SewarumahPageModule)
  },
  {
    path: 'sewapremis',
    loadChildren: () => import('./sewapremis/sewapremis.module').then( m => m.SewapremisPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LejarPageRoutingModule {}
