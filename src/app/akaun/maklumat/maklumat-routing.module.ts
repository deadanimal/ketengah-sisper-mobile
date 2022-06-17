import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaklumatPage } from './maklumat.page';

const routes: Routes = [
  {
    path: '',
    component: MaklumatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaklumatPageRoutingModule {}
