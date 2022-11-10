(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./feature/dashboard/dashboard.module": [
		"./src/app/feature/dashboard/dashboard.module.ts",
		"feature-dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _feature_dashboard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature/dashboard/auth/auth.guard */ "./src/app/feature/dashboard/auth/auth.guard.ts");
/* harmony import */ var _feature_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature/login/login.component */ "./src/app/feature/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/page-notfound/page-notfound.component */ "./src/app/core/page-notfound/page-notfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'home', loadChildren: './feature/dashboard/dashboard.module#DashboardModule', canActivate: [_feature_dashboard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: '', component: _feature_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: '**', component: _core_page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_4__["PageNotfoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'leave-management-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _feature_dashboard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature/dashboard/auth/auth.guard */ "./src/app/feature/dashboard/auth/auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _feature_feature_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature/feature.module */ "./src/app/feature/feature.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { BrowserModule } from '@angular/platform-browser';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _feature_feature_module__WEBPACK_IMPORTED_MODULE_8__["FeatureModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ],
            providers: [_feature_dashboard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-notfound/page-notfound.component */ "./src/app/core/page-notfound/page-notfound.component.ts");
/* harmony import */ var _navigation_contents_navnside_wrapper_navnside_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-contents/navnside-wrapper/navnside-wrapper.component */ "./src/app/core/navigation-contents/navnside-wrapper/navnside-wrapper.component.ts");
/* harmony import */ var _navigation_contents_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation-contents/sidebar/sidebar.component */ "./src/app/core/navigation-contents/sidebar/sidebar.component.ts");
/* harmony import */ var _navigation_contents_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation-contents/top-navigation/top-navigation.component */ "./src/app/core/navigation-contents/top-navigation/top-navigation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]
            ],
            declarations: [
                _page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_4__["PageNotfoundComponent"],
                _navigation_contents_navnside_wrapper_navnside_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["NavnsideWrapperComponent"],
                _navigation_contents_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _navigation_contents_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_7__["TopNavigationComponent"]
            ],
            exports: [
                _navigation_contents_navnside_wrapper_navnside_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["NavnsideWrapperComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/navigation-contents/navnside-wrapper/navnside-wrapper.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/core/navigation-contents/navnside-wrapper/navnside-wrapper.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/navigation-contents/navnside-wrapper/navnside-wrapper.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/navigation-contents/navnside-wrapper/navnside-wrapper.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <app-top-navigation></app-top-navigation>\r\n  <app-sidebar></app-sidebar>\r\n</div>"

/***/ }),

/***/ "./src/app/core/navigation-contents/navnside-wrapper/navnside-wrapper.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/navigation-contents/navnside-wrapper/navnside-wrapper.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NavnsideWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavnsideWrapperComponent", function() { return NavnsideWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavnsideWrapperComponent = /** @class */ (function () {
    function NavnsideWrapperComponent() {
    }
    NavnsideWrapperComponent.prototype.ngOnInit = function () {
    };
    NavnsideWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navnside-wrapper',
            template: __webpack_require__(/*! ./navnside-wrapper.component.html */ "./src/app/core/navigation-contents/navnside-wrapper/navnside-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./navnside-wrapper.component.css */ "./src/app/core/navigation-contents/navnside-wrapper/navnside-wrapper.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavnsideWrapperComponent);
    return NavnsideWrapperComponent;
}());



/***/ }),

