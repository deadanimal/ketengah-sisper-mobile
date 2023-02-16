import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SebuthargaPage } from './sebutharga.page';

const routes: Routes = [
  {
    path: '',
    component: SebuthargaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SebuthargaPageRoutingModule {}
