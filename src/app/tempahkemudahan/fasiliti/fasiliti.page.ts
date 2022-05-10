import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController} from '@ionic/angular';
import { LokasiService } from '../../shared/services/lokasi/lokasi.service';
import { FasilitiService } from 'src/app/shared/services/fasiliti/fasiliti.service';
import { BookingService } from 'src/app/shared/services/booking/booking.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-fasiliti',
  templateUrl: './fasiliti.page.html',
  styleUrls: ['./fasiliti.page.scss'],
})
export class FasilitiPage implements OnInit {
  
  ddLokasi : any;
  Lokasi : any;
  Fasiliti : any;
  ddFasiliti : any;
  Gelanggang : any;
  cal=false;
  date:any;
  caloption = {
    pickMode: 'range',
    title: 'RANGE',
    daysConfig: []
  };
  days:any;
  TarikhVal:any;
  masablock = false;
  listfutsal:any;
  listbadminton:any;
  listbooking:any;
  lokasiread = true;
  gelanggangread = true;
  tarikhread = true;
  ddGelanggang:any;
  user:any;

  constructor(
    private location: Location,
    private loadingController: LoadingController,
    private lokasiService: LokasiService,
    private alertController: AlertController,
    private fasilitiService: FasilitiService,
    private bookingService: BookingService,
    private router: Router,
    private nativeStorage: NativeStorage
  ) { }

  async ngOnInit() {
    this.ddFasiliti = [
      {
        id: "1",
        nama: "Futsal"
      },
      {
        id: "2",
        nama: "Badminton"
      }
    ]
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

    await this.lokasiService.getdd().subscribe(
      async (res) => {
        console.log(res);
        this.ddLokasi = res;
        await this.fasilitiService.getfutsal().subscribe(
          async (res) => {
            console.log(res);
            this.listfutsal = res;
            await this.fasilitiService.getbadminton().subscribe(
              async (res) => {
                console.log(res);
                this.listbadminton = res;
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

  ChangeDDLokasi() {
    if(this.Lokasi == 1){
      this.ddFasiliti = [
        {
          id: "1",
          nama: "Futsal"
        },
        {
          id: "2",
          nama: "Badminton"
        }
      ];
      this.lokasiread = false;
    }else{
      this.ddFasiliti = [
        {
          id: "2",
          nama: "Badminton"
        }
      ];
      this.lokasiread = false;
    };
    this.Fasiliti = '';
    this.Gelanggang = '';
    this.gelanggangread = true;
    this.tarikhread = true;
  }

  async ChangeDDFasiliti() {
    this.gelanggangread = false;
    this.tarikhread = false;
    if(this.Fasiliti == 1){
      this.ddGelanggang = this.listfutsal;
    }else if(this.Fasiliti == 2){
      this.ddGelanggang = [];
      var array = []
      var val = this.Lokasi;
      console.log(val);
      await this.listbadminton.forEach(function (value) {
        if(value.lokasi == val){
          array.push(value);
        }
      });
      this.ddGelanggang = array;
    }
  }

  async ChangeDDGelanggang() {
    this.tarikhread = false;
    var opt = [];
    var gelanggang = this.Gelanggang;
    var fasiliti = this.Fasiliti;
    await this.listbooking.forEach(function (value) {
      if(fasiliti == 1){
        if(value.ft_court_id == gelanggang){
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
      }else if(fasiliti == 2){
        if(value.bd_court_id == gelanggang){
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
      }
      
    });

    this.caloption.daysConfig = opt;
    console.log(this.caloption);

    if(this.cal == true){
      this.cal =false;
    }
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
      this.masablock = true;
      this.days = 1;
    }else{
      this.masablock = false;
      var diff = Math.abs(todate.getTime() - fromdate.getTime());
      this.days = Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    }
    this.TarikhVal = fromdate.getDate()+'/'+fromdate.getMonth()+'/'+fromdate.getFullYear()+' - '+ todate.getDate()+'/'+todate.getMonth()+'/'+todate.getFullYear();
    
  }

  ChangeDDTarikh() {

  }

  async hantar() {
    const loading = await this.loadingController.create();
    await loading.present();
    var harga = 0;

    const formData = new FormData();
    formData.append('user_id', this.user.user_id);

    if(this.Fasiliti == 1){
      formData.append('futsal', this.Gelanggang);
    }else if(this.Fasiliti == 2){
      formData.append('badminton', this.Gelanggang);
    }

    // var dewan = this.Dewan;
    // this.listdewan.forEach(function (value) {
    //   if(value.id == dewan){
    //     harga = value.harga;
    //     return;
    //   }
    // });
    
    // this.amaun = harga * this.hour;

    if(this.date == undefined){
      await loading.dismiss();
      this.alerterror('Tarikh diperlukan');
    }

    formData.append('tarikh_mula', this.date.from);
    formData.append('tarikh_akhir', this.date.to);
    formData.append('days', this.days);   
    // formData.append('hour', this.hour); 
    // formData.append('amaun', this.amaun); 
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
    this.Fasiliti = '';
    this.Gelanggang = '';
    this.TarikhVal = '';
    this.date = '';
  }
}
