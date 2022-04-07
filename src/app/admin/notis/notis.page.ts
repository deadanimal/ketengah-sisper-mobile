import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { NotisService } from '../../shared/services/notis/notis.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AdminmenuPage } from '../../shared/modals/adminmenu/adminmenu.page';

@Component({
  selector: 'app-notis',
  templateUrl: './notis.page.html',
  styleUrls: ['./notis.page.scss'],
})
export class NotisPage implements OnInit {

  userid : any;
  tajuknotis : any;
  kandungannotis : any;

  constructor(
    private location: Location,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private notisService: NotisService,
    private nativeStorage: NativeStorage,
    public modalController: ModalController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.userid = data.value.admin_id;
      },
      error => console.error(error)
    );

    await loading.dismiss();
  }

  back(){
    this.location.back();
  }

  async hantar(){
    const loading = await this.loadingController.create();
    await loading.present();

    const formData = new FormData();
    formData.append('id', this.userid);
    formData.append('tajuk', this.tajuknotis);
    formData.append('keterangan', this.kandungannotis);

    await this.notisService.add(formData).subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Success',
          message: 'Notis Berjaya Di Tambah',
          buttons: ['OK'],
        });
        await alert.present();
        this.tajuknotis = '';
        this.kandungannotis = '';
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

  async adminmenu(){
    const modal = await this.modalController.create({
      component: AdminmenuPage,
      cssClass: 'menu-modal',
      // breakpoints: [0, 0.3, 0.5, 0.8],
      // initialBreakpoint: 0.5,
      backdropDismiss: true
    });

    return await modal.present();
  }

}
