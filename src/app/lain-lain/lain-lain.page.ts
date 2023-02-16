import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { LainService } from '../shared/services/lain/lain.service';
import { Router, NavigationExtras } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-lain-lain',
  templateUrl: './lain-lain.page.html',
  styleUrls: ['./lain-lain.page.scss'],
})
export class LainLainPage implements OnInit {
  showDetails = false;
  lainform: FormGroup;
  ddUrusan: any;
  jumlah: any;
  user: any;

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private lainService: LainService,
    private router: Router,
    private nativeStorage: NativeStorage
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.user = data.value;
      },
      error => console.error(error)
    );

    await this.lainService.getdd().subscribe(
      async (res) => {
        console.log(res);
        this.ddUrusan = res;
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

  ionViewWillEnter() {
    this.lainform = this.fb.group({
      kod_urusan: ['', [Validators.required]],
      urusan: ['', [Validators.required, Validators.minLength(4)]],
      jumlah_bayar: ['', [Validators.required]]
    });
  }

  back() {
    this.location.back();
  }

  async hantar() {
    const loading = await this.loadingController.create();
    await loading.present();
    var arr = [];
    var akaun = {};

    await this.lainService.add(this.lainform.value).subscribe(
      async (res) => {
        console.log(res);
        this.jumlah = res.jumlah_bayar;
        akaun = {
          "id": res.id,
          "amaun": this.jumlah,
          "kodbayaran": 'LL' + res.kod_urusan,
        }
        arr.push(akaun);
        var data =
        {
          "src": 2,
          "jumlah": this.jumlah,
          "jumcount": 1,
          "akaun": arr
        };

        let navigationExtras: NavigationExtras = {
          state: {
            data: data
          }
        };
        await loading.dismiss();
        this.router.navigate(['main/tabs/bayaran'], navigationExtras);
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

  Check(val) {
    if (val.target.value === 8) {

      this.showDetails = true;

    }

    else {
      this.showDetails = false;
    }

    console.log("the value is " + val.target.value);

    console.log(this.user.tender);
    if (val.detail.value == 8) {
      if (this.user.tender == 0) {
        this.router.navigate(['main/tabs/tender']);
      } else if (this.user.tender == 1) {
        this.router.navigate(['main/tabs/tender/tenderDetail']);
      }
    }
  }

  send() {

    this.router.navigateByUrl('sebutharga')

  }
}
