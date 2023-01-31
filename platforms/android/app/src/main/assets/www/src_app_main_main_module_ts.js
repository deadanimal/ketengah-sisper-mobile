(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_main_main_module_ts"],{

/***/ 19853:
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 64332);




const routes = [
    {
        path: 'tabs',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_adminmenu_adminmenu_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
                    },
                    {
                        path: 'notis',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_notis_notis_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/notis/notis.module */ 45858)).then(m => m.NotisPageModule)
                    }
                ]
            },
            {
                path: 'akaun',
                children: [
                    {
                        path: 'perumahan',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_akaun_perumahan_perumahan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../akaun/perumahan/perumahan.module */ 70455)).then(m => m.PerumahanPageModule)
                            },
                            {
                                path: 'form',
                                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_akaun_perumahan_form_form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../akaun/perumahan/form/form.module */ 76578)).then(m => m.FormPageModule)
                            }
                        ]
                    },
                    {
                        path: 'premis',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_akaun_premis_premis_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../akaun/premis/premis.module */ 83607)).then(m => m.PremisPageModule)
                    },
                    {
                        path: 'maklumat',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_akaun_maklumat_maklumat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../akaun/maklumat/maklumat.module */ 10778)).then(m => m.MaklumatPageModule)
                    }
                ]
            },
            {
                path: 'profil',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_profil_profil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profil/profil.module */ 48718)).then(m => m.ProfilPageModule)
                    }
                ]
            },
            {
                path: 'doc',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_semakbayaran_semakbayaran_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../semakbayaran/semakbayaran.module */ 11479)).then(m => m.SemakbayaranPageModule)
                    }
                ]
            },
            {
                path: 'setting',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_setting_setting_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../setting/setting.module */ 80943)).then(m => m.SettingPageModule)
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
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_bayarsewa_bayarsewa_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../bayarsewa/bayarsewa.module */ 94934)).then(m => m.BayarsewaPageModule)
                    }
                ]
            },
            {
                path: 'lejar',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lejar_lejar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../lejar/lejar.module */ 17937)).then(m => m.LejarPageModule)
                    },
                    {
                        path: 'sewapremis',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_lejar_sewapremis_sewapremis_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../lejar/sewapremis/sewapremis.module */ 21251)).then(m => m.SewapremisPageModule)
                    },
                    {
                        path: 'sewarumah',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_lejar_sewarumah_sewarumah_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../lejar/sewarumah/sewarumah.module */ 11598)).then(m => m.SewarumahPageModule)
                    }
                ]
            },
            {
                path: 'tender',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tender_tender_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tender/tender.module */ 88681)).then(m => m.TenderPageModule)
                    },
                    {
                        path: 'tenderDetail',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tender_tenderdetail_tenderdetail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tender/tenderdetail/tenderdetail.module */ 26732)).then(m => m.TenderdetailPageModule)
                    }
                ]
            },
            {
                path: 'tempahkemudahan',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tempahkemudahan_tempahkemudahan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tempahkemudahan/tempahkemudahan.module */ 624)).then(m => m.TempahkemudahanPageModule)
                    },
                    {
                        path: 'dewan',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tempahkemudahan_dewan_dewan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tempahkemudahan/dewan/dewan.module */ 24574)).then(m => m.DewanPageModule)
                    },
                    {
                        path: 'alatan',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tempahkemudahan_alatan_alatan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tempahkemudahan/alatan/alatan.module */ 74295)).then(m => m.AlatanPageModule)
                    },
                    {
                        path: 'fasiliti',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tempahkemudahan_fasiliti_fasiliti_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tempahkemudahan/fasiliti/fasiliti.module */ 46339)).then(m => m.FasilitiPageModule)
                    },
                    {
                        path: 'sejarah',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tempahkemudahan_sejarah_sejarah_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tempahkemudahan/sejarah/sejarah.module */ 45046)).then(m => m.SejarahPageModule)
                            },
                            {
                                path: 'view',
                                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tempahkemudahan_sejarah_view_view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tempahkemudahan/sejarah/view/view.module */ 77159)).then(m => m.ViewPageModule)
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
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_aduan_aduan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../aduan/aduan.module */ 34947)).then(m => m.AduanPageModule)
                    },
                    {
                        path: 'aduanmain',
                        children: [
                            {
                                path: '',
                                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_aduan_aduanmain_aduanmain_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../aduan/aduanmain/aduanmain.module */ 68720)).then(m => m.AduanmainPageModule)
                            },
                            {
                                path: 'tambah',
                                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_aduan_aduanmain_tambahaduan_tambahaduan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../aduan/aduanmain/tambahaduan/tambahaduan.module */ 45718)).then(m => m.TambahaduanPageModule)
                            },
                            {
                                path: 'senarai',
                                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_aduan_aduanmain_senaraiaduan_senaraiaduan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../aduan/aduanmain/senaraiaduan/senaraiaduan.module */ 30249)).then(m => m.SenaraiaduanPageModule)
                            },
                            {
                                path: 'view',
                                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_aduan_aduanmain_aduanview_aduanview_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../aduan/aduanmain/aduanview/aduanview.module */ 46014)).then(m => m.AduanviewPageModule)
                            }
                        ]
                    },
                    {
                        path: 'penghargaan',
                        children: [
                            {
                                path: '',
                                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_aduan_penghargaanmain_penghargaanmain_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../aduan/penghargaanmain/penghargaanmain.module */ 48894)).then(m => m.PenghargaanmainPageModule)
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
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lain-lain_lain-lain_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../lain-lain/lain-lain.module */ 84785)).then(m => m.LainLainPageModule)
                    }
                ]
            },
            {
                path: 'bayaran',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_bayaran_kaedah_kaedah_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../bayaran/kaedah/kaedah.module */ 16728)).then(m => m.KaedahPageModule)
                    },
                    {
                        path: 'resit',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_bayaran_resit_resit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../bayaran/resit/resit.module */ 74870)).then(m => m.ResitPageModule)
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
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_adminmenu_adminmenu_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
            },
            {
                path: 'notis',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_adminmenu_adminmenu_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_notis_notis_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/notis/notis.module */ 71051)).then(m => m.NotisPageModule)
                    }
                ]
            },
            {
                path: 'pengumuman',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_adminmenu_adminmenu_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_pengumuman_pengumuman_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/pengumuman/pengumuman.module */ 82544)).then(m => m.PengumumanPageModule)
                    }
                ]
            },
            {
                path: 'penghargaan',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_adminmenu_adminmenu_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_penghargaan_penghargaan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/penghargaan/penghargaan.module */ 96287)).then(m => m.PenghargaanPageModule)
                    }
                ]
            },
            {
                path: 'aduan',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_adminmenu_adminmenu_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_aduan_aduan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/aduan/aduan.module */ 49665)).then(m => m.AduanPageModule)
                    },
                    {
                        path: 'aduanlist',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_adminmenu_adminmenu_page_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/aduan/aduanlist/aduanlist.module */ 61073)).then(m => m.AduanlistPageModule)
                    },
                    {
                        path: 'aduanview',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_adminmenu_adminmenu_page_ts"), __webpack_require__.e("default-src_app_admin_aduan_aduanview_aduanview_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/aduan/aduanview/aduanview.module */ 57625)).then(m => m.AduanviewPageModule)
                    }
                ]
            },
            {
                path: 'pengguna',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_adminmenu_adminmenu_page_ts"), __webpack_require__.e("src_app_admin_pengguna_pengguna_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/pengguna/pengguna.module */ 33219)).then(m => m.PenggunaPageModule)
                    }
                ]
            },
            {
                path: 'sekatan',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_adminmenu_adminmenu_page_ts"), __webpack_require__.e("src_app_admin_sekatan_sekatan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/sekatan/sekatan.module */ 9206)).then(m => m.SekatanPageModule)
                    },
                    {
                        path: 'form',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_modals_adminmenu_adminmenu_page_ts"), __webpack_require__.e("default-src_app_admin_sekatan_form_form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../admin/sekatan/form/form.module */ 22754)).then(m => m.FormPageModule)
                    }
                ]
            }
        ]
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 65705:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 19853);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 64332);







