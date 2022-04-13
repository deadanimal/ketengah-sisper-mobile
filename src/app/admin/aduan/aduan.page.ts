import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AdminmenuPage } from '../../shared/modals/adminmenu/adminmenu.page';
import { AduanService } from 'src/app/shared/services/aduan/aduan.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-aduan',
  templateUrl: './aduan.page.html',
  styleUrls: ['./aduan.page.scss'],
})
export class AduanPage implements OnInit {

  aduanfront = 
    {
      status1:{
        count:0,
        detail:[]
      },
      status2:{
        count:0,
        detail:[]
      },
      status3:{
        count:0,
        detail:[]
      },
      status4:{
        count:0,
        detail:[]
      },
      status5:{
        count:0,
        detail:[]
      },
      status6:{
        count:0,
        detail:[]
      }
    }
  
  constructor(
    private location: Location,
    public modalController: ModalController,
    private aduanService: AduanService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  async ngOnInit() {
  }
 
  async ionViewDidEnter() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.aduanService.getall().subscribe(
      async (res) => {
        var val1 = 0;
        var val2 = 0;
        var val3 = 0;
        var val4 = 0;
        var val5 = 0;
        var val6 = 0;

        var temp1 = [];
        var temp2 = [];
        var temp3 = [];
        var temp4 = [];
        var temp5 = [];
        var temp6 = [];

        await res.forEach(function (value) {
          if(value.status == 0){
            val1 = val1 + 1;
            value.statusdet = "Tiada Status";
            temp1.push(value);
          }else if(value.status == 1){
            val2 = val2 + 1;
            value.statusdet = "Belum Dibaiki";
            temp2.push(value);
          }else if(value.status == 2){
            val3 = val3 + 1;
            value.statusdet = "Dibaiki Sebahagian";
            temp3.push(value);
          }else if(value.status == 3){
            val4 = val4 + 1;
            value.statusdet = "Sudah Dibaiki";
            temp4.push(value);
          }else if(value.status == 4){
            val5 = val5 + 1;
            value.statusdet = "Kontrak";
            temp5.push(value);
          }else if(value.status == 5){
            val6 = val6 + 1;
            value.statusdet = "Semakan";
            temp6.push(value);
          }
        });

        this.aduanfront.status1.count = val1;
        this.aduanfront.status1.detail = temp1;
        this.aduanfront.status2.count = val2;
        this.aduanfront.status2.detail = temp2;
        this.aduanfront.status3.count = val3;
        this.aduanfront.status3.detail = temp3;
        this.aduanfront.status4.count = val4;
        this.aduanfront.status4.detail = temp4;
        this.aduanfront.status5.count = val5;
        this.aduanfront.status5.detail = temp5;
        this.aduanfront.status6.count = val6;
        this.aduanfront.status6.detail = temp6;

        await loading.dismiss();
        console.log('aduanfront',this.aduanfront);
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

  async adminmenu(){
    const modal = await this.modalController.create({
      component: AdminmenuPage,
      cssClass: 'menu-modal',
      backdropDismiss: true
    });

    return await modal.present();
  }

  senaraiaduan(aduan){
    let navigationExtras: NavigationExtras = {
      state: {
        aduan:aduan
      }
    };
    this.router.navigate(['main/admin/aduan/aduanlist'], navigationExtras);
  }
}
