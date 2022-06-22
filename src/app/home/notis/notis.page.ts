import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ViewnotisPage } from '../../shared/modals/viewnotis/viewnotis.page';
import { NotisService } from '../../shared/services/notis/notis.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-notis',
  templateUrl: './notis.page.html',
  styleUrls: ['./notis.page.scss'],
})
export class NotisPage implements OnInit {

  deleteall = false;
  checkall = false;
  checkBoxList = [];
  user:any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    public modalController: ModalController,
    private notisService: NotisService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private nativeStorage: NativeStorage
  ) { 
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.checkBoxList = this.router.getCurrentNavigation().extras.state.notis;
        await this.checkBoxList.forEach(async function (value) {
          var date = new Date(value.created_at);
          value.date = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
        });
       
        console.log('list',this.checkBoxList);
      }
    });
  }

  async ngOnInit() {
    await this.nativeStorage.getItem('user').then(
      data => {
        console.log(data);
        this.user = data.value;
      },
      error => console.error(error)
    );
  }

  back(){
    this.location.back();
  }

  deletehist(){
    if(this.deleteall == true){
      this.deleteall = false;
    }else{
      this.deleteall = true;
    }
    
  }

  async deleteone(id) {
    // console.log(id);
    const loading = await this.loadingController.create();
    await loading.present();

    await this.notisService.softdelete(id,this.user.user_id).subscribe(
      async (res) => {
        // console.log(res);
        var foundIndex = this.checkBoxList.findIndex(x => x.id == res.id);
        this.checkBoxList.splice(foundIndex, 1);
        await loading.dismiss();
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

  deleteallbtn () {
    var self = this;
    this.checkBoxList.forEach( async function (value) {
      if(value.selected == true){
        await self.deleteone(value.id);
      }
    });
  }

  checkAll(event){
    // console.log(event.target.checked);
    if(event.target.checked == false){
      this.checkBoxList.forEach( function (value) {
        value.selected = true;
      });
    }else{
      this.checkBoxList.forEach( function (value) {
        value.selected = false;
      });
    }
    console.log(this.checkBoxList);
  }

  async openModal(data) {

    const loading = await this.loadingController.create();
    await loading.present();
    // console.log(data);
    if(data.id != undefined && data.id != null){
      if(data.view == false){
        await this.notisService.viewid(data.id,this.user.user_id).subscribe(
          async (res) => {
            res.view = true;
            console.log('res',res);
            var date = new Date(res.created_at);
            res.date = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
            var foundIndex = this.checkBoxList.findIndex(x => x.id == res.id);
            this.checkBoxList[foundIndex] = res;
            console.log('checklist',this.checkBoxList);
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
    }

    const modal = await this.modalController.create({
      component: ViewnotisPage,
      cssClass: 'small-modal',
      backdropDismiss: true,
      componentProps: {
        "title": data.tajuk,
        "body": data.keterangan
      }
    });

    await loading.dismiss();
    return await modal.present();

  }
}
