import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SewapremisPage } from './sewapremis.page';

const routes: Routes = [
  {
    path: '',
    component: SewapremisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SewapremisPageRoutingModule {}