/***/ "./src/app/core/navigation-contents/service/sidebar.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/navigation-contents/service/sidebar.service.ts ***!
  \*********************************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarService = /** @class */ (function () {
    function SidebarService() {
        this.isOpen = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SidebarService.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
        this.change.emit(this.isOpen);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SidebarService.prototype, "change", void 0);
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/core/navigation-contents/sidebar/sidebar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/core/navigation-contents/sidebar/sidebar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/navigation-contents/sidebar/sidebar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/navigation-contents/sidebar/sidebar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\" [ngClass]=\"isOpen ? 'active' : ''\">\r\n\r\n  <ul *ngIf=\"isAdmin\" class=\"list-unstyled sidebar-items\">\r\n    <div align=\"center\"><img src=\"../../../../assets/image/logo.png\" width=\"100%\" height=\"100%\"></div>\r\n    <li>\r\n      <a routerLink=\"/home/employees\" routerLinkActive=\"active\">Employee</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/home/leaverequests\" routerLinkActive=\"active\">Leave Request</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/home/leavetypes\" routerLinkActive=\"active\">Leave Type</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/home/event/types\" routerLinkActive=\"active\">EPI Type</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/home/event/stock\" routerLinkActive=\"active\">EPI Stock</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/home/event\" routerLinkActive=\"active\">EPI Request</a>\r\n    </li>\r\n  </ul>\r\n  <ul *ngIf=\"isRh\" class=\"list-unstyled sidebar-items\">\r\n    <div align=\"center\"><img src=\"../../../../assets/image/logo.png\" width=\"100%\" height=\"100%\"></div>\r\n    <li>\r\n      <a routerLink=\"/home/employees\" routerLinkActive=\"active\">Employee</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/home/leaverequests\" routerLinkActive=\"active\">Leave Request</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/home/leavetypes\" routerLinkActive=\"active\">Leave Type</a>\r\n    </li>\r\n  </ul>\r\n  <ul *ngIf=\"isHse\" class=\"list-unstyled sidebar-items\">\r\n    <div align=\"center\"><img src=\"../../../../assets/image/logo.png\" width=\"100%\" height=\"100%\"></div>\r\n    <li>\r\n      <a routerLink=\"/home/leaverequests\" routerLinkActive=\"active\">Leave Request</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/home/event/types\" routerLinkActive=\"active\">EPI Type</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/home/event/stock\" routerLinkActive=\"active\">EPI Stock</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/home/event\" routerLinkActive=\"active\">EPI Request</a>\r\n    </li>\r\n  </ul>\r\n  \r\n  <ul *ngIf=\"isEmploye\" class=\"list-unstyled sidebar-items\">\r\n    <div align=\"center\"><img src=\"../../../../assets/image/logo.png\" width=\"100%\" height=\"100%\"></div>\r\n    <li>\r\n      <a routerLink=\"/home/leaverequests\" routerLinkActive=\"active\">Leave Request</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/home/event\" routerLinkActive=\"active\">EPI Request</a>\r\n    </li>\r\n  </ul>\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/core/navigation-contents/sidebar/sidebar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/navigation-contents/sidebar/sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/sidebar.service */ "./src/app/core/navigation-contents/service/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_sidebarService) {
        this._sidebarService = _sidebarService;
        this.isOpen = false;
        this.isAdmin = false;
        this.isRh = false;
        this.isHse = false;
        this.isEmploye = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sidebarService.change.subscribe(function (isOpen) {
            _this.isOpen = isOpen;
        });
        this.roles = localStorage.getItem('role');
        if (this.roles == 'ROLE_ADMIN') {
            this.isAdmin = true;
            this.isRh = false;
            this.isHse = false;
            this.isEmploye = false;
        }
        else if (this.roles == 'ROLE_USER') {
            this.isAdmin = false;
            this.isRh = false;
            this.isHse = false;
            this.isEmploye = true;
        }
        else if (this.roles == 'ROLE_RH') {
            this.isAdmin = false;
            this.isRh = true;
            this.isHse = false;
            this.isEmploye = false;
        }
        else {
            this.isAdmin = false;
            this.isRh = false;
            this.isHse = true;
            this.isEmploye = false;
        }
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core/navigation-contents/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/core/navigation-contents/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_service_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/navigation-contents/top-navigation/top-navigation.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/core/navigation-contents/top-navigation/top-navigation.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/navigation-contents/top-navigation/top-navigation.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/core/navigation-contents/top-navigation/top-navigation.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top custom-nav\">\r\n\r\n  <div>\r\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"toggleSidebar()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n\r\n    <a class=\"navbar-brand text-white\" routerLink=\"/home\">&nbsp; Dashboard</a>\r\n  </div>\r\n\r\n  <div>\r\n    <button mat-flat-button [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon>account_circle</mat-icon>&nbsp;{{user.username}}\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\" class=\"text-center\">\r\n      <mat-list>\r\n        <mat-list-item> <a routerLink=\"/home/profile\" routerLinkActive=\"active\">Profile</a> </mat-list-item>\r\n        <mat-list-item> <span class=\"btn btn-sm btn-danger\" (click)=\"_auth.logout()\">Logout</span> </mat-list-item>\r\n      </mat-list>\r\n    </mat-menu>\r\n  </div>\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/core/navigation-contents/top-navigation/top-navigation.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/core/navigation-contents/top-navigation/top-navigation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TopNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavigationComponent", function() { return TopNavigationComponent; });
/* harmony import */ var _feature_dashboard_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../feature/dashboard/auth/auth.service */ "./src/app/feature/dashboard/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/sidebar.service */ "./src/app/core/navigation-contents/service/sidebar.service.ts");
/* harmony import */ var _feature_dashboard_services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../feature/dashboard/services/employee.service */ "./src/app/feature/dashboard/services/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopNavigationComponent = /** @class */ (function () {
    function TopNavigationComponent(_sideBarService, _auth, _employeeService) {
        this._sideBarService = _sideBarService;
        this._auth = _auth;
        this._employeeService = _employeeService;
        this.isLoggedIn = this._auth.isLoggedIn();
    }
    TopNavigationComponent.prototype.toggleSidebar = function () {
        this._sideBarService.toggle();
    };
    TopNavigationComponent.prototype.ngOnInit = function () {
        this.getUserInfo();
    };
    TopNavigationComponent.prototype.getUserInfo = function () {
        var _this = this;
        this._employeeService.getCurrentEmployee()
            .subscribe(function (data) {
            _this.user = data;
            localStorage.setItem('username', data.username);
        }, function (error) {
            _this.selected_user_msg = 'Oops ! Can\'t load Profile';
        });
    };
    TopNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-navigation',
            template: __webpack_require__(/*! ./top-navigation.component.html */ "./src/app/core/navigation-contents/top-navigation/top-navigation.component.html"),
            styles: [__webpack_require__(/*! ./top-navigation.component.css */ "./src/app/core/navigation-contents/top-navigation/top-navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_service_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"], _feature_dashboard_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _feature_dashboard_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]])
    ], TopNavigationComponent);
    return TopNavigationComponent;
}());



