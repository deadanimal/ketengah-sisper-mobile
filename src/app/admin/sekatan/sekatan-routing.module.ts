import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SekatanPage } from './sekatan.page';

const routes: Routes = [
  {
    path: '',
    component: SekatanPage
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SekatanPageRoutingModule {}
