(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_tempahkemudahan_dewan_dewan_module_ts"],{

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

/***/ 65461:
/*!***************************************************************!*\
  !*** ./src/app/tempahkemudahan/dewan/dewan-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DewanPageRoutingModule": () => (/* binding */ DewanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dewan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dewan.page */ 11061);




const routes = [
    {
        path: '',
        component: _dewan_page__WEBPACK_IMPORTED_MODULE_0__.DewanPage
    }
];
let DewanPageRoutingModule = class DewanPageRoutingModule {
};
DewanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DewanPageRoutingModule);



/***/ }),

/***/ 24574:
/*!*******************************************************!*\
  !*** ./src/app/tempahkemudahan/dewan/dewan.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "DewanPageModule": () => (/* binding */ DewanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dewan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dewan-routing.module */ 65461);
/* harmony import */ var _dewan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dewan.page */ 11061);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ion2-calendar */ 18834);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let DewanPageModule = class DewanPageModule {
};
DewanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _dewan_routing_module__WEBPACK_IMPORTED_MODULE_0__.DewanPageRoutingModule,
            ion2_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule.forRoot({
                doneLabel: 'Save',
                closeIcon: true
            }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            }),
        ],
        declarations: [_dewan_page__WEBPACK_IMPORTED_MODULE_1__.DewanPage]
    })
], DewanPageModule);



/***/ }),

/***/ 11061:
/*!*****************************************************!*\
  !*** ./src/app/tempahkemudahan/dewan/dewan.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DewanPage": () => (/* binding */ DewanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dewan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dewan.page.html */ 82283);
/* harmony import */ var _dewan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dewan.page.scss */ 98682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_services_lokasi_lokasi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/lokasi/lokasi.service */ 75836);
/* harmony import */ var _shared_services_dewan_dewan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/dewan/dewan.service */ 46725);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_shared_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/booking/booking.service */ 6659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);












let DewanPage = class DewanPage {
    constructor(location, pickerController, loadingController, lokasiService, alertController, dewanService, fb, modalController, bookingService, router, nativeStorage) {
        this.location = location;
        this.pickerController = pickerController;
        this.loadingController = loadingController;
        this.lokasiService = lokasiService;
        this.alertController = alertController;
        this.dewanService = dewanService;
        this.fb = fb;
        this.modalController = modalController;
        this.bookingService = bookingService;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.caloption = {
            pickMode: 'range',
            title: 'RANGE',
            daysConfig: []
        };
        this.cal = false;
        this.divtime = 'from';
        this.timecheck = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.TarikhVal = new Date();
            this.TarikhVal = this.TarikhVal.toISOString().split('T')[0];
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.user = data.value;
                ;
            }, error => console.error(error));
            yield loading.dismiss();
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.masablock = false;
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.lokasiService.getdd().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                /* eslint-disable */ ;
                (oo_oo(), console.log(res, `5f22ab92_0`));
                this.ddLokasi = res;
                yield this.dewanService.getdd().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    /* eslint-disable */ ;
                    (oo_oo(), console.log(res, `5f22ab92_1`));
                    this.listdewan = res;
                    yield this.bookingService.get().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        /* eslint-disable */ ;
                        (oo_oo(), console.log(res, `5f22ab92_2`));
                        this.listbooking = res;
                        yield loading.dismiss();
                    }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        /* eslint-disable */ ;
                        (oo_oo(), console.log(res, `5f22ab92_3`));
                        yield loading.dismiss();
                        const alert = yield this.alertController.create({
                            header: 'Loading failed',
                            message: res.message,
                            buttons: ['OK'],
                        });
                        yield alert.present();
                    }));
                }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    /* eslint-disable */ ;
                    (oo_oo(), console.log(res, `5f22ab92_4`));
                    yield loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: 'Loading failed',
                        message: res.message,
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }));
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                /* eslint-disable */ ;
                (oo_oo(), console.log(res, `5f22ab92_5`));
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
    ChangeDDLokasi() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.ddDewan = [];
            var array = [];
            var val = this.Lokasi;
            /* eslint-disable */ ;
            (oo_oo(), console.log(val, `5f22ab92_6`));
            yield this.listdewan.forEach(function (value) {
                if (value.lokasi == val) {
                    array.push(value);
                }
            });
            this.ddDewan = array;
        });
    }
    ChangeDDDewan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.TarikhVal = '';
            this.masablock = false;
            this.timecheck = [];
            this.date = '';
            var opt = [];
            var dewan = this.Dewan;
            yield this.listbooking.forEach(function (value) {
                if (value.dewan_id == dewan) {
                    if (value.days > 1) {
                        var obj = {};
                        obj.date = new Date(value.date_from);
                        obj.disable = true;
                        opt.push(obj);
                        var dateday = obj['date'];
                        /* eslint-disable */ ;
                        (oo_oo(), console.log(opt, `5f22ab92_7`));
                        for (let i = 1; i < value.days; i++) {
                            var obj = {};
                            dateday = new Date(dateday).getTime() + (1000 * 60 * 60 * 24);
                            var newdate = new Date(dateday);
                            obj.date = newdate;
                            obj.disable = true;
                            opt.push(obj);
                        }
                    }
                }
            });
            this.caloption.daysConfig = opt;
            /* eslint-disable */ ;
            (oo_oo(), console.log(this.caloption, `5f22ab92_8`));
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
    pilihcal() {
        /* eslint-disable */ ;
        (oo_oo(), console.log(this.date, `5f22ab92_9`));
        if (this.cal == true) {
            this.cal = false;
        }
        else {
            this.cal = true;
        }
        const fromdate = new Date(this.date.from);
        const todate = new Date(this.date.to);
        if (fromdate.getTime() == todate.getTime()) {
            if (this.Lokasi == 1 && this.Dewan == 2) {
                this.masablock = true;
            }
            else {
                this.masablock = false;
            }
            this.days = 1;
        }
        else {
            this.masablock = false;
            var diff = Math.abs(todate.getTime() - fromdate.getTime());
            this.days = Math.ceil(diff / (1000 * 3600 * 24)) + 1;
        }
        this.TarikhVal = fromdate.getDate() + '/' + fromdate.getMonth() + '/' + fromdate.getFullYear() + ' - ' + todate.getDate() + '/' + todate.getMonth() + '/' + todate.getFullYear();
        this.ChangeDDTarikh();
    }
    hantar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            var harga = 0;
            var dewan = this.Dewan;
            this.listdewan.forEach(function (value) {
                if (value.id == dewan) {
                    harga = value.harga;
                    return;
                }
            });
            /* eslint-disable */ ;
            (oo_oo(), console.log(this.timecheck, `5f22ab92_10`));
            this.amaun = harga * this.days;
            /* eslint-disable */ ;
            (oo_oo(), console.log(this.amaun, `5f22ab92_11`));
            const formData = new FormData();
            formData.append('user_id', this.user.user_id);
            formData.append('dewan', this.Dewan);
            if (this.date == undefined) {
                yield loading.dismiss();
                this.alerterror('Tarikh diperlukan');
            }
            formData.append('tarikh_mula', this.date.from);
            formData.append('tarikh_akhir', this.date.to);
            formData.append('days', this.days);
            formData.append('masa', this.masa);
            formData.append('hour', this.hour);
            formData.append('amaun', this.amaun);
            yield this.bookingService.add(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                /* eslint-disable */ ;
                (oo_oo(), console.log(res, `5f22ab92_12`));
                this.clearform();
                yield loading.dismiss();
                var arr = [];
                var akaun = {};
                /* eslint-disable */ ;
                (oo_oo(), console.log(res, `5f22ab92_13`));
                akaun = {
                    "id": '',
                    "amaun": this.amaun,
                    "kodbayaran": "DWN" + res.id,
                };
                arr.push(akaun);
                var data = {
                    "src": 2,
                    "jumlah": this.amaun,
                    "jumcount": 1,
                    "akaun": arr
                };
                let navigationExtras = {
                    state: {
                        data: data
                    }
                };
                this.router.navigate(['main/tabs/bayaran'], navigationExtras);
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                /* eslint-disable */ ;
                (oo_oo(), console.log(res, `5f22ab92_14`));
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Loading failed',
                message: msg,
                buttons: ['OKAY'],
            });
            yield alert.present();
        });
    }
    clearform() {
        this.Lokasi = '';
        this.Dewan = '';
        this.TarikhVal = '';
        this.date = '';
        this.MasaVal = '';
    }
    ChangeMasa(time) {
        /* eslint-disable */ ;
        (oo_oo(), console.log(time, `5f22ab92_15`));
        var txt;
        var txt2;
        var temp = [];
        var add = true;
        for (let index = 0; index < 23; index++) {
            add = true;
            if (index < 10) {
                txt = "0" + index;
                txt2 = index + 1;
                if (index != 9) {
                    txt2 = "0" + txt2;
                }
            }
            else {
                txt = index;
                txt2 = index + 1;
            }
            let timelist;
            timelist = {
                val: index,
                text: txt + ":00 - " + txt2 + ":00",
                check: false
            };
            if (timelist.val >= 8) {
                if (timelist.val == 19) {
                    add = false;
                }
                time.forEach(function (value) {
                    if (value == index) {
                        add = false;
                    }
                });
            }
            else {
                add = false;
            }
            if (add == true) {
                temp.push(timelist);
            }
        }
        this.timecheck = temp;
        /* eslint-disable */ ;
        (oo_oo(), console.log(this.timecheck, `5f22ab92_16`));
    }
    ChangeDDTarikh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var dewan = this.Dewan;
            var date = this.date;
            var hari = this.days;
            var time = [];
            var alltime = [];
            var exist = 0;
            /* eslint-disable */ ;
            (oo_oo(), console.log(hari, `5f22ab92_17`));
            yield this.listbooking.forEach(function (value) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    /* eslint-disable */ ;
                    (oo_oo(), console.log(value, `5f22ab92_18`));
                    if (value.dewan_id == dewan) {
                        const fromdate = new Date(date.from);
                        var haribaru = new Date(fromdate.getTime());
                        if (value.days == 1) {
                            if (new Date(value.date_from).getTime() == haribaru.getTime()) {
                                var time = value.time.split(",");
                                yield time.forEach(function (value) {
                                    alltime.push(value);
                                });
                            }
                            for (let index = 1; index <= hari; index++) {
                                var tambah = index * (1000 * 60 * 60 * 24);
                                /* eslint-disable */ ;
                                (oo_oo(), console.log(new Date(value.date_from), `5f22ab92_19`));
                                /* eslint-disable */ ;
                                (oo_oo(), console.log(haribaru, `5f22ab92_20`));
                                if (new Date(value.date_from).getTime() == haribaru.getTime()) {
                                    /* eslint-disable */ ;
                                    (oo_oo(), console.log('jadi', `5f22ab92_21`));
                                    exist = 1;
                                    break;
                                }
                                haribaru = new Date(fromdate.getTime() + tambah);
                            }
                        }
                    }
                });
            });
            if (hari != 1) {
                if (exist == 1) {
                    this.alerterror('Tarikh Diplih Sudah Penuh, Sila Pilih Tarikh Lain.');
                    this.TarikhVal = '';
                    this.date = '';
                }
            }
            /* eslint-disable */ ;
            (oo_oo(), console.log('alltime', alltime, `5f22ab92_22`));
            this.ChangeMasa(alltime);
        });
    }
};
DewanPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PickerController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _shared_services_lokasi_lokasi_service__WEBPACK_IMPORTED_MODULE_2__.LokasiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _shared_services_dewan_dewan_service__WEBPACK_IMPORTED_MODULE_3__.DewanService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_shared_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__.BookingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__.NativeStorage }
];
DewanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-dewan',
        template: _raw_loader_dewan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dewan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DewanPage);

