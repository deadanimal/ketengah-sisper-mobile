import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LainLainPage } from './lain-lain.page';

const routes: Routes = [
  {
    path: '',
    component: LainLainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LainLainPageRoutingModule {}
