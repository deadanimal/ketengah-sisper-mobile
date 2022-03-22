import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/auth/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['nama',[Validators.required]],
      no_telefon: ['12345',[Validators.required, Validators.minLength(6)]],
      no_ic: ['123',[Validators.required, Validators.minLength(6)]],
      alamat: ['test',[Validators.required]],
      poskod: '123',
      bandar: 'test',
      negeri: 'test',
      email: 'test',
      password: 'pass'
    });
  }

  back(){
    this.router.navigate(['/login']);
  }

  async daftar(){
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.register(this.registerForm.value).subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss(); 
        this.router.navigate(['/login']); 
      },
      async (res) => {
        console.log(res);
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Register failed',
          message: res.message,
          buttons: ['OK'],
        });
 
        await alert.present();
      }
    );
  }

  login(){
    this.router.navigate(['/login']);
  }
}
