import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { NotisService } from '../shared/services/notis/notis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
  };

  noti = false;

  username : any;
  user : any;
  notiarr = [];

  constructor(
    private router: Router,
    private nativeStorage: NativeStorage,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private notisService: NotisService,
    route:ActivatedRoute
  ) {
    route.params.subscribe(async val => {
      const loading = await this.loadingController.create();
      await loading.present();

      await this.nativeStorage.getItem('user').then(
        data => {
          // console.log(data);
          this.username = data.value.name;
          this.user = data.value;
        },
        error => console.error(error)
      );

      var userid = this.user.user_id;
      var noti = false;
      await this.notisService.getbyid(this.user.user_id).subscribe(
        async (res) => {
          // console.log(res);
          await res.forEach(async function (value) {
            let obj = JSON.parse(value.viewed);
            value.view = false;
            value.selected = false;
            await obj.forEach(function (value2) {
              if(value2.id == userid){
                value.view = true;
              }
            });
            if(value.view == false){
              noti = true;
            }
          });
          this.notiarr = res;
          this.noti = noti;
          console.log('notis',this.notiarr);
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
    });
  }

  ngOnInit() {}

  ionViewWillEnter () {

  }

  tambah(){
    
  }

  notis(){
    let navigationExtras: NavigationExtras = {
      state: {
        notis: this.notiarr
      }
    };
    this.router.navigate(['main/tabs/home/notis'], navigationExtras);
  }

  Aduan(){
    this.router.navigate(['main/tabs/aduan']);
  }
}
