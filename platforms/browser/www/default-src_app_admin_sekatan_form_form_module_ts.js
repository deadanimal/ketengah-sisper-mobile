(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["default-src_app_admin_sekatan_form_form_module_ts"],{

/***/ 18861:
/*!***********************************************************!*\
  !*** ./src/app/admin/sekatan/form/form-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageRoutingModule": () => (/* binding */ FormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.page */ 45853);




const routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_0__.FormPage
    }
];
let FormPageRoutingModule = class FormPageRoutingModule {
};
FormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPageRoutingModule);



/***/ }),

/***/ 22754:
/*!***************************************************!*\
  !*** ./src/app/admin/sekatan/form/form.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "FormPageModule": () => (/* binding */ FormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-routing.module */ 18861);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page */ 45853);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ion2-calendar */ 18834);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let FormPageModule = class FormPageModule {
};
FormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _form_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            }),
            ion2_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule.forRoot({
                doneLabel: 'Save',
                closeIcon: true
            })
        ],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_1__.FormPage]
    })
], FormPageModule);



/***/ }),

/***/ 45853:
/*!*************************************************!*\
  !*** ./src/app/admin/sekatan/form/form.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPage": () => (/* binding */ FormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form.page.html */ 35458);
/* harmony import */ var _form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page.scss */ 76160);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modals/adminmenu/adminmenu.page */ 18037);
/* harmony import */ var src_app_shared_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/booking/booking.service */ 6659);
/* harmony import */ var src_app_shared_services_fasiliti_fasiliti_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/fasiliti/fasiliti.service */ 10419);
/* harmony import */ var _shared_services_dewan_dewan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/dewan/dewan.service */ 46725);
/* harmony import */ var _shared_services_lokasi_lokasi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/lokasi/lokasi.service */ 75836);













