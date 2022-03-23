import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, NavigationExtras } from '@angular/router';
import { AduanService } from '../../../shared/services/aduan/aduan.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-senaraiaduan',
  templateUrl: './senaraiaduan.page.html',
  styleUrls: ['./senaraiaduan.page.scss'],
})
export class SenaraiaduanPage implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
    private aduanService: AduanService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private nativeStorage: NativeStorage,
  ) { }

  userid:any;
  AduanList = [];

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.userid = data.value.user_id;
      },
      error => console.error(error)
    );

    await this.aduanService.getbyid(this.userid).subscribe(
      async (res) => {
        console.log(res);
        this.AduanList = res;
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

  back(){
    this.location.back();
  }

  viewaduan(data) {
    let navigationExtras: NavigationExtras = {
      state: {
        aduan: data
      }
    };
    this.router.navigate(['/main/tabs/aduan/aduanmain/view'], navigationExtras);
  }

}
