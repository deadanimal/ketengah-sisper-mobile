(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["src_app_tampahkemudahan_butiran-pembayaran_butiran-pembayaran_module_ts"],{

/***/ 84491:
/*!*****************************************************************************************!*\
  !*** ./src/app/tampahkemudahan/butiran-pembayaran/butiran-pembayaran-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButiranPembayaranPageRoutingModule": () => (/* binding */ ButiranPembayaranPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _butiran_pembayaran_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./butiran-pembayaran.page */ 54635);




const routes = [
    {
        path: '',
        component: _butiran_pembayaran_page__WEBPACK_IMPORTED_MODULE_0__.ButiranPembayaranPage
    }
];
let ButiranPembayaranPageRoutingModule = class ButiranPembayaranPageRoutingModule {
};
ButiranPembayaranPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ButiranPembayaranPageRoutingModule);



/***/ }),

/***/ 93285:
/*!*********************************************************************************!*\
  !*** ./src/app/tampahkemudahan/butiran-pembayaran/butiran-pembayaran.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButiranPembayaranPageModule": () => (/* binding */ ButiranPembayaranPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _butiran_pembayaran_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./butiran-pembayaran-routing.module */ 84491);
/* harmony import */ var _butiran_pembayaran_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./butiran-pembayaran.page */ 54635);







let ButiranPembayaranPageModule = class ButiranPembayaranPageModule {
};
ButiranPembayaranPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _butiran_pembayaran_routing_module__WEBPACK_IMPORTED_MODULE_0__.ButiranPembayaranPageRoutingModule
        ],
        declarations: [_butiran_pembayaran_page__WEBPACK_IMPORTED_MODULE_1__.ButiranPembayaranPage]
    })
], ButiranPembayaranPageModule);



/***/ }),

/***/ 54635:
/*!*******************************************************************************!*\
  !*** ./src/app/tampahkemudahan/butiran-pembayaran/butiran-pembayaran.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButiranPembayaranPage": () => (/* binding */ ButiranPembayaranPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_butiran_pembayaran_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./butiran-pembayaran.page.html */ 62876);
/* harmony import */ var _butiran_pembayaran_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./butiran-pembayaran.page.scss */ 34689);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let ButiranPembayaranPage = class ButiranPembayaranPage {
    constructor(location, route, router) {
        this.location = location;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.data = this.router.getCurrentNavigation().extras.state.data;
        console.log("payment details ", this.data);
    }
    back() {
        this.location.back();
    }
    bayar() {
        this.router.navigate(['main/tabs/bayaran']);
    }
};
ButiranPembayaranPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ButiranPembayaranPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-butiran-pembayaran',
        template: _raw_loader_butiran_pembayaran_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_butiran_pembayaran_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ButiranPembayaranPage);



/***/ }),

