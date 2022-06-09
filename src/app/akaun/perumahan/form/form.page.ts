import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Location } from "@angular/common";
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { PerumahanService } from '../../../shared/services/akaun/perumahan/perumahan.service';
import { PremisService } from '../../../shared/services/akaun/premis/premis.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  src: any;
  noakaun: any;
  namaakaun: any;
  nokp: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private loadingController: LoadingController,
    private nativeStorage: NativeStorage,
    private perumahanService: PerumahanService,
    private premisService: PremisService,
    private alertController: AlertController

  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.src = this.router.getCurrentNavigation().extras.state.source;
        console.log(this.src);
      }
    });
   }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.user = data.value;;
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
    formData.append('no_akaun_rumah', this.noakaun);
    formData.append('nama_akaun', this.namaakaun);
    if(this.src == 'no'){
      formData.append('no_ic', this.nokp);
    }else{
      formData.append('no_ic', '770510036865');
    }
    

    await this.perumahanService.add(formData).subscribe(
      async (res) => {
        console.log(res);
        this.clearform();
        await loading.dismiss();
        this.router.navigate(['/main/tabs/home']);
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
    this.nokp = '';
    this.noakaun = '';
    this.namaakaun = '';
    this.src = '';
  }
}