/* eslint-disable */ ;
function oo_oo() { try {
    (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x4b93(){var _0x278318=['_hasSymbolPropertyOnItsPath','_replacedLog','589230XryZwa','_addObjectProperty','substr','_getOwnPropertyNames','capped','props','_ws','method','_capIfString','_isPrimitiveWrapperType','autoExpandPreviousObjects','autoExpandPropertyCount','_objectToString','path','_allowedToSend','189668fuWQyR','[object\\x20Map]','elements','join','_propertyAccessor','WebSocket','_quotedRegExp','message','ws/index.js','_setNodeExpandableState','rootExpression','unref','symbol','1798119pETEVD','_setNodeQueryPath','Map','Error','_regExpToString','match','_connectToHost','process','root_exp','_isPrimitiveType','','positiveInfinity','failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','count','strLength','serialize','next.js','_isMap','perf_hooks','722967NqSGqK','5tBnkVm','function','_p_length','nodeModules','split','_p_','parent','onopen','type','pop','_Symbol','64160oWamGY','[object\\x20Date]','NEGATIVE_INFINITY','_p_name','location','date','3irVzGi','index','[object\\x20Array]','pathToFileURL','number','_socket','\\x20browser','hits','_setNodeId','getOwnPropertySymbols','concat','sortProps','autoExpand','string','send','root_exp_id','negativeInfinity','map','setter','getWebSocketClass','onerror','now','_setNodePermissions','cappedElements','reload','_connected','unknown','depth','_setNodeExpressionPath','__es'+'Module','_undefined','test','valueOf','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_allowedToConnectOnSend','1776800cVjrRI','autoExpandLimit','_cleanNode','_blacklistedProperty','constructor','getter','_connecting','_property','\\x20server','value','disabledLog','_HTMLAllCollection','noFunctions','_isNegativeZero','allStrLength','reduceLimits','level','Number','onmessage','onclose','null','_setNodeLabel','expressionsToEvaluate','object','data','create','127.0.0.1','_addFunctionsNode','length',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"LAPTOP-AFUR5RP2\"],'host','totalStrLength','349162yqDAFA','cappedProps','_getOwnPropertySymbols','bind','resolveGetters','_numberRegExp','unshift','global','isExpressionToEvaluate','indexOf','argumentResolutionError','node','get','_isSet','port','enumerable','warn','_additionalMetadata','_WebSocketClass','logger\\x20websocket\\x20error','_attemptToReconnect','funcName','getPrototypeOf','ws://','set','_reconnectTimeout','prototype','catch','_hasMapOnItsPath','_addProperty','name','webpack','failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','stringify','hasOwnProperty','console','Symbol','time','forEach','1675437479406','Boolean','failed\\x20to\\x20find\\x20WebSocket','getOwnPropertyDescriptor','default','POSITIVE_INFINITY','getOwnPropertyNames','includes','toLowerCase','HTMLAllCollection','replace','current','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_addLoadNode','_type','_console_ninja_session','_treeNodePropertiesBeforeFullValue','bigint','_sortProps','hostname','_inBrowser','call','toString','url','_keyStrRegExp','Set','...','_processTreeNodeResult','error','[object\\x20Set]','_propertyName','log','autoExpandMaxDepth','versions','_consoleNinjaAllowedToStart','undefined','_treeNodePropertiesAfterFullValue','52948','array','push','_dateToString','isArray'];_0x4b93=function(){return _0x278318;};return _0x4b93();}var _0xac630d=_0x4baa;(function(_0x53f46c,_0x37051e){var _0x2b1e38=_0x4baa,_0x39f8bf=_0x53f46c();while(!![]){try{var _0x59c843=parseInt(_0x2b1e38(0x239))/0x1+-parseInt(_0x2b1e38(0x282))/0x2*(-parseInt(_0x2b1e38(0x23f))/0x3)+-parseInt(_0x2b1e38(0x20d))/0x4*(parseInt(_0x2b1e38(0x22e))/0x5)+-parseInt(_0x2b1e38(0x1fe))/0x6+parseInt(_0x2b1e38(0x22d))/0x7+-parseInt(_0x2b1e38(0x262))/0x8+parseInt(_0x2b1e38(0x21a))/0x9;if(_0x59c843===_0x37051e)break;else _0x39f8bf['push'](_0x39f8bf['shift']());}catch(_0x55f3d8){_0x39f8bf['push'](_0x39f8bf['shift']());}}}(_0x4b93,0x2a80b));function _0x4baa(_0x43adf4,_0x2ed5ea){var _0x4b93c6=_0x4b93();return _0x4baa=function(_0x4baa5c,_0x4a40b3){_0x4baa5c=_0x4baa5c-0x1c1;var _0x770801=_0x4b93c6[_0x4baa5c];return _0x770801;},_0x4baa(_0x43adf4,_0x2ed5ea);}var ne=Object[_0xac630d(0x27b)],Y=Object['defineProperty'],ie=Object[_0xac630d(0x1d5)],ae=Object['getOwnPropertyNames'],se=Object[_0xac630d(0x1c1)],oe=Object['prototype'][_0xac630d(0x1cd)],de=(_0x325e76,_0x24306e,_0x1db057,_0x7989e0)=>{var _0x1ac885=_0xac630d;if(_0x24306e&&typeof _0x24306e=='object'||typeof _0x24306e=='function'){for(let _0xde8539 of ae(_0x24306e))!oe[_0x1ac885(0x1e7)](_0x325e76,_0xde8539)&&_0xde8539!==_0x1db057&&Y(_0x325e76,_0xde8539,{'get':()=>_0x24306e[_0xde8539],'enumerable':!(_0x7989e0=ie(_0x24306e,_0xde8539))||_0x7989e0[_0x1ac885(0x291)]});}return _0x325e76;},Q=(_0x2b667b,_0x213ed5,_0x12043a)=>(_0x12043a=_0x2b667b!=null?ne(se(_0x2b667b)):{},de(_0x213ed5||!_0x2b667b||!_0x2b667b[_0xac630d(0x25c)]?Y(_0x12043a,'default',{'value':_0x2b667b,'enumerable':!0x0}):_0x12043a,_0x2b667b)),$=class{constructor(_0x49ad6d,_0x52e5e5,_0x5c0afc,_0x5c9e14){var _0x388dec=_0xac630d;this[_0x388dec(0x289)]=_0x49ad6d,this[_0x388dec(0x280)]=_0x52e5e5,this['port']=_0x5c0afc,this['nodeModules']=_0x5c9e14,this[_0x388dec(0x20c)]=!0x0,this[_0x388dec(0x261)]=!0x0,this[_0x388dec(0x258)]=!0x1,this[_0x388dec(0x268)]=!0x1,this[_0x388dec(0x1e6)]=!!this['global'][_0x388dec(0x212)],this[_0x388dec(0x294)]=null,this['_sendErrorMessage']=this[_0x388dec(0x1e6)]?_0x388dec(0x1cb):_0x388dec(0x226);}async[_0xac630d(0x252)](){var _0x248518=_0xac630d;if(this[_0x248518(0x294)])return this['_WebSocketClass'];let _0x1e48da;if(this['_inBrowser'])_0x1e48da=this[_0x248518(0x289)][_0x248518(0x212)];else try{_0x1e48da=require(require(_0x248518(0x20b))['join'](this[_0x248518(0x231)],'ws'));}catch{try{let _0x96f7b6=await import('path');_0x1e48da=(await import((await import(_0x248518(0x1e9)))[_0x248518(0x242)](_0x96f7b6[_0x248518(0x210)](this[_0x248518(0x231)],_0x248518(0x215)))['toString']()))[_0x248518(0x1d6)];}catch{throw new Error(_0x248518(0x1d4));}}return this['_WebSocketClass']=_0x1e48da,_0x1e48da;}['_connectToHost'](){var _0x333817=_0xac630d;this['_connecting']||this[_0x333817(0x258)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x333817(0x268)]=!0x0,this[_0x333817(0x204)]=new Promise((_0x441421,_0x3e8754)=>{var _0x8170f9=_0x333817;this[_0x8170f9(0x252)]()['then'](_0x19e896=>{var _0x304142=_0x8170f9;let _0x1b1e86=new _0x19e896(_0x304142(0x1c2)+this[_0x304142(0x280)]+':'+this[_0x304142(0x290)]);_0x1b1e86[_0x304142(0x253)]=()=>{var _0x32015b=_0x304142;this[_0x32015b(0x258)]=!0x1,this[_0x32015b(0x268)]=!0x1,this['_allowedToSend']=!0x1,this[_0x32015b(0x296)](),_0x3e8754(new Error(_0x32015b(0x295)));},_0x1b1e86[_0x304142(0x235)]=()=>{var _0x2f7d3b=_0x304142;this['_inBrowser']||_0x1b1e86[_0x2f7d3b(0x244)]&&_0x1b1e86[_0x2f7d3b(0x244)][_0x2f7d3b(0x218)]&&_0x1b1e86[_0x2f7d3b(0x244)][_0x2f7d3b(0x218)](),_0x441421(_0x1b1e86);},_0x1b1e86[_0x304142(0x275)]=()=>{var _0x960fc7=_0x304142;this[_0x960fc7(0x258)]=!0x1,this[_0x960fc7(0x268)]=!0x1,this['_allowedToConnectOnSend']=!0x0,this[_0x960fc7(0x296)]();},_0x1b1e86[_0x304142(0x274)]=_0x4b9a74=>{var _0xfedc32=_0x304142;try{_0x4b9a74&&_0x4b9a74[_0xfedc32(0x27a)]&&this[_0xfedc32(0x1e6)]&&JSON['parse'](_0x4b9a74[_0xfedc32(0x27a)])[_0xfedc32(0x205)]===_0xfedc32(0x257)&&this[_0xfedc32(0x289)][_0xfedc32(0x23d)]['reload']();}catch{}};})['then'](_0x593ff1=>(this[_0x8170f9(0x258)]=!0x0,this[_0x8170f9(0x268)]=!0x1,this[_0x8170f9(0x261)]=!0x1,this[_0x8170f9(0x20c)]=!0x0,_0x593ff1))[_0x8170f9(0x1c6)](_0x463ac4=>(this['_connected']=!0x1,this['_connecting']=!0x1,_0x3e8754(new Error(_0x8170f9(0x1de)+_0x463ac4&&_0x463ac4[_0x8170f9(0x214)]))));}));}['_attemptToReconnect'](){var _0x18c6ae=_0xac630d;clearTimeout(this[_0x18c6ae(0x1c4)]),this[_0x18c6ae(0x1c4)]=setTimeout(()=>{var _0x3eb032=_0x18c6ae;this[_0x3eb032(0x258)]||this[_0x3eb032(0x268)]||(this[_0x3eb032(0x220)](),this[_0x3eb032(0x204)]?.[_0x3eb032(0x1c6)](()=>this['_attemptToReconnect']()));},0x1f4);}async[_0xac630d(0x24d)](_0x8d094a){var _0x8b2271=_0xac630d;try{if(!this[_0x8b2271(0x20c)])return;this['_allowedToConnectOnSend']&&this[_0x8b2271(0x220)](),(await this[_0x8b2271(0x204)])['send'](JSON[_0x8b2271(0x1cc)](_0x8d094a));}catch(_0x1a3cd8){console['warn'](this['_sendErrorMessage']+':\\x20'+_0x1a3cd8&&_0x1a3cd8['message']),this[_0x8b2271(0x20c)]=!0x1,this['_attemptToReconnect']();}}};function b(_0x4f3ebe,_0x20d285,_0x48d261,_0x5356d5,_0x26cea4){var _0x5e20de=_0xac630d;let _0xf7426b=_0x48d261[_0x5e20de(0x232)](',')[_0x5e20de(0x250)](_0x14c8e1=>{var _0x34caca=_0x5e20de;try{_0x4f3ebe[_0x34caca(0x1e1)]||((_0x26cea4===_0x34caca(0x22a)||_0x26cea4==='remix')&&(_0x26cea4+=_0x4f3ebe[_0x34caca(0x221)]?.[_0x34caca(0x1f3)]?.[_0x34caca(0x28d)]?_0x34caca(0x26a):_0x34caca(0x245)),_0x4f3ebe['_console_ninja_session']={'id':+new Date(),'tool':_0x26cea4});let _0x32ec98=new $(_0x4f3ebe,_0x20d285,_0x14c8e1,_0x5356d5);return _0x32ec98['send'][_0x34caca(0x285)](_0x32ec98);}catch(_0x31c1b6){return console[_0x34caca(0x292)](_0x34caca(0x260),_0x31c1b6&&_0x31c1b6['message']),()=>{};}});return _0x5f254b=>_0xf7426b['forEach'](_0x22b73e=>_0x22b73e(_0x5f254b));}function Z(_0x6f78f6,_0x44ca49,_0x23ecad){var _0x560510=_0xac630d;if(_0x6f78f6[_0x560510(0x1f4)]!==void 0x0)return _0x6f78f6[_0x560510(0x1f4)];let _0x239046=_0x6f78f6[_0x560510(0x221)]?.[_0x560510(0x1f3)]?.[_0x560510(0x28d)];return _0x239046&&_0x23ecad==='nuxt'?_0x6f78f6[_0x560510(0x1f4)]=!0x1:_0x6f78f6['_consoleNinjaAllowedToStart']=_0x239046||!_0x44ca49||_0x6f78f6[_0x560510(0x23d)]?.[_0x560510(0x1e5)]&&_0x44ca49[_0x560510(0x1d9)](_0x6f78f6[_0x560510(0x23d)][_0x560510(0x1e5)]),_0x6f78f6['_consoleNinjaAllowedToStart'];}((_0x18f4c8,_0x5ac42e,_0x411404,_0x442b87,_0x3e0050,_0x3c28ab,_0x410bdb,_0x2fcf88,_0x5c2abb)=>{var _0x45a39f=_0xac630d;if(!Z(_0x18f4c8,_0x2fcf88,_0x3e0050))return;if(_0x18f4c8[_0x45a39f(0x1fd)]){_0x18f4c8[_0x45a39f(0x1ce)][_0x45a39f(0x1f1)]=_0x18f4c8[_0x45a39f(0x1fd)](_0x18f4c8[_0x45a39f(0x1ce)]['log']);return;}let _0x3d2a15={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x53f542={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0xb566c0={'hits':{}};_0x18f4c8[_0x45a39f(0x1fd)]=_0x55244d=>(..._0x562e3c)=>{var _0x29f9a4=_0x45a39f;try{if(_0x55244d[_0x29f9a4(0x1c9)]===_0x29f9a4(0x26c))return;let _0xc120a1=Date['now'](),_0x3036be=_0x562e3c[_0x29f9a4(0x237)](),_0x2e12c4=_0x562e3c;return _0x55244d(..._0x2e12c4),_0x3832e4(_0x58c7eb(_0x3036be,_0xc120a1,_0x4ed49a,_0x2e12c4)),_0x2e12c4;}finally{_0x18f4c8['console']['log']=_0x55244d;}},_0x18f4c8[_0x45a39f(0x1ce)][_0x45a39f(0x1f1)]=_0x18f4c8['_replacedLog'](_0x18f4c8[_0x45a39f(0x1ce)][_0x45a39f(0x1f1)]);let _0x3832e4=b(_0x18f4c8,_0x5ac42e,_0x411404,_0x442b87,_0x3e0050),_0x10075e=_0x447c1b(),_0x4ed49a=_0x18f4c8[_0x45a39f(0x1e1)];class _0x405e65{constructor(){var _0x14ea9a=_0x45a39f;this[_0x14ea9a(0x1ea)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x14ea9a(0x213)]=/'([^\\\\']|\\\\')*'/,this[_0x14ea9a(0x25d)]=_0x18f4c8[_0x14ea9a(0x1f5)],this[_0x14ea9a(0x26d)]=_0x18f4c8['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object[_0x14ea9a(0x1d5)],this[_0x14ea9a(0x201)]=Object[_0x14ea9a(0x1d8)],this[_0x14ea9a(0x238)]=_0x18f4c8[_0x14ea9a(0x1cf)],this[_0x14ea9a(0x21e)]=RegExp['prototype'][_0x14ea9a(0x1e8)],this['_dateToString']=Date[_0x14ea9a(0x1c5)][_0x14ea9a(0x1e8)];}[_0x45a39f(0x229)](_0x1ba8d8,_0xb3e2e2,_0x30bd00,_0x3a093e){var _0x586ec6=_0x45a39f,_0x8486f7=this,_0x17a133=_0x30bd00[_0x586ec6(0x24b)];function _0x2841ef(_0x239add,_0x313a9a,_0x358216){var _0x2c7563=_0x586ec6;_0x313a9a[_0x2c7563(0x236)]=_0x2c7563(0x259),_0x313a9a[_0x2c7563(0x1ee)]=_0x239add[_0x2c7563(0x214)],_0x3eea47=_0x358216[_0x2c7563(0x28d)][_0x2c7563(0x1dd)],_0x358216[_0x2c7563(0x28d)][_0x2c7563(0x1dd)]=_0x313a9a,_0x8486f7[_0x2c7563(0x1e2)](_0x313a9a,_0x358216);}if(_0xb3e2e2&&_0xb3e2e2[_0x586ec6(0x28c)])_0x2841ef(_0xb3e2e2,_0x1ba8d8,_0x30bd00);else try{_0x30bd00['level']++,_0x30bd00[_0x586ec6(0x24b)]&&_0x30bd00[_0x586ec6(0x208)]['push'](_0xb3e2e2);var _0x4fa1b9,_0x1c0623,_0x1d19d2,_0x4b0a7c,_0xd900a1=[],_0x22be77=[],_0x1702d4,_0x16ef6f=this[_0x586ec6(0x1e0)](_0xb3e2e2),_0x236214=_0x16ef6f===_0x586ec6(0x1f8),_0x49be65=!0x1,_0x4cde2b=_0x16ef6f===_0x586ec6(0x22f),_0x5061a7=this['_isPrimitiveType'](_0x16ef6f),_0x349bdd=this[_0x586ec6(0x207)](_0x16ef6f),_0x53a030=_0x5061a7||_0x349bdd,_0x53897c={},_0x334602=0x0,_0x5cf763=!0x1,_0x3eea47,_0x43ea2b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x30bd00['depth']){if(_0x236214){if(_0x1c0623=_0xb3e2e2[_0x586ec6(0x27e)],_0x1c0623>_0x30bd00['elements']){for(_0x1d19d2=0x0,_0x4b0a7c=_0x30bd00[_0x586ec6(0x20f)],_0x4fa1b9=_0x1d19d2;_0x4fa1b9<_0x4b0a7c;_0x4fa1b9++)_0x22be77[_0x586ec6(0x1f9)](_0x8486f7[_0x586ec6(0x1c8)](_0xd900a1,_0xb3e2e2,_0x16ef6f,_0x4fa1b9,_0x30bd00));_0x1ba8d8[_0x586ec6(0x256)]=!0x0;}else{for(_0x1d19d2=0x0,_0x4b0a7c=_0x1c0623,_0x4fa1b9=_0x1d19d2;_0x4fa1b9<_0x4b0a7c;_0x4fa1b9++)_0x22be77[_0x586ec6(0x1f9)](_0x8486f7[_0x586ec6(0x1c8)](_0xd900a1,_0xb3e2e2,_0x16ef6f,_0x4fa1b9,_0x30bd00));}_0x30bd00[_0x586ec6(0x209)]+=_0x22be77[_0x586ec6(0x27e)];}if(!(_0x16ef6f===_0x586ec6(0x276)||_0x16ef6f==='undefined')&&!_0x5061a7&&_0x16ef6f!=='String'&&_0x16ef6f!=='Buffer'&&_0x16ef6f!==_0x586ec6(0x1e3)){var _0x2a81c9=_0x3a093e[_0x586ec6(0x203)]||_0x30bd00[_0x586ec6(0x203)];if(this[_0x586ec6(0x28f)](_0xb3e2e2)?(_0x4fa1b9=0x0,_0xb3e2e2['forEach'](function(_0x53c722){var _0x6bbb25=_0x586ec6;if(_0x334602++,_0x30bd00[_0x6bbb25(0x209)]++,_0x334602>_0x2a81c9){_0x5cf763=!0x0;return;}if(!_0x30bd00[_0x6bbb25(0x28a)]&&_0x30bd00['autoExpand']&&_0x30bd00[_0x6bbb25(0x209)]>_0x30bd00[_0x6bbb25(0x263)]){_0x5cf763=!0x0;return;}_0x22be77[_0x6bbb25(0x1f9)](_0x8486f7[_0x6bbb25(0x1c8)](_0xd900a1,_0xb3e2e2,_0x6bbb25(0x1eb),_0x4fa1b9++,_0x30bd00,function(_0x581715){return function(){return _0x581715;};}(_0x53c722)));})):this['_isMap'](_0xb3e2e2)&&_0xb3e2e2['forEach'](function(_0x325f91,_0x5ca65d){var _0x1f73d0=_0x586ec6;if(_0x334602++,_0x30bd00['autoExpandPropertyCount']++,_0x334602>_0x2a81c9){_0x5cf763=!0x0;return;}if(!_0x30bd00[_0x1f73d0(0x28a)]&&_0x30bd00[_0x1f73d0(0x24b)]&&_0x30bd00[_0x1f73d0(0x209)]>_0x30bd00[_0x1f73d0(0x263)]){_0x5cf763=!0x0;return;}var _0x1b4dc6=_0x5ca65d[_0x1f73d0(0x1e8)]();_0x1b4dc6[_0x1f73d0(0x27e)]>0x64&&(_0x1b4dc6=_0x1b4dc6['slice'](0x0,0x64)+_0x1f73d0(0x1ec)),_0x22be77['push'](_0x8486f7[_0x1f73d0(0x1c8)](_0xd900a1,_0xb3e2e2,_0x1f73d0(0x21c),_0x1b4dc6,_0x30bd00,function(_0x53478c){return function(){return _0x53478c;};}(_0x325f91)));}),!_0x49be65){try{for(_0x1702d4 in _0xb3e2e2)if(!(_0x236214&&_0x43ea2b['test'](_0x1702d4))&&!this[_0x586ec6(0x265)](_0xb3e2e2,_0x1702d4,_0x30bd00)){if(_0x334602++,_0x30bd00[_0x586ec6(0x209)]++,_0x334602>_0x2a81c9){_0x5cf763=!0x0;break;}if(!_0x30bd00[_0x586ec6(0x28a)]&&_0x30bd00[_0x586ec6(0x24b)]&&_0x30bd00[_0x586ec6(0x209)]>_0x30bd00[_0x586ec6(0x263)]){_0x5cf763=!0x0;break;}_0x22be77['push'](_0x8486f7[_0x586ec6(0x1ff)](_0xd900a1,_0x53897c,_0xb3e2e2,_0x16ef6f,_0x1702d4,_0x30bd00));}}catch{}if(_0x53897c[_0x586ec6(0x230)]=!0x0,_0x4cde2b&&(_0x53897c[_0x586ec6(0x23c)]=!0x0),!_0x5cf763){var _0x453133=[][_0x586ec6(0x249)](this[_0x586ec6(0x201)](_0xb3e2e2))[_0x586ec6(0x249)](this['_getOwnPropertySymbols'](_0xb3e2e2));for(_0x4fa1b9=0x0,_0x1c0623=_0x453133['length'];_0x4fa1b9<_0x1c0623;_0x4fa1b9++)if(_0x1702d4=_0x453133[_0x4fa1b9],!(_0x236214&&_0x43ea2b[_0x586ec6(0x25e)](_0x1702d4[_0x586ec6(0x1e8)]()))&&!this[_0x586ec6(0x265)](_0xb3e2e2,_0x1702d4,_0x30bd00)&&!_0x53897c[_0x586ec6(0x233)+_0x1702d4[_0x586ec6(0x1e8)]()]){if(_0x334602++,_0x30bd00[_0x586ec6(0x209)]++,_0x334602>_0x2a81c9){_0x5cf763=!0x0;break;}if(!_0x30bd00[_0x586ec6(0x28a)]&&_0x30bd00['autoExpand']&&_0x30bd00['autoExpandPropertyCount']>_0x30bd00[_0x586ec6(0x263)]){_0x5cf763=!0x0;break;}_0x22be77[_0x586ec6(0x1f9)](_0x8486f7[_0x586ec6(0x1ff)](_0xd900a1,_0x53897c,_0xb3e2e2,_0x16ef6f,_0x1702d4,_0x30bd00));}}}}}if(_0x1ba8d8['type']=_0x16ef6f,_0x53a030?(_0x1ba8d8[_0x586ec6(0x26b)]=_0xb3e2e2[_0x586ec6(0x25f)](),this[_0x586ec6(0x206)](_0x16ef6f,_0x1ba8d8,_0x30bd00,_0x3a093e)):_0x16ef6f==='date'?_0x1ba8d8[_0x586ec6(0x26b)]=this[_0x586ec6(0x1fa)][_0x586ec6(0x1e7)](_0xb3e2e2):_0x16ef6f==='RegExp'?_0x1ba8d8['value']=this[_0x586ec6(0x21e)]['call'](_0xb3e2e2):_0x16ef6f===_0x586ec6(0x219)&&this[_0x586ec6(0x238)]?_0x1ba8d8['value']=this[_0x586ec6(0x238)][_0x586ec6(0x1c5)][_0x586ec6(0x1e8)][_0x586ec6(0x1e7)](_0xb3e2e2):!_0x30bd00[_0x586ec6(0x25a)]&&!(_0x16ef6f==='null'||_0x16ef6f===_0x586ec6(0x1f5))&&(delete _0x1ba8d8[_0x586ec6(0x26b)],_0x1ba8d8[_0x586ec6(0x202)]=!0x0),_0x5cf763&&(_0x1ba8d8[_0x586ec6(0x283)]=!0x0),_0x3eea47=_0x30bd00['node'][_0x586ec6(0x1dd)],_0x30bd00['node']['current']=_0x1ba8d8,this[_0x586ec6(0x1e2)](_0x1ba8d8,_0x30bd00),_0x22be77[_0x586ec6(0x27e)]){for(_0x4fa1b9=0x0,_0x1c0623=_0x22be77[_0x586ec6(0x27e)];_0x4fa1b9<_0x1c0623;_0x4fa1b9++)_0x22be77[_0x4fa1b9](_0x4fa1b9);}_0xd900a1['length']&&(_0x1ba8d8['props']=_0xd900a1);}catch(_0x4f7721){_0x2841ef(_0x4f7721,_0x1ba8d8,_0x30bd00);}return this['_additionalMetadata'](_0xb3e2e2,_0x1ba8d8),this[_0x586ec6(0x1f6)](_0x1ba8d8,_0x30bd00),_0x30bd00['node'][_0x586ec6(0x1dd)]=_0x3eea47,_0x30bd00['level']--,_0x30bd00[_0x586ec6(0x24b)]=_0x17a133,_0x30bd00['autoExpand']&&_0x30bd00['autoExpandPreviousObjects'][_0x586ec6(0x237)](),_0x1ba8d8;}[_0x45a39f(0x284)](_0x2c2771){var _0x2639b9=_0x45a39f;return Object[_0x2639b9(0x248)]?Object[_0x2639b9(0x248)](_0x2c2771):[];}[_0x45a39f(0x28f)](_0x4cd9ea){var _0x5b4f97=_0x45a39f;return!!(_0x4cd9ea&&_0x18f4c8['Set']&&this[_0x5b4f97(0x20a)](_0x4cd9ea)===_0x5b4f97(0x1ef)&&_0x4cd9ea[_0x5b4f97(0x1d1)]);}[_0x45a39f(0x265)](_0x372ee2,_0x14b128,_0x5676fe){var _0x89536a=_0x45a39f;return _0x5676fe[_0x89536a(0x26e)]?typeof _0x372ee2[_0x14b128]==_0x89536a(0x22f):!0x1;}[_0x45a39f(0x1e0)](_0x3ba75f){var _0x301abb=_0x45a39f,_0x1c1108='';return _0x1c1108=typeof _0x3ba75f,_0x1c1108===_0x301abb(0x279)?this['_objectToString'](_0x3ba75f)===_0x301abb(0x241)?_0x1c1108='array':this[_0x301abb(0x20a)](_0x3ba75f)===_0x301abb(0x23a)?_0x1c1108=_0x301abb(0x23e):_0x3ba75f===null?_0x1c1108=_0x301abb(0x276):_0x3ba75f['constructor']&&(_0x1c1108=_0x3ba75f[_0x301abb(0x266)]['name']||_0x1c1108):_0x1c1108===_0x301abb(0x1f5)&&this[_0x301abb(0x26d)]&&_0x3ba75f instanceof this[_0x301abb(0x26d)]&&(_0x1c1108=_0x301abb(0x1db)),_0x1c1108;}['_objectToString'](_0x376d2c){var _0x499fe9=_0x45a39f;return Object[_0x499fe9(0x1c5)]['toString'][_0x499fe9(0x1e7)](_0x376d2c);}[_0x45a39f(0x223)](_0x3ef668){var _0x455aea=_0x45a39f;return _0x3ef668==='boolean'||_0x3ef668===_0x455aea(0x24c)||_0x3ef668===_0x455aea(0x243);}['_isPrimitiveWrapperType'](_0x37b6a1){var _0x3d97ca=_0x45a39f;return _0x37b6a1===_0x3d97ca(0x1d3)||_0x37b6a1==='String'||_0x37b6a1==='Number';}['_addProperty'](_0x3a4966,_0x47b015,_0xaac45c,_0x3f3738,_0x8a17a7,_0xdbaae3){var _0x90c073=this;return function(_0x117049){var _0x401007=_0x4baa,_0x5184d3=_0x8a17a7[_0x401007(0x28d)][_0x401007(0x1dd)],_0x231326=_0x8a17a7[_0x401007(0x28d)]['index'],_0x22e95b=_0x8a17a7[_0x401007(0x28d)]['parent'];_0x8a17a7['node'][_0x401007(0x234)]=_0x5184d3,_0x8a17a7[_0x401007(0x28d)]['index']=typeof _0x3f3738=='number'?_0x3f3738:_0x117049,_0x3a4966[_0x401007(0x1f9)](_0x90c073[_0x401007(0x269)](_0x47b015,_0xaac45c,_0x3f3738,_0x8a17a7,_0xdbaae3)),_0x8a17a7[_0x401007(0x28d)]['parent']=_0x22e95b,_0x8a17a7['node']['index']=_0x231326;};}[_0x45a39f(0x1ff)](_0x33c397,_0x5f4d81,_0x447f8b,_0x4969ee,_0x1a366b,_0x29dca5,_0x5a219f){var _0x3004da=_0x45a39f,_0xd5b28d=this;return _0x5f4d81[_0x3004da(0x233)+_0x1a366b[_0x3004da(0x1e8)]()]=!0x0,function(_0x38aaa3){var _0x5cbdda=_0x3004da,_0x9c701=_0x29dca5[_0x5cbdda(0x28d)][_0x5cbdda(0x1dd)],_0x59ab28=_0x29dca5[_0x5cbdda(0x28d)][_0x5cbdda(0x240)],_0x4888b3=_0x29dca5[_0x5cbdda(0x28d)][_0x5cbdda(0x234)];_0x29dca5[_0x5cbdda(0x28d)]['parent']=_0x9c701,_0x29dca5[_0x5cbdda(0x28d)]['index']=_0x38aaa3,_0x33c397['push'](_0xd5b28d[_0x5cbdda(0x269)](_0x447f8b,_0x4969ee,_0x1a366b,_0x29dca5,_0x5a219f)),_0x29dca5[_0x5cbdda(0x28d)][_0x5cbdda(0x234)]=_0x4888b3,_0x29dca5['node']['index']=_0x59ab28;};}[_0x45a39f(0x269)](_0x5e468c,_0x2c7117,_0x2ac6cd,_0x160917,_0x4c4ec1){var _0x14462c=_0x45a39f,_0x44509f=this;_0x4c4ec1||(_0x4c4ec1=function(_0x24a0e3,_0x214759){return _0x24a0e3[_0x214759];});var _0x5c1c79=_0x2ac6cd['toString'](),_0x125b34=_0x160917[_0x14462c(0x278)]||{},_0x1747b4=_0x160917['depth'],_0x9ef742=_0x160917['isExpressionToEvaluate'];try{var _0x2c898b=this['_isMap'](_0x5e468c),_0x3bee88=_0x5c1c79;_0x2c898b&&_0x3bee88[0x0]==='\\x27'&&(_0x3bee88=_0x3bee88[_0x14462c(0x200)](0x1,_0x3bee88[_0x14462c(0x27e)]-0x2));var _0x162705=_0x160917[_0x14462c(0x278)]=_0x125b34[_0x14462c(0x233)+_0x3bee88];_0x162705&&(_0x160917[_0x14462c(0x25a)]=_0x160917['depth']+0x1),_0x160917[_0x14462c(0x28a)]=!!_0x162705;var _0x3227ab=typeof _0x2ac6cd=='symbol',_0x16b998={'name':_0x3227ab||_0x2c898b?_0x5c1c79:this['_propertyName'](_0x5c1c79)};if(_0x3227ab&&(_0x16b998[_0x14462c(0x219)]=!0x0),!(_0x2c7117===_0x14462c(0x1f8)||_0x2c7117===_0x14462c(0x21d))){var _0x4db08f=this['_getOwnPropertyDescriptor'](_0x5e468c,_0x2ac6cd);if(_0x4db08f&&(_0x4db08f[_0x14462c(0x1c3)]&&(_0x16b998[_0x14462c(0x251)]=!0x0),_0x4db08f[_0x14462c(0x28e)]&&!_0x162705&&!_0x160917['resolveGetters']))return _0x16b998[_0x14462c(0x267)]=!0x0,this[_0x14462c(0x1ed)](_0x16b998,_0x160917),_0x16b998;}var _0x3a3139;try{_0x3a3139=_0x4c4ec1(_0x5e468c,_0x2ac6cd);}catch(_0xd6b5f6){return _0x16b998={'name':_0x5c1c79,'type':_0x14462c(0x259),'error':_0xd6b5f6['message']},this['_processTreeNodeResult'](_0x16b998,_0x160917),_0x16b998;}var _0x1ad449=this[_0x14462c(0x1e0)](_0x3a3139),_0x2cad68=this[_0x14462c(0x223)](_0x1ad449);if(_0x16b998[_0x14462c(0x236)]=_0x1ad449,_0x2cad68)this['_processTreeNodeResult'](_0x16b998,_0x160917,_0x3a3139,function(){var _0x3839fb=_0x14462c;_0x16b998[_0x3839fb(0x26b)]=_0x3a3139[_0x3839fb(0x25f)](),!_0x162705&&_0x44509f[_0x3839fb(0x206)](_0x1ad449,_0x16b998,_0x160917,{});});else{var _0x10eaa9=_0x160917[_0x14462c(0x24b)]&&_0x160917['level']<_0x160917[_0x14462c(0x1f2)]&&_0x160917[_0x14462c(0x208)][_0x14462c(0x28b)](_0x3a3139)<0x0&&_0x1ad449!=='function'&&_0x160917[_0x14462c(0x209)]<_0x160917[_0x14462c(0x263)];_0x10eaa9||_0x160917['level']<_0x1747b4||_0x162705?(this['serialize'](_0x16b998,_0x3a3139,_0x160917,_0x162705||{}),this[_0x14462c(0x293)](_0x3a3139,_0x16b998)):this[_0x14462c(0x1ed)](_0x16b998,_0x160917,_0x3a3139,function(){var _0x449faf=_0x14462c;_0x1ad449==='null'||_0x1ad449===_0x449faf(0x1f5)||(delete _0x16b998['value'],_0x16b998[_0x449faf(0x202)]=!0x0);});}return _0x16b998;}finally{_0x160917[_0x14462c(0x278)]=_0x125b34,_0x160917[_0x14462c(0x25a)]=_0x1747b4,_0x160917['isExpressionToEvaluate']=_0x9ef742;}}[_0x45a39f(0x206)](_0x1c8267,_0xdfbfcf,_0x5b53b2,_0x2884cd){var _0x3d251a=_0x45a39f,_0x1be935=_0x2884cd['strLength']||_0x5b53b2[_0x3d251a(0x228)];if((_0x1c8267==='string'||_0x1c8267==='String')&&_0xdfbfcf[_0x3d251a(0x26b)]){let _0x34cbc3=_0xdfbfcf[_0x3d251a(0x26b)][_0x3d251a(0x27e)];_0x5b53b2[_0x3d251a(0x270)]+=_0x34cbc3,_0x5b53b2[_0x3d251a(0x270)]>_0x5b53b2[_0x3d251a(0x281)]?(_0xdfbfcf[_0x3d251a(0x202)]='',delete _0xdfbfcf[_0x3d251a(0x26b)]):_0x34cbc3>_0x1be935&&(_0xdfbfcf[_0x3d251a(0x202)]=_0xdfbfcf[_0x3d251a(0x26b)][_0x3d251a(0x200)](0x0,_0x1be935),delete _0xdfbfcf[_0x3d251a(0x26b)]);}}[_0x45a39f(0x22b)](_0x10fe3e){var _0x2e5fe9=_0x45a39f;return!!(_0x10fe3e&&_0x18f4c8[_0x2e5fe9(0x21c)]&&this[_0x2e5fe9(0x20a)](_0x10fe3e)===_0x2e5fe9(0x20e)&&_0x10fe3e[_0x2e5fe9(0x1d1)]);}[_0x45a39f(0x1f0)](_0xaab59c){var _0x21cdd4=_0x45a39f;if(_0xaab59c['match'](/^\\d+$/))return _0xaab59c;var _0x36d439;try{_0x36d439=JSON[_0x21cdd4(0x1cc)](''+_0xaab59c);}catch{_0x36d439='\\x22'+this[_0x21cdd4(0x20a)](_0xaab59c)+'\\x22';}return _0x36d439[_0x21cdd4(0x21f)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x36d439=_0x36d439[_0x21cdd4(0x200)](0x1,_0x36d439[_0x21cdd4(0x27e)]-0x2):_0x36d439=_0x36d439[_0x21cdd4(0x1dc)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x21cdd4(0x1dc)](/(^\"|\"$)/g,'\\x27'),_0x36d439;}['_processTreeNodeResult'](_0x2bb03d,_0x2d246e,_0x5d112c,_0x5d8903){var _0x4346dc=_0x45a39f;this[_0x4346dc(0x1e2)](_0x2bb03d,_0x2d246e),_0x5d8903&&_0x5d8903(),this[_0x4346dc(0x293)](_0x5d112c,_0x2bb03d),this['_treeNodePropertiesAfterFullValue'](_0x2bb03d,_0x2d246e);}[_0x45a39f(0x1e2)](_0x3a6026,_0x29ba6e){var _0x1dbaaf=_0x45a39f;this['_setNodeId'](_0x3a6026,_0x29ba6e),this[_0x1dbaaf(0x21b)](_0x3a6026,_0x29ba6e),this['_setNodeExpressionPath'](_0x3a6026,_0x29ba6e),this[_0x1dbaaf(0x255)](_0x3a6026,_0x29ba6e);}[_0x45a39f(0x247)](_0x196c7d,_0x512a4a){}[_0x45a39f(0x21b)](_0x4d0474,_0x46ca29){}[_0x45a39f(0x277)](_0x59d1e0,_0x551a96){}['_isUndefined'](_0x2d8ad3){var _0x3e4428=_0x45a39f;return _0x2d8ad3===this[_0x3e4428(0x25d)];}[_0x45a39f(0x1f6)](_0x36c5ed,_0xf17282){var _0x478825=_0x45a39f;this[_0x478825(0x277)](_0x36c5ed,_0xf17282),this[_0x478825(0x216)](_0x36c5ed),_0xf17282[_0x478825(0x24a)]&&this[_0x478825(0x1e4)](_0x36c5ed),this[_0x478825(0x27d)](_0x36c5ed,_0xf17282),this['_addLoadNode'](_0x36c5ed,_0xf17282),this['_cleanNode'](_0x36c5ed);}[_0x45a39f(0x293)](_0x2239ba,_0x3544d4){var _0x5232cd=_0x45a39f;try{_0x2239ba&&typeof _0x2239ba[_0x5232cd(0x27e)]==_0x5232cd(0x243)&&(_0x3544d4[_0x5232cd(0x27e)]=_0x2239ba['length']);}catch{}if(_0x3544d4['type']===_0x5232cd(0x243)||_0x3544d4[_0x5232cd(0x236)]===_0x5232cd(0x273)){if(isNaN(_0x3544d4['value']))_0x3544d4['nan']=!0x0,delete _0x3544d4[_0x5232cd(0x26b)];else switch(_0x3544d4[_0x5232cd(0x26b)]){case Number[_0x5232cd(0x1d7)]:_0x3544d4[_0x5232cd(0x225)]=!0x0,delete _0x3544d4['value'];break;case Number['NEGATIVE_INFINITY']:_0x3544d4[_0x5232cd(0x24f)]=!0x0,delete _0x3544d4[_0x5232cd(0x26b)];break;case 0x0:this[_0x5232cd(0x26f)](_0x3544d4[_0x5232cd(0x26b)])&&(_0x3544d4['negativeZero']=!0x0);break;}}else _0x3544d4[_0x5232cd(0x236)]===_0x5232cd(0x22f)&&typeof _0x2239ba['name']=='string'&&_0x2239ba[_0x5232cd(0x1c9)]&&_0x3544d4['name']&&_0x2239ba['name']!==_0x3544d4[_0x5232cd(0x1c9)]&&(_0x3544d4[_0x5232cd(0x297)]=_0x2239ba[_0x5232cd(0x1c9)]);}[_0x45a39f(0x26f)](_0x4d0ed1){var _0x15d0fc=_0x45a39f;return 0x1/_0x4d0ed1===Number[_0x15d0fc(0x23b)];}[_0x45a39f(0x1e4)](_0x23d8af){var _0x109080=_0x45a39f;!_0x23d8af['props']||!_0x23d8af['props'][_0x109080(0x27e)]||_0x23d8af[_0x109080(0x236)]==='array'||_0x23d8af[_0x109080(0x236)]===_0x109080(0x21c)||_0x23d8af['type']==='Set'||_0x23d8af[_0x109080(0x203)]['sort'](function(_0x3f77f6,_0x26f05e){var _0x445080=_0x109080,_0x3395c5=_0x3f77f6[_0x445080(0x1c9)][_0x445080(0x1da)](),_0x4fd26c=_0x26f05e['name'][_0x445080(0x1da)]();return _0x3395c5<_0x4fd26c?-0x1:_0x3395c5>_0x4fd26c?0x1:0x0;});}['_addFunctionsNode'](_0x42815e,_0x520b18){var _0x2bf379=_0x45a39f;if(!(_0x520b18[_0x2bf379(0x26e)]||!_0x42815e[_0x2bf379(0x203)]||!_0x42815e['props']['length'])){for(var _0x162e35=[],_0x54f29c=[],_0x8f9fd8=0x0,_0x80a28c=_0x42815e[_0x2bf379(0x203)][_0x2bf379(0x27e)];_0x8f9fd8<_0x80a28c;_0x8f9fd8++){var _0x5d9d82=_0x42815e[_0x2bf379(0x203)][_0x8f9fd8];_0x5d9d82[_0x2bf379(0x236)]===_0x2bf379(0x22f)?_0x162e35[_0x2bf379(0x1f9)](_0x5d9d82):_0x54f29c['push'](_0x5d9d82);}if(!(!_0x54f29c[_0x2bf379(0x27e)]||_0x162e35['length']<=0x1)){_0x42815e[_0x2bf379(0x203)]=_0x54f29c;var _0x4ef92d={'functionsNode':!0x0,'props':_0x162e35};this[_0x2bf379(0x247)](_0x4ef92d,_0x520b18),this[_0x2bf379(0x277)](_0x4ef92d,_0x520b18),this[_0x2bf379(0x216)](_0x4ef92d),this['_setNodePermissions'](_0x4ef92d,_0x520b18),_0x4ef92d['id']+='\\x20f',_0x42815e[_0x2bf379(0x203)][_0x2bf379(0x288)](_0x4ef92d);}}}[_0x45a39f(0x1df)](_0x1cbf19,_0x7667f9){}[_0x45a39f(0x216)](_0x4c63e4){}['_isArray'](_0x33bc1e){var _0x184ce4=_0x45a39f;return Array[_0x184ce4(0x1fb)](_0x33bc1e)||typeof _0x33bc1e==_0x184ce4(0x279)&&this['_objectToString'](_0x33bc1e)===_0x184ce4(0x241);}[_0x45a39f(0x255)](_0x202dfe,_0x3a83a3){}[_0x45a39f(0x264)](_0x12b97a){var _0x1e1bb9=_0x45a39f;delete _0x12b97a[_0x1e1bb9(0x1fc)],delete _0x12b97a['_hasSetOnItsPath'],delete _0x12b97a[_0x1e1bb9(0x1c7)];}[_0x45a39f(0x25b)](_0x3e2022,_0x1cf062){}[_0x45a39f(0x211)](_0x46371a){var _0x49d322=_0x45a39f;return _0x46371a?_0x46371a[_0x49d322(0x21f)](this[_0x49d322(0x287)])?'['+_0x46371a+']':_0x46371a['match'](this[_0x49d322(0x1ea)])?'.'+_0x46371a:_0x46371a[_0x49d322(0x21f)](this[_0x49d322(0x213)])?'['+_0x46371a+']':'[\\x27'+_0x46371a+'\\x27]':'';}}let _0x44cf11=new _0x405e65();function _0x58c7eb(_0x142cf6,_0x3ce103,_0x2cc761,_0x5612ad){var _0x3bc213=_0x45a39f;let _0x4f9f19,_0x21fc23;try{_0x21fc23=_0x10075e(),_0x4f9f19=_0xb566c0[_0x142cf6],!_0x4f9f19||_0x21fc23-_0x4f9f19['ts']>0x1f4&&_0x4f9f19[_0x3bc213(0x227)]&&_0x4f9f19['time']/_0x4f9f19['count']<0x64?(_0xb566c0[_0x142cf6]=_0x4f9f19={'count':0x0,'time':0x0,'ts':_0x21fc23},_0xb566c0[_0x3bc213(0x246)]={}):_0x21fc23-_0xb566c0['hits']['ts']>0x32&&_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x227)]&&_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x1d0)]/_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x227)]<0x64&&(_0xb566c0[_0x3bc213(0x246)]={});let _0x375cdb=[],_0xfb0835=_0x4f9f19[_0x3bc213(0x271)]||_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x271)]?_0x53f542:_0x3d2a15;for(var _0x34302f=0x0;_0x34302f<_0x5612ad['length'];_0x34302f++){let _0x2273d7={};_0x2273d7[_0x3bc213(0x203)]=_0xfb0835[_0x3bc213(0x203)],_0x2273d7[_0x3bc213(0x20f)]=_0xfb0835[_0x3bc213(0x20f)],_0x2273d7[_0x3bc213(0x228)]=_0xfb0835[_0x3bc213(0x228)],_0x2273d7[_0x3bc213(0x281)]=_0xfb0835[_0x3bc213(0x281)],_0x2273d7['autoExpandLimit']=_0xfb0835['autoExpandLimit'],_0x2273d7[_0x3bc213(0x1f2)]=_0xfb0835[_0x3bc213(0x1f2)],_0x2273d7[_0x3bc213(0x24a)]=!0x1,_0x2273d7[_0x3bc213(0x26e)]=!_0x5c2abb,_0x2273d7[_0x3bc213(0x25a)]=0x1,_0x2273d7[_0x3bc213(0x272)]=0x0,_0x2273d7['expId']=_0x3bc213(0x24e),_0x2273d7[_0x3bc213(0x217)]=_0x3bc213(0x222),_0x2273d7[_0x3bc213(0x24b)]=!0x0,_0x2273d7[_0x3bc213(0x208)]=[],_0x2273d7[_0x3bc213(0x209)]=0x0,_0x2273d7[_0x3bc213(0x286)]=!0x0,_0x2273d7[_0x3bc213(0x270)]=0x0,_0x2273d7[_0x3bc213(0x28d)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x375cdb[_0x3bc213(0x1f9)](_0x44cf11[_0x3bc213(0x229)]({},_0x5612ad[_0x34302f],_0x2273d7,{}));}return{'method':_0x3bc213(0x1f1),'version':_0x3c28ab,'args':[{'id':_0x142cf6,'ts':_0x3ce103,'args':_0x375cdb,'session':_0x2cc761}]};}catch(_0x1aeb5a){return{'method':_0x3bc213(0x1f1),'version':_0x3c28ab,'args':[{'id':_0x142cf6,'ts':_0x3ce103,'args':[{'type':_0x3bc213(0x259),'error':_0x1aeb5a&&_0x1aeb5a[_0x3bc213(0x214)],'session':_0x2cc761}]}]};}finally{try{if(_0x4f9f19&&_0x21fc23){let _0x3042e0=_0x10075e();_0x4f9f19[_0x3bc213(0x227)]++,_0x4f9f19[_0x3bc213(0x1d0)]+=_0x3042e0-_0x21fc23,_0x4f9f19['ts']=_0x3042e0,_0xb566c0['hits']['count']++,_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x1d0)]+=_0x3042e0-_0x21fc23,_0xb566c0['hits']['ts']=_0x3042e0,(_0x4f9f19[_0x3bc213(0x227)]>0x32||_0x4f9f19[_0x3bc213(0x1d0)]>0x64)&&(_0x4f9f19[_0x3bc213(0x271)]=!0x0),(_0xb566c0[_0x3bc213(0x246)][_0x3bc213(0x227)]>0x3e8||_0xb566c0[_0x3bc213(0x246)]['time']>0x12c)&&(_0xb566c0['hits'][_0x3bc213(0x271)]=!0x0);}}catch{}}}function _0x447c1b(){var _0x5e2ed7=_0x45a39f;if(_0x18f4c8['performance'])return()=>_0x18f4c8['performance'][_0x5e2ed7(0x254)]();try{let {performance:_0x1f9015}=require(_0x5e2ed7(0x22c));return()=>_0x1f9015[_0x5e2ed7(0x254)]();}catch{return()=>Date[_0x5e2ed7(0x254)]();}}})(globalThis,_0xac630d(0x27c),_0xac630d(0x1f7),\"c:\\\\Users\\\\aklil\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.71\\\\node_modules\",_0xac630d(0x1ca),'1.0.0',_0xac630d(0x1d2),_0xac630d(0x27f),_0xac630d(0x224));");
}
catch (e) { } }
; /*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/


/***/ }),

