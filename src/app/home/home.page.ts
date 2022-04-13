import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController, LoadingController, ModalController, Platform } from '@ionic/angular';
import { NotisService } from '../shared/services/notis/notis.service';
import { AdminmenuPage } from '../shared/modals/adminmenu/adminmenu.page';
import { PengumumanService } from '../shared/services/pengumuman/pengumuman.service';

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
  role : any;
  notiarr = [];
  pengumumanlist : any;

  constructor(
    private router: Router,
    private nativeStorage: NativeStorage,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private notisService: NotisService,
    private pengumumanService: PengumumanService,
    route:ActivatedRoute,
    public modalController: ModalController,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('none');
    });

    route.params.subscribe(async val => {

    });
  }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.pengumumanService.gettempoh().subscribe(
      async (res) => {
        console.log(res);
        this.pengumumanlist = res;
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

  async ionViewDidEnter() {
    const loading = await this.loadingController.create();
      await loading.present();

      await this.nativeStorage.getItem('user').then(
        data => {
          this.username = data.value.name;
          this.user = data.value;
          this.role = data.value.role;
          console.log(this.user);
        },
        error => console.error(error)
      );
      if(this.user.role == 1){
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
      }else if (this.user.role == 2){
        await loading.dismiss();
      }
  }

  ionViewWillEnter () {

  }

  async tambah(){
    // const modal = await this.modalController.create({
    //   component: AdminmenuPage,
    //   cssClass: 'menu-modal',
    //   backdropDismiss: true
    // });

    // return await modal.present();
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

  notisadmin(){
    this.router.navigate(['main/admin/notis']);
  }

  pengumumanadmin(){
    this.router.navigate(['main/admin/pengumuman']);
  }

  penghargaanadmin(){
    this.router.navigate(['main/admin/penghargaan']);
  }

  Lain(){
    this.router.navigate(['main/tabs/lain']);
  }

  Lejar(){
    this.router.navigate(['main/tabs/lejar']);
  }

  Sewa(){
    this.router.navigate(['main/tabs/bayarsewa']);
  }
  
  Tender(){
    this.router.navigate(['main/tabs/tender']);
  }

  TempahKemudahan(){
    this.router.navigate(['main/tabs/tempahkemudahan']);
  }

  aduanadmin(){
    this.router.navigate(['main/admin/aduan']);
  }

  async adminmenu(){
    const modal = await this.modalController.create({
      component: AdminmenuPage,
      cssClass: 'menu-modal',
      // breakpoints: [0, 0.3, 0.5, 0.8],
      // initialBreakpoint: 0.5,
      backdropDismiss: true
    });

    return await modal.present();
  }
}
