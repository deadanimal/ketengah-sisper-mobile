import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  username = "Ahmad Aiman Bin Ali";
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
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
