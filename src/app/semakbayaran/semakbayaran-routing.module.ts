import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemakbayaranPage } from './semakbayaran.page';

const routes: Routes = [
  {
    path: '',
    component: SemakbayaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemakbayaranPageRoutingModule {}
