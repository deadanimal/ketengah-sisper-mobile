import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BayarsewaPage } from './bayarsewa.page';

const routes: Routes = [
  {
    path: '',
    component: BayarsewaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BayarsewaPageRoutingModule {}
