import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { TenderService } from '../shared/services/shtender/tender.service';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.page.html',
  styleUrls: ['./tender.page.scss'],
})
export class TenderPage implements OnInit {

  tenderform: FormGroup;
  user : any;

  constructor(
    private location: Location,
    private router: Router,
    private fb: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private nativeStorage: NativeStorage,
    private tenderService: TenderService,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.user = data;
      },
      error => console.error(error)
    );

    await loading.dismiss();
  }

  ionViewWillEnter () {
    this.tenderform = this.fb.group({
      user_id:[],
      nama_syarikat: ['', [Validators.required]],
      no_ruj: ['', [Validators.required, Validators.minLength(4)]],
      alamat1: ['', [Validators.required]],
      alamat2: [''],
      poskod: ['', [Validators.required]],
      bandar: ['', [Validators.required]],
      negeri: ['', [Validators.required]]
    });
  }

  back(){
    this.location.back();
  }

  async hantar(){
    const loading = await this.loadingController.create();
    await loading.present();
    this.tenderform.patchValue({
      user_id: this.user.value.user_id
    });
    await this.tenderService.add(this.tenderform.value).subscribe(
      async (res) => {
        console.log(res);
        this.user.value.tender = 1;
        this.nativeStorage.setItem('user', this.user);
        await loading.dismiss();
        this.router.navigate(['/main/tabs/tender/tenderDetail']);
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
