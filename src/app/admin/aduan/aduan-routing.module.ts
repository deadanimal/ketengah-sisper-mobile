import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanPage } from './aduan.page';

const routes: Routes = [
  {
    path: '',
    component: AduanPage
  },
  {
    path: 'aduanlist',
    loadChildren: () => import('./aduanlist/aduanlist.module').then( m => m.AduanlistPageModule)
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
export class AduanPageRoutingModule {}
