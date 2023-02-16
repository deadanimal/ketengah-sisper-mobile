(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_admin_penghargaan_penghargaan_module_ts"],{

/***/ 3249:
/*!*****************************************************************!*\
  !*** ./src/app/admin/penghargaan/penghargaan-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenghargaanPageRoutingModule": () => (/* binding */ PenghargaanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _penghargaan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penghargaan.page */ 58197);




const routes = [
    {
        path: '',
        component: _penghargaan_page__WEBPACK_IMPORTED_MODULE_0__.PenghargaanPage
    }
];
let PenghargaanPageRoutingModule = class PenghargaanPageRoutingModule {
};
PenghargaanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PenghargaanPageRoutingModule);



/***/ }),

/***/ 96287:
/*!*********************************************************!*\
  !*** ./src/app/admin/penghargaan/penghargaan.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "PenghargaanPageModule": () => (/* binding */ PenghargaanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _penghargaan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penghargaan-routing.module */ 3249);
/* harmony import */ var _penghargaan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./penghargaan.page */ 58197);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let PenghargaanPageModule = class PenghargaanPageModule {
};
PenghargaanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _penghargaan_routing_module__WEBPACK_IMPORTED_MODULE_0__.PenghargaanPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_penghargaan_page__WEBPACK_IMPORTED_MODULE_1__.PenghargaanPage]
    })
], PenghargaanPageModule);



/***/ }),

/***/ 58197:
/*!*******************************************************!*\
  !*** ./src/app/admin/penghargaan/penghargaan.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenghargaanPage": () => (/* binding */ PenghargaanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_penghargaan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./penghargaan.page.html */ 86623);
/* harmony import */ var _penghargaan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./penghargaan.page.scss */ 82021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_services_penghargaan_penghargaan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/penghargaan/penghargaan.service */ 37189);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);
/* harmony import */ var _shared_modals_viewnotis_viewnotis_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/modals/viewnotis/viewnotis.page */ 14527);
/* harmony import */ var _shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/modals/adminmenu/adminmenu.page */ 18037);










let PenghargaanPage = class PenghargaanPage {
    constructor(location, alertController, loadingController, penghargaanService, nativeStorage, modalController) {
        this.location = location;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.penghargaanService = penghargaanService;
        this.nativeStorage = nativeStorage;
        this.modalController = modalController;
        this.PenghargaanList = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.user = data.value;
            }, error => console.error(error));
            var userid = this.user.admin_id;
            yield this.penghargaanService.get().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield res.forEach(function (value) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        var date = new Date(value.created_at);
                        value.date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
                        let obj = JSON.parse(value.viewed);
                        value.view = false;
                        yield obj.forEach(function (value2) {
                            if (value2.id == userid) {
                                value.view = true;
                            }
                        });
                    });
                });
                this.PenghargaanList = res;
                yield loading.dismiss();
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
    back() {
        this.location.back();
    }
    openModal(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            if (data.view == false) {
                yield this.penghargaanService.viewid(data.id, this.user.admin_id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    res.view = true;
                    console.log('res', res);
                    var date = new Date(res.created_at);
                    res.date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
                    var foundIndex = this.PenghargaanList.findIndex(x => x.id == res.id);
                    this.PenghargaanList[foundIndex] = res;
                    console.log('checklist', this.PenghargaanList);
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
            }
            const modal = yield this.modalController.create({
                component: _shared_modals_viewnotis_viewnotis_page__WEBPACK_IMPORTED_MODULE_4__.ViewnotisPage,
                cssClass: 'small-modal',
                backdropDismiss: true,
                componentProps: {
                    "title": data.user_name,
                    "body": data.penghargaan
                }
            });
            yield loading.dismiss();
            return yield modal.present();
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
PenghargaanPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _shared_services_penghargaan_penghargaan_service__WEBPACK_IMPORTED_MODULE_2__.PenghargaanService },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
PenghargaanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-penghargaan',
        template: _raw_loader_penghargaan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_penghargaan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PenghargaanPage);



/***/ }),

