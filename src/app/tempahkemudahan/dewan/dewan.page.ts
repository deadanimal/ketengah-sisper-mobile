import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController, ModalController, PickerController } from '@ionic/angular';
import { LokasiService } from '../../shared/services/lokasi/lokasi.service';
import { DewanService } from '../../shared/services/dewan/dewan.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarPage } from 'src/app/shared/modals/calendar/calendar.page';
import { BookingService } from 'src/app/shared/services/booking/booking.service';
import { Router, NavigationExtras } from '@angular/router';
import { CalendarModalOptions, CalendarModule } from 'ion2-calendar';
import { from } from 'rxjs';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { timelist } from '../../shared/model/timelist.model';

@Component({
  selector: 'app-dewan',
  templateUrl: './dewan.page.html',
  styleUrls: ['./dewan.page.scss'],
})
export class DewanPage implements OnInit {

  ddLokasi: any;
  Lokasi: any;
  ddDewan: any;
  listdewan: any;
  MasaVal: any;
  timePicker: any;
  TarikhVal: any;
  masablock: any;
  Dewan: any;
  date: any;
  days: any;
  hour: any;
  masa: any;
  amaun: any;
  caloption = {
    pickMode: 'range',
    title: 'RANGE',
    daysConfig: []
  };
  cal = false;
  listbooking: any;
  divtime = 'from';
  TimeVal: any;
  TimeType: any;
  temptype: any;
  user: any;
  timecheck = [];

  constructor(
    private location: Location,
    private pickerController: PickerController,
    private loadingController: LoadingController,
    private lokasiService: LokasiService,
    private alertController: AlertController,
    private dewanService: DewanService,
    private fb: FormBuilder,
    public modalController: ModalController,
    private bookingService: BookingService,
    private router: Router,
    private nativeStorage: NativeStorage
  ) { }

