import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../../../shared/services/auth/authentication.service';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.page.html',
  styleUrls: ['./adminmenu.page.scss'],
})
export class AdminmenuPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AuthenticationService,
    private router: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async logout() {
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
    const modal = await this.modalController.getTop();
    if (modal) {
        modal.dismiss();
    }
  }

  async home() {
    const modal = await this.modalController.getTop();
    if (modal) {
        modal.dismiss();
    }
    this.router.navigate(['main/admin']);
  }
}
