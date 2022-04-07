import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FasilitiPage } from './fasiliti.page';

const routes: Routes = [
  {
    path: '',
    component: FasilitiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FasilitiPageRoutingModule {}
