import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-viewnotis',
  templateUrl: './viewnotis.page.html',
  styleUrls: ['./viewnotis.page.scss'],
})
export class ViewnotisPage implements OnInit {

  header: string;
  body: number;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.header = this.navParams.data.title;
    this.body = this.navParams.data.body;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
