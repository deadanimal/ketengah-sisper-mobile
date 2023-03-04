(self["webpackChunkSisper"] = self["webpackChunkSisper"] || []).push([["common"],{

/***/ 68225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 23150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 52954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 39461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 27069:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ 71567);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 52954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 60408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 61269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 15774:
/*!*******************************************************************!*\
  !*** ./src/app/admin/aduan/aduanlist/aduanlist-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanlistPageRoutingModule": () => (/* binding */ AduanlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aduanlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduanlist.page */ 40418);




const routes = [
    {
        path: '',
        component: _aduanlist_page__WEBPACK_IMPORTED_MODULE_0__.AduanlistPage
    }
];
let AduanlistPageRoutingModule = class AduanlistPageRoutingModule {
};
AduanlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AduanlistPageRoutingModule);



/***/ }),

/***/ 61073:
/*!***********************************************************!*\
  !*** ./src/app/admin/aduan/aduanlist/aduanlist.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AduanlistPageModule": () => (/* binding */ AduanlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _aduanlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aduanlist-routing.module */ 15774);
/* harmony import */ var _aduanlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduanlist.page */ 40418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 84236);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 40830);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let AduanlistPageModule = class AduanlistPageModule {
};
AduanlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _aduanlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.AduanlistPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ],
        declarations: [_aduanlist_page__WEBPACK_IMPORTED_MODULE_1__.AduanlistPage]
    })
], AduanlistPageModule);



/***/ }),

/***/ 40418:
/*!*********************************************************!*\
  !*** ./src/app/admin/aduan/aduanlist/aduanlist.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanlistPage": () => (/* binding */ AduanlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_aduanlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aduanlist.page.html */ 13656);
/* harmony import */ var _aduanlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aduanlist.page.scss */ 10833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modals/adminmenu/adminmenu.page */ 18037);








let AduanlistPage = class AduanlistPage {
    constructor(location, route, router, modalController) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.modalController = modalController;
        this.AduanList = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.AduanList = this.router.getCurrentNavigation().extras.state.aduan;
                this.AduanList.forEach(function (value) {
                    var date = new Date(value.created_at);
                    var month = date.getMonth() + 1;
                    value.date = date.getDate() + '/' + month + '/' + date.getFullYear();
                });
            }
        });
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
    adminmenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_shared_modals_adminmenu_adminmenu_page__WEBPACK_IMPORTED_MODULE_2__.AdminmenuPage,
                cssClass: 'menu-modal',
                backdropDismiss: true
            });
            return yield modal.present();
        });
    }
    viewaduan(data) {
        let navigationExtras = {
            state: {
                aduan: data
            }
        };
        this.router.navigate(['main/admin/aduan/aduanview'], navigationExtras);
    }
};
AduanlistPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
AduanlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-aduanlist',
        template: _raw_loader_aduanlist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aduanlist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AduanlistPage);



/***/ }),

/***/ 53680:
/*!*********************************************************!*\
  !*** ./src/app/shared/modals/calendar/calendar.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPage": () => (/* binding */ CalendarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calendar.page.html */ 690);
/* harmony import */ var _calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.page.scss */ 51660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let CalendarPage = class CalendarPage {
    constructor(modalController, alertController) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.option = {
            pickMode: 'range',
            title: 'RANGE'
        };
    }
    ngOnInit() {
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.date);
        });
    }
};
CalendarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
CalendarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-calendar',
        template: _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalendarPage);



/***/ }),

/***/ 79787:
/*!*****************************************************!*\
  !*** ./src/app/shared/modals/lejard/lejard.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LejardPage": () => (/* binding */ LejardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lejard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lejard.page.html */ 6650);
/* harmony import */ var _lejard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lejard.page.scss */ 12163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 37961);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);






let LejardPage = class LejardPage {
    constructor(pdfGenerator, navParams, modalController, toastController) {
        this.pdfGenerator = pdfGenerator;
        this.navParams = navParams;
        this.modalController = modalController;
        this.toastController = toastController;
    }
    ngOnInit() {
        console.table(this.navParams);
        var data = this.navParams.data.data;
        this.selectedakaun = data.akaun;
        console.log(this.selectedakaun);
        this.lejardtl = data.lejar;
        this.src = data.src;
        console.log(data);
    }
    download() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            document.getElementById('tr1').style.display = "table";
            var content = document.getElementById('pdf').innerHTML;
            let options = {
                documentSize: 'A4',
                type: 'share',
                // landscape: 'portrait',
                fileName: 'eSisper_Lejar.pdf'
            };
            yield this.pdfGenerator.fromData(content, options)
                .then((base64) => {
                document.getElementById('tr1').style.display = "none";
                console.log('OK', base64);
            }).catch((error) => {
                document.getElementById('tr1').style.display = "none";
                console.log('error', error);
                this.modalController.dismiss();
                this.presentToast('Fail to generate PDF', 'danger');
            });
        });
    }
    presentToast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 2000
            });
            toast.present();
        });
    }
};
LejardPage.ctorParameters = () => [
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
LejardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-lejard',
        template: _raw_loader_lejard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lejard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LejardPage);



/***/ }),

/***/ 73068:
/*!*********************************************************************!*\
  !*** ./src/app/shared/modals/viewnotis/viewnotis-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewnotisPageRoutingModule": () => (/* binding */ ViewnotisPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _viewnotis_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewnotis.page */ 14527);




const routes = [
    {
        path: '',
        component: _viewnotis_page__WEBPACK_IMPORTED_MODULE_0__.ViewnotisPage
    }
];
let ViewnotisPageRoutingModule = class ViewnotisPageRoutingModule {
};
ViewnotisPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewnotisPageRoutingModule);



/***/ }),

/***/ 69730:
/*!*************************************************************!*\
  !*** ./src/app/shared/modals/viewnotis/viewnotis.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewnotisPageModule": () => (/* binding */ ViewnotisPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _viewnotis_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewnotis-routing.module */ 73068);
/* harmony import */ var _viewnotis_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewnotis.page */ 14527);







let ViewnotisPageModule = class ViewnotisPageModule {
};
ViewnotisPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _viewnotis_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewnotisPageRoutingModule
        ],
        declarations: [_viewnotis_page__WEBPACK_IMPORTED_MODULE_1__.ViewnotisPage]
    })
], ViewnotisPageModule);



/***/ }),

/***/ 14527:
/*!***********************************************************!*\
  !*** ./src/app/shared/modals/viewnotis/viewnotis.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewnotisPage": () => (/* binding */ ViewnotisPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_viewnotis_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./viewnotis.page.html */ 68345);
/* harmony import */ var _viewnotis_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewnotis.page.scss */ 82125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ViewnotisPage = class ViewnotisPage {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
    }
    ngOnInit() {
        console.table(this.navParams);
        this.header = this.navParams.data.title;
        this.body = this.navParams.data.body;
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
ViewnotisPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams }
];
ViewnotisPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-viewnotis',
        template: _raw_loader_viewnotis_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_viewnotis_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewnotisPage);



/***/ }),

/***/ 47743:
/*!********************************************************!*\
  !*** ./src/app/shared/services/aduan/aduan.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AduanService": () => (/* binding */ AduanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let AduanService = class AduanService {
    constructor(http) {
        this.http = http;
    }
    add(data) {
        var AddaduanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "aduan";
        return this.http.post(AddaduanURL, data);
    }
    first(data) {
        // console.log('data', data)
        var aduanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "AduanFirst";
        return this.http.post(aduanURL, data);
    }
    getdd() {
        var aduanDDURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "AduanDD";
        return this.http.get(aduanDDURL);
    }
    getbyid(userid) {
        var aduanuserURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "aduan/" + userid;
        return this.http.get(aduanuserURL);
    }
    getall() {
        var AlladuanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "aduan";
        return this.http.get(AlladuanURL);
    }
    updateStat(data) {
        var aduanstatURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "aduanStatus";
        return this.http.post(aduanstatURL, data);
    }
};
AduanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AduanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AduanService);



/***/ }),

/***/ 96082:
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/akaun/perumahan/perumahan.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerumahanService": () => (/* binding */ PerumahanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PerumahanService = class PerumahanService {
    constructor(http) {
        this.http = http;
    }
    add(data) {
        var AddURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "perumahan";
        return this.http.post(AddURL, data);
    }
    deleteAkaun(id) {
        var DeleteURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "perumahan/" + id;
        return this.http.delete(DeleteURL);
    }
};
PerumahanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PerumahanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PerumahanService);



/***/ }),

/***/ 76290:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/bayaran/bayaran/bayaran.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BayaranService": () => (/* binding */ BayaranService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let BayaranService = class BayaranService {
    constructor(http) {
        this.http = http;
    }
    add(data) {
        var AddURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "bayaran";
        return this.http.post(AddURL, data);
    }
    lejar(data) {
        var LejarURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "lejar";
        return this.http.post(LejarURL, data);
    }
    getuser(id, data) {
        var getURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "bayaran/" + id;
        return this.http.put(getURL, data);
    }
};
BayaranService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
BayaranService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], BayaranService);



/***/ }),

/***/ 62803:
/*!******************************************************!*\
  !*** ./src/app/shared/services/lain/lain.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LainService": () => (/* binding */ LainService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let LainService = class LainService {
    constructor(http) {
        this.http = http;
    }
    add(data) {
        var AddlainURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "lain";
        return this.http.post(AddlainURL, data);
    }
    getdd() {
        var UrusanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "laindd";
        return this.http.get(UrusanURL);
    }
};
LainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
LainService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LainService);



/***/ }),

/***/ 64338:
/*!********************************************************!*\
  !*** ./src/app/shared/services/notis/notis.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotisService": () => (/* binding */ NotisService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let NotisService = class NotisService {
    constructor(http) {
        this.http = http;
    }
    getbyid(userid) {
        var notisuserURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "notis/" + userid;
        return this.http.get(notisuserURL);
    }
    viewid(notisid, userid) {
        var notisviewedURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "notisview";
        return this.http.post(notisviewedURL, [notisid, userid]);
    }
    softdelete(notisid, userid) {
        var notisdeleteURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "softdelete";
        return this.http.post(notisdeleteURL, [notisid, userid]);
    }
    add(data) {
        var AddnotisURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "notis";
        return this.http.post(AddnotisURL, data);
    }
    getnotis(data) {
        var notisURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "notisapi";
        return this.http.post(notisURL, data);
    }
};
NotisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NotisService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NotisService);



/***/ }),

/***/ 37189:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/penghargaan/penghargaan.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenghargaanService": () => (/* binding */ PenghargaanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PenghargaanService = class PenghargaanService {
    constructor(http) {
        this.http = http;
    }
    add(data) {
        var AddPenghargaanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "penghargaan";
        return this.http.post(AddPenghargaanURL, data);
    }
    get() {
        var penghargaanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "penghargaan";
        return this.http.get(penghargaanURL);
    }
    viewid(penghargaanid, userid) {
        var penghargaanviewedURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "penghargaanview";
        return this.http.post(penghargaanviewedURL, [penghargaanid, userid]);
    }
};
PenghargaanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PenghargaanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PenghargaanService);



/***/ }),

/***/ 28779:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/pengumuman/pengumuman.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengumumanService": () => (/* binding */ PengumumanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let PengumumanService = class PengumumanService {
    constructor(http) {
        this.http = http;
    }
    add(data) {
        var AddumumURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "pengumuman";
        return this.http.post(AddumumURL, data);
    }
    gettempoh() {
        var penghargaanURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "pengumumantempoh";
        return this.http.get(penghargaanURL);
    }
};
PengumumanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PengumumanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PengumumanService);



/***/ }),

