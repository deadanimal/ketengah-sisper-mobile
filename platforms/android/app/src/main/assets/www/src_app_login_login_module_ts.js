(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 50437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth/authentication.service */ 33439);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/keyboard/ngx */ 74628);









let LoginPage = class LoginPage {
    constructor(router, fb, authService, alertController, loadingController, platform, keyboard) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.platform = platform;
        this.keyboard = keyboard;
        this.showPass = true;
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            this.keyboard.disableScroll(true);
        });
        this.credentials = this.fb.group({
            // no_telefon: ['122436753', [Validators.required]],
            // password: ['pass', [Validators.required, Validators.minLength(6)]],
            // no_telefon: ['123', [Validators.required]],
            // password: ['pass', [Validators.required, Validators.minLength(6)]],
            no_telefon: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)]]
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.login(this.credentials.value.no_telefon, this.credentials.value.password).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log('auth', res);
                yield loading.dismiss();
                if (res != 'false' && res.active != 0) {
                    if (res.role == 1) {
                        this.router.navigate(['/main']);
                    }
                    else if (res.role == 2) {
                        this.router.navigate(['/main/admin']);
                    }
                }
                if (res.active == 0) {
                    let navigationExtras = {
                        state: {
                            user: res
                        }
                    };
                    this.router.navigate(['/firstime'], navigationExtras);
                }
                if (res == 'false') {
                    const alert = yield this.alertController.create({
                        header: 'Login failed',
                        message: 'Tiada Pengguna Dijumpai',
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    register() {
        this.router.navigate(['/register']);
    }
    forgotpass() {
        this.router.navigate(['/forgotpass']);
    }
    hideShowPassword() {
        this.showPass = !this.showPass;
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__.Keyboard }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



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

/***/ 50437:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".scroll-content {\n  padding-bottom: 0 !important;\n}\n\npage-login {\n  font-size: 13px;\n}\n\n.input-div {\n  padding-top: 25px;\n}\n\n.input {\n  border: 1pt solid black;\n  padding: 10px 10px 10px 10px;\n  border-radius: 10px;\n  height: 48px;\n  background-color: white;\n  color: black;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n}\n\n.label {\n  color: white;\n}\n\n.forgotpass {\n  width: 100%;\n  text-align: right;\n  padding: 3px 10px 0px 0px;\n  color: white;\n}\n\n.divall {\n  height: 100%;\n  width: 100%;\n}\n\n.iconsisper {\n  width: 89px;\n  height: 110px;\n  margin: auto;\n  text-align: center;\n  padding-bottom: 15px;\n}\n\n.iconsisper2 {\n  width: 205px;\n  height: 50px;\n  margin: auto;\n  text-align: center;\n}\n\n.loginhead {\n  padding-top: 70px;\n  margin: auto;\n  text-align: center;\n}\n\n.lower-content {\n  padding-top: 150px;\n  text-align: center;\n  width: 100%;\n}\n\n.ketengahword {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 15px;\n  letter-spacing: 3px;\n  color: #FFFFFF;\n  width: 100%;\n}\n\nion-content {\n  --background: linear-gradient(rgba(61, 44, 124, .9) 27.6%, rgba(201, 87, 121, .9) 66.15%, rgba(117, 5, 4, .9) 100%), url(\"/assets/icon/background.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFFSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUdJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtBO0VBQ0ksdUpBQUE7QUFGSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLWNvbnRlbnQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gfVxuXG5wYWdlLWxvZ2luIHtcbiAgICAvLyBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc2l6ZToxM3B4O1xufVxuXG4uaW5wdXQtZGl2IHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbn1cblxuLmlucHV0IHtcbiAgICBib3JkZXI6IDFwdCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMkM3QztcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mb3Jnb3RwYXNzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgIHBhZGRpbmc6M3B4IDEwcHggMHB4IDBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuLmRpdmFsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbnNpc3BlciB7XG4gICAgd2lkdGg6IDg5cHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uaWNvbnNpc3BlcjIge1xuICAgIHdpZHRoOiAyMDVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luaGVhZCB7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvd2VyLWNvbnRlbnQge1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBib3R0b206IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ua2V0ZW5nYWh3b3JkIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoNjEsIDQ0LCAxMjQsIC45KSAyNy42JSwgcmdiYSgyMDEsIDg3LCAxMjEsIC45KSA2Ni4xNSUsIHJnYmEoMTE3LCA1LCA0LCAuOSkgMTAwJSksIHVybCgnL2Fzc2V0cy9pY29uL2JhY2tncm91bmQucG5nJyk7XG59XG5cbi8vIC5iYWNrZ3JvdW5kIHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSg2MSwgNDQsIDEyNCwgLjkpIDI3LjYlLCByZ2JhKDIwMSwgODcsIDEyMSwgLjkpIDY2LjE1JSwgcmdiYSgxMTcsIDUsIDQsIC45KSAxMDAlKSwgdXJsKCcvYXNzZXRzL2ljb24vYmFja2dyb3VuZC5wbmcnKTtcbi8vIH1cbiJdfQ== */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\n  <div class=\"divall scroll-content\">\n    <ion-grid >\n      <ion-row>\n        <div class=\"loginhead\" style=\"height:200px;\">\n          <ion-img class=\"iconsisper\" src=\"../../assets/icon/sisperlogin.png\"></ion-img>\n          <ion-img class=\"iconsisper2\" src=\"../../assets/icon/sisperlogin2.png\"></ion-img>\n        </div>\n      </ion-row>\n      <ion-row>\n          <div style=\"padding: 10px 50px;width: 100%;\">\n            <form [formGroup]=\"credentials\">\n              <div class=\"input-div\">\n                <label class=\"label\">Nombor Telefon</label>\n                  <div style=\"padding-top: 10px;\">\n                    <ion-input type=\"number\" class=\"input\" formControlName=\"no_telefon\"></ion-input>\n                  </div>\n              </div>\n              <div class=\"input-div\">\n                <label class=\"label\">Kata Laluan</label>\n                  <div style=\"padding-top: 10px;\">\n                    <div class=\"input\" style=\"padding: 3px 0px 0px 0px;\">\n                      <ion-input type=\"{{showPass ? 'password' : 'text' }}\" style=\"width: 90%;height: 100%;display: inline-block;\" formControlName=\"password\"></ion-input>\n                      <ion-icon (click)='hideShowPassword()' name=\"{{showPass ? 'eye-outline' : 'eye-off-outline' }}\" style=\"width: 10%;display: inline-block;\"></ion-icon>\n                    </div>\n                  </div>\n                <div class=\"forgotpass\" (click)=\"forgotpass()\">Lupa Kata Laluan?</div>\n              </div>\n              <div style=\"padding-top: 35px;\">\n                <button ion-button class=\"button\" (click)=\"login()\">Log Masuk</button>\n              </div>\n              <div class=\"input-div\" style=\"font-weight:400;color:white;\">\n                Belum Daftar? <span style=\"font-weight:600;color: #F6C949;\" (click)=\"register()\">Daftar Sekarang</span>\n              </div>\n            </form>\n          </div>\n      </ion-row>  \n    </ion-grid>\n\n        <div class=\"lower-content\">\n          <ion-img src=\"../../assets/icon/ketengah.png\" style=\"width: 46.51px;height: 61px;margin-left: auto;\n          margin-right: auto;padding-bottom: 10px;\"></ion-img>\n          <div class=\"ketengahword\">LEMBAGA KEMAJUAN TERENGGANU TENGAH</div>\n        </div>\n        \n  </div>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map