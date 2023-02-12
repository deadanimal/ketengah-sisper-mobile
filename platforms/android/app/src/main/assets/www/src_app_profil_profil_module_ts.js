(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_profil_profil_module_ts"],{

/***/ 2602:
/*!*************************************************!*\
  !*** ./src/app/profil/profil-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPageRoutingModule": () => (/* binding */ ProfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil.page */ 69014);




const routes = [
    {
        path: '',
        component: _profil_page__WEBPACK_IMPORTED_MODULE_0__.ProfilPage
    }
];
let ProfilPageRoutingModule = class ProfilPageRoutingModule {
};
ProfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilPageRoutingModule);



/***/ }),

/***/ 48718:
/*!*****************************************!*\
  !*** ./src/app/profil/profil.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "ProfilPageModule": () => (/* binding */ ProfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-routing.module */ 2602);
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil.page */ 69014);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let ProfilPageModule = class ProfilPageModule {
};
ProfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profil_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_profil_page__WEBPACK_IMPORTED_MODULE_1__.ProfilPage]
    })
], ProfilPageModule);



/***/ }),

/***/ 69014:
/*!***************************************!*\
  !*** ./src/app/profil/profil.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPage": () => (/* binding */ ProfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profil.page.html */ 35519);
/* harmony import */ var _profil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil.page.scss */ 76405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth/authentication.service */ 33439);
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user/user.service */ 34758);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);











let ProfilPage = class ProfilPage {
    constructor(location, router, fb, authService, userService, alertController, loadingController, nativeStorage) {
        this.location = location;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.userService = userService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.nativeStorage = nativeStorage;
        this.showPass = true;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.bilakaun = 0;
            this.nativeStorage.getItem('user').then(data => {
                console.log('user', data);
                this.username = data.value.name;
                this.nokp = data.value.no_ic;
                this.userid = data.value.user_id;
                this.email = data.value.email;
                this.nohp = data.value.no_telefon;
                this.pass = data.value.password;
                data.value.perumahan.forEach(element => {
                    this.bilakaun++;
                });
                data.value.premis.forEach(element => {
                    this.bilakaun++;
                });
            }, error => console.error(error));
        });
    }
    back() {
        this.location.back();
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.logout().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                this.router.navigate(['/login']);
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
            // this.router.navigate(['/login']);
        });
    }
    lupapass() {
        this.router.navigate(['/forgotpass']);
    }
    save(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            var data = '';
            var validation = true;
            var id = this.userid;
            if (type == 'email') {
                data = this.email;
                if (data.includes('@') == true) {
                    validation = true;
                }
                else {
                    validation = false;
                }
            }
            else if (type == 'nohp') {
                data = this.nohp;
            }
            else if (type == 'pass') {
                data = this.pass;
            }
            console.log(validation);
            if (data == '' || validation == false) {
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Update failed',
                    message: 'Sila Isi Maklumat Yang Sah',
                    buttons: ['OK'],
                });
                yield alert.present();
            }
            else {
                this.userService.update(type, data, id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    res.role = 1;
                    this.nativeStorage.setItem('user', { value: res });
                    yield loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: 'Berjaya',
                        message: 'Maklumat Berjaya Dikemaskini',
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    yield loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: 'Update failed',
                        message: res.message,
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }));
            }
        });
    }
    hideShowPassword() {
        this.showPass = !this.showPass;
    }
    numericOnly(event) {
        let pattern = /^([0-9])$/;
        let result = pattern.test(event.key);
        return result;
    }
    akauan() {
        let navigationExtras = {
            state: {
                src: 1
            }
        };
        this.router.navigate(['main'], navigationExtras);
    }
};
ProfilPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _shared_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeStorage }
];
ProfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-profil',
        template: _raw_loader_profil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilPage);



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

/***/ 76405:
/*!*****************************************!*\
  !*** ./src/app/profil/profil.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n}\n\n.boxwhite {\n  color: #3D2C7C;\n  padding: 25px 0px 0px 0px;\n  font-size: 16px;\n  width: 80%;\n  margin: auto;\n}\n\n.input {\n  color: black;\n  display: inline-block;\n  width: 70%;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 70%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.button2 {\n  background-color: white;\n  color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 70%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6InByb2ZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIC8vIGhlaWdodDogNjUwcHg7XHJcbn1cclxuXHJcbi5ib3h3aGl0ZSB7XHJcbiAgICBjb2xvcjogIzNEMkM3QztcclxuICAgIHBhZGRpbmc6IDI1cHggMHB4IDBweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XHJcbiAgICBib3JkZXI6IDFwdCBzb2xpZCAjM0QyQzdDO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxufVxyXG5cclxuLmJ1dHRvbjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGNvbG9yOiAjM0QyQzdDO1xyXG4gICAgYm9yZGVyOiAxcHQgc29saWQgIzNEMkM3QztcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 35519:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profil/profil.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">{{ 'profile.profile' | translate }}</span>\r\n      </div>\r\n      <div style=\"padding-top: 40px;\">\r\n        <ion-img src=\"../../assets/icon/profilepage.png\" class=\"icontetapan\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container2\">\r\n      <div class=\"boxgrey\">\r\n        <div class=\"tetapanword\">{{ 'home.akaun-saya' | translate }}</div>\r\n      </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'profile.nama' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [(ngModel)]=\"username\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'profile.nokp' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [(ngModel)]=\"nokp\"></ion-input>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'profile.emel' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" [(ngModel)]=\"email\"></ion-input><span style=\"width: 30%;\" (click)=\"save('email')\">Kemaskini</span>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'profile.notel' | translate }} <br>\r\n          +60 <ion-input type=\"tel\" maxlength=\"9\" class=\"input\" style=\"width: 60%;\" [(ngModel)]=\"nohp\" (keypress)=\"numericOnly($event)\"></ion-input>\r\n          <span style=\"width: 30%;\" (click)=\"save('nohp')\">Kemaskini</span>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'profile.pass' | translate }} <span style=\"width: 20px;\"></span> <ion-icon (click)='hideShowPassword()' name=\"{{showPass ? 'eye-outline' : 'eye-off-outline' }}\"></ion-icon><br>\r\n          <ion-input type=\"{{showPass ? 'password' : 'text' }}\" class=\"input\" [(ngModel)]=\"pass\"></ion-input>\r\n          <span style=\"width: 30%;\" (click)=\"save('pass')\">Kemaskini</span>\r\n        </div>\r\n        <div class=\"boxwhite\" style=\"border-bottom: 0.7px solid #E8E8E8\">\r\n          {{ 'profile.akaun' | translate }} <br>\r\n          <ion-input type=\"text\" class=\"input\" readonly [(ngModel)]=\"bilakaun\"></ion-input><span style=\"width: 30%;\" (click)=\"akauan()\">Kemaskini</span>\r\n        </div>\r\n        <div style=\"padding:50px 0px 20px 0px;text-align: center;\">\r\n          <!-- <button ion-button class=\"button2\" (click)=\"lupapass()\">{{ 'profile.lupakatalaluan' | translate }}</button> -->\r\n          <div style=\"height: 10px;\"></div>\r\n          <button ion-button class=\"button\" (click)=\"logout()\">{{ 'logout' | translate }}</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profil_profil_module_ts.js.map