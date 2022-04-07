import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(
    private translate: TranslateService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async bahasa(type) {
    if(type == 'bm'){
      this.translate.setDefaultLang('bm');
    }else if(type == 'en'){
      this.translate.setDefaultLang('en');
    }

    const modal = await this.modalController.getTop();
    if (modal) {
        modal.dismiss();
    }
  }
}
