import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/shared/services/booking/booking.service';
import { Router } from '@angular/router';
import { AlatanService } from 'src/app/shared/services/alatan/alatan.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-alatan',
  templateUrl: './alatan.page.html',
  styleUrls: ['./alatan.page.scss'],
})
export class AlatanPage implements OnInit {

  ddAlatan:any;
  Alatan:any;
  QtyVal:any;
  cal=false;
  date:any;
  caloption = {
    pickMode: 'range',
    title: 'RANGE',
    daysConfig: []
  };
  days:any;
  TarikhVal:any;
  amaun:any;
  user:any;

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

  back(){
    this.location.back();
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
      this.days = 1;
    }else{
      var diff = Math.abs(todate.getTime() - fromdate.getTime());
      this.days = Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    }
    this.TarikhVal = fromdate.getDate()+'/'+fromdate.getMonth()+'/'+fromdate.getFullYear()+' - '+ todate.getDate()+'/'+todate.getMonth()+'/'+todate.getFullYear();
    
  }

  increment () {
    this.QtyVal++;
  }
  
  decrement () {
    this.QtyVal--;
  }

  async hantar () {
    const loading = await this.loadingController.create();
    await loading.present();
    var harga = 0;
    var alatan = this.Alatan;
    this.ddAlatan.forEach(function (value) {
      if(value.id == alatan){
        harga = value.harga;
        return;
      }
    });
    this.amaun = harga * this.days * this.QtyVal;

    const formData = new FormData();
    formData.append('user_id', this.user.user_id);
    formData.append('alatan', this.Alatan);
    if(this.date == undefined){
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

  clearform(){
    this.Alatan = '';
    this.QtyVal = 0;
    this.TarikhVal = '';
    this.date = '';
  }

  async alerterror(msg){
    const alert = await this.alertController.create({
      header: 'Loading failed',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
