(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_tempahkemudahan_fasiliti_fasiliti_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let FasilitiService = class FasilitiService {
    constructor(http) {
        this.http = http;
    }
    getfutsal() {
        var AlatanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "futsal";
        return this.http.get(AlatanURL);
    }
    getbadminton() {
        var AlatanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "badminton";
        return this.http.get(AlatanURL);
    }
};
FasilitiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
FasilitiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
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

/***/ 25352:
/*!*********************************************************************!*\
  !*** ./src/app/tempahkemudahan/fasiliti/fasiliti-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FasilitiPageRoutingModule": () => (/* binding */ FasilitiPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _fasiliti_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fasiliti.page */ 93581);




const routes = [
    {
        path: '',
        component: _fasiliti_page__WEBPACK_IMPORTED_MODULE_0__.FasilitiPage
    }
];
let FasilitiPageRoutingModule = class FasilitiPageRoutingModule {
};
FasilitiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FasilitiPageRoutingModule);



/***/ }),

/***/ 46339:
/*!*************************************************************!*\
  !*** ./src/app/tempahkemudahan/fasiliti/fasiliti.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "FasilitiPageModule": () => (/* binding */ FasilitiPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _fasiliti_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fasiliti-routing.module */ 25352);
/* harmony import */ var _fasiliti_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fasiliti.page */ 93581);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ion2-calendar */ 18834);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_3__);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

let FasilitiPageModule = class FasilitiPageModule {
};
FasilitiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _fasiliti_routing_module__WEBPACK_IMPORTED_MODULE_0__.FasilitiPageRoutingModule,
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
            })
        ],
        declarations: [_fasiliti_page__WEBPACK_IMPORTED_MODULE_1__.FasilitiPage]
    })
], FasilitiPageModule);



/***/ }),

/***/ 93581:
/*!***********************************************************!*\
  !*** ./src/app/tempahkemudahan/fasiliti/fasiliti.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FasilitiPage": () => (/* binding */ FasilitiPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_fasiliti_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fasiliti.page.html */ 68103);
/* harmony import */ var _fasiliti_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fasiliti.page.scss */ 80973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shared_services_lokasi_lokasi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/lokasi/lokasi.service */ 75836);
/* harmony import */ var src_app_shared_services_fasiliti_fasiliti_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/fasiliti/fasiliti.service */ 10419);
/* harmony import */ var src_app_shared_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/booking/booking.service */ 6659);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);











