import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController, LoadingController, ModalController, Platform } from '@ionic/angular';
import { NotisService } from '../shared/services/notis/notis.service';
import { AdminmenuPage } from '../shared/modals/adminmenu/adminmenu.page';
import { TambahakaunComponent } from '../shared/modals/tambahakaun/tambahakaun.component';
import { PengumumanService } from '../shared/services/pengumuman/pengumuman.service';
import Chart from 'chart.js/auto';
import { BookingService } from 'src/app/shared/services/booking/booking.service';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { UserService } from '../shared/services/user/user.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('chartCanvas') chartCanvas: ElementRef;
  data: any = [];
  canvasChart: Chart;
  slideOpts = {
    initialSlide: 0,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
  };

  noti = false;
  chartdata: any;
  username: any;
  user: any;
  role: any;
  notiarr = [];
  pengumumanlist: any;

  rumah: any;
  premis: any;

  showmore: any;

  showchart: any;
  bookdtl: any;

  constructor(
    private router: Router,
    private nativeStorage: NativeStorage,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private notisService: NotisService,
    private pengumumanService: PengumumanService,
    private route: ActivatedRoute,
    public modalController: ModalController,
    private platform: Platform,
    private bookingService: BookingService,
    private pdfGenerator: PDFGenerator,
    private userService: UserService
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('none');
    });

    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state?.src === 1) {
        this.tambah();
      }
    });
  }

  async ngOnInit() {



    this.nativeStorage.getItem('user').then(
      async data => {
        let user_id;
        console.log(data)
        user_id = data.value.user_id;
        const formData = new FormData()
        formData.append('password', data.value.password)



      }
    );



    const loading = await this.loadingController.create();
    await loading.present();
    this.showchart = 0;
    await this.pengumumanService.gettempoh().subscribe(
      async (res) => {
        console.log(res);
        this.pengumumanlist = res;
        this.user = res;
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

  async ionViewDidEnter() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.showmore = 0;
    await this.nativeStorage.getItem('user').then(
      async data => {
        let user_id = data.value.user_id;
        const formData = new FormData()
        formData.append('password', data.value.password)
        this.userService.checkFirstTimeLogin(user_id, formData).subscribe(async (res: any) => {

          console.log("check for password", res)



        })

        console.log(data)
        this.username = data.value.name;
        this.user = data.value;
        this.role = data.value.role;

        this.rumah = data.value.perumahan;
        this.premis = data.value.premis;

        if (this.rumah != undefined) {
          this.rumah.forEach(element => {
            var temp = 0;
            var temp2 = 0;

            if (element.jumlah_tunggakan != "") {
              temp = parseInt(element.jumlah_tunggakan);
            }
            if (element.kadar_sewa != "") {
              temp2 = parseInt(element.kadar_sewa);
            }
            console.log(temp2);
            element.jumlahbyr = temp + temp2;
          });
        }

        if (this.premis != undefined) {
          this.premis.forEach(element => {
            var temp = 0;
            var temp2 = 0;

            if (element.jumlah_tunggakan != "") {
              temp = parseInt(element.jumlah_tunggakan);
            }
            if (element.kadar_sewa != "") {
              temp2 = parseInt(element.kadar_sewa);
            }
            console.log(temp2);
            element.jumlahbyr = temp + temp2;
          });
        }

        console.log('rumah', this.rumah);
        console.log('premis', this.premis);
        this.nativeStorage.setItem('user', { value: this.user });
        console.log(this.user);
        if (this.user.recurring === 0) {
          console.log("the recurring is zero show alert ")
          const alert = await this.alertController.create({
            header: 'Salamat Datang',
            message: 'Sila Kemasikini Kata Laluan Anda',
            buttons: ['OK'],
          });

          alert.present();
        }
      },
      error => console.error(error)
    );
    if (this.user) {
      if (this.user.role == 1) {
        var userid = this.user.user_id;
        var noti = false;
        await this.notisService.getbyid(this.user.user_id).subscribe(
          async (res) => {
            // console.log(res);
            await res.forEach(async function (value) {
              let obj = JSON.parse(value.viewed);
              value.view = false;
              value.selected = false;
              await obj.forEach(function (value2) {
                if (value2.id == userid) {
                  value.view = true;
                }
              });
              if (value.view == false) {
                noti = true;
              }
            });
            this.notiarr = res;
            this.noti = noti;

            await this.notisService.getnotis(this.user).subscribe(
              async (res) => {
                console.log('api', res);
                Array.prototype.push.apply(this.notiarr, res);
                console.log('notis', this.notiarr);
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
      } else if (this.user.role == 2) {
        await this.bookingService.getgraf().subscribe(
          async (res) => {
            console.log(res);
            var book = [];
            res.forEach(element => {
              book.push(element);
            });
            this.chartdata = book;
            await this.bookingService.get().subscribe(
              async (res) => {
                this.bookdtl = res;
                console.log(this.bookdtl);
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
          },
          async (res) => {
            console.log(res);
            await loading.dismiss();
            const alert = await this.alertController.create({
              header: 'Loading failed',
              message: res.message,
              buttons: ['OK'],
            });
            console.log("first")
            await alert.present();
          }
        );
      }
    }
  }

  displaychart() {
    this.showchart = 1;
    this.barChartMethod();
  }

  async downloadchart() {
    // this.bookdtl = '';
    var content = document.getElementById('pdf').innerHTML;
    let options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'eSisper_Tempahan.pdf'
    };
    await this.pdfGenerator.fromData(content, options)
      .then((base64) => {
        console.log('OK', base64);
      }).catch((error) => {
        console.log('error', error);
      });
  }

  async tambah() {
    const modal = await this.modalController.create({
      component: TambahakaunComponent,
      cssClass: 'med-modal',
      backdropDismiss: true
    });

    return await modal.present();
  }

  notis() {
    console.log('notis', this.notiarr);

    let navigationExtras: NavigationExtras = {
      state: {
        notis: this.notiarr
      }
    };
    this.router.navigate(['main/tabs/home/notis'], navigationExtras);
  }

  Aduan() {
    this.router.navigate(['main/tabs/aduan']);
  }

  notisadmin() {
    this.router.navigate(['main/admin/notis']);
  }

  pengumumanadmin() {
    this.router.navigate(['main/admin/pengumuman']);
  }

  penghargaanadmin() {
    this.router.navigate(['main/admin/penghargaan']);
  }

  Lain() {
    this.router.navigate(['main/tabs/lain']);
  }

  Lejar() {
    this.router.navigate(['main/tabs/lejar']);
  }

  Sewa() {
    this.router.navigate(['main/tabs/bayarsewa']);
  }

  Tender() {
    if (this.user.tender == 0) {
      this.router.navigate(['main/tabs/tender']);
    } else if (this.user.tender == 1) {
      this.router.navigate(['main/tabs/tender/tenderDetail']);
    }
  }

  TempahKemudahan() {
    this.router.navigate(['main/tabs/tempahkemudahan']);
  }

  aduanadmin() {
    this.router.navigate(['main/admin/aduan']);
  }

  async adminmenu() {
    const modal = await this.modalController.create({
      component: AdminmenuPage,
      cssClass: 'menu-modal',
      // breakpoints: [0, 0.3, 0.5, 0.8],
      // initialBreakpoint: 0.5,
      backdropDismiss: true
    });

    return await modal.present();
  }

  penggunaadmin() {
    this.router.navigate(['main/admin/pengguna']);
  }

  sekatanadmin() {
    this.router.navigate(['main/admin/sekatan']);
  }

  more(val) {
    if (val == 0) {
      this.showmore = 1;
    } else if (val == 1) {
      this.showmore = 0;
    }
  }

  detail(data) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: data
      }
    };
    this.router.navigate(['main/tabs/akaun/maklumat'], navigationExtras);
  }

  async barChartMethod() {
    var today = new Date();
    var dd = '';
    var day = 0;
    var label = [];
    var data = [];
    var data2 = [];
    console.log('chart', this.chartdata);
    this.chartdata.forEach(element => {
      var r = Object.keys(element);
      console.log('r', r);

      r.forEach(item => {
        var today = new Date(item);
        var dd = String(today.getDate()).padStart(2, '0');
        var day = today.getDay();
        console.log(day);
        if (day == 1) {
          var hari = 'isnin'
          var temp = dd + '-' + hari;
          label.push(temp);
        } else if (day == 2) {
          var hari = 'selasa'
          var temp = dd + '-' + hari;
          label.push(temp);
        } else if (day == 3) {
          var hari = 'rabu'
          var temp = dd + '-' + hari;
          label.push(temp);
        } else if (day == 4) {
          var hari = 'khamis'
          var temp = dd + '-' + hari;
          label.push(temp);
        } else if (day == 5) {
          var hari = 'jumaat'
          var temp = dd + '-' + hari;
          label.push(temp);
        } else if (day == 6) {
          var hari = 'sabtu'
          var temp = dd + '-' + hari;
          label.push(temp);
        } else if (day == 0) {
          var hari = 'ahad'
          var temp = dd + '-' + hari;
          label.push(temp);
        }
      });
      var s = Object.values(element)
      s.forEach(item => {
        // console.log(item);
        data.push(item);
      });
    });
    console.log(label);
    console.log(data);

    this.canvasChart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: label,
        datasets: [{
          label: '# Tempahan',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {

        scales: {
          yAxes: {
            suggestedMax: 10,
            suggestedMin: 0,
            ticks: {

              stepSize: 2
            }
          }
        }
      }
    });
  }
}
