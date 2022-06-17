import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaedahPage } from './kaedah.page';

const routes: Routes = [
  {
    path: '',
    component: KaedahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaedahPageRoutingModule {}
