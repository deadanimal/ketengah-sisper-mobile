import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButiranPembayaranPageRoutingModule } from './butiran-pembayaran-routing.module';

import { ButiranPembayaranPage } from './butiran-pembayaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButiranPembayaranPageRoutingModule
  ],
  declarations: [ButiranPembayaranPage]
})
export class ButiranPembayaranPageModule {}