/***/ 34758:
/*!******************************************************!*\
  !*** ./src/app/shared/services/user/user.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    update(type, data, id) {
        console.log(id);
        var updateURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "user/" + id;
        console.log(updateURL);
        return this.http.patch(updateURL, { type, data });
    }
    checkFirstTimeLogin(id, data) {
        var updateURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "ForgotPass/" + id;
        return this.http.post(updateURL, data);
    }
    getAllUsers() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "allusers");
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 10833:
/*!***********************************************************!*\
  !*** ./src/app/admin/aduan/aduanlist/aduanlist.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container2 {\n  padding-top: 50px;\n  padding: 50px 25px 20px 10px;\n  height: 180px;\n}\n\n.container3 {\n  padding: 30px 10px 20px 10px;\n  height: 700px;\n}\n\n.headerbox {\n  padding: 0px 40px 30px 40px;\n}\n\n.label {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 19px;\n  line-height: 28px;\n  color: #3D2C7C;\n  padding-bottom: 20px;\n}\n\n.cardaduan2 {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  width: 100%;\n  height: 171px;\n  display: inline-block;\n  padding: 10px 30px;\n}\n\n.cardhead {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: -0.165px;\n  color: #494949;\n  text-align: left;\n  padding: 9px 0px;\n}\n\n.carddetail {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n  text-align: left;\n  padding: 9px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdWFubGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJhZHVhbmxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcjIge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHggMjBweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcjMge1xyXG4gICAgcGFkZGluZzogMzBweCAxMHB4IDIwcHggMTBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJib3gge1xyXG4gICAgcGFkZGluZzogMHB4IDQwcHggMzBweCA0MHB4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgY29sb3I6ICMzRDJDN0M7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNhcmRhZHVhbjIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGN0ZBRkQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSg3MywgODcsIDE4NCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTcxcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbn1cclxuXHJcbi5jYXJkaGVhZCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2NXB4O1xyXG4gICAgY29sb3I6ICM0OTQ5NDk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOXB4IDBweDtcclxufVxyXG5cclxuLmNhcmRkZXRhaWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcclxuICAgIGNvbG9yOiAjM0QyQzdDO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDlweCAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 51660:
/*!***********************************************************!*\
  !*** ./src/app/shared/modals/calendar/calendar.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".button {\n  width: 134px;\n  height: 49px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  align-items: center;\n  color: #FFFFFF;\n  background: #3D2C7C;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImNhbGVuZGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEzNHB4O1xyXG4gICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZDogIzNEMkM3QztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 12163:
/*!*******************************************************!*\
  !*** ./src/app/shared/modals/lejard/lejard.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".button {\n  background-color: #3D2C7C;\n  height: 48px;\n  width: 100%;\n  border-radius: 10px;\n  margin: auto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlamFyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJsZWphcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QyQzdDO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ 82125:
/*!*************************************************************!*\
  !*** ./src/app/shared/modals/viewnotis/viewnotis.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card {\n  background: #FFFFFF;\n  border: 1px solid #F7FAFD;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 8px rgba(73, 87, 184, 0.2);\n  border-radius: 10px;\n  padding: 35px 25px;\n  height: 230px;\n}\n\n.header {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n  text-align: left;\n}\n\n.body {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.165px;\n  color: #3D2C7C;\n  text-align: left;\n}\n\n.button {\n  width: 134px;\n  height: 49px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  align-items: center;\n  color: #FFFFFF;\n  background: #3D2C7C;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdub3Rpcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoidmlld25vdGlzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjdGQUZEO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoNzMsIDg3LCAxODQsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMzVweCAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTY1cHg7XHJcbiAgICBjb2xvcjogIzNEMkM3QztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNjVweDtcclxuICAgIGNvbG9yOiAjM0QyQzdDO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTM0cHg7XHJcbiAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0QyQzdDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 13656:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/aduan/aduanlist/aduanlist.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"main\">\r\n    <div class=\"container2\">\r\n      <div class=\"header\">\r\n        <ion-icon\r\n          name=\"chevron-back-outline\"\r\n          style=\"float: left\"\r\n          (click)=\"back()\"\r\n        ></ion-icon>\r\n        <span class=\"headertxt\">{{ 'aduan.senarai' | translate }}</span>\r\n        <ion-img\r\n          src=\"../../assets/icon/adminmenu.png\"\r\n          style=\"position: absolute; top: 50px; right: 20px\"\r\n          class=\"iconnoti\"\r\n          (click)=\"adminmenu()\"\r\n        ></ion-img>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"main2\">\r\n    <div class=\"container3\">\r\n      <div class=\"headerbox\">\r\n        <div class=\"label\">{{ 'aduan.senarai' | translate }}</div>\r\n        <div *ngFor=\"let item of AduanList\">\r\n          <div class=\"cardaduan2\" (click)=\"viewaduan(item)\">\r\n            <div class=\"cardhead\">{{ 'aduan.tarikh' | translate }}</div>\r\n            <div class=\"carddetail\">{{item.date}}</div>\r\n            <div class=\"cardhead\">{{ 'aduan.kategori' | translate }}</div>\r\n            <div class=\"carddetail\">\r\n              {{item.kategori}} - {{ item.katedet ? item.katedet.kategori\r\n              :''}}<span style=\"float: right\">></span>\r\n            </div>\r\n          </div>\r\n          <div style=\"height: 10px\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 690:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modals/calendar/calendar.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\r\n  <div style=\"padding:10px 10px; text-align: center;\">\r\n    <ion-calendar [(ngModel)]=\"date\" [options]=\"option\" type=\"string\" [format]=\"'YYYY-MM-DD'\"></ion-calendar>\r\n    <div style=\"height: 15px;\"></div>\r\n    <button class=\"button\" (click)=\"closeModal()\">Tutup</button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 6650:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modals/lejard/lejard.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div style=\"padding: 20px;background-color: white;height: 100%;width: 100%;\">\r\n    <div id=\"pdf\">\r\n      <table style=\"width: 100%;border: 1 pt solid black;font-size: 14px;color: black;\">\r\n        <colgroup>\r\n          <col style=\"width: 15%;\">\r\n          <col style=\"width: 15%;\">\r\n          <col style=\"width: 10%;\">\r\n          <col style=\"width: 25%;\">\r\n          <col style=\"width: 10%;\">\r\n          <col style=\"width: 25%;\">\r\n        </colgroup>\r\n        <tr>\r\n          <td colspan=\"6\">Lejar <span *ngIf=\"src == 1\">Rumah</span><span *ngIf=\"src == 2\">Premis</span> :\r\n            {{selectedakaun.nama}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"6\">Nombor Akaun : <span>{{selectedakaun.no_akaun_rumah}}</span><span\r\n              *ngIf=\"src == 2\">{{selectedakaun.no_akaun_premis}}</span></td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"6\">Nombor Kad Pengenalan : {{selectedakaun.no_kad_pengenalan}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"6\" style=\"height: 50px;\"></td>\r\n        </tr>\r\n      </table>\r\n      <table style=\"width: 100%;border: 1 pt solid black;font-size: 14px;color: black;display: none;\" id=\"tr1\">\r\n        <colgroup>\r\n          <col style=\"width: 15%;\">\r\n          <col style=\"width: 15%;\">\r\n          <col style=\"width: 10%;\">\r\n          <col style=\"width: 25%;\">\r\n          <col style=\"width: 10%;\">\r\n          <col style=\"width: 25%;\">\r\n        </colgroup>\r\n        <tr style=\"border-bottom:1pt solid black;\">\r\n          <td>Tarikh</td>\r\n          <td>Rujukan</td>\r\n          <td>Debit</td>\r\n          <td>Urusan</td>\r\n          <td>Kredit</td>\r\n          <td>Urusan</td>\r\n        </tr>\r\n        <tr *ngFor=\"let item of lejardtl\">\r\n          <td>{{item.tarikh}}</td>\r\n          <td>{{item.rujukan}}</td>\r\n          <td>{{item.debit}}</td>\r\n          <td style=\"border-right:1pt solid black;\"><span *ngIf=\"item.debit != ''\">{{item.urusan}}</span></td>\r\n          <td>{{item.kredit}}</td>\r\n          <td><span *ngIf=\"item.kredit != ''\">{{item.urusan}}</span></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div style=\"padding: 50px 0px;\">\r\n      <button ion-button class=\"button\" (click)=\"download()\">Cetak</button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 68345:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modals/viewnotis/viewnotis.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\r\n  <div style=\"padding:10px 10px; text-align: center;\">\r\n    <div class=\"card\">\r\n      <div class=\"header\">\r\n        {{header}}\r\n      </div>\r\n      <div class=\"body\">\r\n        {{body}}\r\n      </div>\r\n    </div>\r\n    <div style=\"height: 15px;\"></div>\r\n    <button class=\"button\" (click)=\"closeModal()\">Tutup</button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map