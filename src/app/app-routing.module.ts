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
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
  },
  {
    path: 'semakbayaran',
    loadChildren: () => import('./semakbayaran/semakbayaran.module').then(m => m.SemakbayaranPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./login/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./login/forgotpass/forgotpass.module').then(m => m.ForgotpassPageModule)
  },
  {
    path: 'notis',
    loadChildren: () => import('./home/notis/notis.module').then(m => m.NotisPageModule)
  },
  {
    path: 'aduan',
    loadChildren: () => import('./aduan/aduan.module').then(m => m.AduanPageModule)
  },
  {
    path: 'aduanmain',
    loadChildren: () => import('./aduan/aduanmain/aduanmain.module').then(m => m.AduanmainPageModule)
  },
  {
    path: 'penghargaanmain',
    loadChildren: () => import('./aduan/penghargaanmain/penghargaanmain.module').then(m => m.PenghargaanmainPageModule)
  },
  {
    path: 'tambahaduan',
    loadChildren: () => import('./aduan/aduanmain/tambahaduan/tambahaduan.module').then(m => m.TambahaduanPageModule)
  },
  {
    path: 'senaraiaduan',
    loadChildren: () => import('./aduan/aduanmain/senaraiaduan/senaraiaduan.module').then(m => m.SenaraiaduanPageModule)
  },
  {
    path: 'viewnotis',
    loadChildren: () => import('./shared/modals/viewnotis/viewnotis.module').then(m => m.ViewnotisPageModule)
  },
  {
    path: 'notis',
    loadChildren: () => import('./admin/notis/notis.module').then(m => m.NotisPageModule)
  },
  {
    path: 'penghargaan',
    loadChildren: () => import('./admin/penghargaan/penghargaan.module').then(m => m.PenghargaanPageModule)
  },
  {
    path: 'pengumuman',
    loadChildren: () => import('./admin/pengumuman/pengumuman.module').then(m => m.PengumumanPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./shared/modals/calendar/calendar.module').then(m => m.CalendarPageModule)
  },
  {
    path: 'adminmenu',
    loadChildren: () => import('./shared/modals/adminmenu/adminmenu.module').then(m => m.AdminmenuPageModule)
  },
  {
    path: 'lainlain',
    loadChildren: () => import('./lain-lain/lain-lain.module').then(m => m.LainLainPageModule)
  },
  {
    path: 'lejar',
    loadChildren: () => import('./lejar/lejar.module').then(m => m.LejarPageModule)
  },
  {
    path: 'sewapremis',
    loadChildren: () => import('./lejar/sewapremis/sewapremis.module').then(m => m.SewapremisPageModule)
  },
  {
    path: 'sewarumah',
    loadChildren: () => import('./lejar/sewarumah/sewarumah.module').then(m => m.SewarumahPageModule)
  },
  {
    path: 'tempahkemudahan',
    loadChildren: () => import('./tempahkemudahan/tempahkemudahan.module').then(m => m.TempahkemudahanPageModule)
  },
  {
    path: 'bayarsewa',
    loadChildren: () => import('./bayarsewa/bayarsewa.module').then(m => m.BayarsewaPageModule)
  },
  {
    path: 'tender',
    loadChildren: () => import('./tender/tender.module').then(m => m.TenderPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./shared/modals/language/language.module').then(m => m.LanguagePageModule)
  },
  {
    path: 'firstime',
    loadChildren: () => import('./firstime/firstime.module').then(m => m.FirstimePageModule)
  },
  {
    path: 'aduan',
    loadChildren: () => import('./admin/aduan/aduan.module').then(m => m.AduanPageModule)
  },
  {
    path: 'pengguna',
    loadChildren: () => import('./admin/pengguna/pengguna.module').then(m => m.PenggunaPageModule)
  },
  {
    path: 'sekatan',
    loadChildren: () => import('./admin/sekatan/sekatan.module').then(m => m.SekatanPageModule)
  },
  {
    path: 'perumahan',
    loadChildren: () => import('./akaun/perumahan/perumahan.module').then(m => m.PerumahanPageModule)
  },
  {
    path: 'premis',
    loadChildren: () => import('./akaun/premis/premis.module').then(m => m.PremisPageModule)
  },
  {
    path: 'maklumat',
    loadChildren: () => import('./akaun/maklumat/maklumat.module').then(m => m.MaklumatPageModule)
  },
  {
    path: 'kaedah',
    loadChildren: () => import('./bayaran/kaedah/kaedah.module').then(m => m.KaedahPageModule)
  },
  {
    path: 'resit',
    loadChildren: () => import('./bayaran/resit/resit.module').then(m => m.ResitPageModule)
  },
  {
    path: 'lejard',
    loadChildren: () => import('./shared/modals/lejard/lejard.module').then(m => m.LejardPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pay/pay.module').then(m => m.PayPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
