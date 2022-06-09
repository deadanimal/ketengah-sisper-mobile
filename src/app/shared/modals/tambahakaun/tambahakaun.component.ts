import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tambahakaun',
  templateUrl: './tambahakaun.component.html',
  styleUrls: ['./tambahakaun.component.scss'],
})
export class TambahakaunComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  perumahan() {
    this.modalController.dismiss();
    this.router.navigate(['main/tabs/akaun/perumahan']);
  }

  premis() {
    this.modalController.dismiss();
    this.router.navigate(['main/tabs/akaun/premis']);
  }
}
