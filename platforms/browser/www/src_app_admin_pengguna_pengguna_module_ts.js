(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_admin_pengguna_pengguna_module_ts"],{

/***/ 36338:
/*!***********************************************************!*\
  !*** ./src/app/admin/pengguna/pengguna-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenggunaPageRoutingModule": () => (/* binding */ PenggunaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pengguna_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pengguna.page */ 28001);




const routes = [
    {
        path: '',
        component: _pengguna_page__WEBPACK_IMPORTED_MODULE_0__.PenggunaPage
    }
];
let PenggunaPageRoutingModule = class PenggunaPageRoutingModule {
};
PenggunaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PenggunaPageRoutingModule);



/***/ }),

/***/ 33219:
/*!***************************************************!*\
  !*** ./src/app/admin/pengguna/pengguna.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "PenggunaPageModule": () => (/* binding */ PenggunaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pengguna_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pengguna-routing.module */ 36338);
/* harmony import */ var _pengguna_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pengguna.page */ 28001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let PenggunaPageModule = class PenggunaPageModule {
};
PenggunaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pengguna_routing_module__WEBPACK_IMPORTED_MODULE_0__.PenggunaPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_pengguna_page__WEBPACK_IMPORTED_MODULE_1__.PenggunaPage]
    })
], PenggunaPageModule);



/***/ }),

/***/ 28001:
/*!*************************************************!*\
  !*** ./src/app/admin/pengguna/pengguna.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenggunaPage": () => (/* binding */ PenggunaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pengguna_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pengguna.page.html */ 62926);
/* harmony import */ var _pengguna_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pengguna.page.scss */ 47949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modals/adminmenu/adminmenu.page */ 18037);
/* harmony import */ var src_app_shared_services_pengguna_pengguna_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pengguna/pengguna.service */ 15908);
/* harmony import */ var src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user/user.service */ 34758);









let PenggunaPage = class PenggunaPage {
    constructor(location, modalController, penggunaService, loadingController, alertController, userService) {
        this.location = location;
        this.modalController = modalController;
        this.penggunaService = penggunaService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.userService = userService;
        this.penggunaList = [];
    }
    ngOnInit() {
        this.userService.getAllUsers().subscribe(res => {
            console.log(res);
            this.total = 17;
        });
    }
    back() {
        this.location.back();
    }
    adminmenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_2__.AdminmenuPage,
                cssClass: 'menu-modal',
                backdropDismiss: true
            });
            return yield modal.present();
        });
    }
    search() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            const formData = new FormData();
            if (this.phoneno) {
                formData.append('nophone', this.phoneno);
                yield this.penggunaService.search(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    this.penggunaList = res;
                    yield loading.dismiss();
                }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
            else if (this.name) {
                formData.append('name', this.name);
                yield this.penggunaService.searchByName(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    this.penggunaList = res;
                    yield loading.dismiss();
                }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
            this.phoneno = '';
        });
    }
    aktif(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            const loading = yield this.loadingController.create();
            yield loading.present();
            const formData = new FormData();
            formData.append('userid', data.user_id);
            formData.append('check', data.check);
            yield this.penggunaService.aktif(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
PenggunaPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_shared_services_pengguna_pengguna_service__WEBPACK_IMPORTED_MODULE_3__.PenggunaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
PenggunaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-pengguna',
        template: _raw_loader_pengguna_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pengguna_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PenggunaPage);



/***/ }),

/***/ 15908:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/pengguna/pengguna.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenggunaService": () => (/* binding */ PenggunaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PenggunaService = class PenggunaService {
    constructor(http) {
        this.http = http;
    }
    search(data) {
        var searchpengguna = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "searchpengguna";
        return this.http.post(searchpengguna, data);
    }
    aktif(data) {
        var searchpengguna = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "aktifpengguna";
        return this.http.post(searchpengguna, data);
    }
    searchByName(data) {
        var searchpengguna = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "SearchPenggunaByName";
        return this.http.post(searchpengguna, data);
    }
};
PenggunaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PenggunaService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PenggunaService);



/***/ }),

