import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstimePageRoutingModule } from './firstime-routing.module';

import { FirstimePage } from './firstime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstimePageRoutingModule
  ],
  declarations: [FirstimePage]
})
export class FirstimePageModule {}
