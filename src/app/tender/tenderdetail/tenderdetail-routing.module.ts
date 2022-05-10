import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenderdetailPage } from './tenderdetail.page';

const routes: Routes = [
  {
    path: '',
    component: TenderdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenderdetailPageRoutingModule {}
