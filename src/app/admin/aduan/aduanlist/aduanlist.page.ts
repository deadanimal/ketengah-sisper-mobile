import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AdminmenuPage } from 'src/app/shared/modals/adminmenu/adminmenu.page';

@Component({
  selector: 'app-aduanlist',
  templateUrl: './aduanlist.page.html',
  styleUrls: ['./aduanlist.page.scss'],
})
export class AduanlistPage implements OnInit {

  AduanList = [];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    public modalController: ModalController,
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.AduanList = this.router.getCurrentNavigation().extras.state.aduan;
        this.AduanList.forEach(function (value) {
          var date = new Date(value.created_at); 
          var month = date.getMonth() + 1;
          value.date = date.getDate()+'/'+month+'/'+date.getFullYear();
        })
        
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

  viewaduan(data){
    let navigationExtras: NavigationExtras = {
      state: {
        aduan:data
      }
    };
    this.router.navigate(['main/admin/aduan/aduanview'], navigationExtras);
  }
}
