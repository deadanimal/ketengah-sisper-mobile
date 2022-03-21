import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanmainPage } from './aduanmain.page';

const routes: Routes = [
  {
    path: '',
    component: AduanmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanmainPageRoutingModule {}
