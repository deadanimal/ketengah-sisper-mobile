(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_tempahkemudahan_alatan_alatan_module_ts"],{

/***/ 65100:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/alatan/alatan.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlatanService": () => (/* binding */ AlatanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let AlatanService = class AlatanService {
    constructor(http) {
        this.http = http;
    }
    getdd() {
        var AlatanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "alatan";
        return this.http.get(AlatanURL);
    }
};
AlatanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AlatanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AlatanService);



/***/ }),

/***/ 6659:
/*!************************************************************!*\
  !*** ./src/app/shared/services/booking/booking.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingService": () => (/* binding */ BookingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let BookingService = class BookingService {
    constructor(http) {
        this.http = http;
    }
    add(data) {
        var AddbookingURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "booking";
        return this.http.post(AddbookingURL, data);
    }
    get() {
        var BookingURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "booking";
        return this.http.get(BookingURL);
    }
    getuser(id) {
        var BookingURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "booking/" + id;
        return this.http.get(BookingURL);
    }
    getgraf() {
        var BookingURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "grafbook";
        return this.http.get(BookingURL);
    }
};
BookingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
BookingService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], BookingService);



/***/ }),

/***/ 64573:
/*!*****************************************************************!*\
  !*** ./src/app/tempahkemudahan/alatan/alatan-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlatanPageRoutingModule": () => (/* binding */ AlatanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _alatan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alatan.page */ 34330);




const routes = [
    {
        path: '',
        component: _alatan_page__WEBPACK_IMPORTED_MODULE_0__.AlatanPage
    }
];
let AlatanPageRoutingModule = class AlatanPageRoutingModule {
};
AlatanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlatanPageRoutingModule);



/***/ }),

/***/ 74295:
/*!*********************************************************!*\
  !*** ./src/app/tempahkemudahan/alatan/alatan.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AlatanPageModule": () => (/* binding */ AlatanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _alatan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alatan-routing.module */ 64573);
/* harmony import */ var _alatan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alatan.page */ 34330);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ion2-calendar */ 18834);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_3__);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

let AlatanPageModule = class AlatanPageModule {
};
AlatanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _alatan_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlatanPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            }),
            ion2_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule.forRoot({
                doneLabel: 'Save',
                closeIcon: true
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_alatan_page__WEBPACK_IMPORTED_MODULE_1__.AlatanPage]
    })
], AlatanPageModule);



/***/ }),

/***/ 34330:
/*!*******************************************************!*\
  !*** ./src/app/tempahkemudahan/alatan/alatan.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlatanPage": () => (/* binding */ AlatanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_alatan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alatan.page.html */ 43615);
/* harmony import */ var _alatan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alatan.page.scss */ 47212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_shared_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/booking/booking.service */ 6659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_alatan_alatan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/alatan/alatan.service */ 65100);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);











let AlatanPage = class AlatanPage {
    constructor(location, loadingController, alertController, fb, alatanService, bookingService, router, nativeStorage) {
        this.location = location;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.fb = fb;
        this.alatanService = alatanService;
        this.bookingService = bookingService;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.masablock = false;
        this.cal = false;
        this.caloption = {
            pickMode: 'range',
            title: 'RANGE',
            daysConfig: [],
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.TarikhVal = new Date();
            this.TarikhVal = this.TarikhVal.toISOString().split('T')[0];
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then((data) => {
                this.user = data.value;
            }, (error) => console.error(error));
            yield loading.dismiss();
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.QtyVal = 0;
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.alatanService.getdd().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.ddAlatan = res;
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
    back() {
        this.location.back();
    }
    openCal() {
        if (this.cal == true) {
            this.cal = false;
        }
        else {
            this.cal = true;
        }
    }
    pilihCal() {
        console.log(this.date);
        if (this.cal === true) {
            this.cal = false;
        }
        else {
            this.cal = true;
        }
        const fromdate = new Date(this.date);
        this.masablock = true;
        this.days = 1;
        let date;
        // this.TarikhVal = fromdate.getDate() + '/' + fromdate.getMonth() + '/' + fromdate.getFullYear();
        //if date or month is single digit, add 0 in front
        if (fromdate.getDate() < 10) {
            console.log(date);
            date = '0' + fromdate.getDate();
        }
        else {
            date = fromdate.getDate();
        }
        let month;
        if (fromdate.getMonth() < 10) {
            month = '0' + fromdate.getMonth();
        }
        else {
            month = fromdate.getMonth();
        }
        const year = fromdate.getFullYear();
        this.TarikhVal = year + '/' + month + '/' + date;
        console.log(this.TarikhVal);
    }
    increment() {
        this.QtyVal++;
    }
    decrement() {
        this.QtyVal--;
    }
    hantar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            var harga = 0;
            var alatan = this.Alatan;
            this.ddAlatan.forEach(function (value) {
                if (value.id == alatan) {
                    harga = value.harga;
                    return;
                }
            });
            this.amaun = harga * this.days * this.QtyVal;
            const formData = new FormData();
            formData.append('user_id', this.user.user_id);
            formData.append('alatan', this.Alatan);
            if (this.date == undefined) {
                yield loading.dismiss();
                this.alerterror('Tarikh diperlukan');
            }
            formData.append('tarikh_mula', this.date.from);
            formData.append('tarikh_akhir', this.date.to);
            formData.append('days', this.days);
            formData.append('amaun', this.amaun);
            formData.append('qty', this.QtyVal);
            yield this.bookingService.add(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.clearform();
                yield loading.dismiss();
                var arr = [];
                var akaun = {};
                console.log(res);
                akaun = {
                    id: '',
                    amaun: this.amaun,
                    kodbayaran: 'ALT' + res.id,
                };
                arr.push(akaun);
                var data = {
                    src: 2,
                    jumlah: this.amaun,
                    jumcount: 1,
                    akaun: arr,
                };
                let navigationExtras = {
                    state: {
                        data: data,
                    },
                };
                this.router.navigate(['main/tabs/bayaran'], navigationExtras);
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
    clearform() {
        this.Alatan = '';
        this.QtyVal = 0;
        this.TarikhVal = '';
        this.date = '';
    }
    alerterror(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Loading failed',
                message: msg,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    appendChar(num) {
        if (num < 10) {
            return `0${num}`;
        }
        else {
            return num;
        }
    }
};
AlatanPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_shared_services_alatan_alatan_service__WEBPACK_IMPORTED_MODULE_3__.AlatanService },
    { type: src_app_shared_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_2__.BookingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeStorage }
];
AlatanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-alatan',
        template: _raw_loader_alatan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alatan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlatanPage);



/***/ }),

/***/ 47212:
/*!*********************************************************!*\
  !*** ./src/app/tempahkemudahan/alatan/alatan.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 30px;\n  height: 650px;\n  text-align: center;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding: 10px 0px;\n}\n\n.select {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949 !important;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.small {\n  display: inline-block;\n  height: 45px;\n  width: 45px;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 20px;\n  background-color: #EBEBEF;\n  color: #494949;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYXRhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxvRkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiYWxhdGFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojNDk0OTQ5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAtNHB4IC00cHggOXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgNHB4IDRweCAxNHB4ICNDNUQ3RUU7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XHJcbiAgICBib3JkZXI6IDFwdCBzb2xpZCAjM0QyQzdDO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbn1cclxuXHJcbi5zbWFsbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFRjtcclxuICAgIGNvbG9yOiAjNDk0OTQ5OztcclxufSJdfQ== */");

/***/ }),

/***/ 43615:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tempahkemudahan/alatan/alatan.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">\r\n          <div style=\"width:100px;margin: auto;\">\r\n            {{ 'dewan.tempah' | translate }}<br>({{ 'alatan.alatan' | translate }})</div>\r\n        </span>\r\n      </div>\r\n      <div style=\"padding-top: 40px;\">\r\n        <ion-img src=\"../../assets/icon/alatanHead.png\" class=\"icontetapan\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container2\">\r\n      <div style=\"padding:0px 40px;\">\r\n        <div class=\"label\">{{ 'alatan.alatan' | translate }}.</div>\r\n        <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\"\r\n          placeholder=\"{{ 'alatan.placealatan' | translate }}\" [(ngModel)]=\"Alatan\">\r\n          <ion-select-option *ngFor=\"let alatan of ddAlatan; let i = index\" [value]=\"alatan.id\">\r\n            {{alatan.nama_alatan}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <div style=\"height: 20px;\"></div>\r\n        <div class=\"label\">{{ 'alatan.kuantiti' | translate }}.</div>\r\n        <button class=\"small\" (click)=\"decrement()\"> - </button>\r\n        <ion-input [value]=\"date |date: 'yyyy-MM-dd ' \" class=\"select\"\r\n          style=\"display: inline-block;width: 50%;text-align: center;\" type=\"number\" [(ngModel)]=\"QtyVal\"\r\n          readonly=\"true\"></ion-input>\r\n        <button class=\"small\" (click)=\"increment()\"> + </button>\r\n        <div style=\"height: 20px;\"></div>\r\n        <div class=\"label\">{{ 'alatan.tarikh' | translate }}.</div>\r\n        <input class=\"select\" [value]=\"date |date: 'yyyy-MM-dd ' \" (focus)=\"openCal()\" [(ngModel)]=\"TarikhVal\">\r\n        <div *ngIf=\"cal==true\" style=\"text-align: center;padding-top: 10px;\">\r\n          <ion-calendar [options]=\"caloption\" type=\"string\" [(ngModel)]=\"date\"></ion-calendar>\r\n          <button class=\"button\" style=\"width:60%\" (click)=\"pilihCal()\">Pilih</button>\r\n        </div>\r\n        <div style=\"height: 40px;\"></div>\r\n        <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'hantar' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tempahkemudahan_alatan_alatan_module_ts.js.map