import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LejardPageRoutingModule } from './lejard-routing.module';

import { LejardPage } from './lejard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LejardPageRoutingModule
  ],
  declarations: [LejardPage]
})
export class LejardPageModule {}
