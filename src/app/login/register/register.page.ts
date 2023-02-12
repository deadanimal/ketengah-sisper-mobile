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
  no_ic: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      no_telefon: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      no_ic: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(18)]],
      alamat: ['', [Validators.required]],
      poskod: ['', [Validators.required]],
      bandar: ['', [Validators.required]],
      negeri: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ionViewDidEnter() {
    this.registerForm.reset()
  }

  back() {
    this.router.navigate(['/login']);
  }

  async daftar() {
    const loading = await this.loadingController.create();
    await loading.present();

    // remove the - in the nombor kad pengenalan
    this.registerForm.value.no_ic = this.registerForm.value.no_ic.replace(/-/g, '');
    this.registerForm.value.no_ic = this.registerForm.value.no_telefon.replace(/-/g, '');

    console.log(this.registerForm.value)
    this.authService.register(this.registerForm.value).subscribe(
      async (res) => {

        let alert;

        if (res.code === 500) {

          await loading.dismiss();
          alert = await this.alertController.create({
            header: 'Daftar tidak berjaya',
            message: "Nombor Telefon Ini Sudah Didaftarkan pada pengguna lain, Sila semak semula Nombor Telefon Anda",
            buttons: ['OK'],
          });

        }

        else {

          await loading.dismiss();
          alert = await this.alertController.create({
            header: 'Daftar berjaya',
            message: res.message,
            buttons: ['OK'],
          });

        }

        console.log(res);

        await alert.present();
        this.router.navigate(['/login']);
      },
      async (res) => {
        console.log(res);
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Daftar tidak berjaya',
          message: res.message,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  login() {
    this.router.navigate(['/login']);
  }

  numericOnlyKad(event): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);

    this.no_ic = event.target.value;
    if (this.no_ic.length == 6) {
      this.no_ic = this.no_ic + '-';
      event.target.value = this.no_ic;
    }
    if (this.no_ic.length == 9) {
      this.no_ic = this.no_ic + '-';
      event.target.value = this.no_ic;
    }

    return result;
  }

  numericOnly
    (event): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);



    return result;
  }

  hideShowPassword() {
    this.showPass = !this.showPass;
  }

  // add - separator to the kaad pengaan whenever more than 6 digits




}
