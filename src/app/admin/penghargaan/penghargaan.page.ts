import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { PenghargaanService } from '../../shared/services/penghargaan/penghargaan.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { ViewnotisPage } from '../../shared/modals/viewnotis/viewnotis.page';
import { AdminmenuPage } from '../../shared/modals/adminmenu/adminmenu.page';

@Component({
  selector: 'app-penghargaan',
  templateUrl: './penghargaan.page.html',
  styleUrls: ['./penghargaan.page.scss'],
})
export class PenghargaanPage implements OnInit {

  PenghargaanList = [];

  user : any;

  constructor(
    private location: Location,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private penghargaanService: PenghargaanService,
    private nativeStorage: NativeStorage,
    public modalController: ModalController,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.user = data.value;
      },
      error => console.error(error)
    );
    
    var userid = this.user.admin_id;
    await this.penghargaanService.get().subscribe(
      async (res) => {
        console.log(res);
        await res.forEach(async function (value) {
          var date = new Date(value.created_at);
          value.date = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
          let obj = JSON.parse(value.viewed);
          value.view = false;
          await obj.forEach(function (value2) {
            if(value2.id == userid){
              value.view = true;
            }
          });
        });
        this.PenghargaanList = res;
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

  async openModal(data) {
    const loading = await this.loadingController.create();
    await loading.present();

    if(data.view == false){
      await this.penghargaanService.viewid(data.id,this.user.admin_id).subscribe(
        async (res) => {
          res.view = true;
          console.log('res',res);
          var date = new Date(res.created_at);
          res.date = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
          var foundIndex = this.PenghargaanList.findIndex(x => x.id == res.id);
          this.PenghargaanList[foundIndex] = res;
          console.log('checklist',this.PenghargaanList);
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

    const modal = await this.modalController.create({
      component: ViewnotisPage,
      cssClass: 'small-modal',
      backdropDismiss: true,
      componentProps: {
        "title": data.user_name,
        "body": data.penghargaan
      }
    });

    await loading.dismiss();
    return await modal.present();
  }

  async adminmenu(){
    const modal = await this.modalController.create({
      component: AdminmenuPage,
      cssClass: 'menu-modal',
      backdropDismiss: true
    });

    return await modal.present();
  }
}
