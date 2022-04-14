import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
    private platform: Platform
  ) { 
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('none');
    });
  }

  ngOnInit() {
  }

}
