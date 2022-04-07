import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FasilitiPageRoutingModule } from './fasiliti-routing.module';

import { FasilitiPage } from './fasiliti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FasilitiPageRoutingModule
  ],
  declarations: [FasilitiPage]
})
export class FasilitiPageModule {}