let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
    })
], MainPageModule);



/***/ }),

/***/ 64332:
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main.page.html */ 52788);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 80921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let MainPage = class MainPage {
    constructor(platform) {
        this.platform = platform;
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('none');
        });
    }
    ngOnInit() {
    }
};
MainPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainPage);



/***/ }),

/***/ 80921:
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".tab {\n  padding: 10px 10px 10px 10px;\n  background-color: #3D2C7C;\n}\n\n.tabbar {\n  height: 91px;\n  border-radius: 20px 20px 0px 0px;\n}\n\n.tabicon {\n  height: 25px;\n  width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6Im1haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYiB7XG4gICAgcGFkZGluZzoxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XG59XG5cbi50YWJiYXIge1xuICAgIGhlaWdodDo5MXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xufVxuXG4udGFiaWNvbntcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG59Il19 */");

/***/ }),

/***/ 52788:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs style=\"background-color: white;\">\n  <ion-tab-bar slot=\"bottom\" class=\"tabbar\">\n    <ion-tab-button tab=\"home\" class=\"tab\">\n      <ion-img src=\"../../assets/icon/home.png\" class=\"tabicon\"></ion-img>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profil\" class=\"tab\">\n      <ion-img src=\"../../assets/icon/profil.png\" class=\"tabicon\"></ion-img>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"doc\" class=\"tab\">\n      <ion-img src=\"../../assets/icon/doc.png\" class=\"tabicon\"></ion-img>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"setting\" class=\"tab\">\n      <ion-img src=\"../../assets/icon/setting.png\" class=\"tabicon\"></ion-img>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts.js.map