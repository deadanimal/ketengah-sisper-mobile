(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_login_forgotpass_forgotpass_module_ts"],{

/***/ 8660:
/*!***************************************************************!*\
  !*** ./src/app/login/forgotpass/forgotpass-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpassPageRoutingModule": () => (/* binding */ ForgotpassPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpass.page */ 77144);




const routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_0__.ForgotpassPage
    }
];
let ForgotpassPageRoutingModule = class ForgotpassPageRoutingModule {
};
ForgotpassPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotpassPageRoutingModule);



/***/ }),

/***/ 85065:
/*!*******************************************************!*\
  !*** ./src/app/login/forgotpass/forgotpass.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "ForgotpassPageModule": () => (/* binding */ ForgotpassPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpass-routing.module */ 8660);
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpass.page */ 77144);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let ForgotpassPageModule = class ForgotpassPageModule {
};
ForgotpassPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotpassPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_1__.ForgotpassPage]
    })
], ForgotpassPageModule);



/***/ }),

/***/ 77144:
/*!*****************************************************!*\
  !*** ./src/app/login/forgotpass/forgotpass.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpassPage": () => (/* binding */ ForgotpassPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_forgotpass_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgotpass.page.html */ 38656);
/* harmony import */ var _forgotpass_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpass.page.scss */ 1521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth/authentication.service */ 33439);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);








let ForgotpassPage = class ForgotpassPage {
    constructor(location, router, authService, alertController, loadingController) {
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
    sent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.phone);
            if (this.phone != '' && this.phone.length == 9) {
                const loading = yield this.loadingController.create();
                yield loading.present();
                this.authService.forgetpass(this.phone).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('forgot', res);
                    if (res == 'tiada') {
                        yield loading.dismiss();
                        const alert = yield this.alertController.create({
                            header: 'Failed',
                            message: 'Tiada akaun dijumpai berdaftar menggunakan no telefon diberi',
                            buttons: ['OK'],
                        });
                        yield alert.present();
                    }
                    if (res == 'succ') {
                        yield loading.dismiss();
                        const alert = yield this.alertController.create({
                            header: 'Berjaya',
                            message: 'Sila dapatkan katalaluan sementara di nombor telefon anda',
                            buttons: ['OK'],
                        });
                        yield alert.present();
                        this.router.navigate(['/login']);
                    }
                }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    yield loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: 'Failed',
                        message: res.error.error,
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }));
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'Failed',
                    message: 'Sila Isikan No Telefon yang Sah',
                    buttons: ['OK'],
                });
                yield alert.present();
            }
        });
    }
    numericOnly(event) {
        let pattern = /^([0-9])$/;
        let result = pattern.test(event.key);
        return result;
    }
};
ForgotpassPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
ForgotpassPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgotpass',
        template: _raw_loader_forgotpass_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgotpass_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotpassPage);



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

/***/ 1521:
/*!*******************************************************!*\
  !*** ./src/app/login/forgotpass/forgotpass.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding: 50px 80px 20px 60px;\n  height: 650px;\n}\n\n.word1 {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 19px;\n  line-height: 28px;\n  color: #3D2C7C;\n  padding-bottom: 20px;\n}\n\n.word2 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding-bottom: 50px;\n}\n\n.boxwhite {\n  color: #3D2C7C;\n  padding: 25px 0px 0px 0px;\n  font-size: 16px;\n  width: 100%;\n  margin: auto;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImZvcmdvdHBhc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xyXG4gICAgcGFkZGluZzogNTBweCA4MHB4IDIwcHggNjBweDtcclxuICAgIGhlaWdodDogNjUwcHg7XHJcbn1cclxuXHJcbi53b3JkMSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBjb2xvcjogIzNEMkM3QztcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ud29yZDIge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmJveHdoaXRlIHtcclxuICAgIGNvbG9yOiAjM0QyQzdDO1xyXG4gICAgcGFkZGluZzogMjVweCAwcHggMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMkM3QztcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59Il19 */");

/***/ }),

/***/ 38656:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgotpass/forgotpass.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'forgot.pass' | translate }}</span>\r\n      </div>\r\n      <div style=\"padding-top: 40px;\">\r\n        <ion-img src=\"../../assets/icon/forgotpass.png\" class=\"icontetapan\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container2\">\r\n      <div class=\"word1\">\r\n        {{ 'forgot.word1' | translate }}\r\n      </div>\r\n      <div class=\"word2\">\r\n        {{ 'forgot.word2' | translate }}.\r\n      </div>\r\n      <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n        Nombor Telefon <br>\r\n        <ion-input type=\"tel\" maxlength=\"9\" class=\"input\" placeholder=\"000000000\" clearInput [(ngModel)]=\"phone\" (keypress)=\"numericOnly($event)\">+60 </ion-input>\r\n      </div>\r\n      <div style=\"padding-top:150px\">\r\n        <button ion-button class=\"button\" (click)=\"sent()\">Hantar</button>\r\n      </div>\r\n    </div>  \r\n  </div>  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_forgotpass_forgotpass_module_ts.js.map