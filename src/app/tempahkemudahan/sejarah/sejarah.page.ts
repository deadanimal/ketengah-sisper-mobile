import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BookingService } from 'src/app/shared/services/booking/booking.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-sejarah',
  templateUrl: './sejarah.page.html',
  styleUrls: ['./sejarah.page.scss'],
})
export class SejarahPage implements OnInit {

  BookingList:any;
  user:any;

  constructor(
    private location: Location,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private bookingService: BookingService,
    private nativeStorage: NativeStorage
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.user = data.value;;
      },
      error => console.error(error)
    );

    await loading.dismiss();
  }

  async ionViewDidEnter() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.bookingService.getuser(this.user.user_id).subscribe(
      async (res) => {
        console.log(res);
        this.BookingList = res;
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

  viewtempah(data) {
    let navigationExtras: NavigationExtras = {
      state: {
        tempahan: data
      }
    };
    this.router.navigate(['/main/tabs/tempahkemudahan/sejarah/view'], navigationExtras);
  }

}
