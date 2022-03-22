import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/services/auth/authentication.service';
import { UserService } from '../shared/services/user/user.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  nokp:any;
  username:any;
  userid:any;
  email:any;
  nohp:any;
  pass:any;
  
  constructor(
    private location: Location,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private userService: UserService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
    this.nativeStorage.getItem('user').then(
      data => {
        console.log('user',data);
        this.username = data.value.name;
        this.nokp = data.value.no_ic;
        this.userid = data.value.user_id;
        this.email = data.value.email;
        this.nohp = data.value.no_telefon;
        this.pass = data.value.password;
      },
      error => console.error(error)
    );
  }

  back(){
    this.location.back();
  }

  async logout(){
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.logout().then(
      async (res) => {
        console.log(res);
        await loading.dismiss();        
        this.router.navigate(['/login']);
      },
      async (res) => {
        console.log(res);
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: res.error.error,
          buttons: ['OK'],
        });
 
        await alert.present();
      }
    );
    // this.router.navigate(['/login']);
  }

  lupapass(){
    this.router.navigate(['/forgotpass']);
  }

  async save(type){

    const loading = await this.loadingController.create();
    await loading.present();
    var data = '';
    var id = this.userid;
    if(type == 'email'){
      data = this.email;
    }else if(type == 'nohp'){
      data = this.nohp;
    }else if(type == 'pass'){
      data = this.pass;
    }

    this.userService.update(type,data,id).subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss();  
      },
      async (res) => {
        console.log(res);
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Update failed',
          message: res.message,
          buttons: ['OK'],
        });
 
        await alert.present();
      }
    );
  }

}
