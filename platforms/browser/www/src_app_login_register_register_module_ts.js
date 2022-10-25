(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_login_register_register_module_ts"],{

/***/ 57406:
/*!***********************************************************!*\
  !*** ./src/app/login/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 27348);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 41408:
/*!***************************************************!*\
  !*** ./src/app/login/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 57406);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 27348);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);








function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 27348:
/*!*************************************************!*\
  !*** ./src/app/login/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 81145);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 25408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth/authentication.service */ 33439);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);








let RegisterPage = class RegisterPage {
    constructor(router, fb, authService, alertController, loadingController) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.showPass = true;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            no_telefon: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(9)]],
            no_ic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(12)]],
            alamat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            poskod: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            bandar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            negeri: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    ionViewDidEnter() {
        this.registerForm.reset();
    }
    back() {
        this.router.navigate(['/login']);
    }
    daftar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.register(this.registerForm.value).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                this.router.navigate(['/login']);
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Register failed',
                    message: res.message,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
    login() {
        this.router.navigate(['/login']);
    }
    numericOnly(event) {
        let pattern = /^([0-9])$/;
        let result = pattern.test(event.key);
        return result;
    }
    hideShowPassword() {
        this.showPass = !this.showPass;
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



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

/***/ 25408:
/*!***************************************************!*\
  !*** ./src/app/login/register/register.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 10px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding-top: 50px;\n  padding-bottom: 30px;\n}\n\n.boxwhite {\n  color: #3D2C7C;\n  padding: 25px 0px 0px 0px;\n  font-size: 16px;\n  width: 80%;\n  margin: auto;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n  color: #FFFFFF;\n}\n\n.bottomword {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #494949;\n  text-align: center;\n  padding: 20px 0px;\n}\n\n.validator {\n  color: red;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  padding: 5px 0px;\n  width: 80%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFBSiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZzogNTBweCAxMHB4IDIwcHggMTBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xufVxuXG4uY29udGFpbmVyMyB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5ib3h3aGl0ZSB7XG4gICAgY29sb3I6ICMzRDJDN0M7XG4gICAgcGFkZGluZzogMjVweCAwcHggMHB4IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46YXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMkM3QztcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5ib3R0b213b3JkIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICAgIC8vIHBhZGRpbmc6MTVweCAzMHB4IDBweCAzMHB4O1xufVxuXG4udmFsaWRhdG9yIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOmF1dG87XG59Il19 */");

/***/ }),

/***/ 81145:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/register/register.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container2\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">Pendaftaran</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container3\">\n      <div class=\"boxgrey\">\n        <div class=\"tetapanword\">Daftar Akaun</div>\n      </div>\n      <form [formGroup]=\"registerForm\">\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          Nama Penuh <br>\n          <ion-input type=\"text\" class=\"input\" placeholder=\"Masukkan Nama Penuh Anda\" clearInput formControlName=\"name\"></ion-input>\n        </div>\n        <div *ngIf=\"!registerForm.controls.name.valid && registerForm.controls.name.dirty\" class=\"validator\">\n          Nama Penuh Diperlukan.\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          Nombor Telefon <br>\n          <ion-input type=\"tel\" maxlength=\"9\" class=\"input\" placeholder=\"000000000\" clearInput formControlName=\"no_telefon\" (keypress)=\"numericOnly($event)\">+60 </ion-input>\n        </div>\n        <div *ngIf=\"!registerForm.controls.no_telefon.valid && registerForm.controls.no_telefon.dirty\" class=\"validator\">\n          Nombor Telefon Yang Sah Diperlukan.\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          Nombor Kad Pengenalan <br>\n          <ion-input type=\"tel\" maxlength=\"12\" class=\"input\" placeholder=\"000000000000\" clearInput formControlName=\"no_ic\" (keypress)=\"numericOnly($event)\"></ion-input>\n        </div>\n        <div *ngIf=\"!registerForm.controls.no_ic.valid && registerForm.controls.no_ic.dirty\" class=\"validator\">\n          No Kad Pengenalan Yang Sah Diperlukan.\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          Alamat <br>\n          <ion-input type=\"text\" class=\"input\" placeholder=\"Masukkan Alamat Rumah Anda\" clearInput formControlName=\"alamat\"></ion-input>\n        </div>\n        <div *ngIf=\"!registerForm.controls.alamat.valid && registerForm.controls.alamat.dirty\" class=\"validator\">\n          Alamat Diperlukan.\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          Poskod <br>\n          <ion-input type=\"tel\" maxlength=\"5\" class=\"input\" placeholder=\"00000\" clearInput formControlName=\"poskod\" (keypress)=\"numericOnly($event)\"></ion-input>\n        </div>\n        <div *ngIf=\"!registerForm.controls.poskod.valid && registerForm.controls.poskod.dirty\" class=\"validator\">\n          Poskod Diperlukan.\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          Bandar <br>\n          <ion-input type=\"text\" class=\"input\" placeholder=\"\" clearInput formControlName=\"bandar\"></ion-input>\n        </div>\n        <div *ngIf=\"!registerForm.controls.bandar.valid && registerForm.controls.bandar.dirty\" class=\"validator\">\n          Bandar Diperlukan.\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          Negeri <br>\n          <ion-input type=\"text\" class=\"input\" placeholder=\"\" clearInput formControlName=\"negeri\"></ion-input>\n        </div>\n        <div *ngIf=\"!registerForm.controls.negeri.valid && registerForm.controls.negeri.dirty\" class=\"validator\">\n          Negeri Diperlukan.\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          E-mel <br>\n          <ion-input type=\"text\" class=\"input\" placeholder=\"Masukkan E-mel Anda\" clearInput formControlName=\"email\"></ion-input>\n        </div>\n        <div *ngIf=\"!registerForm.controls.email.valid && registerForm.controls.email.dirty\" class=\"validator\">\n          Alamat Emel Yang Sah Diperlukan.\n        </div>\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\n          Kata Laluan <br>\n          <div style=\"width: 90%;display: inline-block;\">\n            <ion-input type=\"{{showPass ? 'password' : 'text' }}\" placeholder=\"Masukkan Kata Laluan Anda\" clearInput formControlName=\"password\"></ion-input>\n          </div>\n          <div style=\"width: 10%;display: inline-block;\" (click)='hideShowPassword()'>\n            <ion-icon style=\"float: right;\" name=\"{{showPass ? 'eye-outline' : 'eye-off-outline' }}\"></ion-icon>\n          </div>\n        </div>\n        <div *ngIf=\"!registerForm.controls.password.valid && registerForm.controls.password.dirty\" class=\"validator\">\n          Kata Laluan Diperlukan.\n        </div>\n        <div style=\"padding:35px 30px 0px 30px;\">\n          <button ion-button class=\"button\" [disabled]=\"!registerForm.valid\" (click)=\"daftar()\">Daftar</button>\n        </div>\n      </form>\n      <div class=\"bottomword\">\n        Sudah Mempunyai Akaun? <span style=\"font-weight:600;\" (click)=\"login()\">Log Masuk</span>\n      </div>\n    </div>  \n  </div>  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_register_register_module_ts.js.map