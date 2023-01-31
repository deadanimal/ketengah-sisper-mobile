import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayPageRoutingModule } from './pay-routing.module';

import { PayPage } from './pay.page';
import { ConfirmPayComponent } from '../confirm-pay/confirm-pay.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [PayPage, ConfirmPayComponent],
})
export class PayPageModule {}
