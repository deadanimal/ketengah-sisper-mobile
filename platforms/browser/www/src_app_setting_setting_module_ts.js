(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_setting_setting_module_ts"],{

/***/ 91532:
/*!***************************************************!*\
  !*** ./src/app/setting/setting-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageRoutingModule": () => (/* binding */ SettingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.page */ 63396);




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_0__.SettingPage
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ 80943:
/*!*******************************************!*\
  !*** ./src/app/setting/setting.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "SettingPageModule": () => (/* binding */ SettingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-routing.module */ 91532);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page */ 63396);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let SettingPageModule = class SettingPageModule {
};
SettingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_1__.SettingPage]
    })
], SettingPageModule);



/***/ }),

/***/ 63396:
/*!*****************************************!*\
  !*** ./src/app/setting/setting.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPage": () => (/* binding */ SettingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./setting.page.html */ 43032);
/* harmony import */ var _setting_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page.scss */ 9662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth/authentication.service */ 33439);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_modals_language_language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modals/language/language.page */ 91524);









let SettingPage = class SettingPage {
    constructor(location, router, alertController, loadingController, authService, modalController) {
        this.location = location;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.authService = authService;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
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
        });
    }
    bahasa() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            const modal = yield this.modalController.create({
                component: _shared_modals_language_language_page__WEBPACK_IMPORTED_MODULE_3__.LanguagePage,
                cssClass: 'language-modal',
                backdropDismiss: true
            });
            yield loading.dismiss();
            return yield modal.present();
        });
    }
};
SettingPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
SettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-setting',
        template: _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_setting_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingPage);



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
/* harmony import */ var _language_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.page.scss */ 66104);
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
        const registerURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + 'UserRegister';
        return this.http.post(registerURL, register);
    }
    logout() {
        // let user;
        // this.nativeStorage.getItem('user').then(res => {
        //   user = res;
        // });
        // localStorage.setItem(user.user_id, 'true')
        return this.nativeStorage.remove(TOKEN_KEY);
    }
    forgetpass(phone) {
        var forgetpassURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl + "ForgotPass";
        console.log(forgetpassURL);
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

/***/ 9662:
/*!*******************************************!*\
  !*** ./src/app/setting/setting.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  height: 450px;\n}\n\n.boxwhite {\n  color: #3D2C7C;\n  padding: 15px 0px 15px 0px;\n  font-size: 16px;\n  width: 80%;\n  margin: auto;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 70%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbn1cclxuXHJcbi5ib3h3aGl0ZSB7XHJcbiAgICBjb2xvcjogIzNEMkM3QztcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG59Il19 */");

/***/ }),

/***/ 66104:
/*!***********************************************************!*\
  !*** ./src/app/shared/modals/language/language.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".menubtn {\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 100%;\n  height: 70px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 27px;\n  align-items: center;\n  text-align: center;\n  color: #3D2C7C;\n  vertical-align: middle;\n  line-height: 70px;\n}\n\n.cont {\n  padding: 20px 10px 50px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0FBQ0oiLCJmaWxlIjoibGFuZ3VhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnVidG4ge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzNEMkM3QztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxufVxyXG5cclxuLmNvbnQge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4IDUwcHggMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 43032:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content >\r\n  <div class=\"main\">\r\n    <div class=\"container\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'setting.tetapan' | translate }}</span>\r\n      </div>\r\n      <div style=\"padding-top: 40px;\">\r\n        <ion-img src=\"../../assets/icon/tetapan.png\" class=\"icontetapan\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container2\">\r\n      <div class=\"boxgrey\">\r\n        <div class=\"tetapanword\">{{ 'setting.tetapan' | translate }}</div>\r\n      </div>\r\n      <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n        {{ 'setting.noti' | translate }}\r\n      </div>\r\n      <div class=\"boxwhite\" (click)=\"bahasa()\">\r\n        {{ 'setting.bahasa' | translate }}\r\n      </div>\r\n      <div class=\"boxgrey\">\r\n        <div class=\"tetapanword\">{{ 'setting.bantuan' | translate }}</div>\r\n      </div>\r\n      <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n        {{ 'setting.faq' | translate }}\r\n      </div>\r\n      <div class=\"boxwhite\">\r\n        {{ 'setting.terma' | translate }}\r\n      </div>\r\n    </div>\r\n    <div class=\"lower-content\">\r\n      <button ion-button class=\"button\" (click)=\"logout()\">{{ 'logout' | translate }}</button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"cont\">\r\n    <div class=\"menubtn\" (click)=\"bahasa('bm')\">Bahasa Malaysia</div>\r\n    <div style=\"height: 15px;\"></div>\r\n    <div class=\"menubtn\" (click)=\"bahasa('en')\">Bahasa Inggeris</div>\r\n    <div style=\"height: 15px;\"></div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_setting_setting_module_ts.js.map