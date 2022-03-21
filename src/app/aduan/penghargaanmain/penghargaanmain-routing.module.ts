import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenghargaanmainPage } from './penghargaanmain.page';

const routes: Routes = [
  {
    path: '',
    component: PenghargaanmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PenghargaanmainPageRoutingModule {}
