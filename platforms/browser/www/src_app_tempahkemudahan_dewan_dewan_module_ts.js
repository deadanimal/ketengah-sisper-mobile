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
                console.log(res);
                this.ddLokasi = res;
                yield this.dewanService.getdd().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    this.listdewan = res;
                    yield this.bookingService.get().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        console.log(res);
                        this.listbooking = res;
                        yield loading.dismiss();
                    }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        console.log(res);
                        yield loading.dismiss();
                        const alert = yield this.alertController.create({
                            header: 'Loading failed',
                            message: res.message,
                            buttons: ['OK'],
                        });
                        yield alert.present();
                    }));
                }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    yield loading.dismiss();
                    const alert = yield this.alertController.create({
                        header: 'Loading failed',
                        message: res.message,
                        buttons: ['OK'],
                    });
                    yield alert.present();
                }));
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    ChangeDDLokasi() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.ddDewan = [];
            var array = [];
            var val = this.Lokasi;
            console.log(val);
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
                        console.log(opt);
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
            console.log(this.timecheck);
            this.amaun = harga * this.days;
            console.log(this.amaun);
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
                console.log(res);
                this.clearform();
                yield loading.dismiss();
                var arr = [];
                var akaun = {};
                console.log(res);
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
        console.log(time);
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
        console.log(this.timecheck);
    }
    ChangeDDTarikh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var dewan = this.Dewan;
            var date = this.date;
            var hari = this.days;
            var time = [];
            var alltime = [];
            var exist = 0;
            console.log(hari);
            yield this.listbooking.forEach(function (value) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(value);
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
                                console.log(new Date(value.date_from));
                                console.log(haribaru);
                                if (new Date(value.date_from).getTime() == haribaru.getTime()) {
                                    console.log('jadi');
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
            console.log('alltime', alltime);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 30px;\n  height: 650px;\n  text-align: center;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding: 10px 0px;\n}\n\n.select {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949 !important;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\nul.ks-cboxtags {\n  list-style: none;\n  padding: 5px;\n}\n\nul.ks-cboxtags li {\n  display: inline;\n}\n\nul.ks-cboxtags li label {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 2px solid rgba(139, 139, 139, 0.3);\n  color: #adadad;\n  border-radius: 25px;\n  white-space: nowrap;\n  margin: 3px 0px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  transition: all 0.2s;\n}\n\nul.ks-cboxtags li label {\n  padding: 8px 12px;\n  cursor: pointer;\n}\n\nul.ks-cboxtags li input[type=checkbox]:checked + label {\n  border: 2px solid #3D2C7C;\n  background-color: #12bbd4;\n  color: #fff;\n  transition: 0.2s;\n}\n\nul.ks-cboxtags li input[type=checkbox] {\n  display: absolute;\n}\n\nul.ks-cboxtags li input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n}\n\nul.ks-cboxtags li input[type=checkbox]:focus + label {\n  border: 2px solid #3D2C7C;\n}\n\nul.ks-cboxtags li input[type=radio]:checked + label {\n  border: 2px solid #3D2C7C;\n  background-color: #12bbd4;\n  color: #fff;\n  transition: all 0.2s;\n}\n\nul.ks-cboxtags li input[type=radio] {\n  display: absolute;\n}\n\nul.ks-cboxtags li input[type=radio] {\n  position: absolute;\n  opacity: 0;\n}\n\nul.ks-cboxtags li input[type=radio]:focus + label {\n  border: 2px solid #3D2C7C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRld2FuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG9GQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFBQTtFQUNFLHlCQUFBO0FBR0YiLCJmaWxlIjoiZGV3YW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFiZWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG4uc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IzQ5NDk0OSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCA0cHggNHB4IDE0cHggI0M1RDdFRTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMkM3QztcbiAgICBib3JkZXI6IDFwdCBzb2xpZCAjM0QyQzdDO1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjphdXRvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbn1cblxudWwua3MtY2JveHRhZ3Mge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4O1xufVxudWwua3MtY2JveHRhZ3MgbGl7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbnVsLmtzLWNib3h0YWdzIGxpIGxhYmVse1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEzOSwgMTM5LCAxMzksIC4zKTtcbiAgICBjb2xvcjogI2FkYWRhZDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luOiAzcHggMHB4O1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgbGFiZWwge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzNEMkM3QztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJiYmQ0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IC4ycztcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgZGlzcGxheTogYWJzb2x1dGU7XG59XG5cbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWwge1xuICBib3JkZXI6IDJweCBzb2xpZCAjM0QyQzdDO1xufVxuXG51bC5rcy1jYm94dGFncyBsaSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM0QyQzdDO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMmJiZDQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgZGlzcGxheTogYWJzb2x1dGU7XG59XG5cbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmZvY3VzICsgbGFiZWwge1xuICBib3JkZXI6IDJweCBzb2xpZCAjM0QyQzdDO1xufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">\n          <div style=\"width:100px;margin: auto;\">\n            {{ 'dewan.tempah' | translate }}<br>({{ 'dewan.dewan' | translate }})</div>\n        </span>\n      </div>\n      <div style=\"padding-top: 40px;\">\n        <ion-img src=\"../../assets/icon/DewanHead.png\" class=\"icontetapan\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div style=\"padding:0px 40px;\">\n        <div class=\"label\">{{ 'dewan.lokasi' | translate }}.</div>\n        <!-- <input class=\"select\" placeholder=\"{{ 'dewan.placelokasi' | translate }}\"> -->\n        <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\"\n          placeholder=\"{{ 'dewan.placelokasi' | translate }}\" [(ngModel)]=\"Lokasi\" (ionChange)=\"ChangeDDLokasi()\">\n\n\n          <ng-container *ngFor=\"let lokasi of ddLokasi; let i = index\">\n            <ion-select-option *ngIf=\"lokasi.nama.toLowerCase()!== 'AMBS (HQ)'.toLowerCase()\" [value]=\"lokasi.id\">\n              {{lokasi.nama}}\n            </ion-select-option>\n            <ion-select-option *ngIf=\"lokasi.nama.toLowerCase()=== 'AMBS (HQ)'.toLowerCase()\" [value]=\"lokasi.id\">\n              Al Muktafi Billah Shah\n            </ion-select-option>\n          </ng-container>\n\n\n        </ion-select>\n        <div style=\"height: 10px;\"></div>\n        <div class=\"label\">{{ 'dewan.dewan' | translate }}.</div>\n        <!-- <input class=\"select\" placeholder=\"{{ 'dewan.placedewan' | translate }}\"> -->\n        <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\"\n          placeholder=\"{{ 'dewan.placedewan' | translate }}\" [(ngModel)]=\"Dewan\" (ionChange)=\"ChangeDDDewan()\">\n          <ion-select-option *ngFor=\"let dewan of ddDewan; let i = index\" [value]=\"dewan.id\">\n            {{dewan.nama}}\n          </ion-select-option>\n        </ion-select>\n        <div style=\"height: 10px;\"></div>\n        <div class=\"label\">{{ 'dewan.tarikh' | translate }}.</div>\n        <input class=\"select\" (click)=\"opencal()\" (ionChange)=\"ChangeDDTarikh()\" [(ngModel)]=\"TarikhVal\">\n        <div *ngIf=\"cal==true\" style=\"text-align: center;padding-top: 10px;\">\n          <ion-calendar [options]=\"caloption\" type=\"string\" [(ngModel)]=\"date\"></ion-calendar>\n          <button class=\"button\" style=\"width:60%\" (click)=\"pilihcal()\">Pilih</button>\n        </div>\n        <div style=\"height: 10px;\"></div>\n        <div *ngIf=\"masablock == true\" class=\"label\">{{ 'dewan.masa' | translate }}.</div>\n      </div>\n      <div *ngIf=\"masablock == true\">\n        <ul class=\"ks-cboxtags\" id=\"boxfrom\">\n          <li *ngFor=\"let item of timecheck\">\n            <input type=\"checkbox\" id=\"box{{item.val}}\" value=\"{{item.val}}\" name=\"boxtime\"\n              [(ngModel)]=\"item.check\"><label for=\"box{{item.val}}\">{{item.text}}</label>\n          </li>\n\n\n          <!-- <li><input type=\"checkbox\" id=\"box0\" value=\"0\" name=\"boxtime\" (change)=\"check($event)\"><label for=\"box0\">00:00 - 01:00</label></li>\n          <li><input type=\"checkbox\" id=\"box1\" value=\"1\" name=\"boxtime\" (change)=\"check($event)\"><label for=\"box1\">01:00 - 02:00</label></li>\n          <li><input type=\"checkbox\" id=\"box2\" value=\"2\" name=\"boxtime\"><label for=\"box2\">02:00 - 03:00</label></li>\n          <li><input type=\"checkbox\" id=\"box3\" value=\"3\" name=\"boxtime\" ><label for=\"box3\">03:00 - 04:00</label></li>\n          <li><input type=\"checkbox\" id=\"box4\" value=\"4\" name=\"boxtime\"><label for=\"box4\">04:00 - 05:00</label></li>\n          <li><input type=\"checkbox\" id=\"box5\" value=\"5\" name=\"boxtime\"><label for=\"box5\">05:00 - 06:00</label></li>\n          <li><input type=\"checkbox\" id=\"box6\" value=\"6\" name=\"boxtime\"><label for=\"box6\">06:00 - 07:00</label></li>\n          <li><input type=\"checkbox\" id=\"box7\" value=\"7\" name=\"boxtime\"><label for=\"box7\">07:00 - 08:00</label></li>\n          <li><input type=\"checkbox\" id=\"box8\" value=\"8\" name=\"boxtime\"><label for=\"box8\">08:00 - 09:00</label></li>\n          <li><input type=\"checkbox\" id=\"box9\" value=\"9\" name=\"boxtime\"><label for=\"box9\">09:00 - 10:00</label></li>\n          <li><input type=\"checkbox\" id=\"box10\" value=\"10\" name=\"boxtime\"><label for=\"box10\">10:00 - 11:00</label></li>\n          <li><input type=\"checkbox\" id=\"box11\" value=\"11\" name=\"boxtime\"><label for=\"box11\">11:00 - 12:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">12:00 - 13:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">13:00 - 13:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">14:00 - 13:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">15:00 - 13:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">16:00 - 13:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">17:00 - 13:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">18:00 - 13:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">19:00 - 13:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">20:00 - 13:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">21:00 - 13:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">22:00 - 13:00</label></li>\n          <li><input type=\"checkbox\" id=\"box12\" value=\"12\" name=\"boxtime\"><label for=\"box12\">23:00 - 13:00</label></li> -->\n        </ul>\n      </div>\n      <div style=\"height: 40px;\"></div>\n      <div style=\"padding:0px 40px 30px 40px;\">\n        <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'hantar' | translate }}</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tempahkemudahan_dewan_dewan_module_ts.js.map