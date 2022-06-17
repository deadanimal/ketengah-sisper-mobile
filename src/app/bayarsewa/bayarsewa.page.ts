import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bayarsewa',
  templateUrl: './bayarsewa.page.html',
  styleUrls: ['./bayarsewa.page.scss'],
})
export class BayarsewaPage implements OnInit {

  AkaunList = [];

  jumlah = 0;
  jumcount = 0;
  user: any;
  
  constructor(
    private location: Location,
    private loadingController: LoadingController,
    private nativeStorage: NativeStorage,
    private router: Router
  ) { }

  ngOnInit() {

  }

  async ionViewDidEnter() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.AkaunList = [];
    this.jumlah = 0;
    this.jumcount = 0;

    await this.nativeStorage.getItem('user').then(
      data => {
        this.user = data.value;
        this.user.perumahan.forEach(element => {
          element.check = true;
          this.AkaunList.push(element);
          this.jumcount = this.jumcount + 1;
          this.jumlah = element.jumlahbyr + this.jumlah;
        });
        this.user.premis.forEach(element => {
          element.check = true;
          this.AkaunList.push(element);
          this.jumcount = this.jumcount + 1;
          this.jumlah = element.jumlahbyr + this.jumlah;
        });
        console.log(this.AkaunList);
      },
      error => console.error(error)
    );

    await loading.dismiss();
  }

  back(){
    this.location.back();
  }

  bayar(){
    var arr = [];
    var akaun = {};
    this.AkaunList.forEach(element => {
      if(element.check == true){
        if(element.no_akaun_rumah != undefined){
          akaun = {
            "jenis":'rumah',
            "id":element.id,
            "noakaun":element.no_akaun_rumah,
            "amaun":element.jumlahbyr,
            "no_ic_pemilik":element.no_kad_pengenalan
          }
        }else if(element.no_akaun_premis != undefined){
          akaun = {
            "jenis":'premis',
            "id":element.id,
            "noakaun":element.no_akaun_premis,
            "amaun":element.jumlahbyr,
            "no_ic_pemilik":element.no_kad_pengenalan
          }
        }
        arr.push(akaun);
      }
    });
    var data = 
      {
        "src": 1,
        "jumlah": this.jumlah,
        "jumcount":this.jumcount,
        "akaun":arr
      };
    
    let navigationExtras: NavigationExtras = {
      state: {
        data: data
      }
    };
    this.router.navigate(['main/tabs/bayaran'], navigationExtras);
  }

  check(data){
    if(data.check == true){
      this.jumcount = this.jumcount - 1;
      this.jumlah = this.jumlah - data.jumlahbyr;
    }else if(data.check == false){
      this.jumcount = this.jumcount + 1;
      this.jumlah = this.jumlah + data.jumlahbyr;
    }
    console.log(data.check);
  }

  changejumlah(){
    this.jumlah = 0;
    this.AkaunList.forEach(element => {
      if(element.check == true){
        this.jumlah = this.jumlah + element.jumlahbyr;
      }
    });
    console.log(this.jumlah);
  }
}