let FasilitiPage = class FasilitiPage {
    constructor(location, loadingController, lokasiService, alertController, fasilitiService, bookingService, router, nativeStorage) {
        this.location = location;
        this.loadingController = loadingController;
        this.lokasiService = lokasiService;
        this.alertController = alertController;
        this.fasilitiService = fasilitiService;
        this.bookingService = bookingService;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.cal = false;
        this.caloption = {
            // pickMode: 'multi',
            title: 'FASILITI',
            daysConfig: []
        };
        this.masablock = false;
        this.lokasiread = true;
        this.gelanggangread = true;
        this.tarikhread = true;
        this.timecheck = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.ddFasiliti = [
                {
                    id: "1",
                    nama: "Futsal"
                },
                {
                    id: "2",
                    nama: "Badminton"
                }
            ];
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
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.lokasiService.getdd().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.ddLokasi = res;
                yield this.fasilitiService.getfutsal().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(res);
                    this.listfutsal = res;
                    yield this.fasilitiService.getbadminton().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        console.log(res);
                        this.listbadminton = res;
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
    ChangeDDLokasi() {
        if (this.Lokasi == 1) {
            this.ddFasiliti = [
                {
                    id: "1",
                    nama: "Futsal"
                },
                {
                    id: "2",
                    nama: "Badminton"
                }
            ];
            this.lokasiread = false;
        }
        else {
            this.ddFasiliti = [
                {
                    id: "2",
                    nama: "Badminton"
                }
            ];
            this.lokasiread = false;
        }
        ;
        this.Fasiliti = '';
        this.Gelanggang = '';
        this.gelanggangread = true;
        this.tarikhread = true;
    }
    ChangeDDFasiliti() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.gelanggangread = false;
            this.tarikhread = false;
            if (this.Fasiliti == 1) {
                this.ddGelanggang = this.listfutsal;
            }
            else if (this.Fasiliti == 2) {
                this.ddGelanggang = [];
                var array = [];
                var val = this.Lokasi;
                console.log(val);
                yield this.listbadminton.forEach(function (value) {
                    if (value.lokasi == val) {
                        array.push(value);
                    }
                });
                this.ddGelanggang = array;
            }
        });
    }
    ChangeDDGelanggang() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.tarikhread = false;
            var opt = [];
            var gelanggang = this.Gelanggang;
            var fasiliti = this.Fasiliti;
            yield this.listbooking.forEach(function (value) {
                if (fasiliti == 1) {
                    if (value.ft_court_id == gelanggang) {
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
                }
                else if (fasiliti == 2) {
                    if (value.bd_court_id == gelanggang) {
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
                }
            });
            this.caloption.daysConfig = opt;
            console.log(this.caloption);
            if (this.cal == true) {
                this.cal = false;
            }
        });
    }
    back() {
        this.location.back();
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
        const fromdate = new Date(this.date);
        this.masablock = true;
        this.days = 1;
        this.TarikhVal = fromdate.getDate() + '/' + fromdate.getMonth() + '/' + fromdate.getFullYear();
        this.ChangeDDTarikh();
    }
    ChangeDDTarikh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.Fasiliti == 1) {
                var court = this.Gelanggang;
            }
            else if (this.Fasiliti == 2) {
                var court = this.Gelanggang;
            }
            var fasiliti = this.Fasiliti;
            var alltime = [];
            yield this.listbooking.forEach(function (value) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(value);
                    if (fasiliti == 1) {
                        if (value.ft_court_id == court) {
                            if (value.days == 1) {
                                var time = value.time.split(",");
                                yield time.forEach(function (value) {
                                    alltime.push(value);
                                });
                            }
                        }
                    }
                    else if (fasiliti == 2) {
                        if (value.bd_court_id == court) {
                            if (value.days == 1) {
                                var time = value.time.split(",");
                                yield time.forEach(function (value) {
                                    alltime.push(value);
                                });
                            }
                        }
                    }
                });
            });
            console.log('alltime', alltime);
            this.ChangeMasa(alltime);
        });
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
    hantar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            var harga = 0;
            const formData = new FormData();
            formData.append('user_id', this.user.user_id);
            if (this.Fasiliti == 1) {
                formData.append('futsal', this.Gelanggang);
                var court = this.Gelanggang;
                this.listfutsal.forEach(function (value) {
                    if (value.id == court) {
                        harga = value.harga;
                        return;
                    }
                });
                console.log('timecheck', this.timecheck);
                if (this.timecheck != []) {
                    console.log(this.timecheck);
                    var array = [];
                    yield this.timecheck.forEach(function (value) {
                        if (value.check == true) {
                            console.log(value);
                            array.push(value.val);
                        }
                    });
                    this.masa = array.toString();
                    this.hour = array.length;
                    this.amaun = harga * this.hour;
                }
            }
            else if (this.Fasiliti == 2) {
                formData.append('badminton', this.Gelanggang);
                var court = this.Gelanggang;
                this.listfutsal.forEach(function (value) {
                    if (value.id == court) {
                        harga = value.harga;
                        return;
                    }
                });
                console.log('timecheck', this.timecheck);
                if (this.timecheck != []) {
                    console.log(this.timecheck);
                    var array = [];
                    yield this.timecheck.forEach(function (value) {
                        if (value.check == true) {
                            console.log(value);
                            array.push(value.val);
                        }
                    });
                    this.masa = array.toString();
                    this.hour = array.length;
                    this.amaun = harga * this.hour;
                }
            }
            console.log('masa', this.masa);
            if (this.date == undefined) {
                yield loading.dismiss();
                this.alerterror('Tarikh diperlukan');
            }
            formData.append('tarikh_mula', this.date);
            formData.append('tarikh_akhir', this.date);
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
                if (this.Fasiliti == 1) {
                    var kod = "FT" + res.id;
                }
                else if (this.Fasiliti == 2) {
                    var kod = "BD" + res.id;
                }
                akaun = {
                    "id": '',
                    "amaun": this.amaun,
                    "kodbayaran": kod,
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
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    clearform() {
        this.Lokasi = '';
        this.Fasiliti = '';
        this.Gelanggang = '';
        this.TarikhVal = '';
        this.date = '';
        this.masablock = false;
        this.timecheck = [];
    }
};
FasilitiPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _shared_services_lokasi_lokasi_service__WEBPACK_IMPORTED_MODULE_2__.LokasiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_shared_services_fasiliti_fasiliti_service__WEBPACK_IMPORTED_MODULE_3__.FasilitiService },
    { type: src_app_shared_services_booking_booking_service__WEBPACK_IMPORTED_MODULE_4__.BookingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__.NativeStorage }
];
FasilitiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-fasiliti',
        template: _raw_loader_fasiliti_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fasiliti_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FasilitiPage);



