import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SewarumahPage } from './sewarumah.page';

const routes: Routes = [
  {
    path: '',
    component: SewarumahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SewarumahPageRoutingModule {}
