import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sewarumah',
  templateUrl: './sewarumah.page.html',
  styleUrls: ['./sewarumah.page.scss'],
})
export class SewarumahPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  back(){
    // this.location.back();
  }

  aduan() {
    // this.router.navigate(['/main/tabs/aduan/aduanmain']);
  }

  hantar() {
    // this.router.navigate(['/main/tabs/aduan/penghargaan']);
  }
}
