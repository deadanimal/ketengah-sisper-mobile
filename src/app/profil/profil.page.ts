import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  nokp = "012345678901";
  username = "Ahmad Aiman Bin Ali";

  constructor(
    private location: Location,
    private router: Router,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private loadingController: LoadingController
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
    // this.router.navigate(['/login']);
  }

  lupapass(){
    this.router.navigate(['/forgotpass']);
  }

}
