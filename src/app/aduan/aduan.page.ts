import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-aduan',
  templateUrl: './aduan.page.html',
  styleUrls: ['./aduan.page.scss'],
})
export class AduanPage implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.back();
    });
  }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }

  aduan() {
    this.router.navigate(['/main/tabs/aduan/aduanmain']);
  }

  penghargaan() {
    this.router.navigate(['/main/tabs/aduan/penghargaan']);
  }

}
