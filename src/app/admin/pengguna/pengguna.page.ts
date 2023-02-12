import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AdminmenuPage } from 'src/app/shared/modals/adminmenu/adminmenu.page';
import { PenggunaService } from 'src/app/shared/services/pengguna/pengguna.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-pengguna',
  templateUrl: './pengguna.page.html',
  styleUrls: ['./pengguna.page.scss'],
})
export class PenggunaPage implements OnInit {
  total: number;

  penggunaList = [];
  phoneno: any;
  name: any;

  constructor(
    private location: Location,
    public modalController: ModalController,
    private penggunaService: PenggunaService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.userService.getAllUsers().subscribe(
      res => {
        console.log(res);
        this.total = 17;
      }
    )
  }

  back() {
    this.location.back();
  }

  async adminmenu() {
    const modal = await this.modalController.create({
      component: AdminmenuPage,
      cssClass: 'menu-modal',
      backdropDismiss: true
    });

    return await modal.present();
  }

  async search() {
    const loading = await this.loadingController.create();
    await loading.present();
    const formData = new FormData();

    if (this.phoneno) {
      formData.append('nophone', this.phoneno);

      await this.penggunaService.search(formData).subscribe(
        async (res) => {
          console.log(res);
          this.penggunaList = res;
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

    else if (this.name) {

      formData.append('name', this.name);

      await this.penggunaService.searchByName(formData).subscribe(
        async (res) => {
          console.log(res);
          this.penggunaList = res;
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



    this.phoneno = '';
  }

  async aktif(data) {
    console.log(data);
    const loading = await this.loadingController.create();
    await loading.present();

    const formData = new FormData();
    formData.append('userid', data.user_id);
    formData.append('check', data.check);
    await this.penggunaService.aktif(formData).subscribe(
      async (res) => {
        console.log(res);
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
