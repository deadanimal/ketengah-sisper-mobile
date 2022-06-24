import { Component, OnInit } from '@angular/core';
import { DatePipe, Location } from "@angular/common";
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { CalendarPage } from '../../shared/modals/calendar/calendar.page';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { PengumumanService } from '../../shared/services/pengumuman/pengumuman.service';
import { AdminmenuPage } from '../../shared/modals/adminmenu/adminmenu.page';

@Component({
  selector: 'app-pengumuman',
  templateUrl: './pengumuman.page.html',
  styleUrls: ['./pengumuman.page.scss'],
})
export class PengumumanPage implements OnInit {

  tajukumum: any;
  kandunganumum: any;
  tempohumum: any;
  date:any;
  userid : any;

  constructor(
    private location: Location,
    public modalController: ModalController,
    private loadingController: LoadingController,
    private nativeStorage: NativeStorage,
    private alertController: AlertController,
    private pengumumanService: PengumumanService,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.userid = data.value.admin_id;
      },
      error => console.error(error)
    );

    await loading.dismiss();
  }

  back(){
    this.location.back();
  }

  clearform(){
    this.tajukumum = '';
    this.kandunganumum = '';
    this.tempohumum = '';
    this.date = '';
  }

  async hantar(){
    const loading = await this.loadingController.create();
    await loading.present();

    const formData = new FormData();
    formData.append('admin_id', this.userid);
    formData.append('tajuk', this.tajukumum);
    formData.append('keterangan', this.kandunganumum);
    formData.append('tarikh_mula', this.date.from);
    formData.append('tarikh_tamat', this.date.to);

    await this.pengumumanService.add(formData).subscribe(
      async (res) => {
        console.log(res);
        this.clearform();
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Success',
          message: 'Pengumuman Berjaya Di Tambah',
          buttons: ['OK'],
        });
        await alert.present();
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

  async opencal(){
    const modal = await this.modalController.create({
      component: CalendarPage,
      cssClass: 'med-modal',
      backdropDismiss: false
    });
    modal.onDidDismiss().then((data) => {
      this.date = data.data;
      const fromdate = new Date(this.date.from);
      const frommonth = fromdate.toLocaleString('default', { month: 'short' });
      const todate = new Date(this.date.to);
      const tomonth = todate.toLocaleString('default', { month: 'short' });
      this.tempohumum = frommonth+', '+ fromdate.getDate() +' - '+ tomonth+', '+ todate.getDate();
    });
    await modal.present();
  }

  async adminmenu(){
    const modal = await this.modalController.create({
      component: AdminmenuPage,
      cssClass: 'menu-modal',
      backdropDismiss: true
    });

    return await modal.present();
  }
}
