import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewnotisPage } from './viewnotis.page';

const routes: Routes = [
  {
    path: '',
    component: ViewnotisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewnotisPageRoutingModule {}
