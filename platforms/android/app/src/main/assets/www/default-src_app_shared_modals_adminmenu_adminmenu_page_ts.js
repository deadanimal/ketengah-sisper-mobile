(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["default-src_app_shared_modals_adminmenu_adminmenu_page_ts"],{

/***/ 18037:
/*!***********************************************************!*\
  !*** ./src/app/shared/modals/adminmenu/adminmenu.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminmenuPage": () => (/* binding */ AdminmenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_adminmenu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./adminmenu.page.html */ 92330);
/* harmony import */ var _adminmenu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminmenu.page.scss */ 52428);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth/authentication.service */ 33439);
/* harmony import */ var _language_language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/language.page */ 91524);








let AdminmenuPage = class AdminmenuPage {
    constructor(alertController, loadingController, authService, router, modalController) {
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.authService = authService;
        this.router = router;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.logout().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                this.router.navigate(['/login']);
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Login failed',
                    message: res.error.error,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
            const modal = yield this.modalController.getTop();
            if (modal) {
                modal.dismiss();
            }
        });
    }
    home() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.getTop();
            if (modal) {
                modal.dismiss();
            }
            this.router.navigate(['main/admin']);
        });
    }
    tetapanbahasa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal1 = yield this.modalController.getTop();
            if (modal1) {
                modal1.dismiss();
            }
            const loading = yield this.loadingController.create();
            yield loading.present();
            const modal = yield this.modalController.create({
                component: _language_language_page__WEBPACK_IMPORTED_MODULE_3__.LanguagePage,
                cssClass: 'language-modal',
                backdropDismiss: true
            });
            yield loading.dismiss();
            return yield modal.present();
        });
    }
};
AdminmenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
AdminmenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-adminmenu',
        template: _raw_loader_adminmenu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_adminmenu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdminmenuPage);



/***/ }),

/***/ 91524:
/*!*********************************************************!*\
  !*** ./src/app/shared/modals/language/language.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePage": () => (/* binding */ LanguagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./language.page.html */ 5170);
/* harmony import */ var _language_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.page.scss */ 21335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 84236);






let LanguagePage = class LanguagePage {
    constructor(translate, modalController) {
        this.translate = translate;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    bahasa(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (type == 'bm') {
                this.translate.setDefaultLang('bm');
            }
            else if (type == 'en') {
                this.translate.setDefaultLang('en');
            }
            const modal = yield this.modalController.getTop();
            if (modal) {
                modal.dismiss();
            }
        });
    }
};
LanguagePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
LanguagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-language',
        template: _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_language_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LanguagePage);



/***/ }),

/***/ 33439:
/*!****************************************************************!*\
  !*** ./src/app/shared/services/auth/authentication.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);






const TOKEN_KEY = 'user';
let AuthenticationService = class AuthenticationService {
    constructor(nativeStorage, http) {
        this.nativeStorage = nativeStorage;
        this.http = http;
        this.urlLogin = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "user";
    }
    login(no_telefon, password) {
        // return this.http.get(`${this.urlLogin}?no_telefon=${no_telefon}&password=${password}`,{}).pipe(
        var loginURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "UserLogin";
        return this.http.post(loginURL, { no_telefon, password }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((res) => {
            console.log(res);
            if (res != 'false') {
                this.nativeStorage.setItem(TOKEN_KEY, { value: res });
            }
        }));
    }
    register(register) {
        var registerURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "UserRegister";
        return this.http.post(registerURL, register);
    }
    logout() {
        return this.nativeStorage.remove(TOKEN_KEY);
    }
    forgetpass(phone) {
        var forgetpassURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "ForgotPass";
        return this.http.post(forgetpassURL, { phone });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_0__.NativeStorage },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ 52428:
/*!*************************************************************!*\
  !*** ./src/app/shared/modals/adminmenu/adminmenu.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".menubtn {\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 100%;\n  height: 70px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 27px;\n  align-items: center;\n  text-align: center;\n  color: #3D2C7C;\n  vertical-align: middle;\n  line-height: 70px;\n}\n\n.logoutbtn {\n  background: #3D2C7C;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 100%;\n  height: 70px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 27px;\n  align-items: center;\n  text-align: center;\n  color: #FFFFFF;\n  vertical-align: middle;\n  line-height: 70px;\n}\n\n.container {\n  padding: 30px 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlubWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6ImFkbWlubWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudWJ0biB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMzRDJDN0M7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbn1cblxuLmxvZ291dGJ0biB7XG4gICAgYmFja2dyb3VuZDogIzNEMkM3QztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBwYWRkaW5nOjMwcHggNjBweDtcbn0iXX0= */");

/***/ }),

/***/ 21335:
/*!***********************************************************!*\
  !*** ./src/app/shared/modals/language/language.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".menubtn {\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 100%;\n  height: 70px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 27px;\n  align-items: center;\n  text-align: center;\n  color: #3D2C7C;\n  vertical-align: middle;\n  line-height: 70px;\n}\n\n.cont {\n  padding: 20px 10px 50px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0FBQ0oiLCJmaWxlIjoibGFuZ3VhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnVidG4ge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNzMsIDg3LCAxODQsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjM0QyQzdDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG59XG5cbi5jb250IHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggNTBweCAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 92330:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modals/adminmenu/adminmenu.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container\">\n    <div class=\"menubtn\" (click)=\"home()\">Laman Utama</div>\n    <div style=\"height: 15px;\"></div>\n    <div class=\"menubtn\" (click)=\"tetapanbahasa()\">Tetapan Bahasa Aplikasi</div>\n    <div style=\"height: 15px;\"></div>\n    <div class=\"logoutbtn\" (click)=\"logout()\">Log Keluar</div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 5170:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modals/language/language.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"cont\">\n    <div class=\"menubtn\" (click)=\"bahasa('bm')\">Bahasa Malaysia</div>\n    <div style=\"height: 15px;\"></div>\n    <div class=\"menubtn\" (click)=\"bahasa('en')\">Bahasa Inggeris</div>\n    <div style=\"height: 15px;\"></div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_modals_adminmenu_adminmenu_page_ts.js.map