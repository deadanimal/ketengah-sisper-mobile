import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/auth/authentication.service';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { LanguagePage } from '../shared/modals/language/language.page';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AuthenticationService,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  async logout(){
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.logout().then(
      async (res) => {
        console.log(res);
        await loading.dismiss();        
        this.router.navigate(['/login']);
      },
      async (res) => {
        console.log(res);
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: res.error.error,
          buttons: ['OK'],
        });
 
        await alert.present();
      }
    );
  }

  async bahasa(){
    const loading = await this.loadingController.create();
    await loading.present();
    const modal = await this.modalController.create({
      component: LanguagePage,
      cssClass: 'language-modal',
      backdropDismiss: true
    });

    await loading.dismiss();
    return await modal.present();
  }
}
