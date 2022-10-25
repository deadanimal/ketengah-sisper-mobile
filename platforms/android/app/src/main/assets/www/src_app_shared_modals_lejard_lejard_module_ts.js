(self["webpackChunkkkr_pothole"] = self["webpackChunkkkr_pothole"] || []).push([["src_app_shared_modals_lejard_lejard_module_ts"],{

/***/ 53961:
/*!***************************************************************!*\
  !*** ./src/app/shared/modals/lejard/lejard-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LejardPageRoutingModule": () => (/* binding */ LejardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _lejard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lejard.page */ 79787);




const routes = [
    {
        path: '',
        component: _lejard_page__WEBPACK_IMPORTED_MODULE_0__.LejardPage
    }
];
let LejardPageRoutingModule = class LejardPageRoutingModule {
};
LejardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LejardPageRoutingModule);



/***/ }),

/***/ 85446:
/*!*******************************************************!*\
  !*** ./src/app/shared/modals/lejard/lejard.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LejardPageModule": () => (/* binding */ LejardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _lejard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lejard-routing.module */ 53961);
/* harmony import */ var _lejard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lejard.page */ 79787);







let LejardPageModule = class LejardPageModule {
};
LejardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _lejard_routing_module__WEBPACK_IMPORTED_MODULE_0__.LejardPageRoutingModule
        ],
        declarations: [_lejard_page__WEBPACK_IMPORTED_MODULE_1__.LejardPage]
    })
], LejardPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_shared_modals_lejard_lejard_module_ts.js.map