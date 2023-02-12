import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AduanService } from '../../../shared/services/aduan/aduan.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-tambahaduan',
  templateUrl: './tambahaduan.page.html',
  styleUrls: ['./tambahaduan.page.scss'],
})
export class TambahaduanPage implements OnInit {

  userid: any;
  ddKategori: any;
  ddRosak = [];
  listrosak: any;
  KateVal: any;
  RosakVal: any;
  CatatanVal: any;
  pilih_jenis: any;

  constructor(
    private location: Location,
    private router: Router,
    private aduanService: AduanService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private nativeStorage: NativeStorage,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.userid = data.value.user_id;
      },
      error => console.error(error)
    );

    await this.aduanService.getdd().subscribe(
      async (res) => {
        console.log(res);
        this.ddKategori = res[0];
        this.listrosak = res[1];
        console.log(this.listrosak);
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

  async ChangeDDKate() {
    this.ddRosak = [];
    var array = []
    var val = this.KateVal;
    await this.listrosak.forEach(function (value) {
      if (value.kategori_id == val) {
        array.push(value);
      }
    });
    this.ddRosak = array;
  }

  back() {
    this.location.back();
  }

  async hantar() {
    const loading = await this.loadingController.create();
    await loading.present();


    console.log(this.pilih_jenis, "hereeee")

    const formData = new FormData();
    formData.append('id', this.userid);
    formData.append('kategori', this.KateVal);
    formData.append('rosak', this.RosakVal);
    formData.append('catatan', this.CatatanVal);
    formData.append('jenis_akaun', this.pilih_jenis);

    await this.aduanService.add(formData).subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss();




        this.router.navigate(['/main/tabs/aduan/aduanmain']);
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