let FormPage = class FormPage {
    constructor(route, router, location, modalController, loadingController, lokasiService, alertController, dewanService, fasilitiService, bookingService, nativeStorage) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.lokasiService = lokasiService;
        this.alertController = alertController;
        this.dewanService = dewanService;
        this.fasilitiService = fasilitiService;
        this.bookingService = bookingService;
        this.nativeStorage = nativeStorage;
        this.caloption = {
            pickMode: 'range',
            title: 'RANGE',
            daysConfig: [],
        };
        this.cal = false;
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.src = this.router.getCurrentNavigation().extras.state.source;
                console.log(this.src);
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then((data) => {
                this.user = data.value;
            }, (error) => console.error(error));
            yield loading.dismiss();
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.lokasiService.getdd().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.ddTempat = res;
                if (this.src == 1) {
                    this.ddTempat = [
                        {
                            id: 1,
                            nama: 'Al Muktafi Billah Shah',
                        },
                    ];
                    yield this.fasilitiService.getfutsal().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        console.log(res);
                        this.listfutsal = res;
                    }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
                else if (this.src == 2) {
                    yield this.fasilitiService.getbadminton().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        console.log(res);
                        this.listbadminton = res;
                    }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
                else if (this.src == 3) {
                    yield this.dewanService.getdd().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                        console.log(res);
                        this.listdewan = res;
                    }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
                yield this.bookingService.get().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    this.listbooking = res;
                    yield loading.dismiss();
                }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    yield loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: 'Loading failed',
                        message: res.message,
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }));
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    adminmenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_3__.AdminmenuPage,
                cssClass: 'menu-modal',
                backdropDismiss: true,
            });
            return yield modal.present();
        });
    }
    ChangeDDLokasi() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.ddGelanggang = [];
            var array = [];
            var val = this.lokasi;
            console.log(val);
            if (this.src == 1) {
                yield this.listfutsal.forEach(function (value) {
                    if (value.lokasi == val) {
                        array.push(value);
                    }
                });
            }
            else if (this.src == 2) {
                yield this.listbadminton.forEach(function (value) {
                    if (value.lokasi == val) {
                        array.push(value);
                    }
                });
            }
            else if (this.src == 3) {
                yield this.listdewan.forEach(function (value) {
                    if (value.lokasi == val) {
                        array.push(value);
                    }
                });
            }
            this.ddGelanggang = array;
        });
    }
    ChangeDDDewan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var opt = [];
            var gelanggang = this.gelanggang;
            var src = this.src;
            yield this.listbooking.forEach(function (value) {
                if (src == 1) {
                    if (value.ft_court_id == gelanggang) {
                        var obj = {};
                        obj.date = new Date(value.date_from);
                        obj.disable = true;
                        opt.push(obj);
                        var dateday = obj['date'];
                        console.log(opt);
                        for (let i = 1; i < value.days; i++) {
                            var obj = {};
                            dateday = new Date(dateday).getTime() + 1000 * 60 * 60 * 24;
                            var newdate = new Date(dateday);
                            obj.date = newdate;
                            obj.disable = true;
                            opt.push(obj);
                        }
                    }
                }
                else if (src == 2) {
                    if (value.bd_court_id == gelanggang) {
                        var obj = {};
                        obj.date = new Date(value.date_from);
                        obj.disable = true;
                        opt.push(obj);
                        var dateday = obj['date'];
                        console.log(opt);
                        for (let i = 1; i < value.days; i++) {
                            var obj = {};
                            dateday = new Date(dateday).getTime() + 1000 * 60 * 60 * 24;
                            var newdate = new Date(dateday);
                            obj.date = newdate;
                            obj.disable = true;
                            opt.push(obj);
                        }
                    }
                }
                else if (src == 3) {
                    if (value.dewan_id == gelanggang) {
                        var obj = {};
                        obj.date = new Date(value.date_from);
                        obj.disable = true;
                        opt.push(obj);
                        var dateday = obj['date'];
                        console.log(opt);
                        for (let i = 1; i < value.days; i++) {
                            var obj = {};
                            dateday = new Date(dateday).getTime() + 1000 * 60 * 60 * 24;
                            var newdate = new Date(dateday);
                            obj.date = newdate;
                            obj.disable = true;
                            opt.push(obj);
                        }
                    }
                }
            });
            this.caloption.daysConfig = opt;
            console.log(this.caloption);
            if (this.cal == true) {
                this.cal = false;
            }
        });
    }
    opencal() {
        if (this.cal == true) {
            this.cal = false;
        }
        else {
            this.cal = true;
        }
    }
    ChangeDDTarikh() { }
    pilihcal() {
        console.log(this.date);
        if (this.cal == true) {
            this.cal = false;
        }
        else {
            this.cal = true;
        }
        const fromdate = new Date(this.date.from);
        const todate = new Date(this.date.to);
        if (fromdate.getTime() == todate.getTime()) {
            this.days = 1;
        }
        else {
            var diff = Math.abs(todate.getTime() - fromdate.getTime());
            this.days = Math.ceil(diff / (1000 * 3600 * 24)) + 1;
        }
        this.dispTarikh =
            fromdate.getDate() +
                '/' +
                fromdate.getMonth() +
                '/' +
                fromdate.getFullYear() +
                ' - ' +
                todate.getDate() +
                '/' +
                todate.getMonth() +
                '/' +
                todate.getFullYear();
    }
    hantar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            var harga = 0;
            const formData = new FormData();
            formData.append('user_id', this.user.admin_id);
            if (this.src == 1) {
                formData.append('futsal', this.gelanggang);
            }
            else if (this.src == 2) {
                formData.append('badminton', this.gelanggang);
            }
            else if (this.src == 3) {
                formData.append('dewan', this.gelanggang);
            }
            else {
                this.alerterror('Error');
            }
            if (this.date == undefined) {
                yield loading.dismiss();
                this.alerterror('Tarikh diperlukan');
            }
            formData.append('tarikh_mula', this.date.from);
            formData.append('tarikh_akhir', this.date.to);
            formData.append('days', this.days);
            yield this.bookingService.add(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.clearform();
                yield loading.dismiss();
                this.router.navigate(['/main/admin/sekatan']);
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    alerterror(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Loading failed',
                message: msg,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    clearform() {
        this.lokasi = '';
        this.src = '';
        this.gelanggang = '';
        this.dispTarikh = '';
        this.date = '';
    }
};
FormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _shared_services_lokasi_lokasi_service__WEBPACK_IMPORTED_MODULE_7__.LokasiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _shared_services_dewan_dewan_service__WEBPACK_IMPORTED_MODULE_6__.DewanService },
    { type: src_app_shared_services_fasiliti_fasiliti_service__WEBPACK_IMPORTED_MODULE_5__.FasilitiService },
    { type: src_app_shared_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__.BookingService },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeStorage }
];
FormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-form',
        template: _raw_loader_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormPage);



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

/***/ 46725:
/*!********************************************************!*\
  !*** ./src/app/shared/services/dewan/dewan.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DewanService": () => (/* binding */ DewanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let DewanService = class DewanService {
    constructor(http) {
        this.http = http;
    }
    getdd() {
        var LokasiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "dewan";
        return this.http.get(LokasiURL);
    }
};
DewanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DewanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DewanService);



/***/ }),

/***/ 10419:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/fasiliti/fasiliti.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FasilitiService": () => (/* binding */ FasilitiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);





let FasilitiService = class FasilitiService {
    constructor(http) {
        this.http = http;
        this.rates = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    }
    getfutsal() {
        var AlatanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "futsal";
        return this.http.get(AlatanURL);
    }
    getbadminton() {
        var AlatanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "badminton";
        return this.http.get(AlatanURL);
    }
    getFasilities() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "fasiliti";
        return this.http.get(url);
    }
};
FasilitiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
FasilitiService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FasilitiService);



