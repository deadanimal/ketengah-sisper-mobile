import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremisPage } from './premis.page';

const routes: Routes = [
  {
    path: '',
    component: PremisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremisPageRoutingModule {}
