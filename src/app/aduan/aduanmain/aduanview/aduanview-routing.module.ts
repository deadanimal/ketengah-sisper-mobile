import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanviewPage } from './aduanview.page';

const routes: Routes = [
  {
    path: '',
    component: AduanviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanviewPageRoutingModule {}
