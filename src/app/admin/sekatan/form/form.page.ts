import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { CalendarModalOptions, CalendarModule } from 'ion2-calendar';
import { AdminmenuPage } from 'src/app/shared/modals/adminmenu/adminmenu.page';
import { BookingService } from 'src/app/shared/services/booking/booking.service';
import { FasilitiService } from 'src/app/shared/services/fasiliti/fasiliti.service';
import { DewanService } from '../../../shared/services/dewan/dewan.service';
import { LokasiService } from '../../../shared/services/lokasi/lokasi.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  src: any;
  lokasi: any;
  ddTempat: any;
  ddGelanggang: any;
  listdewan: any;
  gelanggang: any;
  caloption = {
    pickMode: 'range',
    title: 'RANGE',
    daysConfig: [],
  };
  cal = false;
  dispTarikh: any;
  date: any;
  days: any;
  listfutsal: any;
  listbadminton: any;
  listbooking: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public modalController: ModalController,
    private loadingController: LoadingController,
    private lokasiService: LokasiService,
    private alertController: AlertController,
    private dewanService: DewanService,
    private fasilitiService: FasilitiService,
    private bookingService: BookingService,
    private nativeStorage: NativeStorage
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.src = this.router.getCurrentNavigation().extras.state.source;
        console.log(this.src);
      }
    });
  }

  async ngOnInit() {
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
    const loading = await this.loadingController.create();
    await loading.present();

    await this.lokasiService.getdd().subscribe(
      async (res) => {
        console.log(res);
        this.ddTempat = res;
        if (this.src == 1) {
          this.ddTempat = [
            {
              id: 1,
              nama: 'Al Muktafi Billah Shah',
            },
          ];
          await this.fasilitiService.getfutsal().subscribe(
            async (res) => {
              console.log(res);
              this.listfutsal = res;
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
        } else if (this.src == 2) {
          await this.fasilitiService.getbadminton().subscribe(
            async (res) => {
              console.log(res);
              this.listbadminton = res;
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
        } else if (this.src == 3) {
          await this.dewanService.getdd().subscribe(
            async (res) => {
              console.log(res);
              this.listdewan = res;
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
        await this.bookingService.get().subscribe(
          async (res) => {
            console.log(res);
            this.listbooking = res;
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

  async adminmenu() {
    const modal = await this.modalController.create({
      component: AdminmenuPage,
      cssClass: 'menu-modal',
      backdropDismiss: true,
    });

    return await modal.present();
  }

  async ChangeDDLokasi() {
    this.ddGelanggang = [];
    var array = [];
    var val = this.lokasi;
    console.log(val);
    if (this.src == 1) {
      await this.listfutsal.forEach(function (value) {
        if (value.lokasi == val) {
          array.push(value);
        }
      });
    } else if (this.src == 2) {
      await this.listbadminton.forEach(function (value) {
        if (value.lokasi == val) {
          array.push(value);
        }
      });
    } else if (this.src == 3) {
      await this.listdewan.forEach(function (value) {
        if (value.lokasi == val) {
          array.push(value);
        }
      });
    }

    this.ddGelanggang = array;
  }

  async ChangeDDDewan() {
    var opt = [];
    var gelanggang = this.gelanggang;
    var src = this.src;
    await this.listbooking.forEach(function (value) {
      if (src == 1) {
        if (value.ft_court_id == gelanggang) {
          var obj: { [k: string]: any } = {};
          obj.date = new Date(value.date_from);
          obj.disable = true;
          opt.push(obj);
          var dateday = obj['date'];
          console.log(opt);
          for (let i = 1; i < value.days; i++) {
            var obj: { [k: string]: any } = {};
            dateday = new Date(dateday).getTime() + 1000 * 60 * 60 * 24;
            var newdate = new Date(dateday);
            obj.date = newdate;
            obj.disable = true;
            opt.push(obj);
          }
        }
      } else if (src == 2) {
        if (value.bd_court_id == gelanggang) {
          var obj: { [k: string]: any } = {};
          obj.date = new Date(value.date_from);
          obj.disable = true;
          opt.push(obj);
          var dateday = obj['date'];
          console.log(opt);
          for (let i = 1; i < value.days; i++) {
            var obj: { [k: string]: any } = {};
            dateday = new Date(dateday).getTime() + 1000 * 60 * 60 * 24;
            var newdate = new Date(dateday);
            obj.date = newdate;
            obj.disable = true;
            opt.push(obj);
          }
        }
      } else if (src == 3) {
        if (value.dewan_id == gelanggang) {
          var obj: { [k: string]: any } = {};
          obj.date = new Date(value.date_from);
          obj.disable = true;
          opt.push(obj);
          var dateday = obj['date'];
          console.log(opt);
          for (let i = 1; i < value.days; i++) {
            var obj: { [k: string]: any } = {};
            dateday = new Date(dateday).getTime() + 1000 * 60 * 60 * 24;
            var newdate = new Date(dateday);
            obj.date = newdate;
            obj.disable = true;
            opt.push(obj);
          }
        }
      }
    });

    this.caloption.daysConfig = opt;
    console.log(this.caloption);

    if (this.cal == true) {
      this.cal = false;
    }
  }

  opencal() {
    if (this.cal == true) {
      this.cal = false;
    } else {
      this.cal = true;
    }
  }

  ChangeDDTarikh() {}

  pilihcal() {
    console.log(this.date);
    if (this.cal == true) {
      this.cal = false;
    } else {
      this.cal = true;
    }

    const fromdate = new Date(this.date.from);
    const todate = new Date(this.date.to);
    if (fromdate.getTime() == todate.getTime()) {
      this.days = 1;
    } else {
      var diff = Math.abs(todate.getTime() - fromdate.getTime());
      this.days = Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    }
    this.dispTarikh =
      fromdate.getDate() +
      '/' +
      fromdate.getMonth() +
      '/' +
      fromdate.getFullYear() +
      ' - ' +
      todate.getDate() +
      '/' +
      todate.getMonth() +
      '/' +
      todate.getFullYear();
  }

  async hantar() {
    const loading = await this.loadingController.create();
    await loading.present();
    var harga = 0;

    const formData = new FormData();
    formData.append('user_id', this.user.admin_id);
    if (this.src == 1) {
      formData.append('futsal', this.gelanggang);
    } else if (this.src == 2) {
      formData.append('badminton', this.gelanggang);
    } else if (this.src == 3) {
      formData.append('dewan', this.gelanggang);
    } else {
      this.alerterror('Error');
    }

    if (this.date == undefined) {
      await loading.dismiss();
      this.alerterror('Tarikh diperlukan');
    }

    formData.append('tarikh_mula', this.date.from);
    formData.append('tarikh_akhir', this.date.to);
    formData.append('days', this.days);

    await this.bookingService.add(formData).subscribe(
      async (res) => {
        console.log(res);
        this.clearform();
        await loading.dismiss();
        this.router.navigate(['/main/admin/sekatan']);
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

  async alerterror(msg) {
    const alert = await this.alertController.create({
      header: 'Loading failed',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  clearform() {
    this.lokasi = '';
    this.src = '';
    this.gelanggang = '';
    this.dispTarikh = '';
    this.date = '';
  }
}
