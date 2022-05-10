import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ShtenderdtlService } from 'src/app/shared/services/shtenderdtl/shtenderdtl.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenderdetail',
  templateUrl: './tenderdetail.page.html',
  styleUrls: ['./tenderdetail.page.scss'],
})
export class TenderdetailPage implements OnInit {

  tenderform:FormGroup;
  ddUrusan:any;
  user:any;

  TenderList:any;

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private shtenderdtlService: ShtenderdtlService,
    private nativeStorage: NativeStorage,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.ddUrusan = [
      {
        id: "PB002",
        urusan: "PEMBELIAN BORANG SEBUTHARGA"
      },
      {
        id: "PB018",
        urusan: "PEMBELIAN BORANG TENDER"
      }
    ]

    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.user = data.value;
      },
      error => console.error(error)
    );

    await loading.dismiss();
  }

  async ionViewWillEnter () {

    const loading = await this.loadingController.create();
    await loading.present();

    this.tenderform = this.fb.group({
      sh_id:[],
      kod_urusan: ['', [Validators.required]],
      jumlah_bayar: ['', [Validators.required]],
      catatan: ['', [Validators.required]]
    });

    await this.shtenderdtlService.get(this.user.tender).subscribe(
      async (res) => {
        console.log(res);
        this.TenderList = res;
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

  back(){
    this.location.back();
  }

  async hantar(){
    const loading = await this.loadingController.create();
    await loading.present();
    console.log(this.user.tender);
    this.tenderform.patchValue({
      sh_id: this.user.tender
    });
    console.log(this.tenderform.value);
    await this.shtenderdtlService.add(this.tenderform.value).subscribe(
      async (res) => {
        console.log(res);
        this.TenderList.push(res);
        this.tenderform.reset()
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

  bayar(){

  }

  deleteone(item){

  }
}
