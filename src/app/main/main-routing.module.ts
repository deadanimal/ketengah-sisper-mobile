import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          },
          {
            path: 'notis',
            loadChildren: () => import('../home/notis/notis.module').then( m => m.NotisPageModule)
          }
        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
          }
        ]
      },
      {
        path: 'doc',
        children: [
          {
            path: '',
            loadChildren: () => import('../semakbayaran/semakbayaran.module').then( m => m.SemakbayaranPageModule)
          }
        ]
      },
      {
        path: 'setting',
        children: [
          {
            path: '',
            loadChildren: () => import('../setting/setting.module').then( m => m.SettingPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      },
      {
        path: 'aduan',
        children: [
          {
            path: '',
            loadChildren: () => import('../aduan/aduan.module').then( m => m.AduanPageModule)
          },
          {
            path: 'aduanmain',
            children: [
              {
                path: '',
                loadChildren: () => import('../aduan/aduanmain/aduanmain.module').then( m => m.AduanmainPageModule)
              },
              {
                path: 'tambah',
                loadChildren: () => import('../aduan/aduanmain/tambahaduan/tambahaduan.module').then( m => m.TambahaduanPageModule)
              },
              {
                path: 'senarai',
                loadChildren: () => import('../aduan/aduanmain/senaraiaduan/senaraiaduan.module').then( m => m.SenaraiaduanPageModule)
              },
              {
                path: 'view',
                loadChildren: () => import('../aduan/aduanmain/aduanview/aduanview.module').then( m => m.AduanviewPageModule)
              }
            ]
          },
          {
            path: 'penghargaan',
            children: [
              {
                path: '',
                loadChildren: () => import('../aduan/penghargaanmain/penghargaanmain.module').then( m => m.PenghargaanmainPageModule)
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'notis',
        children: [
          {
            path: '',
            loadChildren: () => import('../admin/notis/notis.module').then( m => m.NotisPageModule)
          }
        ]
      },
      {
        path: 'pengumuman',
        children: [
          {
            path: '',
            loadChildren: () => import('../admin/pengumuman/pengumuman.module').then( m => m.PengumumanPageModule)
          }
        ]
      },
      {
        path: 'penghargaan',
        children: [
          {
            path: '',
            loadChildren: () => import('../admin/penghargaan/penghargaan.module').then( m => m.PenghargaanPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