/***/ }),

/***/ 75836:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/lokasi/lokasi.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LokasiService": () => (/* binding */ LokasiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let LokasiService = class LokasiService {
    constructor(http) {
        this.http = http;
    }
    getdd() {
        var LokasiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "lokasi";
        return this.http.get(LokasiURL);
    }
};
LokasiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LokasiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LokasiService);



/***/ }),

/***/ 76160:
/*!***************************************************!*\
  !*** ./src/app/admin/sekatan/form/form.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 60px 0px;\n  text-align: left;\n}\n\n.headertxt2 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 22px;\n  color: #FFFFFF;\n  display: block;\n  text-align: center;\n  width: 100%;\n  padding-left: 10px;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding: 10px 0px;\n}\n\n.select {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949 !important;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0ZBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJmb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHggMjBweCAxMHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG59XG5cbi5jb250YWluZXIzIHtcbiAgICBwYWRkaW5nOiA2MHB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVhZGVydHh0MiB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5sYWJlbCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojNDk0OTQ5ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QyQzdDO1xuICAgIGJvcmRlcjogMXB0IHNvbGlkICMzRDJDN0M7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xufSJdfQ== */");

/***/ }),

/***/ 35458:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sekatan/form/form.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container2\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">{{ 'sekatan.tarikh' | translate }}</span>\n        <span *ngIf=\"src == 1\" class=\"headertxt2\">({{ 'sekatan.futsal' | translate }})</span>\n        <span *ngIf=\"src == 2\" class=\"headertxt2\">({{ 'sekatan.badminton' | translate }})</span>\n        <span *ngIf=\"src == 3\" class=\"headertxt2\">({{ 'tempat_kemudahan.dewan' | translate }})</span>\n        <ion-img src=\"../../assets/icon/adminmenu.png\" style=\"position: absolute;top: 50px;right: 20px;\" class=\"iconnoti\" (click)=\"adminmenu()\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\" style=\"margin-top: -40px;\">\n    <div class=\"container3\">\n      <div style=\"padding:0px 40px;\">\n        <div class=\"label\">{{ 'sekatan.tempat' | translate }}</div>\n        <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" placeholder=\"{{ 'sekatan.placetempat' | translate }}\" [(ngModel)]=\"lokasi\" (ionChange)=\"ChangeDDLokasi()\">\n          <ion-select-option *ngFor=\"let tempat of ddTempat; let i = index\" [value]=\"tempat.id\">\n            {{tempat.nama}}\n          </ion-select-option>\n        </ion-select>\n        <div style=\"height: 20px;\"></div>\n        <div *ngIf=\"src != 3\" class=\"label\">{{ 'fasiliti.gelanggang' | translate }}</div>\n        <div *ngIf=\"src == 3\" class=\"label\">{{ 'tempat_kemudahan.dewan' | translate }}</div>\n        <!-- <input class=\"select\" placeholder=\"{{ 'dewan.placedewan' | translate }}\"> -->\n        <ion-select *ngIf=\"src != 3\" okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" placeholder=\"{{ 'sekatan.placegelanggang' | translate }}\" [(ngModel)]=\"gelanggang\" (ionChange)=\"ChangeDDDewan()\">\n          <ion-select-option *ngFor=\"let dewan of ddGelanggang; let i = index\" [value]=\"dewan.id\">\n            {{dewan.nama_gelanggang}}\n          </ion-select-option>\n        </ion-select>\n        <ion-select *ngIf=\"src == 3\" okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" placeholder=\"{{ 'dewan.placedewan' | translate }}\" [(ngModel)]=\"gelanggang\" (ionChange)=\"ChangeDDDewan()\">\n          <ion-select-option *ngFor=\"let dewan of ddGelanggang; let i = index\" [value]=\"dewan.id\">\n            {{dewan.nama}}\n          </ion-select-option>\n        </ion-select>\n        <div style=\"height: 10px;\"></div>\n        <div class=\"label\">{{ 'dewan.tarikh' | translate }}.</div>\n        <input class=\"select\" placeholder=\"00/00/0000 - 00/00/0000\" (click)=\"opencal()\" (ionChange)=\"ChangeDDTarikh()\" [(ngModel)]=\"dispTarikh\">\n        <div *ngIf=\"cal==true\" style=\"text-align: center;padding-top: 10px;\">\n          <ion-calendar [options]=\"caloption\" type=\"string\" [(ngModel)]=\"date\"></ion-calendar>\n          <button class=\"button\" style=\"width:60%\" (click)=\"pilihcal()\">Pilih</button>\n        </div>\n        <div style=\"height: 40px;\"></div>\n        <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'hantar' | translate }}</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_sekatan_form_form_module_ts.js.map