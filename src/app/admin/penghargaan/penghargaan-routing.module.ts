import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenghargaanPage } from './penghargaan.page';

const routes: Routes = [
  {
    path: '',
    component: PenghargaanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PenghargaanPageRoutingModule {}
