import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {  HttpClient } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-tambahakaun',
  templateUrl: './tambahakaun.component.html',
  styleUrls: ['./tambahakaun.component.scss'],
})
export class TambahakaunComponent implements OnInit {

  akaun:any;
  jenis:any;
  jenis2:any;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private translateService: TranslateService
  ) {
    console.log('translation', this.translateService);
   }

  ngOnInit() {
    if(this.translateService.defaultLang == 'bm'){
      this.akaun = 'Akaun';
      this.jenis = 'Perumahan';
      this.jenis2 = 'Premis';
    }else{
      this.akaun = 'Account';
      this.jenis = 'Housing';
      this.jenis2 = 'Premise';
    }
  }

  perumahan() {
    this.modalController.dismiss();
    this.router.navigate(['main/tabs/akaun/perumahan']);
  }

  premis() {
    this.modalController.dismiss();
    this.router.navigate(['main/tabs/akaun/premis']);
  }
}
