import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlatanPageRoutingModule } from './alatan-routing.module';

import { AlatanPage } from './alatan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlatanPageRoutingModule
  ],
  declarations: [AlatanPage]
})
export class AlatanPageModule {}
