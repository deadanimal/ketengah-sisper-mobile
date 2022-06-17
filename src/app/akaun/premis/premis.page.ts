import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { PremisService } from '../../shared/services/akaun/premis/premis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premis',
  templateUrl: './premis.page.html',
  styleUrls: ['./premis.page.scss'],
})
export class PremisPage implements OnInit {
  
  noakaun: any;
  namaakaun: any;
  user: any;

  constructor(
    private location: Location,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private nativeStorage: NativeStorage,
    private premisService: PremisService,
    private router: Router
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.user = data.value;
        console.log(this.user);
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
    formData.append('user_id', this.user.user_id);
    formData.append('no_akaun_premis', this.noakaun);
    formData.append('nama_akaun', this.namaakaun);
    formData.append('no_ic', this.user.no_ic);

    await this.premisService.add(formData).subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss();
        if(res == 1){
          this.alerterror('API Error');
        }else if(res == 2){
          this.alerterror('Akaun Tidak Dijumpai');
        }else{
          this.user.premis.push(res);
          this.nativeStorage.setItem('user', {value: this.user});
          this.clearform();
          this.router.navigate(['/main/tabs/home']);
        }
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

  clearform(){
    this.noakaun = '';
    this.namaakaun = '';
  }

  async alerterror(msg){
    const alert = await this.alertController.create({
      header: 'Loading failed',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
