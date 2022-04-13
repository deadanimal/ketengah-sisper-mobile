import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AduanlistPage } from './aduanlist.page';

const routes: Routes = [
  {
    path: '',
    component: AduanlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AduanlistPageRoutingModule {}
