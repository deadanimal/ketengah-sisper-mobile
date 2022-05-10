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
        path: 'bayarsewa',
        children: [
          {
            path: '',
            loadChildren: () => import('../bayarsewa/bayarsewa.module').then( m => m.BayarsewaPageModule)
          }
        ]
      },
      {
        path: 'lejar',
        children: [
          {
            path: '',
            loadChildren: () => import('../lejar/lejar.module').then( m => m.LejarPageModule)
          },
          {
            path: 'sewapremis',
            loadChildren: () => import('../lejar/sewapremis/sewapremis.module').then( m => m.SewapremisPageModule)
          },
          {
            path: 'sewarumah',
            loadChildren: () => import('../lejar/sewarumah/sewarumah.module').then( m => m.SewarumahPageModule)
          }
        ]
      },
      {
        path: 'tender',
        children: [
          {
            path: '',
            loadChildren: () => import('../tender/tender.module').then( m => m.TenderPageModule)
          },
          {
            path: 'tenderDetail',
            loadChildren: () => import('../tender/tenderdetail/tenderdetail.module').then( m => m.TenderdetailPageModule)
          }
        ]
      },
      {
        path: 'tempahkemudahan',
        children: [
          {
            path: '',
            loadChildren: () => import('../tempahkemudahan/tempahkemudahan.module').then( m => m.TempahkemudahanPageModule)
          },
          {
            path: 'dewan',
            loadChildren: () => import('../tempahkemudahan/dewan/dewan.module').then( m => m.DewanPageModule)
          },
          {
            path: 'alatan',
            loadChildren: () => import('../tempahkemudahan/alatan/alatan.module').then( m => m.AlatanPageModule)
          },
          {
            path: 'fasiliti',
            loadChildren: () => import('../tempahkemudahan/fasiliti/fasiliti.module').then( m => m.FasilitiPageModule)
          },
          {
            path: 'sejarah',
            children: [
              {
                path: '',
                loadChildren: () => import('../tempahkemudahan/sejarah/sejarah.module').then( m => m.SejarahPageModule)
              },
              {
                path: 'view',
                loadChildren: () => import('../tempahkemudahan/sejarah/view/view.module').then( m => m.ViewPageModule)
              }
            ]
            
          }
        ]
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
      },
      {
        path: 'lain',
        children: [
          {
            path: '',
            loadChildren: () => import('../lain-lain/lain-lain.module').then( m => m.LainLainPageModule)
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
      },
      {
        path: 'aduan',
        children: [
          {
            path: '',
            loadChildren: () => import('../admin/aduan/aduan.module').then( m => m.AduanPageModule)
          },
          {
            path: 'aduanlist',
            loadChildren: () => import('../admin/aduan/aduanlist/aduanlist.module').then( m => m.AduanlistPageModule)
          },
          {
            path: 'aduanview',
            loadChildren: () => import('../admin/aduan/aduanview/aduanview.module').then( m => m.AduanviewPageModule)
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
