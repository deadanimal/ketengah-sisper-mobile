import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { LainService } from '../shared/services/lain/lain.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-lain-lain',
  templateUrl: './lain-lain.page.html',
  styleUrls: ['./lain-lain.page.scss'],
})
export class LainLainPage implements OnInit {

  lainform: FormGroup;
  ddUrusan: any;
  jumlah: any;

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private lainService: LainService,
    private router: Router
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

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

  ionViewWillEnter () {
    this.lainform = this.fb.group({
      kod_urusan: ['', [Validators.required]],
      urusan: ['', [Validators.required, Validators.minLength(4)]],
      jumlah_bayar: ['', [Validators.required]]
    });
  }

  back(){
    this.location.back();
  }

  async hantar(){
    const loading = await this.loadingController.create();
    await loading.present();
    var arr = [];
    var akaun = {};
    
    await this.lainService.add(this.lainform.value).subscribe(
      async (res) => {
        console.log(res);
        this.jumlah = res.jumlah_bayar;
        akaun = {
          "id":res.id,
          "amaun":this.jumlah,
          "kodbayaran":'LL'+res.kod_urusan,
        }
        arr.push(akaun);
        var data = 
          {
            "src": 2,
            "jumlah": this.jumlah,
            "jumcount":1,
            "akaun":arr
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
}