/***/ 98682:
/*!*******************************************************!*\
  !*** ./src/app/tempahkemudahan/dewan/dewan.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 30px;\n  height: 650px;\n  text-align: center;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding: 10px 0px;\n}\n\n.select {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949 !important;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\nul.ks-cboxtags {\n  list-style: none;\n  padding: 5px;\n}\n\nul.ks-cboxtags li {\n  display: inline;\n}\n\nul.ks-cboxtags li label {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 2px solid rgba(139, 139, 139, 0.3);\n  color: #adadad;\n  border-radius: 25px;\n  white-space: nowrap;\n  margin: 3px 0px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  transition: all 0.2s;\n}\n\nul.ks-cboxtags li label {\n  padding: 8px 12px;\n  cursor: pointer;\n}\n\nul.ks-cboxtags li input[type=checkbox]:checked + label {\n  border: 2px solid #3D2C7C;\n  background-color: #12bbd4;\n  color: #fff;\n  transition: 0.2s;\n}\n\nul.ks-cboxtags li input[type=checkbox] {\n  display: absolute;\n}\n\nul.ks-cboxtags li input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n}\n\nul.ks-cboxtags li input[type=checkbox]:focus + label {\n  border: 2px solid #3D2C7C;\n}\n\nul.ks-cboxtags li input[type=radio]:checked + label {\n  border: 2px solid #3D2C7C;\n  background-color: #12bbd4;\n  color: #fff;\n  transition: all 0.2s;\n}\n\nul.ks-cboxtags li input[type=radio] {\n  display: absolute;\n}\n\nul.ks-cboxtags li input[type=radio] {\n  position: absolute;\n  opacity: 0;\n}\n\nul.ks-cboxtags li input[type=radio]:focus + label {\n  border: 2px solid #3D2C7C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRld2FuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG9GQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFBQTtFQUNFLHlCQUFBO0FBR0YiLCJmaWxlIjoiZGV3YW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM0OTQ5NDkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCA0cHggNHB4IDE0cHggI0M1RDdFRTtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMkM3QztcclxuICAgIGJvcmRlcjogMXB0IHNvbGlkICMzRDJDN0M7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3Mge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG51bC5rcy1jYm94dGFncyBsaXtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxudWwua3MtY2JveHRhZ3MgbGkgbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTM5LCAxMzksIDEzOSwgLjMpO1xyXG4gICAgY29sb3I6ICNhZGFkYWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1hcmdpbjogM3B4IDBweDtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3MgbGkgbGFiZWwge1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNEMkM3QztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMmJiZDQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBkaXNwbGF5OiBhYnNvbHV0ZTtcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWwge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzRDJDN0M7XHJcbn1cclxuXHJcbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNEMkM3QztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMmJiZDQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbn1cclxuXHJcbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgZGlzcGxheTogYWJzb2x1dGU7XHJcbn1cclxuXHJcbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpmb2N1cyArIGxhYmVsIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjM0QyQzdDO1xyXG59Il19 */");

