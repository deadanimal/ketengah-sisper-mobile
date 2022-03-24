import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewnotisPageRoutingModule } from './viewnotis-routing.module';

import { ViewnotisPage } from './viewnotis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewnotisPageRoutingModule
  ],
  declarations: [ViewnotisPage]
})
export class ViewnotisPageModule {}
