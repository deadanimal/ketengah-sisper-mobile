import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanmainPage } from './aduanmain.page';

const routes: Routes = [
  {
    path: '',
    component: AduanmainPage
  },
  {
    path: 'aduanview',
    loadChildren: () => import('./aduanview/aduanview.module').then( m => m.AduanviewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanmainPageRoutingModule {}