/***/ 34689:
/*!*********************************************************************************!*\
  !*** ./src/app/tampahkemudahan/butiran-pembayaran/butiran-pembayaran.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".info {\n  margin-top: 20px;\n  color: #3D2C7C;\n  margin-left: 25%;\n}\n\n.container2 {\n  padding-top: 30px;\n  height: 650px;\n  text-align: center;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  color: #494949;\n  padding: 10px 0px;\n}\n\n.select {\n  width: 100%;\n  height: 45px;\n  background: #FFFFFF;\n  border: 1px solid #3D2C7C;\n  box-sizing: border-box;\n  border-radius: 9px;\n  --placeholder-color:#494949 !important;\n  box-shadow: inset -4px -4px 9px rgba(255, 255, 255, 0.6), inset 4px 4px 14px #C5D7EE;\n  padding: 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n}\n\n.button {\n  background-color: #3D2C7C;\n  border: 1pt solid #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n}\n\nul.ks-cboxtags {\n  list-style: none;\n  padding: 5px;\n}\n\nul.ks-cboxtags li {\n  display: inline;\n}\n\nul.ks-cboxtags li label {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 2px solid rgba(139, 139, 139, 0.3);\n  color: #adadad;\n  border-radius: 25px;\n  white-space: nowrap;\n  margin: 3px 0px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  transition: all 0.2s;\n}\n\nul.ks-cboxtags li label {\n  padding: 8px 12px;\n  cursor: pointer;\n}\n\nul.ks-cboxtags li input[type=checkbox]:checked + label {\n  border: 2px solid #3D2C7C;\n  background-color: #12bbd4;\n  color: #fff;\n  transition: 0.2s;\n}\n\nul.ks-cboxtags li input[type=checkbox] {\n  display: absolute;\n}\n\nul.ks-cboxtags li input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n}\n\nul.ks-cboxtags li input[type=checkbox]:focus + label {\n  border: 2px solid #3D2C7C;\n}\n\nul.ks-cboxtags li input[type=radio]:checked + label {\n  border: 2px solid #3D2C7C;\n  background-color: #12bbd4;\n  color: #fff;\n  transition: all 0.2s;\n}\n\nul.ks-cboxtags li input[type=radio] {\n  display: absolute;\n}\n\nul.ks-cboxtags li input[type=radio] {\n  position: absolute;\n  opacity: 0;\n}\n\nul.ks-cboxtags li input[type=radio]:focus + label {\n  border: 2px solid #3D2C7C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dGlyYW4tcGVtYmF5YXJhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0ZBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDQSxlQUFBO0FBRUE7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNBLGlCQUFBO0FBR0E7O0FBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFHQTs7QUFBQTtFQUNBLHlCQUFBO0FBR0E7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBQUE7RUFDQSxpQkFBQTtBQUdBOztBQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBR0E7O0FBQUE7RUFDQSx5QkFBQTtBQUdBIiwiZmlsZSI6ImJ1dGlyYW4tcGVtYmF5YXJhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3tcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiAjM0QyQzdDO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbn1cclxuXHJcbi5jb250YWluZXIyIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBoZWlnaHQ6IDY1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBjb2xvcjogIzQ5NDk0OTtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzNEMkM3QztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiM0OTQ5NDkgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBpbnNldCAtNHB4IC00cHggOXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgaW5zZXQgNHB4IDRweCAxNHB4ICNDNUQ3RUU7XHJcbiAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzRDJDN0M7XHJcbiAgYm9yZGVyOiAxcHQgc29saWQgIzNEMkM3QztcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbn1cclxuXHJcbnVsLmtzLWNib3h0YWdzIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG51bC5rcy1jYm94dGFncyBsaXtcclxuZGlzcGxheTogaW5saW5lO1xyXG59XHJcbnVsLmtzLWNib3h0YWdzIGxpIGxhYmVse1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEzOSwgMTM5LCAxMzksIC4zKTtcclxuICBjb2xvcjogI2FkYWRhZDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbWFyZ2luOiAzcHggMHB4O1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3MgbGkgbGFiZWwge1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzNEMkM3QztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJiYmQ0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IC4ycztcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuZGlzcGxheTogYWJzb2x1dGU7XHJcbn1cclxuXHJcbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxub3BhY2l0eTogMDtcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWwge1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjM0QyQzdDO1xyXG59XHJcblxyXG51bC5rcy1jYm94dGFncyBsaSBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjM0QyQzdDO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMmJiZDQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuZGlzcGxheTogYWJzb2x1dGU7XHJcbn1cclxuXHJcbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxub3BhY2l0eTogMDtcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmZvY3VzICsgbGFiZWwge1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjM0QyQzdDO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 62876:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tampahkemudahan/butiran-pembayaran/butiran-pembayaran.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-content>\n    <div class=\"main\">\n      <div class=\"container\">\n        <div class=\"header\">\n          <ion-icon name=\"chevron-back-outline\" style=\"float: left;\" (click)=\"back()\"></ion-icon>\n          <span class=\"headertxt\">\n            <div style=\"width:fit-content;margin: auto;\">\n              Butiran Pembayaran</div>\n          </span>\n        </div>\n        <div style=\"padding-top: 40px;\">\n          <ion-img src=\"../../assets/icon/fasilitiHead.png\" class=\"icontetapan\"></ion-img>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"info\">\n\n      <div>\n        <label style=\"margin-bottom: 8px\">Tempahan</label><br>\n        <span style=\"margin-bottom: 8px\">{{data.fasiliti}}</span><br>\n        <label style=\"margin-bottom: 8px\" for=\"\">Tarikh</label><br>\n        <span style=\"margin-bottom: 8px\">{{data.tarikh}}</span><br>\n        <label for=\"\" style=\"margin-bottom: 8px\">Masa</label><br>\n        <span style=\"margin-bottom: 100px\">{{data.masa.split(',')[0] }}:00 -\n          {{data.masa.split(',')[data.masa.split(',').length -1] }}:00</span><br>\n\n\n      </div>\n\n    </div>\n\n    <button style=\"margin-top: 200px; \" ion-button class=\" button\" (click)=\"bayar()\">Bayar</button>\n\n\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tampahkemudahan_butiran-pembayaran_butiran-pembayaran_module_ts.js.map