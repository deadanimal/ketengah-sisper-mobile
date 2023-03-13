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
/* harmony import */ var _pengguna_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pengguna.page.scss */ 6492);
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

/***/ 6492:
/*!***************************************************!*\
  !*** ./src/app/admin/pengguna/pengguna.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 50px 50px 20px 50px;\n  height: 700px;\n}\n\n.pagetitle {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 19px;\n  color: #3D2C7C;\n}\n\n.search {\n  display: inline-block;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  height: 48px;\n  width: 90%;\n  color: #3D2C7C;\n}\n\n.searchbtn {\n  width: 20px;\n  height: 20px;\n  color: #3D2C7C;\n  display: inline-block;\n  padding-top: 5px;\n}\n\n.srchtitle {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  color: #494949;\n}\n\n.card {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 17px;\n}\n\n.nama {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  color: #494949;\n  padding: 2px 0px;\n}\n\n.jenis {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  color: #F6C949;\n  padding: 2px 0px;\n}\n\n.nophone {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  color: #3D2C7C;\n  padding: 2px 0px;\n}\n\nion-footer {\n  --background: white;\n}\n\nion-toolbar {\n  --background: white;\n  --border-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmdndW5hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUFGIiwiZmlsZSI6InBlbmdndW5hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHggMjBweCAxMHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG59XG5cbi5jb250YWluZXIzIHtcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHggMjBweCA1MHB4O1xuICAgIGhlaWdodDogNzAwcHg7XG59XG5cbi5wYWdldGl0bGUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBjb2xvcjogIzNEMkM3Qztcbn1cblxuLnNlYXJjaCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcbiAgICBib3gtc2hhZG93OiBpbnNldCAtNHB4IC00cHggOXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgNHB4IDRweCAxNHB4ICNDNUQ3RUU7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGNvbG9yOiAjM0QyQzdDO1xufVxuXG4uc2VhcmNoYnRuIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICMzRDJDN0M7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5zcmNodGl0bGUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbn1cblxuLmNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y3RkFGRDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNzMsIDg3LCAxODQsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcbn1cblxuLm5hbWEge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzQ5NDk0OTtcbiAgICBwYWRkaW5nOiAycHggMHB4O1xufVxuXG4uamVuaXMge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI0Y2Qzk0OTtcbiAgICBwYWRkaW5nOiAycHggMHB4O1xufVxuXG4ubm9waG9uZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjM0QyQzdDO1xuICAgIHBhZGRpbmc6IDJweCAwcHg7XG59XG5cbmlvbi1mb290ZXJ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG5cbn1cblxuaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcblxufVxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container2\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">{{ 'pengguna.pengguna' | translate }}</span>\n        <ion-img src=\"../../assets/icon/adminmenu.png\" style=\"position: absolute;top: 50px;right: 20px;\"\n          class=\"iconnoti\" (click)=\"adminmenu()\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n\n    <h2 *ngIf=\"total\">{{total}}</h2>\n\n    <div class=\"flex items-end justify-end\">\n\n    </div>\n\n    <div class=\"container3\">\n      <span class=\"pagetitle\">{{ 'pengguna.senarai' | translate }}</span>\n      <div style=\"padding:20px 30px;\">\n        <div class=\"srchtitle\" style=\"padding: 20px 0px;\">{{ 'pengguna.notel' | translate }}</div>\n        <input [disabled]=\"name\" class=\"search\" type=\"number\" [(ngModel)]=\"phoneno\" />\n        <ion-img class=\"searchbtn\" src=\"../../assets/icon/searchicon.png\" (click)=\"search()\"></ion-img>\n      </div>\n      <div style=\"padding:20px 30px;\">\n        <div class=\"srchtitle\" style=\"padding: 20px 0px;\">{{ 'pengguna.nama' | translate }}</div>\n        <input [disabled]=\"phoneno\" class=\"search\" type=\"text\" [(ngModel)]=\"name\" />\n        <ion-img class=\"searchbtn\" src=\"../../assets/icon/searchicon.png\" (click)=\"search()\"></ion-img>\n      </div>\n      <div style=\"padding-right:10px;padding-top: 20px;\">\n        <div *ngFor=\"let item of penggunaList\">\n          <div class=\"card\">\n            <table style=\"width: 100%; height: 100%;color: black;\">\n              <tr>\n                <td style=\"padding:10px 30px;\">\n                  <div class=\"nama\">{{item.name}}</div>\n                  <div class=\"jenis\">{{item.jenis}}</div>\n                  <div class=\"nophone\">{{item.no_telefon}}</div>\n                </td>\n                <td>\n                  <ion-toggle (click)=\"aktif(item)\" [(ngModel)]=\"item.check\"></ion-toggle>\n                </td>\n              </tr>\n            </table>\n          </div>\n          <div style=\"height:10px;\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer style=\"background-color: white !important;\" color=\"light\">\n  <ion-fab style=\"margin-top: 15px;\" horizontal=\"end\" vertical=\"bottom\">\n\n    <ion-fab-button (click)=\"add()\">\n\n      {{total}}\n    </ion-fab-button>\n\n  </ion-fab>\n  <ion-toolbar style=\"height: 60px; background-color: white !important;\">\n\n    <span style=\"color: black; text-align: center; margin-left: 20%;\">JUMLAH PENGGUNA e - SISPER</span>\n\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_admin_pengguna_pengguna_module_ts.js.map