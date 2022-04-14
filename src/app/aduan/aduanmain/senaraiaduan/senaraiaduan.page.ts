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
        this.AduanList.forEach(element => {
          if(element.status == 0){
            element.statdet = "Tiada Status";
          }else if(element.status == 1){
            element.statdet = "Belum Dibaiki";
          }else if(element.status == 2){
            element.statdet = "Dibaiki Sebahagian";
          }else if(element.status == 3){
            element.statdet = "Sudah Dibaiki";
          }else if(element.status == 4){
            element.statdet = "Kontrak";
          }else if(element.status == 5){
            element.statdet = "Semakan";
          }
        });
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
