import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DewanPage } from './dewan.page';

const routes: Routes = [
  {
    path: '',
    component: DewanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DewanPageRoutingModule {}
