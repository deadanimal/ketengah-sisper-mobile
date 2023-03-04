import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButiranPembayaranPage } from './butiran-pembayaran.page';

const routes: Routes = [
  {
    path: '',
    component: ButiranPembayaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButiranPembayaranPageRoutingModule {}
