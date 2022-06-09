import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ModalController } from '@ionic/angular';
import { AdminmenuPage } from 'src/app/shared/modals/adminmenu/adminmenu.page';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-sekatan',
  templateUrl: './sekatan.page.html',
  styleUrls: ['./sekatan.page.scss'],
})
export class SekatanPage implements OnInit {

  constructor(
    private location: Location,
    public modalController: ModalController,
    private router: Router
  ) { }

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

  futsal(){
    let navigationExtras: NavigationExtras = {
      state: {
        source: '1'
      }
    };
    this.router.navigate(['main/admin/sekatan/form'], navigationExtras);
  }

  badminton(){
    let navigationExtras: NavigationExtras = {
      state: {
        source: '2'
      }
    };
    this.router.navigate(['main/admin/sekatan/form'], navigationExtras);
  }

  dewan(){
    let navigationExtras: NavigationExtras = {
      state: {
        source: '3'
      }
    };
    this.router.navigate(['main/admin/sekatan/form'], navigationExtras);
  }
}
