import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController, LoadingController, ModalController, Platform } from '@ionic/angular';
import { BayaranService } from 'src/app/shared/services/bayaran/bayaran/bayaran.service';

@Component({
  selector: 'app-semakbayaran',
  templateUrl: './semakbayaran.page.html',
  styleUrls: ['./semakbayaran.page.scss'],
})
export class SemakbayaranPage implements OnInit {

  ddakaun=[];
  selectedakaun:any;
  bayaranlist:any;

  constructor(
    private location: Location,
    private nativeStorage: NativeStorage,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private bayaranService: BayaranService
  ) { }

  ngOnInit() {

  }

  back(){
    this.location.back();
  }

  async ionViewDidEnter() {
    const loading = await this.loadingController.create();
      await loading.present();
      await this.nativeStorage.getItem('user').then(
        data => {
          console.log('akaun', data.value);
          var rumah = data.value.perumahan;
          var premis = data.value.premis;
          this.ddakaun = [];

          if(rumah != undefined){
            rumah.forEach(element => {
              var temp = 0;
              var temp2 = 0;
  
              if(element.jumlah_tunggakan != ""){
                temp = parseInt(element.jumlah_tunggakan);
              }
              if(element.kadar_sewa != ""){
                temp2 = parseInt(element.kadar_sewa);
              }
              console.log(temp2);
              element.jumlahbyr = temp + temp2;

              this.ddakaun.push(element);
            });
          }

          if(premis != undefined){
            premis.forEach(element => {
              var temp = 0;
              var temp2 = 0;
  
              if(element.jumlah_tunggakan != ""){
                temp = parseInt(element.jumlah_tunggakan);
              }
              if(element.kadar_sewa != ""){
                temp2 = parseInt(element.kadar_sewa);
              }
              console.log(temp2);
              element.jumlahbyr = temp + temp2;

              this.ddakaun.push(element);
            });
          }
          
          console.log('rumah',rumah);
          console.log('premis',premis);
          console.log('allakaun',this.ddakaun);
          loading.dismiss();
        },
        error => console.error(error)
      );
  }

  async tukaracc(data){
    console.log(data);
    if(data != undefined && data != null){
      const loading = await this.loadingController.create();
      await loading.present();

      await this.bayaranService.getuser(data.id,data).subscribe(
        async (res) => {
          console.log(res);
          this.bayaranlist = res;
          const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
          this.bayaranlist.forEach(element => {
            const d = new Date(element.tarikh_bayaran);
            console.log(monthNames[d.getMonth()]);
            element.bulan = monthNames[d.getMonth()];
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
    
  }
}