/***/ }),

/***/ 82283:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tempahkemudahan/dewan/dewan.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container\">\r\n      <div class=\"header\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\r\n        <span class=\"headertxt\">\r\n          <div style=\"width:100px;margin: auto;\">\r\n            {{ 'dewan.tempah' | translate }}<br>({{ 'dewan.dewan' | translate }})</div>\r\n        </span>\r\n      </div>\r\n      <div style=\"padding-top: 40px;\">\r\n        <ion-img src=\"../../assets/icon/DewanHead.png\" class=\"icontetapan\"></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container2\">\r\n      <div style=\"padding:0px 40px;\">\r\n        <div class=\"label\">{{ 'dewan.lokasi' | translate }}.</div>\r\n        <!-- <input class=\"select\" placeholder=\"{{ 'dewan.placelokasi' | translate }}\"> -->\r\n        <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\"\r\n          placeholder=\"{{ 'dewan.placelokasi' | translate }}\" [(ngModel)]=\"Lokasi\" (ionChange)=\"ChangeDDLokasi()\">\r\n\r\n\r\n          <ng-container *ngFor=\"let lokasi of ddLokasi; let i = index\">\r\n            <ion-select-option *ngIf=\"lokasi.nama.toLowerCase()!== 'AMBS (HQ)'.toLowerCase()\" [value]=\"lokasi.id\">\r\n              {{lokasi.nama}}\r\n            </ion-select-option>\r\n            <ion-select-option *ngIf=\"lokasi.nama.toLowerCase()=== 'AMBS (HQ)'.toLowerCase()\" [value]=\"lokasi.id\">\r\n              Al Muktafi Billah Shah\r\n            </ion-select-option>\r\n          </ng-container>\r\n\r\n\r\n        </ion-select>\r\n        <div style=\"height: 10px;\"></div>\r\n        <div class=\"label\">{{ 'dewan.dewan' | translate }}.</div>\r\n        <!-- <input class=\"select\" placeholder=\"{{ 'dewan.placedewan' | translate }}\"> -->\r\n        <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\"\r\n          placeholder=\"{{ 'dewan.placedewan' | translate }}\" [(ngModel)]=\"Dewan\" (ionChange)=\"ChangeDDDewan()\">\r\n          <ion-select-option *ngFor=\"let dewan of ddDewan; let i = index\" [value]=\"dewan.id\">\r\n            {{dewan.nama}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <div style=\"height: 10px;\"></div>\r\n        <div class=\"label\">{{ 'dewan.tarikh' | translate }}.</div>\r\n        <input class=\"select\" (click)=\"opencal()\" (ionChange)=\"ChangeDDTarikh()\" [(ngModel)]=\"TarikhVal\">\r\n        <div *ngIf=\"cal==true\" style=\"text-align: center;padding-top: 10px;\">\r\n          <ion-calendar [options]=\"caloption\" type=\"string\" [(ngModel)]=\"date\"></ion-calendar>\r\n          <button class=\"button\" style=\"width:60%\" (click)=\"pilihcal()\">Pilih</button>\r\n        </div>\r\n        <div style=\"height: 10px;\"></div>\r\n        <div *ngIf=\"masablock == true\" class=\"label\">{{ 'dewan.masa' | translate }}.</div>\r\n      </div>\r\n      <div *ngIf=\"masablock == true\">\r\n        <ul class=\"ks-cboxtags\" id=\"boxfrom\">\r\n          <li *ngFor=\"let item of timecheck\">\r\n            <input type=\"checkbox\" id=\"box{{item.val}}\" value=\"{{item.val}}\" name=\"boxtime\"\r\n              [(ngModel)]=\"item.check\"><label for=\"box{{item.val}}\">{{item.text}}</label>\r\n          </li>\r\n\r\n\r\n          <!-- <li><input type=\"checkbox\" id=\"box0\" value=\"0\" name=\"boxtime\" (change)=\"check($event)\"><label for=\"box0\">00:00 - 01:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box1\" value=\"1\" name=\"boxtime\" (change)=\"check($event)\"><label for=\"box1\">01:00 - 02:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box2\" value=\"2\" name=\"boxtime\"><label for=\"box2\">02:00 - 03:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box3\" value=\"3\" name=\"boxtime\" ><label for=\"box3\">03:00 - 04:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box4\" value=\"4\" name=\"boxtime\"><label for=\"box4\">04:00 - 05:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box5\" value=\"5\" name=\"boxtime\"><label for=\"box5\">05:00 - 06:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box6\" value=\"6\" name=\"boxtime\"><label for=\"box6\">06:00 - 07:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box7\" value=\"7\" name=\"boxtime\"><label for=\"box7\">07:00 - 08:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box8\" value=\"8\" name=\"boxtime\"><label for=\"box8\">08:00 - 09:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box9\" value=\"9\" name=\"boxtime\"><label for=\"box9\">09:00 - 10:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box10\" value=\"10\" name=\"boxtime\"><label for=\"box10\">10:00 - 11:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box11\" value=\"11\" name=\"boxtime\"><label for=\"box11\">11:00 - 12:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">12:00 - 13:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">13:00 - 13:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">14:00 - 13:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">15:00 - 13:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">16:00 - 13:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">17:00 - 13:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">18:00 - 13:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">19:00 - 13:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">20:00 - 13:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">21:00 - 13:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">22:00 - 13:00</label></li>\r\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">23:00 - 13:00</label></li> -->\r\n        </ul>\r\n      </div>\r\n      <div style=\"height: 40px;\"></div>\r\n      <div style=\"padding:0px 40px 30px 40px;\">\r\n        <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'hantar' | translate }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tempahkemudahan_dewan_dewan_module_ts.js.map