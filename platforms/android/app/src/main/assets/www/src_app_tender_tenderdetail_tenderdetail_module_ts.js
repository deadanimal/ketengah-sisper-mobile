(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_tender_tenderdetail_tenderdetail_module_ts"],{

/***/ 17975:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/shtenderdtl/shtenderdtl.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShtenderdtlService": () => (/* binding */ ShtenderdtlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let ShtenderdtlService = class ShtenderdtlService {
    constructor(http) {
        this.http = http;
    }
    get(id) {
        var tenderURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "tenderdtl/" + id;
        return this.http.get(tenderURL);
    }
    add(data) {
        var tenderURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "tenderdtl";
        return this.http.post(tenderURL, data);
    }
    update(data, id) {
        var tenderURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "tenderdtl/" + id;
        console.log(data);
        return this.http.put(tenderURL, data);
    }
    delete(id) {
        var tenderURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "tenderdtl/" + id;
        return this.http.delete(tenderURL);
    }
};
ShtenderdtlService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ShtenderdtlService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ShtenderdtlService);



/***/ }),

/***/ 16860:
/*!********************************************************************!*\
  !*** ./src/app/tender/tenderdetail/tenderdetail-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenderdetailPageRoutingModule": () => (/* binding */ TenderdetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tenderdetail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tenderdetail.page */ 97534);




const routes = [
    {
        path: '',
        component: _tenderdetail_page__WEBPACK_IMPORTED_MODULE_0__.TenderdetailPage
    }
];
let TenderdetailPageRoutingModule = class TenderdetailPageRoutingModule {
};
TenderdetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TenderdetailPageRoutingModule);



/***/ }),

/***/ 26732:
/*!************************************************************!*\
  !*** ./src/app/tender/tenderdetail/tenderdetail.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "TenderdetailPageModule": () => (/* binding */ TenderdetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tenderdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tenderdetail-routing.module */ 16860);
/* harmony import */ var _tenderdetail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenderdetail.page */ 97534);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let TenderdetailPageModule = class TenderdetailPageModule {
};
TenderdetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tenderdetail_routing_module__WEBPACK_IMPORTED_MODULE_0__.TenderdetailPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_tenderdetail_page__WEBPACK_IMPORTED_MODULE_1__.TenderdetailPage]
    })
], TenderdetailPageModule);



/***/ }),

/***/ 97534:
/*!**********************************************************!*\
  !*** ./src/app/tender/tenderdetail/tenderdetail.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TenderdetailPage": () => (/* binding */ TenderdetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tenderdetail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tenderdetail.page.html */ 70778);
/* harmony import */ var _tenderdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenderdetail.page.scss */ 69826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_services_shtenderdtl_shtenderdtl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/shtenderdtl/shtenderdtl.service */ 17975);
/* harmony import */ var _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/native-storage/ngx */ 34113);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);










