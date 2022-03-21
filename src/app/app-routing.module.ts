import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'semakbayaran',
    loadChildren: () => import('./semakbayaran/semakbayaran.module').then( m => m.SemakbayaranPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./login/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./login/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'notis',
    loadChildren: () => import('./home/notis/notis.module').then( m => m.NotisPageModule)
  },
  {
    path: 'aduan',
    loadChildren: () => import('./aduan/aduan.module').then( m => m.AduanPageModule)
  },
  {
    path: 'aduanmain',
    loadChildren: () => import('./aduan/aduanmain/aduanmain.module').then( m => m.AduanmainPageModule)
  },
  {
    path: 'penghargaanmain',
    loadChildren: () => import('./aduan/penghargaanmain/penghargaanmain.module').then( m => m.PenghargaanmainPageModule)
  },
  {
    path: 'tambahaduan',
    loadChildren: () => import('./aduan/aduanmain/tambahaduan/tambahaduan.module').then( m => m.TambahaduanPageModule)
  },
  {
    path: 'senaraiaduan',
    loadChildren: () => import('./aduan/aduanmain/senaraiaduan/senaraiaduan.module').then( m => m.SenaraiaduanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
