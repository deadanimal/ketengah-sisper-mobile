import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/auth/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  showPass = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['',[Validators.required]],
      no_telefon: ['',[Validators.required, Validators.minLength(9),Validators.maxLength(9)]],
      no_ic: ['',[Validators.required, Validators.minLength(12),Validators.maxLength(12)]],
      alamat: ['',[Validators.required]],
      poskod: ['',[Validators.required]],
      bandar: ['',[Validators.required]],
      negeri: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
  }

  ionViewDidEnter() {
    this.registerForm.reset()
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

  numericOnly(event): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }

  hideShowPassword() {
    this.showPass = !this.showPass;
  }
}
