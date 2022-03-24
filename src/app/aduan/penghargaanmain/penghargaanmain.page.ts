import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { PenghargaanService } from '../../shared/services/penghargaan/penghargaan.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-penghargaanmain',
  templateUrl: './penghargaanmain.page.html',
  styleUrls: ['./penghargaanmain.page.scss'],
})
export class PenghargaanmainPage implements OnInit {

  PenghargaanVal:any;
  user:any;

  constructor(
    private location: Location,
    private router: Router,
    private penghargaanService: PenghargaanService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private nativeStorage: NativeStorage
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.user = data.value;
        loading.dismiss();
      },
      error => console.error(error)
    );
  }

  back(){
    this.location.back();
  }

  async hantar() {
    const loading = await this.loadingController.create();
    await loading.present();

    const formData = new FormData();
    formData.append('user_id', this.user.user_id);
    formData.append('user_name', this.user.name);
    formData.append('penghargaan', this.PenghargaanVal);

    await this.penghargaanService.add(formData).subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss();
        this.router.navigate(['/main/tabs/aduan']);
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
