import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
  };

  username : any;
  constructor(
    private router: Router,
    private nativeStorage: NativeStorage,
  ) { }

  ngOnInit() {
    this.nativeStorage.getItem('user').then(
      data => {
        console.log(data);
        this.username = data.value.name;
      },
      error => console.error(error)
    );
  }

  ionViewWillEnter () {

  }

  tambah(){
    
  }

  notis(){
    this.router.navigate(['main/tabs/home/notis']);
  }

  Aduan(){
    this.router.navigate(['main/tabs/aduan']);
  }
}
