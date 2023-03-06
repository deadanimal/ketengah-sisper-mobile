(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_aduan_aduanmain_tambahaduan_tambahaduan_module_ts"],{

/***/ 68011:
/*!***************************************************************************!*\
  !*** ./src/app/aduan/aduanmain/tambahaduan/tambahaduan-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TambahaduanPageRoutingModule": () => (/* binding */ TambahaduanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tambahaduan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tambahaduan.page */ 27482);




const routes = [
    {
        path: '',
        component: _tambahaduan_page__WEBPACK_IMPORTED_MODULE_0__.TambahaduanPage
    }
];
let TambahaduanPageRoutingModule = class TambahaduanPageRoutingModule {
};
TambahaduanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TambahaduanPageRoutingModule);



/***/ }),

/***/ 45718:
/*!*******************************************************************!*\
  !*** ./src/app/aduan/aduanmain/tambahaduan/tambahaduan.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "TambahaduanPageModule": () => (/* binding */ TambahaduanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tambahaduan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tambahaduan-routing.module */ 68011);
/* harmony import */ var _tambahaduan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tambahaduan.page */ 27482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let TambahaduanPageModule = class TambahaduanPageModule {
};
TambahaduanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tambahaduan_routing_module__WEBPACK_IMPORTED_MODULE_0__.TambahaduanPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_tambahaduan_page__WEBPACK_IMPORTED_MODULE_1__.TambahaduanPage]
    })
], TambahaduanPageModule);



/***/ }),

/***/ 27482:
/*!*****************************************************************!*\
  !*** ./src/app/aduan/aduanmain/tambahaduan/tambahaduan.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TambahaduanPage": () => (/* binding */ TambahaduanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tambahaduan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tambahaduan.page.html */ 61958);
/* harmony import */ var _tambahaduan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tambahaduan.page.scss */ 48507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_services_aduan_aduan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/aduan/aduan.service */ 47743);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);










let TambahaduanPage = class TambahaduanPage {
    constructor(location, router, aduanService, alertController, loadingController, formBuilder, nativeStorage) {
        this.location = location;
        this.router = router;
        this.aduanService = aduanService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.nativeStorage = nativeStorage;
        this.ddRosak = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.userid = data.value.user_id;
            }, error => console.error(error));
            yield this.aduanService.getdd().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.ddKategori = res[0];
                this.listrosak = res[1];
                console.log(this.listrosak);
                yield loading.dismiss();
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Loading failed',
                    message: res.message,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
    ChangeDDKate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.ddRosak = [];
            var array = [];
            var val = this.KateVal;
            yield this.listrosak.forEach(function (value) {
                if (value.kategori_id == val) {
                    array.push(value);
                }
            });
            this.ddRosak = array;
        });
    }
    back() {
        this.location.back();
    }
    hantar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            console.log(this.pilih_jenis, "hereeee");
            const formData = new FormData();
            formData.append('id', this.userid);
            formData.append('kategori', this.KateVal);
            formData.append('rosak', this.RosakVal);
            formData.append('catatan', this.CatatanVal);
            formData.append('jenis_akaun', this.pilih_jenis);
            yield this.aduanService.add(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                this.router.navigate(['/main/tabs/aduan/aduanmain']);
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Loading failed',
                    message: res.message,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
};
TambahaduanPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _shared_services_aduan_aduan_service__WEBPACK_IMPORTED_MODULE_2__.AduanService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeStorage }
];
TambahaduanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tambahaduan',
        template: _raw_loader_tambahaduan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tambahaduan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TambahaduanPage);



/***/ }),

/***/ 48507:
/*!*******************************************************************!*\
  !*** ./src/app/aduan/aduanmain/tambahaduan/tambahaduan.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  height: 650px;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.select {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding-left: 20px;\n}\n\n.descbox {\n  padding: 40px 60px 40px 60px;\n}\n\n.textarea {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhbWJhaGFkdWFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9GQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJ0YW1iYWhhZHVhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiA2NTBweDtcbn1cblxuLmhlYWRlcmJveCB7XG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM0OTQ5NDk7XG59XG5cbi5sYWJlbCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZGVzY2JveCB7XG4gICAgcGFkZGluZzogNDBweCA2MHB4IDQwcHggNjBweDtcbn1cblxuLnRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBwYWRkaW5nOjIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QyQzdDO1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjphdXRvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 61958:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aduan/aduanmain/tambahaduan/tambahaduan.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">{{ 'aduan.tambahaduan' | translate }}</span>\n      </div>\n      <div style=\"padding-top: 40px;\">\n        <ion-img src=\"../../assets/icon/aduan.png\" class=\"icontetapan\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div class=\"headerbox\">\n        <div class=\"label\">{{ 'aduan.silaisi' | translate }}.</div>\n        <div class=\"descbox\">\n          <ion-select [(ngModel)]=\"pilih_jenis\" placeholder=\"Pilih Jenis Akaun\" class=\"select\"\n            style=\"margin-bottom: 10px;\">\n            <ion-select-option value=\"akaun rumah \">\n              Akaun Rumah\n            </ion-select-option>\n            <ion-select-option value=\"akaun premis\">\n              Akaun Premis\n            </ion-select-option>\n          </ion-select>\n          <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\"\n            placeholder=\"{{ 'aduan.pilihkate' | translate }}\" [(ngModel)]=\"KateVal\" (ionChange)=\"ChangeDDKate()\">\n            <ion-select-option *ngFor=\"let kate of ddKategori; let i = index\" [value]=\"kate.kategori_id\">\n              {{kate.kategori}}\n            </ion-select-option>\n          </ion-select>\n          <div style=\"height: 10px;\"></div>\n          <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\"\n            placeholder=\"{{ 'aduan.pilihrosak' | translate }}\" [(ngModel)]=\"RosakVal\">\n            <ion-select-option *ngFor=\"let rosak of ddRosak; let i = index\" [value]=\"rosak.kerosakan_id\">\n              {{rosak.kerosakan}}\n            </ion-select-option>\n          </ion-select>\n          <div style=\"height: 50px;\"></div>\n          <div class=\"label\">{{ 'aduan.catatan' | translate }}</div>\n          <div style=\"height: 10px;\"></div>\n          <textarea class=\"textarea\" rows=\"7\" cols=\"50\" [(ngModel)]=\"CatatanVal\"></textarea>\n        </div>\n        <div style=\"padding: 30px 30px;\">\n          <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'aduan.hantar' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_aduan_aduanmain_tambahaduan_tambahaduan_module_ts.js.map