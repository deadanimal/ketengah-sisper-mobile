import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { BayaranService } from 'src/app/shared/services/bayaran/bayaran/bayaran.service';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { PayPage } from 'src/app/pay/pay.page';

@Component({
  selector: 'app-kaedah',
  templateUrl: './kaedah.page.html',
  styleUrls: ['./kaedah.page.scss'],
})
export class KaedahPage implements OnInit {

  kad: any;
  jumlah: any;
  jumcount: any;
  akaun: any;
  user: any;
  src: any;
  kodbayaran: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private bayaranService: BayaranService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private nativeStorage: NativeStorage,
    private modalController: ModalController
  ) {
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.jumlah = this.router.getCurrentNavigation().extras.state.data.jumlah;
        this.jumcount = this.router.getCurrentNavigation().extras.state.data.jumcount;
        this.akaun = this.router.getCurrentNavigation().extras.state.data.akaun;
        this.src = this.router.getCurrentNavigation().extras.state.data.src;

        const loading = await this.loadingController.create();
        await loading.present();
        await this.nativeStorage.getItem('user').then(
          data => {
            this.user = data.value;
          },
          error => console.error(error)
        );
        await loading.dismiss();
        console.log('akaun', this.akaun);
      }
    });
  }

  ngOnInit() {
    this.kad = '4444';
  }

  back() {
    this.location.back();
  }

  async bayar() {
    const loading = await this.loadingController.create();
    await loading.present();

    const formData = new FormData();

    formData.append('userid', this.user.user_id);
    formData.append('src', this.src);
    if (this.src == 1) {
      formData.append('akaun', JSON.stringify(this.akaun));
      formData.append('jenis_transaksi', '1');
      formData.append('card_detail', '1');
    } else if (this.src == 2) {
      formData.append('akaun', JSON.stringify(this.akaun));
      formData.append('jenis_transaksi', '1');
      formData.append('card_detail', '1');
    } else {
      // formData.append('bil_premis_id', this.user.user_id);
      // formData.append('bil_rumah_id', this.user.user_id);
      // formData.append('booking_id', this.user.user_id);
      // formData.append('st_id', this.user.user_id);
      // formData.append('no_ic_pemilik', this.user.user_id);
      // formData.append('amaun', this.user.user_id);
      // formData.append('tarikh_bayaran', this.user.user_id);
      // formData.append('status_bayaran', this.user.user_id);
      // formData.append('jenis_transaksi', '2');
      // formData.append('card_detail', '1');
    }

    await this.bayaranService.add(formData).subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss();
        let navigationExtras: NavigationExtras = {
          state: {
            data: res,
            src: this.src
          }
        };
        // this.router.navigateByUrl('pay')
        this.presentModal()

        // this.router.navigate(['main/tabs/bayaran/resit'], navigationExtras);
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: PayPage,
      componentProps: { value: 123 }
    });

    await modal.present();

  }

}
