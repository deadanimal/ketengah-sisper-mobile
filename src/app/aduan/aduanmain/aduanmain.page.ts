import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AduanService } from '../../shared/services/aduan/aduan.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-aduanmain',
  templateUrl: './aduanmain.page.html',
  styleUrls: ['./aduanmain.page.scss'],
})
export class AduanmainPage implements OnInit {
  
  aduancount = 0;
  userid : any;
  lattKateAduan: any;
  lattStatusAduan: any;
  latestaduan: any;

  constructor(
    private location: Location,
    private router: Router,
    private aduanService: AduanService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private nativeStorage: NativeStorage,
    route:ActivatedRoute,
    private platform: Platform
  ) {

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.back();
    });

    route.params.subscribe(async val => {
      const loading = await this.loadingController.create();
      await loading.present();

      await this.nativeStorage.getItem('user').then(
        data => {
          this.userid = data.value.user_id;
        },
        error => console.error(error)
      );

      console.log(this.userid);
      await this.aduanService.first(this.userid).subscribe(
        async (res) => {
          console.log(res);
          await loading.dismiss();
          this.aduancount = res[1];
          if(res[0].kategori == undefined){
            this.lattKateAduan = false;
          }else{
            this.lattKateAduan = res[0].kategori +' - '+ res[0].kategorilist.kategori;
          }

          var statdet = '';
          if(res[0].status == 0){
            statdet = "Tiada Status";
          }else if(res[0].status == 1){
            statdet = "Belum Dibaiki";
          }else if(res[0].status == 2){
            statdet = "Dibaiki Sebahagian";
          }else if(res[0].status == 3){
            statdet = "Sudah Dibaiki";
          }else if(res[0].status == 4){
            statdet = "Kontrak";
          }else if(res[0].status == 5){
            statdet = "Semakan";
          }
          
          this.lattStatusAduan = statdet;
          this.latestaduan = res[0];
          console.log(this.lattKateAduan);
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
    });
  }

  async ngOnInit() {
  }

  back(){
    this.location.back();
  }

  tambah() {
    this.router.navigate(['/main/tabs/aduan/aduanmain/tambah']);
  }

  senaraiaduan() {
    this.router.navigate(['/main/tabs/aduan/aduanmain/senarai']);
  }

  aduanview(){
    let navigationExtras: NavigationExtras = {
      state: {
        aduan: this.latestaduan
      }
    };
    this.router.navigate(['/main/tabs/aduan/aduanmain/view'], navigationExtras);
  }
}
