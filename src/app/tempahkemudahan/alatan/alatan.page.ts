import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/shared/services/booking/booking.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlatanService } from 'src/app/shared/services/alatan/alatan.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-alatan',
  templateUrl: './alatan.page.html',
  styleUrls: ['./alatan.page.scss'],
})
export class AlatanPage implements OnInit {
  masablock = false;
  ddAlatan: any;
  Alatan: any;
  QtyVal: any;
  cal = false;
  date: any;
  caloption = {
    pickMode: 'range',
    title: 'RANGE',
    daysConfig: [],
  };
  days: any;
  TarikhVal: any;
  amaun: any;
  user: any;

  constructor(
    private location: Location,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private fb: FormBuilder,
    private alatanService: AlatanService,
    private bookingService: BookingService,
    private router: Router,
    private nativeStorage: NativeStorage
  ) { }

  async ngOnInit() {
    this.TarikhVal = new Date();
    this.TarikhVal = this.TarikhVal.toISOString().split('T')[0];
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      (data) => {
        this.user = data.value;
      },
      (error) => console.error(error)
    );

    await loading.dismiss();
  }

  async ionViewDidEnter() {
    this.QtyVal = 0;
    const loading = await this.loadingController.create();
    await loading.present();

    await this.alatanService.getdd().subscribe(
      async (res) => {
        console.log(res);
        this.ddAlatan = res;
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

  back() {
    this.location.back();
  }

  openCal() {
    if (this.cal == true) {
      this.cal = false;
    } else {
      this.cal = true;
    }
  }

  pilihCal() {
    console.log(this.date);
    if (this.cal === true) {
      this.cal = false;
    } else {
      this.cal = true;
    }

    const fromdate = new Date(this.date);
    this.masablock = true;
    this.days = 1;
    let date;
    // this.TarikhVal = fromdate.getDate() + '/' + fromdate.getMonth() + '/' + fromdate.getFullYear();

    //if date or month is single digit, add 0 in front
    if (fromdate.getDate() < 10) {
      console.log(date)
      date = '0' + fromdate.getDate();
    } else {
      date = fromdate.getDate();
    }
    let month;

    if (fromdate.getMonth() < 10) {
      month = '0' + fromdate.getMonth();
    } else {
      month = fromdate.getMonth();
    }

    const year = fromdate.getFullYear();

    this.TarikhVal = year + '/' + month + '/' + date;

    console.log(this.TarikhVal);

  }



  increment() {
    this.QtyVal++;
  }

  decrement() {
    this.QtyVal--;
  }

  async hantar() {
    const loading = await this.loadingController.create();
    await loading.present();
    var harga = 0;
    var alatan = this.Alatan;
    this.ddAlatan.forEach(function (value) {
      if (value.id == alatan) {
        harga = value.harga;
        return;
      }
    });
    this.amaun = harga * this.days * this.QtyVal;

    const formData = new FormData();
    formData.append('user_id', this.user.user_id);
    formData.append('alatan', this.Alatan);
    if (this.date == undefined) {
      await loading.dismiss();
      this.alerterror('Tarikh diperlukan');
    }

    formData.append('tarikh_mula', this.date.from);
    formData.append('tarikh_akhir', this.date.to);
    formData.append('days', this.days);
    formData.append('amaun', this.amaun);
    formData.append('qty', this.QtyVal);
    await this.bookingService.add(formData).subscribe(
      async (res) => {
        console.log(res);
        this.clearform();
        await loading.dismiss();
        var arr = [];
        var akaun = {};

        console.log(res);

        akaun = {
          id: '',
          amaun: this.amaun,
          kodbayaran: 'ALT' + res.id,
        };
        arr.push(akaun);

        var data = {
          src: 2,
          jumlah: this.amaun,
          jumcount: 1,
          akaun: arr,
        };

        let navigationExtras: NavigationExtras = {
          state: {
            data: data,
          },
        };

        this.router.navigate(['main/tabs/bayaran'], navigationExtras);
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

  clearform() {
    this.Alatan = '';
    this.QtyVal = 0;
    this.TarikhVal = '';
    this.date = '';
  }

  async alerterror(msg) {
    const alert = await this.alertController.create({
      header: 'Loading failed',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  appendChar(num: any) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
}