/***/ 82021:
/*!*********************************************************!*\
  !*** ./src/app/admin/penghargaan/penghargaan.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 30px 10px 20px 10px;\n  height: 700px;\n}\n\n.icondelete {\n  height: 25px;\n  width: 25px;\n  display: inline-block;\n}\n\n.notistitleactive {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #D23330;\n}\n\n.notistitleactive {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #D23330;\n}\n\n.notisbodyactive {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #494949;\n  opacity: 0.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* number of lines to show */\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\n.notisdate {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  color: #494949;\n  opacity: 0.5;\n  padding-left: 10px;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 70%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmdoYXJnYWFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFBdUIsNEJBQUE7RUFDZixhQUFBO0VBQ1IsNEJBQUE7QUFFSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJwZW5naGFyZ2Fhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDUwcHggMjVweCAyMHB4IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyMyB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMjBweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxufVxyXG5cclxuLmljb25kZWxldGUge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5ub3Rpc3RpdGxlYWN0aXZlIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICBjb2xvcjogI0QyMzMzMDtcclxufVxyXG5cclxuLm5vdGlzdGl0bGVhY3RpdmUge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgIGNvbG9yOiAjRDIzMzMwO1xyXG59XHJcblxyXG4ubm90aXNib2R5YWN0aXZlIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xyXG4gICAgICAgICAgICBsaW5lLWNsYW1wOiAxOyBcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm5vdGlzZGF0ZSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMkM3QztcclxuICAgIGJvcmRlcjogMXB0IHNvbGlkICMzRDJDN0M7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG59Il19 */");

/***/ }),

/***/ 86623:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/penghargaan/penghargaan.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container2\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\" style=\"width:70%;margin: auto;display: inline-block;\">{{ 'penghargaan.penghargaan' |\r\n          translate }}</span>\r\n        <ion-img src=\"../../assets/icon/adminmenu.png\" style=\"position: absolute;top: 50px;right: 20px;\"\r\n          class=\"iconnoti\" (click)=\"adminmenu()\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container3\">\r\n      <div *ngFor=\"let item of PenghargaanList\" style=\"padding-bottom:20px\">\r\n        <ion-item *ngIf=\"item.view == false\" style=\"background-color: white;\">\r\n          <table style=\"border-bottom: 0.7px solid #E8E8E8; height: 58px;width: 100%;\">\r\n            <colgroup>\r\n              <col style=\"width: 10%;\">\r\n              <col style=\"width: 60%;\">\r\n              <col style=\"width: 30%;\">\r\n            </colgroup>\r\n            <tr>\r\n              <td (click)=\"openModal(item)\" rowspan=\"2\" style=\"padding:30px 20px\"><ion-img\r\n                  src=\"../../assets/icon/notinew.png\" class=\"icondelete\"></ion-img></td>\r\n              <td (click)=\"openModal(item)\" class=\"notistitleactive\">{{item.user_name}}</td>\r\n              <td rowspan=\"2\" class=\"notisdate\">{{item.date}}\r\n            </tr>\r\n            <tr>\r\n              <td (click)=\"openModal(item)\" class=\"notisbodyactive\">{{item.penghargaan}}</td>\r\n            </tr>\r\n          </table>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"item.view == true\" style=\"background-color: white;\">\r\n          <table style=\"border-bottom: 0.7px solid #E8E8E8; height: 58px;width: 100%;\">\r\n            <colgroup>\r\n              <col style=\"width: 10%;\">\r\n              <col style=\"width: 60%;\">\r\n              <col style=\"width: 30%;\">\r\n            </colgroup>\r\n            <tr>\r\n              <td (click)=\"openModal(item)\" rowspan=\"2\" style=\"padding:30px 20px; height:100%;\"><ion-img\r\n                  src=\"../../assets/icon/notiold.png\" class=\"icondelete\"></ion-img></td>\r\n              <td (click)=\"openModal(item)\" class=\"notistitleactive\" style=\"opacity: 0.3; height:100%;\">\r\n                {{item.user_name}}</td>\r\n              <td rowspan=\"2\" class=\"notisdate\">{{item.date}}\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td (click)=\"openModal(item)\" class=\"notisbodyactive\" style=\"height:100%;\">{{item.penghargaan}}</td>\r\n            </tr>\r\n          </table>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_admin_penghargaan_penghargaan_module_ts.js.map