/***/ 47949:
/*!***************************************************!*\
  !*** ./src/app/admin/pengguna/pengguna.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 50px 50px 20px 50px;\n  height: 700px;\n}\n\n.pagetitle {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 19px;\n  color: #3D2C7C;\n}\n\n.search {\n  display: inline-block;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  height: 48px;\n  width: 90%;\n  color: #3D2C7C;\n}\n\n.searchbtn {\n  width: 20px;\n  height: 20px;\n  color: #3D2C7C;\n  display: inline-block;\n  padding-top: 5px;\n}\n\n.srchtitle {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  color: #494949;\n}\n\n.card {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 17px;\n}\n\n.nama {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  color: #494949;\n  padding: 2px 0px;\n}\n\n.jenis {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  color: #F6C949;\n  padding: 2px 0px;\n}\n\n.nophone {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  color: #3D2C7C;\n  padding: 2px 0px;\n}\n\nion-footer {\n  --background: white;\n}\n\nion-toolbar {\n  --background: white;\n  --border-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmdndW5hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUFGIiwiZmlsZSI6InBlbmdndW5hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZzogNTBweCAyNXB4IDIwcHggMTBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIzIHtcclxuICAgIHBhZGRpbmc6IDUwcHggNTBweCAyMHB4IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG4ucGFnZXRpdGxlIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogIzNEMkM3QztcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCA0cHggNHB4IDE0cHggI0M1RDdFRTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBjb2xvcjogIzNEMkM3QztcclxufVxyXG5cclxuLnNlYXJjaGJ0biB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjM0QyQzdDO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLnNyY2h0aXRsZSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjdGQUZEO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNzMsIDg3LCAxODQsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG59XHJcblxyXG4ubmFtYSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgICBwYWRkaW5nOiAycHggMHB4O1xyXG59XHJcblxyXG4uamVuaXMge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjRjZDOTQ5O1xyXG4gICAgcGFkZGluZzogMnB4IDBweDtcclxufVxyXG5cclxuLm5vcGhvbmUge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjM0QyQzdDO1xyXG4gICAgcGFkZGluZzogMnB4IDBweDtcclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 62926:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/pengguna/pengguna.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container2\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'pengguna.pengguna' | translate }}</span>\r\n        <ion-img src=\"../../assets/icon/adminmenu.png\" style=\"position: absolute;top: 50px;right: 20px;\"\r\n          class=\"iconnoti\" (click)=\"adminmenu()\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n\r\n    <h2 *ngIf=\"total\">{{total}}</h2>\r\n\r\n    <div class=\"flex items-end justify-end\">\r\n\r\n    </div>\r\n\r\n    <div class=\"container3\">\r\n      <span class=\"pagetitle\">{{ 'pengguna.senarai' | translate }}</span>\r\n      <div style=\"padding:20px 30px;\">\r\n        <div class=\"srchtitle\" style=\"padding: 20px 0px;\">{{ 'pengguna.notel' | translate }}</div>\r\n        <input [disabled]=\"name\" class=\"search\" type=\"number\" [(ngModel)]=\"phoneno\" />\r\n        <ion-img class=\"searchbtn\" src=\"../../assets/icon/searchicon.png\" (click)=\"search()\"></ion-img>\r\n      </div>\r\n      <div style=\"padding:20px 30px;\">\r\n        <div class=\"srchtitle\" style=\"padding: 20px 0px;\">{{ 'pengguna.nama' | translate }}</div>\r\n        <input [disabled]=\"phoneno\" class=\"search\" type=\"text\" [(ngModel)]=\"name\" />\r\n        <ion-img class=\"searchbtn\" src=\"../../assets/icon/searchicon.png\" (click)=\"search()\"></ion-img>\r\n      </div>\r\n      <div style=\"padding-right:10px;padding-top: 20px;\">\r\n        <div *ngFor=\"let item of penggunaList\">\r\n          <div class=\"card\">\r\n            <table style=\"width: 100%; height: 100%;color: black;\">\r\n              <tr>\r\n                <td style=\"padding:10px 30px;\">\r\n                  <div class=\"nama\">{{item.name}}</div>\r\n                  <div class=\"jenis\">{{item.jenis}}</div>\r\n                  <div class=\"nophone\">{{item.no_telefon}}</div>\r\n                </td>\r\n                <td>\r\n                  <ion-toggle (click)=\"aktif(item)\" [(ngModel)]=\"item.check\"></ion-toggle>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div style=\"height:10px;\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"background-color: white !important;\" color=\"light\">\r\n  <ion-fab style=\"margin-top: 15px;\" horizontal=\"end\" vertical=\"bottom\">\r\n\r\n    <ion-fab-button (click)=\"add()\">\r\n\r\n      {{total}}\r\n    </ion-fab-button>\r\n\r\n  </ion-fab>\r\n  <ion-toolbar style=\"height: 60px; background-color: white !important;\">\r\n\r\n    <span style=\"color: black; text-align: center; margin-left: 20%;\">JUMLAH PENGGUNA e - SISPER</span>\r\n\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_admin_pengguna_pengguna_module_ts.js.map