import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { PerumahanService } from 'src/app/shared/services/akaun/perumahan/perumahan.service';

@Component({
  selector: 'app-maklumat',
  templateUrl: './maklumat.page.html',
  styleUrls: ['./maklumat.page.scss'],
})
export class MaklumatPage implements OnInit {

  data: any;
  jumlah: any;
  jumexist = false;
  bayarsblm: any;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private perumahanService: PerumahanService
  ) {
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log('data', this.data);
        this.jumlah = parseInt(this.data.kadar_sewa) + parseInt(this.data.jumlah_tunggakan);
        if (this.jumlah > 0) {
          this.jumexist = true;
        }
        let d = new Date();
        d.setMonth(d.getMonth() + 1, 1);
        console.log(d.toLocaleDateString('en-GB'));
        this.bayarsblm = d.toLocaleDateString('en-GB');
        console.log("byrsblm", this.bayarsblm);
      }
    });
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  bayar() {
    var arr = [];
    var akaun = {};
    if (this.data.no_akaun_rumah != undefined) {
      akaun = {
        "jenis": 'rumah',
        "id": this.data.id,
        "noakaun": this.data.no_akaun_rumah,
        "amaun": this.jumlah,
        "no_ic_pemilik": this.data.no_kad_pengenalan
      }
    } else if (this.data.no_akaun_premis != undefined) {
      akaun = {
        "jenis": 'premis',
        "id": this.data.id,
        "noakaun": this.data.no_akaun_premis,
        "amaun": this.jumlah,
        "no_ic_pemilik": this.data.no_kad_pengenalan
      }
    }
    arr.push(akaun);
    var data =
    {
      "src": 1,
      "jumlah": this.jumlah,
      "jumcount": 1,
      "akaun": arr
    };

    let navigationExtras: NavigationExtras = {
      state: {
        data: data
      }
    };
    this.router.navigate(['main/tabs/bayaran'], navigationExtras);
  }

  hapus() {
    this.perumahanService.deleteAkaun(this.data.id).subscribe(res => {
      console.log('res', res);
      this.back();
      console.log('deleting');
    },

      error => {
        console.log('error', error);
      }
    );
  }

}
