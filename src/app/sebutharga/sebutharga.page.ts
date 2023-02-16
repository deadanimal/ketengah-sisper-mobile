import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { PayPage } from '../pay/pay.page';
import { LainService } from '../shared/services/lain/lain.service';

@Component({
  selector: 'app-sebutharga',
  templateUrl: './sebutharga.page.html',
  styleUrls: ['./sebutharga.page.scss'],
})
export class SebuthargaPage implements OnInit {
  ddUrusan: any;
  user: any;
  constructor(private location: Location,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private lainService: LainService,
    private router: Router,
    private nativeStorage: NativeStorage,
    private modalController: ModalController
  ) { }



  back() {
    this.location.back();
  }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.user = data.value;
      },
      error => console.error(error)
    );

    await this.lainService.getdd().subscribe(
      async (res) => {
        console.log(res);
        this.ddUrusan = res;
        await loading.dismiss();
      },
      async (res) => {
        console.log(res);
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Loading failed',
          message: res.message,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }



  async pay() {
    const modal = await this.modalController.create({
      component: PayPage,
      componentProps: { value: 123 }
    });

    await modal.present();

  }

}