/***/ }),

/***/ 80973:
/*!*************************************************************!*\
  !*** ./src/app/tempahkemudahan/fasiliti/fasiliti.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 30px;\n  height: 650px;\n  text-align: center;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding: 10px 0px;\n}\n\n.select {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949 !important;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\nul.ks-cboxtags {\n  list-style: none;\n  padding: 5px;\n}\n\nul.ks-cboxtags li {\n  display: inline;\n}\n\nul.ks-cboxtags li label {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 2px solid rgba(139, 139, 139, 0.3);\n  color: #adadad;\n  border-radius: 25px;\n  white-space: nowrap;\n  margin: 3px 0px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  transition: all 0.2s;\n}\n\nul.ks-cboxtags li label {\n  padding: 8px 12px;\n  cursor: pointer;\n}\n\nul.ks-cboxtags li input[type=checkbox]:checked + label {\n  border: 2px solid #3D2C7C;\n  background-color: #12bbd4;\n  color: #fff;\n  transition: 0.2s;\n}\n\nul.ks-cboxtags li input[type=checkbox] {\n  display: absolute;\n}\n\nul.ks-cboxtags li input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n}\n\nul.ks-cboxtags li input[type=checkbox]:focus + label {\n  border: 2px solid #3D2C7C;\n}\n\nul.ks-cboxtags li input[type=radio]:checked + label {\n  border: 2px solid #3D2C7C;\n  background-color: #12bbd4;\n  color: #fff;\n  transition: all 0.2s;\n}\n\nul.ks-cboxtags li input[type=radio] {\n  display: absolute;\n}\n\nul.ks-cboxtags li input[type=radio] {\n  position: absolute;\n  opacity: 0;\n}\n\nul.ks-cboxtags li input[type=radio]:focus + label {\n  border: 2px solid #3D2C7C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhc2lsaXRpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG9GQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFBQTtFQUNFLHlCQUFBO0FBR0YiLCJmaWxlIjoiZmFzaWxpdGkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFiZWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiAjNDk0OTQ5O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG4uc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0QyQzdDO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IzQ5NDk0OSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCA0cHggNHB4IDE0cHggI0M1RDdFRTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMkM3QztcbiAgICBib3JkZXI6IDFwdCBzb2xpZCAjM0QyQzdDO1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjphdXRvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbn1cblxudWwua3MtY2JveHRhZ3Mge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4O1xufVxudWwua3MtY2JveHRhZ3MgbGl7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbnVsLmtzLWNib3h0YWdzIGxpIGxhYmVse1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEzOSwgMTM5LCAxMzksIC4zKTtcbiAgICBjb2xvcjogI2FkYWRhZDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luOiAzcHggMHB4O1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgbGFiZWwge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzNEMkM3QztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJiYmQ0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IC4ycztcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgZGlzcGxheTogYWJzb2x1dGU7XG59XG5cbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWwge1xuICBib3JkZXI6IDJweCBzb2xpZCAjM0QyQzdDO1xufVxuXG51bC5rcy1jYm94dGFncyBsaSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM0QyQzdDO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMmJiZDQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgZGlzcGxheTogYWJzb2x1dGU7XG59XG5cbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbn1cblxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmZvY3VzICsgbGFiZWwge1xuICBib3JkZXI6IDJweCBzb2xpZCAjM0QyQzdDO1xufSJdfQ== */");

