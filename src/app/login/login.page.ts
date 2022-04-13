import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/services/auth/authentication.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    public platform: Platform, 
    public keyboard: Keyboard
  ) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.keyboard.disableScroll(true);
    });
    this.credentials = this.fb.group({
      // no_telefon: ['122436753', [Validators.required]],
      // password: ['pass', [Validators.required, Validators.minLength(6)]],
      no_telefon: ['123', [Validators.required]],
      password: ['pass', [Validators.required, Validators.minLength(6)]],
      // no_telefon: ['', [Validators.required]],
      // password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    
    this.authService.login(this.credentials.value.no_telefon, this.credentials.value.password).subscribe(
      async (res) => {
        console.log('auth',res);
        await loading.dismiss();  
        if(res != 'false' && res.active != 0){     
          if(res.role == 1){
            this.router.navigate(['/main']);
          }else if(res.role == 2){
            this.router.navigate(['/main/admin']);
          }
        }
        if(res.active == 0){
          let navigationExtras: NavigationExtras = {
            state: {
              user: res
            }
          };
          this.router.navigate(['/firstime'], navigationExtras);
        }
        if(res == 'false'){
          const alert = await this.alertController.create({
            header: 'Login failed',
            message: 'Tiada Pengguna Dijumpai',
            buttons: ['OK'],
          });

          await alert.present();
        }
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
  }

  register() {
    this.router.navigate(['/register']);
  }

  forgotpass(){
    this.router.navigate(['/forgotpass']);
  }
}