let TenderdetailPage = class TenderdetailPage {
    constructor(location, fb, loadingController, alertController, shtenderdtlService, nativeStorage, router) {
        this.location = location;
        this.fb = fb;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.shtenderdtlService = shtenderdtlService;
        this.nativeStorage = nativeStorage;
        this.router = router;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.ddUrusan = [
                {
                    id: "PB002",
                    urusan: "PEMBELIAN BORANG SEBUTHARGA"
                },
                {
                    id: "PB018",
                    urusan: "PEMBELIAN BORANG TENDER"
                }
            ];
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.nativeStorage.getItem('user').then(data => {
                this.user = data.value;
            }, error => console.error(error));
            yield loading.dismiss();
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.jumlah = 0;
            this.jumcount = 0;
            this.tenderform = this.fb.group({
                sh_id: [],
                kod_urusan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                jumlah_bayar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                catatan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
            });
            yield this.shtenderdtlService.get(this.user.tender).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.TenderList = res;
                console.log(this.TenderList);
                yield loading.dismiss();
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    hantar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            if (this.tenderform.value.kod_urusan == '') {
                this.alerterror('Urusan diperlukan');
            }
            else {
                console.log(this.user.tender);
                this.tenderform.patchValue({
                    sh_id: this.user.tender
                });
                console.log(this.tenderform.value);
                yield this.shtenderdtlService.add(this.tenderform.value).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    this.TenderList.push(res);
                    this.tenderform.reset();
                    this.TenderList.forEach(element => {
                        element.selectedValue == false;
                    });
                    console.log(res);
                    yield loading.dismiss();
                }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        });
    }
    check(data) {
        // // this.selected = data;
        // this.jumlah = data.harga;
        // if(data.check == true){
        //   // this.jumcount = this.jumcount - 1;
        //   this.jumlah = this.jumlah + data.harga;
        // }else if(data.check == false){
        //   // this.jumcount = this.jumcount + 1;
        //   this.jumlah = this.jumlah + data.harga;
        // }
        // console.log(this.jumlah);
    }
    bayar() {
        var arr = [];
        var akaun = {};
        this.TenderList;
        this.TenderList.forEach(element => {
            if (element.check == true) {
                akaun = {
                    "id": '',
                    "amaun": element.harga,
                    "kodbayaran": element.urusan,
                };
                arr.push(akaun);
                this.jumlah = this.jumlah + parseInt(element.harga);
                this.jumcount++;
            }
        });
        var data = {
            "src": 2,
            "jumlah": this.jumlah,
            "jumcount": this.jumcount,
            "akaun": arr
        };
        console.log(this.jumlah);
        let navigationExtras = {
            state: {
                data: data
            }
        };
        this.router.navigate(['main/tabs/bayaran'], navigationExtras);
    }
    edit(item) {
        var element = document.getElementById('editform' + item.id).style.display;
        var formelem = document.getElementsByName('editformname');
        formelem.forEach(element => {
            if (element.style.display == 'block') {
                element.style.display = 'none';
            }
        });
        if (element == 'none') {
            console.log('none', element);
            document.getElementById('editform' + item.id).style.display = 'block';
        }
        else {
            document.getElementById('editform' + item.id).style.display = 'none';
            console.log(element);
        }
        this.urusan = item.urusan;
        this.harga = item.harga;
        this.catatan = item.catatan;
    }
    deleteone(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(id);
            const loading = yield this.loadingController.create();
            yield loading.present();
            yield this.shtenderdtlService.delete(id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.TenderList.forEach(function (item, index, object) {
                    if (item.id == id) {
                        object.splice(index, 1);
                    }
                });
                console.log(this.TenderList);
                yield loading.dismiss();
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    update(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(id);
            const loading = yield this.loadingController.create();
            yield loading.present();
            console.log(this.urusan);
            var data = [
                {
                    "urusan": this.urusan,
                    "harga": this.harga,
                    "catatan": this.catatan
                }
            ];
            yield this.shtenderdtlService.update(data[0], id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.TenderList.forEach(function (item, index, object) {
                    if (item.id == id) {
                        object[index].urusan = res.urusan;
                        object[index].harga = res.harga;
                        object[index].catatan = res.catatan;
                    }
                });
                document.getElementById('editform' + id).style.display = 'none';
                console.log(this.TenderList);
                yield loading.dismiss();
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Loading failed',
                message: msg,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
TenderdetailPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_shared_services_shtenderdtl_shtenderdtl_service__WEBPACK_IMPORTED_MODULE_2__.ShtenderdtlService },
    { type: _awesome_cordova_plugins_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeStorage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
TenderdetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tenderdetail',
        template: _raw_loader_tenderdetail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tenderdetail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TenderdetailPage);



/***/ }),

/***/ 69826:
/*!************************************************************!*\
  !*** ./src/app/tender/tenderdetail/tenderdetail.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  height: 650px;\n  text-align: left;\n}\n\n.headerbox {\n  padding: 0px 20px 0px 20px;\n}\n\n.select {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 10px;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n}\n\n.descbox {\n  padding: 40px 60px 40px 60px;\n}\n\n.textarea {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  border-radius: 9px;\n  padding: 20px;\n  color: black;\n}\n\n.button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.cardaduan {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 100%;\n  height: 120px;\n  display: inline-block;\n  padding: 10px 10px;\n}\n\n.cardhead {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  padding: 5px;\n}\n\n.carddetail {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n  padding: 5px;\n}\n\n.carddetail2 {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  letter-spacing: -0.165px;\n  color: #D23330;\n  padding: 5px;\n}\n\n.icon {\n  height: 110px;\n  width: 45px;\n  text-align: center;\n  border-radius: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbmRlcmRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9GQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdFO0VBQ0UsNEJBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0ZBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoidGVuZGVyZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIyIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuLmhlYWRlcmJveCB7XG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjojNDk0OTQ5O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC00cHggLTRweCA5cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCA0cHggNHB4IDE0cHggI0M1RDdFRTtcbiAgICBwYWRkaW5nOjEwcHg7XG59XG5cbi5sYWJlbCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6ICM0OTQ5NDk7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG4gIFxuICAuZGVzY2JveCB7XG4gICAgcGFkZGluZzogNDBweCA2MHB4IDQwcHggNjBweDtcbiAgfVxuICBcbiAgLnRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRDJDN0M7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTRweCAtNHB4IDlweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDRweCA0cHggMTRweCAjQzVEN0VFO1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBwYWRkaW5nOjIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMkM3QztcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46YXV0bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIH1cblxuLmNhcmRhZHVhbiB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGN0ZBRkQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNzMsIDg3LCAxODQsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cblxuLmNhcmRoZWFkIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcbiAgY29sb3I6ICM0OTQ5NDk7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmNhcmRkZXRhaWwge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2NXB4O1xuICBjb2xvcjogIzNEMkM3QztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uY2FyZGRldGFpbDIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2NXB4O1xuICBjb2xvcjogI0QyMzMzMDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaWNvbiB7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiA0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbn0iXX0= */");

/***/ }),

