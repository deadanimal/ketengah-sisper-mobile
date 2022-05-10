import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenderPage } from './tender.page';

const routes: Routes = [
  {
    path: '',
    component: TenderPage
  },
  {
    path: 'tenderdetail',
    loadChildren: () => import('./tenderdetail/tenderdetail.module').then( m => m.TenderdetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenderPageRoutingModule {}
