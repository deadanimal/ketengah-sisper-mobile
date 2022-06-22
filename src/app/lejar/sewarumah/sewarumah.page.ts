import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BayaranService } from 'src/app/shared/services/bayaran/bayaran/bayaran.service';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { LejardPage } from '../../shared/modals/lejard/lejard.page';

@Component({
  selector: 'app-sewarumah',
  templateUrl: './sewarumah.page.html',
  styleUrls: ['./sewarumah.page.scss'],
})
export class SewarumahPage implements OnInit {

  akaun: any;
  tahun: any;
  bulan: any;
  ddakaun: any
  ddYear= [];
  ddMonth= [];
  selectedakaun: any;
  lejardtl: any;

  constructor(
    private location: Location,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private nativeStorage: NativeStorage,
    private bayaranService: BayaranService,
    private router: Router,
    private pdfGenerator: PDFGenerator,
    private modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.ddakaun = data.value.perumahan;
        // var premis = data.value.premis;
        // Array.prototype.push.apply(rumah,premis);

        console.log(this.ddakaun);
      },
      error => console.error(error)
    );

    var selectedYear = new Date().getFullYear();
    var startYear = new Date().getFullYear() - 10;
    for (let year = selectedYear; year >= startYear; year--) {
      this.ddYear.push(year);
    }
    console.log(this.ddYear);
    
    this.ddMonth = [{
      "id": 1,
      "name": "January"
    },{
      "id": 2,
      "name": "February"
    },{
      "id": 3,
      "name": "March"
    },{
      "id": 4,
      "name": "April"
    },{
      "id": 5,
      "name": "May"
    },{
      "id": 6,
      "name": "June"
    },{
      "id": 7,
      "name": "July"
    },{
      "id": 8,
      "name": "August"
    },{
      "id": 9,
      "name": "September"
    },{
      "id": 10,
      "name": "October"
    },{
      "id": 11,
      "name": "November"
    },{
      "id": 12,
      "name": "December"
    }];

    console.log(this.ddMonth);

    await loading.dismiss();
  }

  back(){
    this.location.back();
  }

  async hantar(){
    const loading = await this.loadingController.create(
    );
    await loading.present();

    var noakaun = '';
    var no_kp = '';

    await this.ddakaun.forEach(element => {
      if(element.id == this.akaun){
        noakaun = element.no_akaun_rumah;
        no_kp = element.no_kad_pengenalan;
        this.selectedakaun = element;
      }
    });

    const formData = new FormData();
    formData.append('noakaun', noakaun);
    formData.append('no_ic', no_kp);
    formData.append('year', this.tahun);
    formData.append('month', this.bulan);

    await this.bayaranService.lejar(formData).subscribe(
      async (res) => {
        console.log(res);
        this.lejardtl = res;
        var data = {
          "akaun" : this.selectedakaun,
          "lejar" : this.lejardtl,
          "src"   : 2
        };
        const LejarModal = await this.createModal(LejardPage, { data });
        await loading.dismiss();
        await LejarModal.present();
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

  async createModal(component, componentProps?): Promise<HTMLIonModalElement> {
    const modal = await this.modalCtrl.create({
      component,
      cssClass: 'lejar-modal',
      componentProps,
      backdropDismiss: true
    });
    return modal;
  }
}