/***/ }),

/***/ "./src/app/core/page-notfound/page-notfound.component.css":
/*!****************************************************************!*\
  !*** ./src/app/core/page-notfound/page-notfound.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/page-notfound/page-notfound.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/page-notfound/page-notfound.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Oops! Page Not Found</h1>\r\n    <p>Return Back to <a routerLink=\"/\" class=\"lg-link\"> Home</a></p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/page-notfound/page-notfound.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/page-notfound/page-notfound.component.ts ***!
  \***************************************************************/
/*! exports provided: PageNotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotfoundComponent", function() { return PageNotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotfoundComponent = /** @class */ (function () {
    function PageNotfoundComponent() {
    }
    PageNotfoundComponent.prototype.ngOnInit = function () {
    };
    PageNotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-notfound',
            template: __webpack_require__(/*! ./page-notfound.component.html */ "./src/app/core/page-notfound/page-notfound.component.html"),
            styles: [__webpack_require__(/*! ./page-notfound.component.css */ "./src/app/core/page-notfound/page-notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotfoundComponent);
    return PageNotfoundComponent;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/auth/auth.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/feature/dashboard/auth/auth.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token') != null) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/auth/auth.service.ts":
/*!********************************************************!*\
  !*** ./src/app/feature/dashboard/auth/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constant_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../constant/constant */ "./src/app/feature/dashboard/constant/constant.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this._loginUrl = _constant_constant__WEBPACK_IMPORTED_MODULE_2__["Constant"].API_ENDPOINT + '/oauth/token';
        this._client_id = 'demo-client';
        this._client_secret = 'demo-secret';
        this.tokenHeader = {
            'Authorization': 'Basic ' + btoa(this._client_id + ':' + this._client_secret),
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    }
    // convert to form data
    AuthService.prototype.getFormUrlEncoded = function (toConvert) {
        var formBody = [];
        // tslint:disable-next-line:forin
        for (var property in toConvert) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    AuthService.prototype.errorHandler = function (error) {
        console.log('Auth Service api error ', error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    AuthService.prototype.loginUser = function (user) {
        localStorage.removeItem('token');
        localStorage.removeItem('access_token');
        var data = {
            'username': user.username,
            'password': user.password,
            'grant_type': 'password'
        };
        return this.http.post(this._loginUrl, this.getFormUrlEncoded(data), { headers: this.tokenHeader });
    };
    AuthService.prototype.refreshToken = function (request, next) {
        var _this = this;
        if (localStorage.getItem('refreshToken') != null) {
            this.callRefreshToken()
                .subscribe(function (res) {
                // console.log('Token retrieve successful', res);
                localStorage.setItem('token', res.access_token);
                localStorage.setItem('refreshToken', res.refresh_token);
                next.handle(request);
                location.reload();
            }, function (err) {
                // console.log('refresh token also results into error ', err);
                _this.logout();
            });
        }
        else {
            // console.log("Cant use Refresh token");
            this._router.navigate(['/']);
        }
    };
    AuthService.prototype.callRefreshToken = function () {
        localStorage.removeItem('token');
        // console.log("refresh token called ", localStorage.getItem("refreshToken"));
        var data = {
            'grant_type': 'refresh_token',
            'client_id': this._client_id,
            'client_secret': this._client_secret,
            'refresh_token': localStorage.getItem('refreshToken')
        };
        return this.http.post(this._loginUrl, this.getFormUrlEncoded(data), { headers: this.tokenHeader })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.errorHandler));
    };
    AuthService.prototype.isLoggedIn = function () {
        // console.log("is Logged In ", !!localStorage.getItem("token"));
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.isAdmin = function () {
        return localStorage.getItem('role') === 'ROLE_ADMIN';
    };
    AuthService.prototype.logout = function () {
        // console.log("Logged Out called");
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('role');
        localStorage.clear();
        this._router.navigate(['/']);
        // location.reload();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/constant/constant.ts":
/*!********************************************************!*\
  !*** ./src/app/feature/dashboard/constant/constant.ts ***!
  \********************************************************/
/*! exports provided: Constant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constant", function() { return Constant; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");

var Constant = /** @class */ (function () {
    function Constant() {
    }
    Constant.API_ENDPOINT = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
    return Constant;
}());



/***/ }),

/***/ "./src/app/feature/dashboard/services/employee.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/feature/dashboard/services/employee.service.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constant_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/constant */ "./src/app/feature/dashboard/constant/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.errorHandler = function (error) {
        console.log('Employee api error ', error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    EmployeeService.prototype.getAllEmployees = function (page, size, sort) {
        return this.http.get(_constant_constant__WEBPACK_IMPORTED_MODULE_4__["Constant"].API_ENDPOINT + '/rest/employees', {
            params: {
                page: page,
                size: size,
                sort: sort
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    EmployeeService.prototype.getEmployeeById = function (id) {
        return this.http.get(_constant_constant__WEBPACK_IMPORTED_MODULE_4__["Constant"].API_ENDPOINT + '/rest/employees/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    EmployeeService.prototype.createEmployee = function (EmployeeData) {
        return this.http.post(_constant_constant__WEBPACK_IMPORTED_MODULE_4__["Constant"].API_ENDPOINT + '/rest/employees', EmployeeData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    EmployeeService.prototype.updateEmployee = function (EmployeeData) {
        return this.http.put(_constant_constant__WEBPACK_IMPORTED_MODULE_4__["Constant"].API_ENDPOINT + '/rest/employees', EmployeeData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    EmployeeService.prototype.getEmployeeUnderSupervision = function (id) {
        return this.http.get(_constant_constant__WEBPACK_IMPORTED_MODULE_4__["Constant"].API_ENDPOINT + '/rest/employees/employees-under-supervision/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    EmployeeService.prototype.getEmployeeByFullName = function (inputvalue) {
        return this.http.get(_constant_constant__WEBPACK_IMPORTED_MODULE_4__["Constant"].API_ENDPOINT + '/rest/employees/employee-by-fullname', {
            params: {
                fullname: inputvalue
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    EmployeeService.prototype.updatePassword = function (oldPassword, newPassword) {
        var body = new FormData();
        body.append('oldPassword', oldPassword);
        body.append('newPassword', newPassword);
        return this.http.put(_constant_constant__WEBPACK_IMPORTED_MODULE_4__["Constant"].API_ENDPOINT + '/rest/employees/update-password', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    EmployeeService.prototype.getCurrentEmployee = function () {
        return this.http.get(_constant_constant__WEBPACK_IMPORTED_MODULE_4__["Constant"].API_ENDPOINT + '/rest/employees/me')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/feature/feature.module.ts":
/*!*******************************************!*\
  !*** ./src/app/feature/feature.module.ts ***!
  \*******************************************/
/*! exports provided: FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dashboard_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/auth/auth.service */ "./src/app/feature/dashboard/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/feature/login/login.component.ts");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FeatureModule = /** @class */ (function () {
    function FeatureModule() {
    }
    FeatureModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            providers: [_dashboard_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        })
    ], FeatureModule);
    return FeatureModule;
}());



/***/ }),

/***/ "./src/app/feature/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/feature/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Login Form Box */\r\n.loginform-box {\r\n    border: 1px solid rgb(206, 204, 204);\r\n    border-radius: 7px;\r\n    /* background-color: #3297a7; */\r\n    padding: 2%;\r\n    margin: 10% 0%;\r\n    /* color: #fff; */\r\n}\r\n.login-title {\r\n    letter-spacing: 1px;\r\n    font-weight: 400;\r\n    color: #3f51b5;\r\n}"

/***/ }),

/***/ "./src/app/feature/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/feature/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"userLogin(loginForm)\" class=\"mx-auto col-md-6 col-lg-5 offset-md-3 loginform-box\">\r\n\r\n    <h4 class=\"text-center mb-3 login-title\"> Login </h4>\r\n\r\n    <div *ngIf=\"!!login_user_msg\" [ngClass]=\"has_error ? 'alert alert-danger': 'alert alert-info'\">{{login_user_msg}}</div>\r\n\r\n    <div class=\"row\">\r\n      <mat-form-field class=\"col-sm-12\">\r\n        <input matInput name=\"username\" placeholder=\"Enter your username\" ngModel autofocus minlength=\"2\" required>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <mat-form-field class=\"col-sm-12\">\r\n        <input matInput name=\"password\" ngModel placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" required>\r\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <button class=\"mt-4 btn-block\" type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"loginForm.invalid\">Log in</button>\r\n\r\n  </form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/feature/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/feature/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/auth/auth.service */ "./src/app/feature/dashboard/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
        this.has_error = false;
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token') != null) {
            this._router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.userLogin = function (form) {
        var _this = this;
        // console.log("form", form.value);
        this._auth.loginUser(form.value)
            .subscribe(function (res) {
            // console.log("Token reterive successful", res)
            _this.has_error = false;
            _this.login_user_msg = 'Login in, Please wait... !!!';
            localStorage.setItem('token', res.access_token);
            localStorage.setItem('refreshToken', res.refresh_token);
            _this._router.navigate(['/home']);
        }, function (error) {
            // console.log("user login error", error.error);
            _this.has_error = true;
            _this.login_user_msg = 'Invalid Username and Password !!!';
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/feature/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/feature/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _dashboard_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ].concat(modules),
            exports: modules.slice(),
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            declarations: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://leave.herokuapp.com/api',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Walid\Desktop\najib\final\leave-management-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map