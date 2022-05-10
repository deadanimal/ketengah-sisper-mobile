import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController, ModalController, PickerController } from '@ionic/angular';
import { LokasiService } from '../../shared/services/lokasi/lokasi.service';
import { DewanService } from '../../shared/services/dewan/dewan.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarPage } from 'src/app/shared/modals/calendar/calendar.page';
import { BookingService } from 'src/app/shared/services/booking/booking.service';
import { Router } from '@angular/router';
import { CalendarModalOptions, CalendarModule } from 'ion2-calendar';
import { from } from 'rxjs';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';


@Component({
  selector: 'app-dewan',
  templateUrl: './dewan.page.html',
  styleUrls: ['./dewan.page.scss'],
})
export class DewanPage implements OnInit {

  ddLokasi : any;
  Lokasi : any;
  ddDewan : any;
  listdewan : any;
  MasaVal : any;
  timePicker : any;
  TarikhVal : any;
  masablock : any;
  Dewan : any;
  date : any;
  days : any;
  hour : any;
  masa_from : any;
  masa_to : any;
  amaun : any;
  caloption = {
    pickMode: 'range',
    title: 'RANGE',
    daysConfig: []
  };
  cal = false;
  listbooking : any;
  divtime = 'from';
  TimeVal : any;
  TimeType : any;
  temptype : any;
  user:any;

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

  back(){
    this.location.back();
  }

  async ChangeDDLokasi() {
    this.ddDewan = [];
    var array = []
    var val = this.Lokasi;
    console.log(val);
    await this.listdewan.forEach(function (value) {
      if(value.lokasi == val){
        array.push(value);
      }
    });
    this.ddDewan = array;
  }

  async ChangeDDDewan() {
    var opt = [];
    var dewan = this.Dewan;
    await this.listbooking.forEach(function (value) {
      if(value.dewan_id == dewan){
        if(value.days > 1){
          var obj: {[k: string]: any} = {};
          obj.date = new Date(value.date_from);
          obj.disable = true;
          opt.push(obj);
          var dateday = obj['date'];
          console.log(opt);
          for(let i=1; i<value.days; i++){
            var obj: {[k: string]: any} = {};
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

    if(this.cal == true){
      this.cal =false;
    }
  }

  opencal(){
    if(this.cal == true){
      this.cal =false;
    }else{
      this.cal =true;
    }
  }

  pilihcal(){
    console.log(this.date);
    if(this.cal == true){
      this.cal =false;
    }else{
      this.cal =true;
    }
    const fromdate = new Date(this.date.from);
    const todate = new Date(this.date.to);
    if(fromdate.getTime() == todate.getTime()){
      this.masablock = true;
      this.days = 1;
    }else{
      this.masablock = false;
      var diff = Math.abs(todate.getTime() - fromdate.getTime());
      this.days = Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    }
    this.TarikhVal = fromdate.getDate()+'/'+fromdate.getMonth()+'/'+fromdate.getFullYear()+' - '+ todate.getDate()+'/'+todate.getMonth()+'/'+todate.getFullYear();
    
    this.ChangeDDTarikh();
  }

  async hantar() {
    const loading = await this.loadingController.create();
    await loading.present();
    var harga = 0;
    var dewan = this.Dewan;
    this.listdewan.forEach(function (value) {
      if(value.id == dewan){
        harga = value.harga;
        return;
      }
    });

    this.masa_from = ''; 
    this.masa_to = '';
    
    this.amaun = harga * this.hour;

    const formData = new FormData();
    formData.append('user_id', this.user.user_id);
    formData.append('dewan', this.Dewan);
    if(this.date == undefined){
      await loading.dismiss();
      this.alerterror('Tarikh diperlukan');
    }

    formData.append('tarikh_mula', this.date.from);
    formData.append('tarikh_akhir', this.date.to);
    formData.append('days', this.days);
    formData.append('masa_from', this.masa_from);  
    formData.append('masa_to', this.masa_to);    
    formData.append('hour', this.hour); 
    formData.append('amaun', this.amaun); 
    await this.bookingService.add(formData).subscribe(
      async (res) => {
        console.log(res);
        this.clearform();
        await loading.dismiss();
        this.router.navigate(['/main/tabs/tempahkemudahan']);
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

  async alerterror(msg){
    const alert = await this.alertController.create({
      header: 'Loading failed',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  clearform(){
    this.Lokasi = '';
    this.Dewan = '';
    this.TarikhVal = '';
    this.date = '';
    this.MasaVal = '';
  }

  async ChangeDDTarikh(){
    var dewan = this.Dewan;
    var time = [];
    await this.listbooking.forEach(function (value) {
      if(value.dewan_id == dewan){
        if(value.days == 1){
          var timeid = parseInt(value.time_from);
          for(let i=1; i<=value.hour; i++){
            time.push(timeid);
            timeid = timeid + 1;
          }
        }
      }
    });

    var optionfrom = [];
    var optionto = [];

    var num : string;

    console.log('time',time);
    for (let i = 0; i <= 23; i++) {
      var found = time.find(element => element == i);
      if(found == undefined){
        optionfrom.push(i);
        optionto.push(i);
      }
    }
    console.log('optfrom',optionfrom);
    console.log('optto',optionto);

  }
}