  async ngOnInit() {
    this.TarikhVal = new Date()
    this.TarikhVal = this.TarikhVal.toISOString().split('T')[0];
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
    this.masablock = false;

    const loading = await this.loadingController.create();
    await loading.present();

    await this.lokasiService.getdd().subscribe(
      async (res) => {
        console.log(res);
        this.ddLokasi = res;
        await this.dewanService.getdd().subscribe(
          async (res) => {
            console.log(res);
            this.listdewan = res;
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

  async ChangeDDLokasi() {
    this.ddDewan = [];
    var array = []
    var val = this.Lokasi;
    console.log(val);
    await this.listdewan.forEach(function (value) {
      if (value.lokasi == val) {
        array.push(value);
      }
    });
    this.ddDewan = array;
  }

  async ChangeDDDewan() {
    this.TarikhVal = '';
    this.masablock = false;
    this.timecheck = [];
    this.date = '';
    var opt = [];
    var dewan = this.Dewan;
    await this.listbooking.forEach(function (value) {
      if (value.dewan_id == dewan) {
        if (value.days > 1) {
          var obj: { [k: string]: any } = {};
          obj.date = new Date(value.date_from);
          obj.disable = true;
          opt.push(obj);
          var dateday = obj['date'];
          console.log(opt);
          for (let i = 1; i < value.days; i++) {
            var obj: { [k: string]: any } = {};
            dateday = new Date(dateday).getTime() + (1000 * 60 * 60 * 24);
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
      if (this.Lokasi == 1 && this.Dewan == 2) {
        this.masablock = true;
      } else {
        this.masablock = false;
      }
      this.days = 1;
    } else {
      this.masablock = false;
      var diff = Math.abs(todate.getTime() - fromdate.getTime());
      this.days = Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    }
    this.TarikhVal = fromdate.getDate() + '/' + fromdate.getMonth() + '/' + fromdate.getFullYear() + ' - ' + todate.getDate() + '/' + todate.getMonth() + '/' + todate.getFullYear();

    this.ChangeDDTarikh();
  }

  async hantar() {
    const loading = await this.loadingController.create();
    await loading.present();
    var harga = 0;
    var dewan = this.Dewan;
    this.listdewan.forEach(function (value) {
      if (value.id == dewan) {
        harga = value.harga;
        return;
      }
    });
    console.log(this.timecheck);

    this.amaun = harga * this.days;

    console.log(this.amaun);
    const formData = new FormData();
    formData.append('user_id', this.user.user_id);
    formData.append('dewan', this.Dewan);
    if (this.date == undefined) {
      await loading.dismiss();
      this.alerterror('Tarikh diperlukan');
    }

    formData.append('tarikh_mula', this.date.from);
    formData.append('tarikh_akhir', this.date.to);
    formData.append('days', this.days);
    formData.append('masa', this.masa);
    formData.append('hour', this.hour);
    formData.append('amaun', this.amaun);

    await this.bookingService.add(formData).subscribe(
      async (res) => {
        console.log(res);
        this.clearform();
        await loading.dismiss();
        var arr = [];
        var akaun = {};

        console.log(res);

        akaun = {
          "id": '',
          "amaun": this.amaun,
          "kodbayaran": "DWN" + res.id,
        }
        arr.push(akaun);

        var data =
        {
          "src": 2,
          "jumlah": this.amaun,
          "jumcount": 1,
          "akaun": arr
        };

        let navigationExtras: NavigationExtras = {
          state: {
            data: data
          }
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

  async alerterror(msg) {
    const alert = await this.alertController.create({
      header: 'Loading failed',
      message: msg,
      buttons: ['OKAY'],
    });

    await alert.present();
  }

  clearform() {
    this.Lokasi = '';
    this.Dewan = '';
    this.TarikhVal = '';
    this.date = '';
    this.MasaVal = '';
  }

  ChangeMasa(time: any) {
    console.log(time);
    var txt: any;
    var txt2: any;
    var temp = [];
    var add = true;
    for (let index = 0; index < 23; index++) {
      add = true;
      if (index < 10) {
        txt = "0" + index;
        txt2 = index + 1;
        if (index != 9) {
          txt2 = "0" + txt2;
        }
      } else {
        txt = index;
        txt2 = index + 1;
      }
      let timelist: timelist;
      timelist = {
        val: index,
        text: txt + ":00 - " + txt2 + ":00",
        check: false
      };
      if (timelist.val >= 8) {
        if (timelist.val == 19) {
          add = false;
        }
        time.forEach(function (value) {
          if (value == index) {
            add = false;
          }
        });
      } else {
        add = false;
      }
      if (add == true) {
        temp.push(timelist);
      }
    }
    this.timecheck = temp;
    console.log(this.timecheck);
  }

  async ChangeDDTarikh() {
    var dewan = this.Dewan;
    var date = this.date;
    var hari = this.days;
    var time = [];
    var alltime = [];
    var exist = 0;
    console.log(hari);

    await this.listbooking.forEach(async function (value) {
      console.log(value);
      if (value.dewan_id == dewan) {
        const fromdate = new Date(date.from);
        var haribaru = new Date(fromdate.getTime());
        if (value.days == 1) {
          if (new Date(value.date_from).getTime() == haribaru.getTime()) {
            var time = value.time.split(",");
            await time.forEach(function (value) {
              alltime.push(value);
            });
          }
          for (let index = 1; index <= hari; index++) {

            var tambah = index * (1000 * 60 * 60 * 24);

            console.log(new Date(value.date_from));
            console.log(haribaru);

            if (new Date(value.date_from).getTime() == haribaru.getTime()) {
              console.log('jadi');
              exist = 1;
              break;
            }
            haribaru = new Date(fromdate.getTime() + tambah);
          }
        }
      }
    });

    if (hari != 1) {
      if (exist == 1) {
        this.alerterror('Tarikh Diplih Sudah Penuh, Sila Pilih Tarikh Lain.');
        this.TarikhVal = '';
        this.date = '';
      }
    }

    console.log('alltime', alltime);
    this.ChangeMasa(alltime);
  }
}


