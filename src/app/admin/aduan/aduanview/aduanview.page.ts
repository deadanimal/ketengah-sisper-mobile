import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AdminmenuPage } from 'src/app/shared/modals/adminmenu/adminmenu.page';
import { ActivatedRoute, Router } from '@angular/router';
import { AduanService } from 'src/app/shared/services/aduan/aduan.service';

@Component({
  selector: 'app-aduanview',
  templateUrl: './aduanview.page.html',
  styleUrls: ['./aduanview.page.scss'],
})
export class AduanviewPage implements OnInit {
  
  aduan:any;
  ddStatus = [
    {
      id:0,
      text:'Tiada Status'
    },
    {
      id:1,
      text:'Belum Dibaiki'
    },
    {
      id:2,
      text:'Dibaiki Sebahagian'
    },
    {
      id:3,
      text:'Sudah Dibaiki'
    },
    {
      id:4,
      text:'Kontrak'
    },
    {
      id:5,
      text:'Semakan'
    }
  ]

  constructor(
    private location: Location,
    public modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router,
    private aduanService: AduanService,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        var temp = this.router.getCurrentNavigation().extras.state.aduan;
        console.log(temp);
        this.aduan = temp;
      }
    });
  }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  async adminmenu(){
    const modal = await this.modalController.create({
      component: AdminmenuPage,
      cssClass: 'menu-modal',
      backdropDismiss: true
    });

    return await modal.present();
  }

  async hantar(id,status){
    const loading = await this.loadingController.create();
    await loading.present();

    var data =
    {
      id:id,
      status:status
    };

    console.log(data);

    await this.aduanService.updateStat(data).subscribe(
      async (res) => {
        await loading.dismiss();
        console.log(res);
        this.router.navigate(['main/admin/aduan']);
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
