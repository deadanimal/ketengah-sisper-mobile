import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, NavigationExtras } from '@angular/router';
import { AduanService } from '../../shared/services/aduan/aduan.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-aduanmain',
  templateUrl: './aduanmain.page.html',
  styleUrls: ['./aduanmain.page.scss'],
})
export class AduanmainPage implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
    private aduanService: AduanService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private nativeStorage: NativeStorage,
  ) { }

  aduancount = 0;
  userid : any;
  lattKateAduan: any;
  lattStatusAduan: any;
  latestaduan: any;

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.userid = data.value.user_id;
      },
      error => console.error(error)
    );

    console.log(this.userid);
    await this.aduanService.first(this.userid).subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss();
        this.aduancount = res[1];
        this.lattKateAduan = res[0].kategori +' - '+ res[0].kategorilist.kategori;
        this.lattStatusAduan = res[0].status;
        this.latestaduan = res[0];
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

  tambah() {
    this.router.navigate(['/main/tabs/aduan/aduanmain/tambah']);
  }

  senaraiaduan() {
    this.router.navigate(['/main/tabs/aduan/aduanmain/senarai']);
  }

  aduanview(){
    let navigationExtras: NavigationExtras = {
      state: {
        aduan: this.latestaduan
      }
    };
    this.router.navigate(['/main/tabs/aduan/aduanmain/view'], navigationExtras);
  }
}
