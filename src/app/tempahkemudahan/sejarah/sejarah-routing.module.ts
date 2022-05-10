import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SejarahPage } from './sejarah.page';

const routes: Routes = [
  {
    path: '',
    component: SejarahPage
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SejarahPageRoutingModule {}
