(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_admin_pengumuman_pengumuman_module_ts"],{

/***/ 49835:
/*!***************************************************************!*\
  !*** ./src/app/admin/pengumuman/pengumuman-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengumumanPageRoutingModule": () => (/* binding */ PengumumanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pengumuman_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pengumuman.page */ 72944);




const routes = [
    {
        path: '',
        component: _pengumuman_page__WEBPACK_IMPORTED_MODULE_0__.PengumumanPage
    }
];
let PengumumanPageRoutingModule = class PengumumanPageRoutingModule {
};
PengumumanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PengumumanPageRoutingModule);



/***/ }),

/***/ 82544:
/*!*******************************************************!*\
  !*** ./src/app/admin/pengumuman/pengumuman.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "PengumumanPageModule": () => (/* binding */ PengumumanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pengumuman_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pengumuman-routing.module */ 49835);
/* harmony import */ var _pengumuman_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pengumuman.page */ 72944);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let PengumumanPageModule = class PengumumanPageModule {
};
PengumumanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pengumuman_routing_module__WEBPACK_IMPORTED_MODULE_0__.PengumumanPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_pengumuman_page__WEBPACK_IMPORTED_MODULE_1__.PengumumanPage]
    })
], PengumumanPageModule);



/***/ }),

/***/ 72944:
/*!*****************************************************!*\
  !*** ./src/app/admin/pengumuman/pengumuman.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengumumanPage": () => (/* binding */ PengumumanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pengumuman_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pengumuman.page.html */ 12477);
/* harmony import */ var _pengumuman_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pengumuman.page.scss */ 25458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_modals_calendar_calendar_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/modals/calendar/calendar.page */ 53680);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);
/* harmony import */ var _shared_services_pengumuman_pengumuman_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/pengumuman/pengumuman.service */ 28779);
/* harmony import */ var _shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/modals/adminmenu/adminmenu.page */ 18037);










let PengumumanPage = class PengumumanPage {
    constructor(location, modalController, loadingController, nativeStorage, alertController, pengumumanService) {
        this.location = location;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.nativeStorage = nativeStorage;
        this.alertController = alertController;
        this.pengumumanService = pengumumanService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.userid = data.value.admin_id;
            }, error => console.error(error));
            yield loading.dismiss();
        });
    }
    back() {
        this.location.back();
    }
    clearform() {
        this.tajukumum = '';
        this.kandunganumum = '';
        this.tempohumum = '';
        this.date = '';
    }
    hantar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            const formData = new FormData();
            formData.append('admin_id', this.userid);
            formData.append('tajuk', this.tajukumum);
            formData.append('keterangan', this.kandunganumum);
            formData.append('tarikh_mula', this.date.from);
            formData.append('tarikh_tamat', this.date.to);
            yield this.pengumumanService.add(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.clearform();
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Success',
                    message: 'Pengumuman Berjaya Di Tambah',
                    buttons: ['OK'],
                });
                yield alert.present();
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    opencal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shared_modals_calendar_calendar_page__WEBPACK_IMPORTED_MODULE_2__.CalendarPage,
                cssClass: 'med-modal',
                backdropDismiss: false
            });
            modal.onDidDismiss().then((data) => {
                this.date = data.data;
                const fromdate = new Date(this.date.from);
                const frommonth = fromdate.toLocaleString('default', { month: 'short' });
                const todate = new Date(this.date.to);
                const tomonth = todate.toLocaleString('default', { month: 'short' });
                this.tempohumum = frommonth + ', ' + fromdate.getDate() + ' - ' + tomonth + ', ' + todate.getDate();
            });
            yield modal.present();
        });
    }
    adminmenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_5__.AdminmenuPage,
                cssClass: 'menu-modal',
                backdropDismiss: true
            });
            return yield modal.present();
        });
    }
};
PengumumanPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _shared_services_pengumuman_pengumuman_service__WEBPACK_IMPORTED_MODULE_4__.PengumumanService }
];
PengumumanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-pengumuman',
        template: _raw_loader_pengumuman_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pengumuman_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PengumumanPage);



/***/ }),

/***/ 25458:
/*!*******************************************************!*\
  !*** ./src/app/admin/pengumuman/pengumuman.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 30px 10px 20px 10px;\n  height: 700px;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.select {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n  --placeholder-color:#494949;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding-bottom: 15px;\n  padding-top: 25px;\n}\n\n.descbox {\n  padding: 0px 60px 40px 60px;\n}\n\n.textarea {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmd1bXVtYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvRkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoicGVuZ3VtdW1hbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDUwcHggMjVweCAyMHB4IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyMyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMjBweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxufVxyXG5cclxuLmhlYWRlcmJveCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojNDk0OTQ5O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG5cclxuLmRlc2Nib3gge1xyXG4gICAgcGFkZGluZzogMHB4IDYwcHggNDBweCA2MHB4O1xyXG59XHJcblxyXG4udGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCA0cHggNHB4IDE0cHggI0M1RDdFRTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QyQzdDO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 12477:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/pengumuman/pengumuman.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container2\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'home.pengumuman' | translate }}</span>\r\n        <ion-img src=\"../../assets/icon/adminmenu.png\" style=\"position: absolute;top: 50px;right: 20px;\" class=\"iconnoti\" (click)=\"adminmenu()\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container3\">\r\n      <div class=\"headerbox\">\r\n        <div class=\"descbox\">\r\n          <div class=\"label\">{{ 'pengumuman.tajukpengumuman' | translate }}</div>\r\n          <input class=\"select\" [(ngModel)]=\"tajukumum\">\r\n          <div class=\"label\">{{ 'pengumuman.kandungan' | translate }}</div>\r\n          <textarea class=\"textarea\" rows=\"7\" cols=\"50\" [(ngModel)]=\"kandunganumum\"></textarea>\r\n          <div class=\"label\">{{ 'pengumuman.tempohpengumuman' | translate }}</div>\r\n          <div style=\"width: 82%;display: inline-block;\">\r\n            <input class=\"select\" [(ngModel)]=\"tempohumum\" readonly>\r\n          </div>\r\n          <div style=\"width: 18%;display: inline-block;padding:10px;\">\r\n            <button style=\"width:30px;height:30px;background-color: #3D2C7C;border-radius:3px;\" (click)=\"opencal()\">\r\n              <ion-img style=\"width:20px;height:20px;\" src=\"../../assets/icon/Calendar.png\"></ion-img>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div style=\"padding: 30px 30px;\">\r\n          <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'aduan.hantar' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_admin_pengumuman_pengumuman_module_ts.js.map