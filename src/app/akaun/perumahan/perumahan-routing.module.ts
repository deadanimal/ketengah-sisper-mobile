import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerumahanPage } from './perumahan.page';

const routes: Routes = [
  {
    path: '',
    component: PerumahanPage
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
export class PerumahanPageRoutingModule {}
