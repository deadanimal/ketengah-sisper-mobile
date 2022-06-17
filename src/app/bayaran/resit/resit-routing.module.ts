import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResitPage } from './resit.page';

const routes: Routes = [
  {
    path: '',
    component: ResitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResitPageRoutingModule {}
