import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstimePage } from './firstime.page';

const routes: Routes = [
  {
    path: '',
    component: FirstimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstimePageRoutingModule {}