/***/ 70778:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tender/tenderdetail/tenderdetail.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"header\">\n        <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n        <span class=\"headertxt\">{{ 'tender.tender' | translate }}</span>\n      </div>\n      <div style=\"padding-top: 40px;\">\n        <ion-img src=\"../../assets/icon/tender.png\" class=\"icontetapan\"></ion-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"main2\">\n    <div class=\"container2\">\n      <div class=\"headerbox\">\n        <div class=\"descbox\">\n          <form *ngIf=\"tenderform\" [formGroup]=\"tenderform\">\n            <div class=\"label\">{{ 'lain.urusan' | translate }}</div>\n            <div style=\"height: 10px;\"></div>\n            <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" formControlName=\"kod_urusan\">\n              <ion-select-option *ngFor=\"let urusan of ddUrusan; let i = index\" [value]=\"urusan.id\">\n                {{urusan.urusan}}\n              </ion-select-option>\n            </ion-select>\n            <div style=\"height: 30px;\"></div>\n            <div class=\"label\">{{ 'tender.NSH' | translate }} (RM)</div>\n            <div style=\"height: 10px;\"></div>\n            <input type=\"number\" class=\"select\" placeholder=\"00.00\" formControlName=\"jumlah_bayar\">\n            <div style=\"height: 30px;\"></div>\n            <div class=\"label\">{{ 'lain.catatan' | translate }}</div>\n            <div style=\"height: 10px;\"></div>\n            <textarea class=\"textarea\" rows=\"7\" cols=\"50\" formControlName=\"catatan\"></textarea>\n            <div style=\"height: 30px;\"></div>\n            <button ion-button class=\"button\" (click)=\"hantar()\">{{ 'simpan' | translate }}</button>\n          </form>\n        </div>\n        <div style=\"height: 30px;\"></div>\n          <ion-radio-group value=\"biff\">\n            <div *ngFor=\"let item of TenderList\">\n              <ion-item-sliding>\n                <ion-item >\n                  <ion-checkbox slot=\"start\" class=\"check\" [(ngModel)]=\"item.check\"></ion-checkbox>\n                  <!-- <ion-radio slot=\"start\" value=\"{{item.id}}\" style=\"margin-inline-end:15px;\" (click)=\"check(item)\"></ion-radio> -->\n                  <div class=\"cardaduan\" style=\"display:inline-block;\">\n                    <table style=\"width:100%;\">\n                      <colgroup>\n                        <col style=\"width: 35%;\">\n                        <col style=\"width: 65%;\">\n                      </colgroup>\n                      <tr>\n                        <td class=\"cardhead\">{{ 'tender.urusan' | translate }}</td>\n                        <td class=\"carddetail\">{{item.urusan}}</td>\n                      </tr>\n                      <tr>\n                        <td class=\"cardhead\">{{ 'tender.catatan' | translate }}</td>\n                        <td class=\"carddetail\">{{item.catatan}}</td>\n                      </tr>\n                      <tr>\n                        <td class=\"cardhead\">{{ 'tender.jumlah' | translate }} (RM)</td>\n                        <td class=\"carddetail2\">{{item.harga}}</td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div style=\"width: 20px;\"></div>\n                </ion-item>\n                <div style=\"height: 20px;\"></div>\n                <ion-item-options side=\"end\">\n                  <div class=\"icon\" style=\"background-color:#F6C949;\" (click)=\"edit(item)\">\n                    <ion-icon style=\"height: 110px;\" name=\"create-outline\"></ion-icon>\n                  </div>\n                  &nbsp;\n                  <div class=\"icon\" style=\"background-color:#D23330;\" (click)=\"deleteone(item.id)\">\n                    <ion-icon style=\"height: 110px;\" name=\"trash-outline\"></ion-icon>\n                  </div>\n                </ion-item-options>\n              </ion-item-sliding>\n              <div id=\"editform{{item.id}}\" name=\"editformname\" style=\"display: none; padding: 30px 50px;\">\n                <div class=\"label\">{{ 'lain.urusan' | translate }}</div>\n                <div style=\"height: 10px;\"></div>\n                <ion-select okText=\"{{ 'semak.ok' | translate }}\" cancelText=\"{{ 'semak.cancel' | translate }}\" class=\"select\" [(ngModel)]=\"urusan\">\n                  <ion-select-option *ngFor=\"let urusan of ddUrusan; let i = index\" [value]=\"urusan.id\">\n                    {{urusan.urusan}}\n                  </ion-select-option>\n                </ion-select>\n                <div style=\"height: 30px;\"></div>\n                <div class=\"label\">{{ 'tender.NSH' | translate }} (RM)</div>\n                <div style=\"height: 10px;\"></div>\n                <input type=\"number\" class=\"select\" placeholder=\"00.00\" [(ngModel)]=\"harga\">\n                <div style=\"height: 30px;\"></div>\n                <div class=\"label\">{{ 'lain.catatan' | translate }}</div>\n                <div style=\"height: 10px;\"></div>\n                <textarea class=\"textarea\" rows=\"7\" cols=\"50\" [(ngModel)]=\"catatan\"></textarea>\n                <div style=\"height: 30px;\"></div>\n                <button class=\"button\" name=\"editbtn\" (click)=\"update(item.id)\">{{ 'kemaskini' | translate }}</button>\n              </div>\n            </div>\n          </ion-radio-group>\n          <div style=\"height: 20px;\"></div>\n          <div class=\"descbox\">\n            <button ion-button id=\"bayar\" class=\"button\" (click)=\"bayar()\">{{ 'bayar' | translate }}</button>\n          </div>\n          \n      </div>\n    </div>\n  </div>\n  \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tender_tenderdetail_tenderdetail_module_ts.js.map