/***/ }),

/***/ 68103:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tempahkemudahan/fasiliti/fasiliti.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">\n          <div style=\"width:100px;margin: auto;\">\n            {{ 'dewan.tempah' | translate }}<br>({{ 'fasiliti.fasiliti' | translate }})</div></span>\n      </div>\n      <div style=\"padding-top: 40px;\">\n        <ion-img src=\"../../assets/icon/fasilitiHead.png\" class=\"icontetapan\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div style=\"padding:0px 40px;\">\n        <div class=\"label\">{{ 'dewan.lokasi' | translate }}.</div>\n        <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" placeholder=\"{{ 'dewan.placelokasi' | translate }}\" [(ngModel)]=\"Lokasi\" (ionChange)=\"ChangeDDLokasi()\">\n          <ion-select-option *ngFor=\"let lokasi of ddLokasi; let i = index\" [value]=\"lokasi.id\">\n            {{lokasi.nama}}\n          </ion-select-option>\n        </ion-select>\n        <div style=\"height: 10px;\"></div>\n        <div class=\"label\">{{ 'fasiliti.fasiliti' | translate }}.</div>\n        <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" placeholder=\"{{ 'fasiliti.placefasiliti' | translate }}\" [(ngModel)]=\"Fasiliti\" (ionChange)=\"ChangeDDFasiliti()\" [disabled]=\"lokasiread\">\n          <ion-select-option *ngFor=\"let fasiliti of ddFasiliti; let i = index\" [value]=\"fasiliti.id\">\n            {{fasiliti.nama}}\n          </ion-select-option>\n        </ion-select>\n        <div style=\"height: 10px;\"></div>\n        <div class=\"label\">{{ 'fasiliti.gelanggang' | translate }}.</div>\n        <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" placeholder=\"{{ 'fasiliti.placegelanggang' | translate }}\" [(ngModel)]=\"Gelanggang\" (ionChange)=\"ChangeDDGelanggang()\" [disabled]=\"gelanggangread\">\n          <ion-select-option *ngFor=\"let gelanggang of ddGelanggang; let i = index\" [value]=\"gelanggang.id\">\n            {{gelanggang.nama_gelanggang}}\n          </ion-select-option>\n        </ion-select>\n        <div style=\"height: 10px;\"></div>\n        <div class=\"label\">{{ 'dewan.tarikh' | translate }}.</div>\n        <input class=\"select\" placeholder=\"00/00/0000 - 00/00/0000\" (click)=\"opencal()\" (ionChange)=\"ChangeDDTarikh()\" [(ngModel)]=\"TarikhVal\" [disabled]=\"tarikhread\">\n        <div *ngIf=\"cal==true\" style=\"text-align: center;padding-top: 10px;\">\n          <ion-calendar [options]=\"caloption\" type=\"string\" [(ngModel)]=\"date\"></ion-calendar>\n          <button class=\"button\" style=\"width:60%\" (click)=\"pilihcal()\">Pilih</button>\n        </div>\n        <div style=\"height: 10px;\"></div>\n        <div *ngIf=\"masablock == true\" class=\"label\">{{ 'dewan.masa' | translate }}.</div>\n      </div>\n      <div *ngIf=\"masablock == true\">\n        <ul class=\"ks-cboxtags\" id=\"boxfrom\">\n          <li *ngFor=\"let item of timecheck\">\n            <input type=\"checkbox\" id=\"box{{item.val}}\" value=\"{{item.val}}\" name=\"boxtime\" [(ngModel)]=\"item.check\"><label for=\"box{{item.val}}\">{{item.text}}</label>\n          </li>\n        </ul>\n      </div>\n      <div style=\"height: 40px;\"></div>\n      <div style=\"padding:0px 40px 30px 40px;\">\n        <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'hantar' | translate }}</button>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tempahkemudahan_fasiliti_fasiliti_module_ts.js.map