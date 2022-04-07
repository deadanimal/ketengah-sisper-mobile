import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempahkemudahanPage } from './tempahkemudahan.page';

const routes: Routes = [
  {
    path: '',
    component: TempahkemudahanPage
  },
  {
    path: 'dewan',
    loadChildren: () => import('./dewan/dewan.module').then( m => m.DewanPageModule)
  },
  {
    path: 'alatan',
    loadChildren: () => import('./alatan/alatan.module').then( m => m.AlatanPageModule)
  },
  {
    path: 'fasiliti',
    loadChildren: () => import('./fasiliti/fasiliti.module').then( m => m.FasilitiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempahkemudahanPageRoutingModule {}
