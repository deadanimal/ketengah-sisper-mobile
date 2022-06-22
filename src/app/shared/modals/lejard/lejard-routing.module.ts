import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LejardPage } from './lejard.page';

const routes: Routes = [
  {
    path: '',
    component: LejardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LejardPageRoutingModule {}
