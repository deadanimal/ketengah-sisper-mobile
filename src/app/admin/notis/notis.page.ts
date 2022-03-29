import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController } from '@ionic/angular';
import { NotisService } from '../../shared/services/notis/notis.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

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
}
