import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/auth/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';

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
}
