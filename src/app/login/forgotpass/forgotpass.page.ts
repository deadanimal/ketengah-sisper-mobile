import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/auth/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  phone:any;

  constructor(
    private location: Location,
    private router: Router,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  async sent(){
    console.log(this.phone);
    if(this.phone != '' && this.phone.length == 9 ){
      const loading = await this.loadingController.create();
      await loading.present();
      
      this.authService.forgetpass(this.phone).subscribe(
        async (res) => {
          console.log('forgot',res);
          if(res == 'tiada'){
            await loading.dismiss();
            const alert = await this.alertController.create({
              header: 'Failed',
              message: 'Tiada akaun dijumpai berdaftar menggunakan no telefon diberi',
              buttons: ['OK'],
            });
            await alert.present();
          }
          if(res == 'succ'){
            await loading.dismiss(); 
            const alert = await this.alertController.create({
              header: 'Berjaya',
              message: 'Sila dapatkan katalaluan sementara di nombor telefon anda',
              buttons: ['OK'],
            });
    
            await alert.present();
            this.router.navigate(['/login']);
          }
        },
        async (res) => {
          console.log(res);
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Failed',
            message: res.error.error,
            buttons: ['OK'],
          });
  
          await alert.present();
        }
      );
    }else{
      const alert = await this.alertController.create({
        header: 'Failed',
        message: 'Sila Isikan No Telefon yang Sah',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  numericOnly(event): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }
}
