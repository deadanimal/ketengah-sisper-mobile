import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-firstime',
  templateUrl: './firstime.page.html',
  styleUrls: ['./firstime.page.scss'],
})
export class FirstimePage implements OnInit {

  code:any;
  user:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.user;
        console.log('list',this.user);
      }
    });
   }

  ngOnInit() {
    console.log('list',this.user);
  }

  async verifycode() {
    const loading = await this.loadingController.create();
    await loading.present();

    if(this.code == this.user.code){
      var type = 'code';
      this.userService.update(type,this.user,this.user.user_id).subscribe(
        async (res) => {
          console.log(res);
          await loading.dismiss();  
          this.router.navigate(['/main']);
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
    }else{
      await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Update failed',
            message: "Kod yang Diberikan Tidak Tepat",
            buttons: ['OK'],
          });
  
          await alert.present();
    }
    

    
  }
}
