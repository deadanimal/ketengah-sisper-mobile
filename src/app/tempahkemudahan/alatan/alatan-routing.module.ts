import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlatanPage } from './alatan.page';

const routes: Routes = [
  {
    path: '',
    component: AlatanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlatanPageRoutingModule {}
