import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CalendarModalOptions, CalendarModule } from 'ion2-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  date: any;
  option: CalendarModalOptions = {
    pickMode: 'range',
    title: 'RANGE'
  };


  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) {
   }

  ngOnInit() {
    
  }

  async closeModal() {
    await this.modalController.dismiss(this.date);
  }

  // onChange($event) {
  //   console.log($event);
  // }
}
