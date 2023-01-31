import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ShtenderdtlService } from 'src/app/shared/services/shtenderdtl/shtenderdtl.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tenderdetail',
  templateUrl: './tenderdetail.page.html',
  styleUrls: ['./tenderdetail.page.scss'],
})
export class TenderdetailPage implements OnInit {

  tenderform: FormGroup;
  ddUrusan: any;
  user: any;
  namea: any;
  something: any;

  TenderList: any;
  selected: any;
  urusan: any;
  harga: any;
  catatan: any;
  jumlah: any;
  selectedValue: any;
  jumcount: any;
  name: string;

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private shtenderdtlService: ShtenderdtlService,
    private nativeStorage: NativeStorage,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.ddUrusan = [
      {
        id: "PB002",
        urusan: "PEMBELIAN BORANG SEBUTHARGA"
      },
      {
        id: "PB018",
        urusan: "PEMBELIAN BORANG TENDER"
      }
    ]

    const loading = await this.loadingController.create();
    await loading.present();

    await this.nativeStorage.getItem('user').then(
      data => {
        this.user = data.value;
      },
      error => console.error(error)
    );

    await loading.dismiss();
  }

  // localStorage.get("done")

  async ionViewWillEnter() {

    const loading = await this.loadingController.create();
    await loading.present();
    this.jumlah = 0;
    this.jumcount = 0;
    this.tenderform = this.fb.group({
      sh_id: [],
      kod_urusan: ['', [Validators.required]],
      jumlah_bayar: ['', [Validators.required]],
      catatan: ['', [Validators.required]]
    });

    await this.shtenderdtlService.get(this.user.tender).subscribe(
      async (res) => {

        this.TenderList = res;
        console.log(this.TenderList);
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

  back() {
    this.location.back();
  }

  async hantar() {
    const loading = await this.loadingController.create();
    await loading.present();

    if (this.tenderform.value.kod_urusan == '') {
      this.alerterror('Urusan diperlukan');
    } else {
      console.log(this.user.tender);
      this.tenderform.patchValue({
        sh_id: this.user.tender
      });
      console.log(this.tenderform.value);
      await this.shtenderdtlService.add(this.tenderform.value).subscribe(
        async (res) => {
          this.TenderList.push(res);
          this.tenderform.reset()
          this.TenderList.forEach(element => {
            element.selectedValue == false
          });
          console.log(res);

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
  }

  check(data) {
    // // this.selected = data;
    // this.jumlah = data.harga;
    // if(data.check == true){
    //   // this.jumcount = this.jumcount - 1;
    //   this.jumlah = this.jumlah + data.harga;
    // }else if(data.check == false){
    //   // this.jumcount = this.jumcount + 1;
    //   this.jumlah = this.jumlah + data.harga;
    // }
    // console.log(this.jumlah);
  }

  bayar() {
    var arr = [];
    var akaun = {};

    this.TenderList;
    this.TenderList.forEach(element => {
      if (element.check == true) {
        akaun = {
          "id": '',
          "amaun": element.harga,
          "kodbayaran": element.urusan,
        }
        arr.push(akaun);
        this.jumlah = this.jumlah + parseInt(element.harga);
        this.jumcount++;
      }
    });

    var data =
    {
      "src": 2,
      "jumlah": this.jumlah,
      "jumcount": this.jumcount,
      "akaun": arr
    };
    console.log(this.jumlah);
    let navigationExtras: NavigationExtras = {
      state: {
        data: data
      }
    };

    this.router.navigate(['main/tabs/bayaran'], navigationExtras);
  }

  edit(item) {

    var element = document.getElementById('editform' + item.id).style.display;

    var formelem = document.getElementsByName('editformname');
    formelem.forEach(element => {
      if (element.style.display == 'block') {
        element.style.display = 'none';
      }
    });

    if (element == 'none') {
      console.log('none', element);
      document.getElementById('editform' + item.id).style.display = 'block';
    } else {
      document.getElementById('editform' + item.id).style.display = 'none';
      console.log(element);
    }

    this.urusan = item.urusan;
    this.harga = item.harga;
    this.catatan = item.catatan;

  }

  async deleteone(id) {
    console.log(id);
    const loading = await this.loadingController.create();
    await loading.present();

    await this.shtenderdtlService.delete(id).subscribe(
      async (res) => {
        console.log(res);
        this.TenderList.forEach(function (item, index, object) {
          if (item.id == id) {
            object.splice(index, 1);
          }
        })
        console.log(this.TenderList);
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

  async update(id) {

    console.log(id)
    const loading = await this.loadingController.create();
    await loading.present();

    console.log(this.urusan);

    var data = [
      {
        "urusan": this.urusan,
        "harga": this.harga,
        "catatan": this.catatan
      }
    ]

    await this.shtenderdtlService.update(data[0], id).subscribe(
      async (res) => {
        console.log(res);
        this.TenderList.forEach(function (item, index, object) {
          if (item.id == id) {
            object[index].urusan = res.urusan;
            object[index].harga = res.harga;
            object[index].catatan = res.catatan;
          }
        })
        document.getElementById('editform' + id).style.display = 'none';
        console.log(this.TenderList);
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

  async alerterror(msg) {
    const alert = await this.alertController.create({
      header: 'Loading failed',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
