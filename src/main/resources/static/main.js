(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav {\r\n  width: 250px;\r\n}\r\n\r\nmat-sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\nfooter.page-footer {\r\n  margin: 0;\r\n}\r\n\r\nfooter h2 {\r\n  margin-top: 10px;\r\n}\r\n\r\n.sidenav-button {\r\n  width: 100%;\r\n}\r\n\r\nheader .fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\nheader #navbar-logo {\r\n  font-weight: bold;\r\n}\r\n\r\nfooter ul {\r\n  padding-left: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZm9vdGVyLnBhZ2UtZm9vdGVyIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmZvb3RlciBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNpZGVuYXYtYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaGVhZGVyIC5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciAjbmF2YmFyLWxvZ28ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5mb290ZXIgdWwge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n\r\n  <mat-sidenav #sidenav>\r\n    <button mat-button (click)=\"router.navigate(['/lessons']); sidenav.close()\" class=\"sidenav-button\">Lessons</button>\r\n    <button mat-button (click)=\"router.navigate(['/profile']); sidenav.close()\" class=\"sidenav-button\">Profile</button>\r\n    <button mat-button (click)=\"sidenav.close(); authenticationService.directLogOut()\" class=\"sidenav-button\">Logout</button>\r\n  </mat-sidenav>\r\n\r\n  <header *ngIf=\"!isVideoSessionUrl()\">\r\n    <mat-toolbar color=\"primary\" class=\"mat-elevation-z6\">\r\n      <button mat-button routerLink=\"/\" id=\"navbar-logo\">\r\n        Tedious onView(\"GET\", this.knowledge)\r\n      </button>\r\n      <span class=\"fill-remaining-space\"></span>\r\n      <div *ngIf=\"authenticationService.isLoggedIn()\" fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\r\n        <button mat-button routerLink=\"/lessons\">Lessons</button>\r\n        <button mat-button routerLink=\"/profile\">Profile</button>\r\n        <button mat-button (click)=\"authenticationService.directLogOut()\">LOGOUT</button>\r\n      </div>\r\n      <button *ngIf=\"authenticationService.isLoggedIn()\" mat-button fxHide=\"false\" fxHide.gt-sm (click)=\"sidenav.open()\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n    </mat-toolbar>\r\n  </header>\r\n\r\n  <main [@routerTransition]=\"o.isActivated && o.activatedRoute.routeConfig.path\">\r\n    <router-outlet #o=\"outlet\"></router-outlet>\r\n  </main>\r\n\r\n  <footer *ngIf=\"!isVideoSessionUrl()\" class=\"page-footer back-primary color-secondary mat-elevation-z5\">\r\n    <div class=\"container\">\r\n      <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start start\" fxLayoutAlign.xs=\"start\">\r\n        <div fxFlex=\"50%\" fxFlex.xs=\"100%\">\r\n          <h2>An Application For Webinars and Remote Trainings</h2>\r\n          <p class=\"grey-text text-lighten-4\">Implementing a secure real time app with OpenVidu</p>\r\n        </div>\r\n        <div fxFlex=\"50%\" fxFlex.xs=\"100%\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"end start\" fxLayoutAlign.xs=\"start\">\r\n            <div fxFlex=\"50%\">\r\n              <h2>Technologies</h2>\r\n              <ul>\r\n                <li>\r\n                  <a class=\"hover-link\" href=\"https://angular.io/\" target=\"_blank\">Angular</a>\r\n                </li>\r\n                <li>\r\n                  <a class=\"hover-link\" href=\"https://material.angular.io/\" target=\"_blank\">Angular Material</a>\r\n                </li>\r\n                <li>\r\n                  <a class=\"hover-link\" href=\"https://spring.io/\" target=\"_blank\">Spring Framework</a>\r\n                </li>\r\n                <li>\r\n                  <a class=\"hover-link\" href=\"https://www.kurento.org/\" target=\"_blank\">Kurento</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div fxFlex=\"50%\">\r\n              <h2>Connect</h2>\r\n              <ul>\r\n                <li>\r\n                  <a class=\"hover-link\" href=\"#\" target=\"_blank\"> with {{ TypeError }}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n</mat-sidenav-container>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.animation */ "./src/app/router.animation.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AppComponent.prototype.isVideoSessionUrl = function () {
        return (this.router.url.substring(0, '/lesson/'.length) === '/lesson/');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_router_animation__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/presentation/presentation.component */ "./src/app/components/presentation/presentation.component.ts");
/* harmony import */ var _components_dashboard_dahsboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dahsboard.component */ "./src/app/components/dashboard/dahsboard.component.ts");
/* harmony import */ var _components_lesson_details_lesson_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/lesson-details/lesson-details.component */ "./src/app/components/lesson-details/lesson-details.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_video_session_video_session_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/video-session/video-session.component */ "./src/app/components/video-session/video-session.component.ts");
/* harmony import */ var _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/error-message/error-message.component */ "./src/app/components/error-message/error-message.component.ts");
/* harmony import */ var _components_dashboard_join_session_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/join-session-dialog.component */ "./src/app/components/dashboard/join-session-dialog.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_lesson_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/lesson.service */ "./src/app/services/lesson.service.ts");
/* harmony import */ var _services_video_session_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/video-session.service */ "./src/app/services/video-session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_11__["PresentationComponent"],
                _components_dashboard_dahsboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_lesson_details_lesson_details_component__WEBPACK_IMPORTED_MODULE_13__["LessonDetailsComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _components_video_session_video_session_component__WEBPACK_IMPORTED_MODULE_15__["VideoSessionComponent"],
                _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_16__["ErrorMessageComponent"],
                _components_dashboard_join_session_dialog_component__WEBPACK_IMPORTED_MODULE_17__["JoinSessionDialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
            ],
            providers: [
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"],
                _services_lesson_service__WEBPACK_IMPORTED_MODULE_20__["LessonService"],
                _services_video_session_service__WEBPACK_IMPORTED_MODULE_21__["VideoSessionService"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
            ],
            entryComponents: [
                _components_dashboard_join_session_dialog_component__WEBPACK_IMPORTED_MODULE_17__["JoinSessionDialogComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_dashboard_dahsboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dahsboard.component */ "./src/app/components/dashboard/dahsboard.component.ts");
/* harmony import */ var _components_lesson_details_lesson_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lesson-details/lesson-details.component */ "./src/app/components/lesson-details/lesson-details.component.ts");
/* harmony import */ var _components_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/presentation/presentation.component */ "./src/app/components/presentation/presentation.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_video_session_video_session_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/video-session/video-session.component */ "./src/app/components/video-session/video-session.component.ts");







var appRoutes = [
    {
        path: '',
        component: _components_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_4__["PresentationComponent"],
        pathMatch: 'full',
        data: { state: 'presentation' }
    },
    {
        path: 'lessons',
        component: _components_dashboard_dahsboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: { state: 'lessons' }
    },
    {
        path: 'lesson-details/:id',
        component: _components_lesson_details_lesson_details_component__WEBPACK_IMPORTED_MODULE_3__["LessonDetailsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: { state: 'lesson-details' }
    },
    {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: { state: 'profile' }
    },
    {
        path: 'lesson/:id',
        component: _components_video_session_video_session_component__WEBPACK_IMPORTED_MODULE_6__["VideoSessionComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        data: { state: 'session' }
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
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
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('login') && localStorage.getItem('rol') && this.authenticationService.isLoggedIn()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dahsboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dahsboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_lesson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/lesson */ "./src/app/models/lesson.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_lesson_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/lesson.service */ "./src/app/services/lesson.service.ts");
/* harmony import */ var _services_video_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/video-session.service */ "./src/app/services/video-session.service.ts");
/* harmony import */ var _join_session_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./join-session-dialog.component */ "./src/app/components/dashboard/join-session-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(lessonService, videoSessionService, router, authenticationService, snackBar, dialog) {
        this.lessonService = lessonService;
        this.videoSessionService = videoSessionService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.snackBar = snackBar;
        this.dialog = dialog;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.authenticationService.checkCredentials();
        this.getLessons();
    };
    DashboardComponent.prototype.logout = function () {
        this.authenticationService.logOut();
    };
    DashboardComponent.prototype.getLessons = function () {
        var _this = this;
        this.lessonService.getLessons(this.authenticationService.getCurrentUser()).subscribe(function (lessons) {
            console.log('User\'s lessons: ');
            console.log(lessons);
            _this.lessons = lessons;
            _this.authenticationService.updateUserLessons(_this.lessons);
        }, function (error) { return console.log(error); });
    };
    DashboardComponent.prototype.goToLesson = function (lesson) {
        var _this = this;
        this.videoSessionService.lesson = lesson;
        if (this.authenticationService.isTeacher()) {
            var dialogRef = void 0;
            dialogRef = this.dialog.open(_join_session_dialog_component__WEBPACK_IMPORTED_MODULE_7__["JoinSessionDialogComponent"]);
            dialogRef.componentInstance.myReference = dialogRef;
            dialogRef.afterClosed().subscribe(function (cameraOptions) {
                if (!!cameraOptions) {
                    console.log('Joining session with options:');
                    console.log(cameraOptions);
                    _this.videoSessionService.cameraOptions = cameraOptions;
                    _this.router.navigate(['/lesson/' + lesson.id]);
                }
            });
        }
        else {
            this.router.navigate(['/lesson/' + lesson.id]);
        }
    };
    DashboardComponent.prototype.goToLessonDetails = function (lesson) {
        this.router.navigate(['/lesson-details/' + lesson.id]);
    };
    DashboardComponent.prototype.newLesson = function () {
        var _this = this;
        this.submitNewLesson = true;
        this.lessonService.newLesson(new _models_lesson__WEBPACK_IMPORTED_MODULE_3__["Lesson"](this.lessonTitle)).subscribe(function (lesson) {
            console.log('New lesson added: ');
            console.log(lesson);
            _this.lessons.push(lesson);
            _this.authenticationService.updateUserLessons(_this.lessons);
            _this.submitNewLesson = false;
            _this.snackBar.open('Lesson added!', undefined, { duration: 3000 });
            _this.addingLesson = false;
        }, function (error) {
            console.log(error);
            _this.submitNewLesson = false;
            _this.snackBar.open('There has been a problem...', undefined, { duration: 3000 });
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lesson_service__WEBPACK_IMPORTED_MODULE_5__["LessonService"],
            _services_video_session_service__WEBPACK_IMPORTED_MODULE_6__["VideoSessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  margin-top: 20px;\r\n}\r\n\r\nmat-card mat-icon {\r\n  text-align: center;\r\n}\r\n\r\nspan.teacher {\r\n  font-size: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZCBtYXQtaWNvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5zcGFuLnRlYWNoZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!this.lessons\" class=\"cssload-container\">\r\n  <div class=\"cssload-tube-tunnel\"></div>\r\n</div>\r\n\r\n<div *ngIf=\"this.lessons\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <div class=\"div-inner-main\" [style.xs]=\"{'width': '100%'}\">\r\n\r\n    <div *ngIf=\"!addingLesson\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <div fxFlex=\"80%\">MY LESSONS</div>\r\n      <mat-icon fxFlex=\"20%\" fxLayoutAlign=\"end center\" *ngIf=\"authenticationService.isTeacher()\" (click)=\"addingLesson = true\"\r\n        [title]=\"'Add lesson'\">add_circle_outline</mat-icon>\r\n    </div>\r\n\r\n    <div *ngIf=\"addingLesson\">\r\n      <div>NEW LESSON</div>\r\n      <form #newLessonForm (ngSubmit)=\"newLesson(); newLessonForm.reset()\" [class.filtered]=\"submitNewLesson\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Title\" [(ngModel)]=\"lessonTitle\" name=\"lessonTitle\" id=\"lessonTitle\" type=\"text\"\r\n            autocomplete=\"off\" required>\r\n        </mat-form-field>\r\n        <div class=\"block-btn\">\r\n          <button mat-button type=\"submit\" [disabled]=\"submitNewLesson\">Send</button>\r\n          <button mat-button (click)=\"addingLesson = false; newLessonForm.reset()\" [disabled]=\"submitNewLesson\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <mat-card *ngFor=\"let lesson of lessons\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\r\n        <span fxFlex=\"70%\" class=\"title\">{{lesson.title}}</span>\r\n        <span fxFlex=\"70%\" *ngIf=\"authenticationService.isStudent()\" class=\"teacher\">{{lesson.teacher.nickName}}</span>\r\n        <mat-icon fxFlex=\"15%\" *ngIf=\"authenticationService.isTeacher()\" (click)=\"goToLessonDetails(lesson)\" [title]=\"'Modify lesson'\">mode_edit</mat-icon>\r\n        <mat-icon fxFlex=\"15%\" (click)=\"goToLesson(lesson)\" [title]=\"'Go to lesson!'\">play_circle_filled</mat-icon>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <div *ngIf=\"lessons.length === 0 && authenticationService.isStudent() && !addingLesson\">\r\n      <app-error-message [errorTitle]=\"'You do not have any lessons'\" [errorContent]=\"'Your teacher must invite you'\"\r\n        [customClass]=\"'warning'\" [closable]=\"false\"></app-error-message>\r\n    </div>\r\n\r\n    <div *ngIf=\"lessons.length === 0 && authenticationService.isTeacher() && !addingLesson\">\r\n      <app-error-message [errorTitle]=\"'You do not have any lessons'\" [errorContent]=\"'You can add one by clicking on the icon above'\"\r\n        [customClass]=\"'warning'\" [closable]=\"false\"></app-error-message>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/join-session-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/join-session-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: JoinSessionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinSessionDialogComponent", function() { return JoinSessionDialogComponent; });
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

var JoinSessionDialogComponent = /** @class */ (function () {
    function JoinSessionDialogComponent() {
        this.quality = 'medium';
        this.joinWithVideo = true;
        this.joinWithAudio = true;
    }
    JoinSessionDialogComponent.prototype.joinSession = function () {
        var cameraOptions = {
            publishAudio: (!this.joinWithAudio) ? false : true,
            publishVideo: (!this.joinWithVideo) ? false : true,
            resolution: this.getResolution()
        };
        this.myReference.close(cameraOptions);
    };
    JoinSessionDialogComponent.prototype.getResolution = function () {
        var resolution;
        switch (this.quality) {
            case 'low':
                resolution = '320x240';
                break;
            case 'medium':
                resolution = '640x480';
                break;
            case 'high':
                resolution = '1280x720';
                break;
            case 'veryhigh':
                resolution = '1920x1080';
                break;
            default:
                resolution = '640x480';
        }
        return resolution;
    };
    JoinSessionDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join-session-dialog',
            template: "\n        <div>\n            <h1 mat-dialog-title>\n                Video options\n            </h1>\n            <form #dialogForm (ngSubmit)=\"joinSession()\">\n                <mat-dialog-content>\n                    <div id=\"quality-div\">\n                        <h5>Quality</h5>\n                        <mat-radio-group [(ngModel)]=\"quality\" name=\"quality\" id=\"quality\">\n                            <mat-radio-button value='low' title=\"320x240\">Low</mat-radio-button>\n                            <mat-radio-button value='medium' title=\"640x480\">Medium</mat-radio-button>\n                            <mat-radio-button value='high' title=\"1280x720\">High</mat-radio-button>\n                            <mat-radio-button value='veryhigh' title=\"1920x1080\">Very high</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    <div id=\"join-div\">\n                        <h5>Enter with active...</h5>\n                        <mat-checkbox [(ngModel)]=\"joinWithVideo\" name=\"joinWithVideo\" id=\"joinWithVideo\">Video</mat-checkbox>\n                        <mat-checkbox [(ngModel)]=\"joinWithAudio\" name=\"joinWithAudio\">Audio</mat-checkbox>\n                    </div>\n                </mat-dialog-content>\n                <mat-dialog-actions>\n                    <button mat-button mat-dialog-close type=\"button\">CANCEL</button>\n                    <button mat-button id=\"join-btn\" type=\"submit\">JOIN</button>\n                </mat-dialog-actions>\n            </form>\n        </div>\n    ",
            styles: ["\n        #quality-div {\n            margin-top: 20px;\n        }\n        #join-div {\n            margin-top: 25px;\n            margin-bottom: 20px;\n        }\n        #quality-tag {\n            display: block;\n        }\n        h5 {\n            margin-bottom: 10px;\n            text-align: left;\n        }\n        #joinWithVideo {\n            margin-right: 50px;\n        }\n        mat-dialog-actions {\n            display: block;\n        }\n        #join-btn {\n            float: right;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], JoinSessionDialogComponent);
    return JoinSessionDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/error-message/error-message.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fail {\r\n  background-color: rgba(167, 56, 65, 0.2);\r\n  color: #a73841;\r\n}\r\n\r\n.warning {\r\n  background-color: rgba(175, 110, 0, 0.2);\r\n  color: #af6e00;\r\n}\r\n\r\n.correct {\r\n  background-color: rgba(55, 86, 70, 0.25);\r\n  color: #375546;\r\n}\r\n\r\nmat-icon {\r\n  cursor: pointer;\r\n  float: right;\r\n}\r\n\r\nmat-card {\r\n  max-width: 400px;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  box-shadow: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Vycm9yLW1lc3NhZ2UvZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhaWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY3LCA1NiwgNjUsIDAuMik7XHJcbiAgY29sb3I6ICNhNzM4NDE7XHJcbn1cclxuXHJcbi53YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgMTEwLCAwLCAwLjIpO1xyXG4gIGNvbG9yOiAjYWY2ZTAwO1xyXG59XHJcblxyXG4uY29ycmVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSwgODYsIDcwLCAwLjI1KTtcclxuICBjb2xvcjogIzM3NTU0NjtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/error-message/error-message.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card [ngClass]=\"customClass\">\r\n  <mat-icon *ngIf=\"closable\" (click)=\"closeAlert()\">clear</mat-icon>\r\n  <mat-card-title>{{this.errorTitle}}</mat-card-title>\r\n  <mat-card-subtitle [innerHTML]=\"this.errorContent\"></mat-card-subtitle>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/error-message/error-message.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.ts ***!
  \*********************************************************************/
/*! exports provided: ErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function() { return ErrorMessageComponent; });
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

var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent() {
        this.eventShowable = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ErrorMessageComponent.prototype.closeAlert = function () {
        this.eventShowable.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ErrorMessageComponent.prototype, "errorTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ErrorMessageComponent.prototype, "errorContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ErrorMessageComponent.prototype, "customClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ErrorMessageComponent.prototype, "closable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ErrorMessageComponent.prototype, "timeable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ErrorMessageComponent.prototype, "eventShowable", void 0);
    ErrorMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-message',
            template: __webpack_require__(/*! ./error-message.component.html */ "./src/app/components/error-message/error-message.component.html"),
            styles: [__webpack_require__(/*! ./error-message.component.css */ "./src/app/components/error-message/error-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/lesson-details/lesson-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/lesson-details/lesson-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".attender-email {\r\n  font-size: 11px;\r\n}\r\n\r\n.no-margin-bottom {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.attender-row {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  min-height: 27px;\r\n}\r\n\r\n#new-attender-title {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n/*Rotating animation*/\r\n\r\n@-webkit-keyframes rotating\r\n/* Safari and Chrome */\r\n\r\n  {\r\n  from {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n@keyframes rotating {\r\n  from {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n.rotating {\r\n  -webkit-animation: rotating 1s linear infinite;\r\n  animation: rotating 1s linear infinite;\r\n  cursor: default !important;\r\n}\r\n\r\n.rotating:hover {\r\n  color: inherit !important;\r\n}\r\n\r\n/*End rotating animation*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZXNzb24tZGV0YWlscy9sZXNzb24tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQsc0JBQXNCOztBQUV0Qjs7OztFQUlFO0lBR0Usa0NBQWtDO0lBRWxDLDBCQUEwQjtHQUMzQjtFQUNEO0lBR0UsZ0NBQWdDO0lBRWhDLHdCQUF3QjtHQUN6QjtDQUNGOztBQUVEO0VBQ0U7SUFHRSxrQ0FBa0M7SUFFbEMsMEJBQTBCO0dBQzNCO0VBQ0Q7SUFHRSxnQ0FBZ0M7SUFFaEMsd0JBQXdCO0dBQ3pCO0NBQ0Y7O0FBRUQ7RUFDRSwrQ0FBK0M7RUFJL0MsdUNBQXVDO0VBQ3ZDLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRCwwQkFBMEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xlc3Nvbi1kZXRhaWxzL2xlc3Nvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXR0ZW5kZXItZW1haWwge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLm5vLW1hcmdpbi1ib3R0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF0dGVuZGVyLXJvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtaW4taGVpZ2h0OiAyN3B4O1xyXG59XHJcblxyXG4jbmV3LWF0dGVuZGVyLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi8qUm90YXRpbmcgYW5pbWF0aW9uKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGluZ1xyXG4vKiBTYWZhcmkgYW5kIENocm9tZSAqL1xyXG5cclxuICB7XHJcbiAgZnJvbSB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0aW5nIHtcclxuICBmcm9tIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5yb3RhdGluZyB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0aW5nIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbjogcm90YXRpbmcgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tcy1hbmltYXRpb246IHJvdGF0aW5nIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtby1hbmltYXRpb246IHJvdGF0aW5nIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IHJvdGF0aW5nIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdGF0aW5nOmhvdmVyIHtcclxuICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKkVuZCByb3RhdGluZyBhbmltYXRpb24qLyJdfQ== */"

/***/ }),

/***/ "./src/app/components/lesson-details/lesson-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/lesson-details/lesson-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"lesson\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <div class=\"div-inner-main\" [style.xs]=\"{'width': '100%'}\">\r\n\r\n    <div *ngIf=\"!editingTitle\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <mat-icon fxFlex=\"15%\" fxLayoutAlign=\"start center\" (click)=\"router.navigate(['/lessons'])\" [title]=\"'Back to lessons'\">keyboard_arrow_left</mat-icon>\r\n      <h2 fxFlex=\"70%\">{{lesson.title}}</h2>\r\n      <mat-icon fxFlex=\"15%\" fxLayoutAlign=\"end center\" (click)=\"editingTitle = true; titleEdited = lesson.title\"\r\n        [title]=\"'Edit lesson'\">mode_edit</mat-icon>\r\n    </div>\r\n\r\n    <div *ngIf=\"editingTitle\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <form #editLessonForm (ngSubmit)=\"editLesson(); editLessonForm.reset()\" [class.filtered]=\"sumbitEditLesson\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Title\" [(ngModel)]=\"titleEdited\" name=\"lessonTitle\" type=\"text\" autocomplete=\"off\"\r\n            required>\r\n        </mat-form-field>\r\n        <div class=\"block-btn\">\r\n          <button mat-button type=\"submit\" [disabled]=\"sumbitEditLesson\">Send</button>\r\n          <button mat-button (click)=\"editingTitle = false; titleEdited = ''\" [disabled]=\"sumbitEditLesson\">Cancel</button>\r\n          <button mat-button (click)=\"deleteLesson()\" [disabled]=\"sumbitEditLesson\">Delete lesson</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <form #addAttendersForm (ngSubmit)=\"addLessonAttenders(); addAttendersForm.reset()\" [class.filtered]=\"sumbitAddAttenders\">\r\n      <h4 id=\"new-attender-title\">New attender</h4>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"emailAttender\" name=\"attenderEmail\" type=\"text\" autocomplete=\"off\"\r\n          required>\r\n      </mat-form-field>\r\n      <div class=\"block-btn\">\r\n        <button mat-button type=\"submit\" [disabled]=\"sumbitAddAttenders\">Send</button>\r\n        <button mat-button (click)=\"addAttendersForm.reset()\" [disabled]=\"sumbitAddAttenders || emailAttender == null\">Cancel</button>\r\n      </div>\r\n    </form>\r\n\r\n    <app-error-message *ngIf=\"addAttendersCorrect\" (eventShowable)=\"addAttendersCorrect = false\" [errorTitle]=\"attCorrectTitle\"\r\n      [errorContent]=\"attCorrectContent\" [customClass]=\"'correct'\" [closable]=\"true\"></app-error-message>\r\n    <app-error-message *ngIf=\"addAttendersError\" (eventShowable)=\"addAttendersError = false\" [errorTitle]=\"attErrorTitle\"\r\n      [errorContent]=\"attErrorContent\" [customClass]=\"'fail'\" [closable]=\"true\"></app-error-message>\r\n\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"space-between center\" fxLayoutAlign.xs=\"start\"\r\n      class=\"attender-row\">\r\n      <div fxFlex=\"90%\" class=\"no-margin-bottom\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" fxLayoutAlign.xs=\"start\"\r\n          fxLayoutGap=\"20px\">\r\n          <div class=\"no-margin-bottom\" fxFlex>{{authenticationService.getCurrentUser().nickName}}</div>\r\n          <div class=\"attender-email\" fxFlex>{{authenticationService.getCurrentUser().name}}</div>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"10%\"></div>\r\n    </div>\r\n    <div *ngFor=\"let attender of lesson.attenders; let i = index\">\r\n      <div *ngIf=\"attender.id != authenticationService.getCurrentUser().id\" fxLayout=\"row\" fxLayoutAlign.xs=\"start\"\r\n        fxLayoutGap=\"20px\" class=\"attender-row\">\r\n        <div fxFlex=\"90%\">\r\n          <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" fxLayoutAlign.xs=\"start\"\r\n            fxLayoutGap=\"20px\">\r\n            <div class=\"no-margin-bottom\" fxFlex>{{attender.nickName}}</div>\r\n            <div class=\"attender-email\" fxFlex>{{attender.name}}</div>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"10%\">\r\n          <mat-icon *ngIf=\"!this.arrayOfAttDels[i]\" (click)=\"deleteLessonAttender(i, attender)\" [title]=\"'Remove attender'\">clear</mat-icon>\r\n          <mat-icon *ngIf=\"this.arrayOfAttDels[i]\" class=\"rotating\">cached</mat-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/lesson-details/lesson-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/lesson-details/lesson-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: LessonDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonDetailsComponent", function() { return LessonDetailsComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_lesson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/lesson */ "./src/app/models/lesson.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_lesson_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/lesson.service */ "./src/app/services/lesson.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LessonDetailsComponent = /** @class */ (function () {
    function LessonDetailsComponent(lessonService, authenticationService, router, route, location, snackBar) {
        this.lessonService = lessonService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.snackBar = snackBar;
        this.editingTitle = false;
        this.sumbitEditLesson = false;
        this.sumbitAddAttenders = false;
        this.arrayOfAttDels = [];
        // Feedback message parameters
        this.addAttendersCorrect = false;
        this.addAttendersError = false;
    }
    LessonDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return _this.lessonService.obtainLocalLesson(+params['id']); })
            .subscribe(function (lesson) { return _this.lesson = lesson; });
    };
    LessonDetailsComponent.prototype.editLesson = function () {
        var _this = this;
        if (this.titleEdited !== this.lesson.title) {
            this.sumbitEditLesson = true;
            var l = new _models_lesson__WEBPACK_IMPORTED_MODULE_4__["Lesson"](this.titleEdited);
            l.id = this.lesson.id;
            this.lessonService.editLesson(l).subscribe(function (lesson) {
                // Lesson has been updated
                console.log('Lesson edited: ');
                console.log(lesson);
                _this.lesson = lesson;
                _this.sumbitEditLesson = false;
                _this.editingTitle = false;
                _this.snackBar.open('Lesson edited!', undefined, { duration: 3000 });
            }, function (error) {
                console.log(error);
                _this.sumbitEditLesson = false;
                _this.snackBar.open('There has been a problem...', undefined, { duration: 3000 });
            });
        }
        else {
            this.editingTitle = false; // The user has not modified the title
        }
    };
    LessonDetailsComponent.prototype.deleteLesson = function () {
        var _this = this;
        this.sumbitEditLesson = true;
        this.lessonService.deleteLesson(this.lesson.id).subscribe(function (lesson) {
            // Lesson has been deleted
            console.log('Lesson deleted');
            console.log(lesson);
            _this.sumbitEditLesson = false;
            _this.router.navigate(['/lessons']);
            _this.snackBar.open('Lesson deleted!', undefined, { duration: 3000 });
        }, function (error) {
            console.log(error);
            _this.sumbitEditLesson = false;
            _this.snackBar.open('There has been a problem...', undefined, { duration: 3000 });
        });
    };
    LessonDetailsComponent.prototype.addLessonAttenders = function () {
        var _this = this;
        this.sumbitAddAttenders = true;
        this.lessonService.addLessonAttenders(this.lesson.id, [this.emailAttender]).subscribe(function (response) {
            console.log('Attender added');
            console.log(response);
            _this.sumbitAddAttenders = false;
            var newAttenders = response.attendersAdded;
            _this.lesson.attenders = _this.lesson.attenders.concat(newAttenders);
            _this.handleAttendersMessage(response);
        }, function (error) {
            console.log(error);
            _this.sumbitAddAttenders = false;
            _this.snackBar.open('There has been a problem...', undefined, { duration: 3000 });
        });
    };
    LessonDetailsComponent.prototype.deleteLessonAttender = function (i, attender) {
        var _this = this;
        this.arrayOfAttDels[i] = true;
        var l = new _models_lesson__WEBPACK_IMPORTED_MODULE_4__["Lesson"](this.lesson.title);
        l.id = this.lesson.id;
        for (var j = 0; j < this.lesson.attenders.length; j++) {
            if (this.lesson.attenders[j].id !== attender.id) {
                // Inserting a new User object equal to the attender but "lessons" array empty
                l.attenders.push(new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"](this.lesson.attenders[j]));
            }
        }
        this.lessonService.deleteLessonAttenders(l).subscribe(function (attenders) {
            console.log('Attender removed');
            console.log(attenders);
            _this.arrayOfAttDels[i] = false;
            _this.lesson.attenders = attenders;
            _this.snackBar.open('Attender removed!', undefined, { duration: 3000 });
        }, function (error) {
            console.log(error);
            _this.arrayOfAttDels[i] = false;
            _this.snackBar.open('There has been a problem...', undefined, { duration: 3000 });
        });
    };
    // Creates an error message when there is any problem during the process of adding Users to a Lesson
    // It also generates a correct feedback message when any student has been correctly added to the Lesson
    LessonDetailsComponent.prototype.handleAttendersMessage = function (response) {
        var isError = false;
        var isCorrect = false;
        this.attErrorContent = '';
        this.attCorrectContent = '';
        if (response.attendersAdded.length > 0) {
            for (var _i = 0, _a = response.attendersAdded; _i < _a.length; _i++) {
                var user = _a[_i];
                this.attCorrectContent += '<span class=\'feedback-list\'>' + user.name + '</span>';
            }
            isCorrect = true;
        }
        if (response.attendersAlreadyAdded.length > 0) {
            this.attErrorContent += '<span>The following users were already added to the lesson</span>';
            for (var _b = 0, _c = response.attendersAlreadyAdded; _b < _c.length; _b++) {
                var user = _c[_b];
                this.attErrorContent += '<span class=\'feedback-list\'>' + user.name + '</span>';
            }
            isError = true;
        }
        if (response.emailsValidNotRegistered.length > 0) {
            this.attErrorContent += '<span>The following users are not registered</span>';
            for (var _d = 0, _e = response.emailsValidNotRegistered; _d < _e.length; _d++) {
                var email = _e[_d];
                this.attErrorContent += '<span class=\'feedback-list\'>' + email + '</span>';
            }
            isError = true;
        }
        if (response.emailsInvalid) {
            if (response.emailsInvalid.length > 0) {
                this.attErrorContent += '<span>These are not valid emails</span>';
                for (var _f = 0, _g = response.emailsInvalid; _f < _g.length; _f++) {
                    var email = _g[_f];
                    this.attErrorContent += '<span class=\'feedback-list\'>' + email + '</span>';
                }
                isError = true;
            }
        }
        if (isError) {
            this.attErrorTitle = 'There have been some problems';
            this.addAttendersError = true;
        }
        else if (response.attendersAdded.length === 0) {
            this.attErrorTitle = 'No emails there!';
            this.addAttendersError = true;
        }
        if (isCorrect) {
            this.attCorrectTitle = 'The following users where properly added';
            this.addAttendersCorrect = true;
        }
    };
    LessonDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lesson-details',
            template: __webpack_require__(/*! ./lesson-details.component.html */ "./src/app/components/lesson-details/lesson-details.component.html"),
            styles: [__webpack_require__(/*! ./lesson-details.component.css */ "./src/app/components/lesson-details/lesson-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lesson_service__WEBPACK_IMPORTED_MODULE_7__["LessonService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], LessonDetailsComponent);
    return LessonDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/presentation/presentation.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/presentation/presentation.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  text-align: center;\r\n  display: block;\r\n}\r\n\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-card-actions {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  color: #9e9e9e;\r\n}\r\n\r\n.btn-container {\r\n  text-align: center;\r\n  padding-top: 20px;\r\n}\r\n\r\n.card-button {\r\n  margin-left: 10px !important;\r\n}\r\n\r\n.radio-button-div {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#sign-up-as {\r\n  color: #9e9e9e;\r\n  display: block;\r\n  margin-top: 15px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\ntable {\r\n  margin: 0 auto;\r\n  margin-top: 30px;\r\n  text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6ICM5ZTllOWU7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJhZGlvLWJ1dHRvbi1kaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jc2lnbi11cC1hcyB7XHJcbiAgY29sb3I6ICM5ZTllOWU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/presentation/presentation.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/presentation/presentation.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <div class=\"div-inner-main\" [style.xs]=\"{'width': '100%'}\">\r\n\r\n    <h1>OpenVidu Classroom Demo</h1>\r\n\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\r\n\r\n      <mat-card>\r\n        <mat-card-content>\r\n\r\n          <div *ngIf=\"submitProcessing\" class=\"cssload-container\">\r\n            <div class=\"cssload-tube-tunnel\"></div>\r\n          </div>\r\n\r\n          <form #myForm (ngSubmit)=\"onSubmit()\" [class.filtered]=\"submitProcessing\">\r\n\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" type=\"email\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div *ngIf=\"!loginView\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"nickName\" name=\"nickName\" id=\"nickName\" type=\"text\"\r\n                  autocomplete=\"off\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" type=\"password\"\r\n                  required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div *ngIf=\"!loginView\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Confirm password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" id=\"confirmPassword\"\r\n                  type=\"password\" autocomplete=\"off\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div *ngIf=\"!loginView\" class=\"radio-button-div\">\r\n              <span id=\"sign-up-as\">Sign up as...</span>\r\n              <mat-radio-group [(ngModel)]=\"roleUserSignup\" name=\"roleUserSignup\" id=\"roleUserSignup\">\r\n                <mat-radio-button value='student'>Student</mat-radio-button>\r\n                <mat-radio-button value='teacher'>Teacher</mat-radio-button>\r\n              </mat-radio-group>\r\n            </div>\r\n\r\n            <app-error-message *ngIf=\"fieldsIncorrect\" (eventShowable)=\"fieldsIncorrect = false\" [errorTitle]=\"errorTitle\"\r\n              [errorContent]=\"errorContent\" [customClass]=\"customClass\" [closable]=\"true\"></app-error-message>\r\n\r\n            <div class=\"btn-container\">\r\n              <button mat-raised-button color=\"accent\" type=\"submit\" *ngIf=\"loginView\" id=\"log-in-btn\">Log in</button>\r\n              <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"!loginView\" id=\"sign-up-btn\">Sign up</button>\r\n            </div>\r\n\r\n          </form>\r\n\r\n          <div *ngIf=\"loginView\">\r\n            <table>\r\n              <tr>\r\n                <th>Email</th>\r\n                <th>Password</th>\r\n              </tr>\r\n              <tr>\r\n                <td>teacher@gmail.com</td>\r\n                <td>pass</td>\r\n              </tr>\r\n              <tr>\r\n                <td>student1@gmail.com</td>\r\n                <td>pass</td>\r\n              </tr>\r\n              <tr>\r\n                <td>student2@gmail.com</td>\r\n                <td>pass</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n\r\n        </mat-card-content>\r\n\r\n        <mat-card-actions>\r\n          <div *ngIf=\"loginView\">Not registered yet?<button mat-button (click)=\"setLoginView(false); myForm.reset()\"\r\n              class=\"card-button\">Sign up</button></div>\r\n          <div *ngIf=\"!loginView\">Already registered?<button mat-button (click)=\"setLoginView(true); myForm.reset()\"\r\n              class=\"card-button\">Log in</button></div>\r\n        </mat-card-actions>\r\n\r\n      </mat-card>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/presentation/presentation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/presentation/presentation.component.ts ***!
  \*******************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PresentationComponent = /** @class */ (function () {
    function PresentationComponent(authenticationService, userService, router) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.router = router;
        this.loginView = true;
        this.roleUserSignup = 'student';
    }
    PresentationComponent.prototype.ngOnInit = function () { };
    // If the user is loggedIn, navigates to dashboard
    PresentationComponent.prototype.ngAfterViewChecked = function () {
        if (this.authenticationService.isLoggedIn()) {
            this.router.navigate(['/lessons']);
        }
    };
    PresentationComponent.prototype.setLoginView = function (option) {
        this.fieldsIncorrect = false;
        this.loginView = option;
    };
    PresentationComponent.prototype.onSubmit = function () {
        console.log('Submit: email = ' + this.email + ' , password = ' + this.password + ', confirmPassword = ' + this.confirmPassword);
        this.submitProcessing = true;
        if (this.loginView) {
            // If login view is activated
            console.log('Logging in...');
            this.logIn(this.email, this.password);
        }
        else {
            // If signup view is activated
            console.log('Signing up...');
            this.signUp();
        }
    };
    PresentationComponent.prototype.logIn = function (user, pass) {
        var _this = this;
        this.authenticationService.logIn(user, pass).subscribe(function (result) {
            _this.submitProcessing = false;
            console.log('Login succesful! LOGGED AS ' + _this.authenticationService.getCurrentUser().name);
            // Login successful
            _this.fieldsIncorrect = false;
            _this.router.navigate(['/lessons']);
        }, function (error) {
            console.log('Login failed (error): ' + error);
            _this.errorTitle = 'Invalid field';
            _this.errorContent = 'Please check your email or password';
            _this.customClass = 'fail';
            // Login failed
            _this.handleError();
        });
    };
    PresentationComponent.prototype.signUp = function () {
        var _this = this;
        // Passwords don't match
        if (this.password !== this.confirmPassword) {
            this.errorTitle = 'Your passwords don\'t match!';
            this.errorContent = '';
            this.customClass = 'fail';
            this.handleError();
        }
        else {
            var userNameFixed_1 = this.email;
            var userPasswordFixed_1 = this.password;
            this.userService.newUser(userNameFixed_1, userPasswordFixed_1, this.nickName, this.roleUserSignup).subscribe(function (result) {
                // Sign up succesful
                _this.logIn(userNameFixed_1, userPasswordFixed_1);
                console.log('Sign up succesful!');
            }, function (error) {
                console.log('Sign up failed (error): ' + error);
                if (error === 409) { // CONFLICT: Email already in use
                    _this.errorTitle = 'Invalid email';
                    _this.errorContent = 'That email is already in use';
                    _this.customClass = 'fail';
                }
                else if (error === 403) { // FORBIDDEN: Invalid email format
                    _this.errorTitle = 'Invalid email format';
                    _this.errorContent = 'Our server has rejected that email';
                    _this.customClass = 'fail';
                }
                // Sign up failed
                _this.handleError();
            });
        }
    };
    PresentationComponent.prototype.handleError = function () {
        this.submitProcessing = false;
        this.fieldsIncorrect = true;
    };
    PresentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__(/*! ./presentation.component.html */ "./src/app/components/presentation/presentation.component.html"),
            styles: [__webpack_require__(/*! ./presentation.component.css */ "./src/app/components/presentation/presentation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  margin-top: 15px;\r\n  border-collapse: separate;\r\n  border-spacing: 15px 17px;\r\n}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDE1cHggMTdweDtcclxufVxyXG5cclxudGgge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <div class=\"div-inner-main\" [style.xs]=\"{'width': '100%'}\">\r\n\r\n    <div>MY PROFILE</div>\r\n    <table>\r\n      <tr>\r\n        <td>Name</td>\r\n        <th>{{authenticationService.getCurrentUser().nickName}}</th>\r\n      </tr>\r\n      <tr>\r\n        <td>Email</td>\r\n        <th>{{authenticationService.getCurrentUser().name}}</th>\r\n      </tr>\r\n    </table>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.authenticationService.getCurrentUser();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/video-session/video-session.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/video-session/video-session.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  text-align: center;\r\n  margin: 0;\r\n  color: white;\r\n}\r\n\r\n#header-div {\r\n  position: absolute;\r\n  z-index: 1000;\r\n  width: 100%;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  -webkit-touch-callout: none;\r\n  /* iOS Safari */\r\n  -webkit-user-select: none;\r\n  /* Safari */\r\n  /* Konqueror HTML */\r\n  -moz-user-select: none;\r\n  /* Firefox */\r\n  -ms-user-select: none;\r\n  /* Internet Explorer/Edge */\r\n  user-select: none;\r\n}\r\n\r\nmat-icon {\r\n  font-size: 38px;\r\n  width: 38px;\r\n  height: 38px;\r\n  color: white;\r\n  transition: color .2s linear;\r\n}\r\n\r\nmat-icon:hover {\r\n  color: #ffd740;\r\n}\r\n\r\n#back-btn {\r\n  float: left;\r\n}\r\n\r\n.right-btn {\r\n  float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlby1zZXNzaW9uL3ZpZGVvLXNlc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFFWixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFLYiw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aWRlby1zZXNzaW9uL3ZpZGVvLXNlc3Npb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2hlYWRlci1kaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLyogaU9TIFNhZmFyaSAqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLyogU2FmYXJpICovXHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAvKiBGaXJlZm94ICovXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICB3aWR0aDogMzhweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjJzIGxpbmVhcjtcclxuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIC4ycyBsaW5lYXI7XHJcbiAgLW1zLXRyYW5zaXRpb246IGNvbG9yIC4ycyBsaW5lYXI7XHJcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgLjJzIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuMnMgbGluZWFyO1xyXG59XHJcblxyXG5tYXQtaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmQ3NDA7XHJcbn1cclxuXHJcbiNiYWNrLWJ0biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5yaWdodC1idG4ge1xyXG4gIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/video-session/video-session.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/video-session/video-session.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header-div\">\r\n    <mat-icon id=\"back-btn\" (click)=\"location.back()\" [title]=\"'Back to lessons'\">keyboard_arrow_left</mat-icon>\r\n    <mat-icon class=\"right-btn\" (click)=\"toggleFullScreen()\" [title]=\"'Fullscreen'\">{{fullscreenIcon}}</mat-icon>\r\n    <mat-icon *ngIf=\"authenticationService.isTeacher()\" class=\"right-btn\" (click)=\"toggleLocalVideo()\" [title]=\"'Toggle video'\">{{videoIcon}}</mat-icon>\r\n    <mat-icon *ngIf=\"authenticationService.isTeacher()\" class=\"right-btn\" (click)=\"toggleLocalAudio()\" [title]=\"'Toggle audio'\">{{audioIcon}}</mat-icon>\r\n    <h1>{{lesson?.title}}</h1>\r\n</div>\r\n<div id=\"publisher\"></div>\r\n<div id=\"subscriber\"></div>"

/***/ }),

/***/ "./src/app/components/video-session/video-session.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/video-session/video-session.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideoSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSessionComponent", function() { return VideoSessionComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_video_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/video-session.service */ "./src/app/services/video-session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoSessionComponent = /** @class */ (function () {
    function VideoSessionComponent(location, authenticationService, videoSessionService, snackBar) {
        this.location = location;
        this.authenticationService = authenticationService;
        this.videoSessionService = videoSessionService;
        this.snackBar = snackBar;
    }
    VideoSessionComponent.prototype.OPEN_VIDU_CONNECTION = function () {
        // 0) Obtain 'token' from server
        // In this case, the method ngOnInit takes care of it
        var _this = this;
        // 1) Initialize OpenVidu and your Session
        this.OV = new openvidu_browser__WEBPACK_IMPORTED_MODULE_3__["OpenVidu"]();
        this.session = this.OV.initSession();
        // 2) Specify the actions when events take place
        this.session.on('streamCreated', function (event) {
            console.warn('STREAM CREATED!');
            console.warn(event.stream);
            _this.session.subscribe(event.stream, 'subscriber', {
                insertMode: 'APPEND'
            });
        });
        this.session.on('streamDestroyed', function (event) {
            console.warn('STREAM DESTROYED!');
            console.warn(event.stream);
        });
        this.session.on('connectionCreated', function (event) {
            if (event.connection.connectionId === _this.session.connection.connectionId) {
                console.warn('YOUR OWN CONNECTION CREATED!');
            }
            else {
                console.warn('OTHER USER\'S CONNECTION CREATED!');
            }
            console.warn(event.connection);
        });
        this.session.on('connectionDestroyed', function (event) {
            console.warn('OTHER USER\'S CONNECTION DESTROYED!');
            console.warn(event.connection);
            if (_this.authenticationService.connectionBelongsToTeacher(event.connection)) {
                _this.location.back();
            }
        });
        // 3) Connect to the session
        this.session.connect(this.token, 'CLIENT:' + this.authenticationService.getCurrentUser().name)
            .then(function () {
            if (_this.authenticationService.isTeacher()) {
                // 4) Get your own camera stream with the desired resolution and publish it, only if the user is supposed to do so
                _this.publisher = _this.OV.initPublisher('publisher', _this.cameraOptions);
                _this.publisher.on('accessAllowed', function () {
                    console.warn('CAMERA ACCESS ALLOWED!');
                });
                _this.publisher.on('accessDenied', function () {
                    console.warn('CAMERA ACCESS DENIED!');
                });
                _this.publisher.on('streamCreated', function (event) {
                    console.warn('STREAM CREATED BY PUBLISHER!');
                    console.warn(event.stream);
                });
                // 5) Publish your stream
                _this.session.publish(_this.publisher);
            }
        }).catch(function (error) {
            console.log('There was an error connecting to the session:', error.code, error.message);
        });
    };
    VideoSessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Specific aspects of this concrete application
        this.previousConnectionStuff();
        if (this.authenticationService.isTeacher()) {
            // If the user is the teacher: creates the session and gets a token (with PUBLISHER role)
            this.videoSessionService.createSession(this.lesson.id).subscribe(function () {
                _this.videoSessionService.generateToken(_this.lesson.id).subscribe(function (response) {
                    _this.token = response[0];
                    console.warn('Token: ' + _this.token);
                    _this.OPEN_VIDU_CONNECTION();
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        }
        else {
            // If the user is a student: gets a token (with SUBSCRIBER role)
            this.videoSessionService.generateToken(this.lesson.id).subscribe(function (response) {
                _this.token = response[0];
                console.warn('Token: ' + _this.token);
                _this.OPEN_VIDU_CONNECTION();
            }, function (error) {
                console.log(error);
                if (error.status === 409) {
                    _this.snackBar.open('The teacher has not opened the lesson yet!', 'Undo', {
                        duration: 3000
                    });
                    _this.location.back();
                }
            });
        }
        // Specific aspects of this concrete application
        this.afterConnectionStuff();
    };
    VideoSessionComponent.prototype.ngAfterViewInit = function () {
        this.toggleScrollPage('hidden');
    };
    VideoSessionComponent.prototype.ngOnDestroy = function () {
        this.videoSessionService.removeUser(this.lesson.id).subscribe(function (response) {
            console.warn('You have succesfully left the lesson');
        }, function (error) {
            console.log(error);
        });
        this.toggleScrollPage('auto');
        this.exitFullScreen();
        if (this.OV) {
            this.session.disconnect();
        }
    };
    VideoSessionComponent.prototype.toggleScrollPage = function (scroll) {
        var content = document.getElementsByClassName('mat-sidenav-content')[0];
        content.style.overflow = scroll;
    };
    VideoSessionComponent.prototype.toggleLocalVideo = function () {
        this.localVideoActivated = !this.localVideoActivated;
        this.publisher.publishVideo(this.localVideoActivated);
        this.videoIcon = this.localVideoActivated ? 'videocam' : 'videocam_off';
    };
    VideoSessionComponent.prototype.toggleLocalAudio = function () {
        this.localAudioActivated = !this.localAudioActivated;
        this.publisher.publishAudio(this.localAudioActivated);
        this.audioIcon = this.localAudioActivated ? 'mic' : 'mic_off';
    };
    VideoSessionComponent.prototype.toggleFullScreen = function () {
        var document = window.document;
        var fs = document.getElementsByTagName('html')[0];
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            console.log('enter FULLSCREEN!');
            this.fullscreenIcon = 'fullscreen_exit';
            if (fs.requestFullscreen) {
                fs.requestFullscreen();
            }
            else if (fs.msRequestFullscreen) {
                fs.msRequestFullscreen();
            }
            else if (fs.mozRequestFullScreen) {
                fs.mozRequestFullScreen();
            }
            else if (fs.webkitRequestFullscreen) {
                fs.webkitRequestFullscreen();
            }
        }
        else {
            console.log('exit FULLSCREEN!');
            this.fullscreenIcon = 'fullscreen';
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    };
    VideoSessionComponent.prototype.exitFullScreen = function () {
        var document = window.document;
        var fs = document.getElementsByTagName('html')[0];
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    };
    VideoSessionComponent.prototype.previousConnectionStuff = function () {
        this.lesson = this.videoSessionService.lesson;
        this.cameraOptions = this.videoSessionService.cameraOptions;
    };
    VideoSessionComponent.prototype.afterConnectionStuff = function () {
        if (this.authenticationService.isTeacher()) {
            this.localVideoActivated = this.cameraOptions.publishVideo !== false;
            this.localAudioActivated = this.cameraOptions.publishAudio !== false;
            this.videoIcon = this.localVideoActivated ? 'videocam' : 'videocam_off';
            this.audioIcon = this.localAudioActivated ? 'mic' : 'mic_off';
        }
        this.fullscreenIcon = 'fullscreen';
    };
    VideoSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-session',
            template: __webpack_require__(/*! ./video-session.component.html */ "./src/app/components/video-session/video-session.component.html"),
            styles: [__webpack_require__(/*! ./video-session.component.css */ "./src/app/components/video-session/video-session.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services_video_session_service__WEBPACK_IMPORTED_MODULE_5__["VideoSessionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], VideoSessionComponent);
    return VideoSessionComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/lesson.ts":
/*!**********************************!*\
  !*** ./src/app/models/lesson.ts ***!
  \**********************************/
/*! exports provided: Lesson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson", function() { return Lesson; });
var Lesson = /** @class */ (function () {
    function Lesson(title) {
        this.title = title;
        this.attenders = [];
    }
    return Lesson;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(u) {
        this.id = u.id;
        this.name = u.name;
        this.nickName = u.nickName;
        this.roles = u.roles;
        this.lessons = [];
    }
    return User;
}());



/***/ }),

/***/ "./src/app/router.animation.ts":
/*!*************************************!*\
  !*** ./src/app/router.animation.ts ***!
  \*************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s cubic-bezier(0.000, 0.900, 0.495, 0.990)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0' }))
            ], { optional: true }),
        ])
    ])
]);


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.urlLogIn = 'api-logIn';
        this.urlLogOut = 'api-logOut';
        this.reqIsLogged();
        // set token if saved in local storage
        // let auth_token = JSON.parse(localStorage.getItem('auth_token'));
        // this.token = auth_token && auth_token.token;
    }
    AuthenticationService.prototype.logIn = function (user, pass) {
        var _this = this;
        console.log('Login service started...');
        var userPass = utf8_to_b64(user + ':' + pass);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Basic ' + userPass,
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.urlLogIn, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            _this.processLogInResponse(response);
            return _this.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error); }));
    };
    AuthenticationService.prototype.logOut = function () {
        var _this = this;
        console.log('Logging out...');
        return this.http.get(this.urlLogOut)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log('Logout succesful!');
            _this.user = null;
            _this.role = null;
            // clear token remove user from local storage to log user out and navigates to welcome page
            _this.token = null;
            localStorage.removeItem('login');
            localStorage.removeItem('rol');
            _this.router.navigate(['']);
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error); }));
    };
    AuthenticationService.prototype.directLogOut = function () {
        this.logOut().subscribe(function (response) { }, function (error) { return console.log('Error when trying to log out: ' + error); });
    };
    AuthenticationService.prototype.processLogInResponse = function (response) {
        // Correctly logged in
        console.log('Login succesful processing...');
        this.user = response.json();
        localStorage.setItem('login', 'OPENVIDUAPP');
        if (this.user.roles.indexOf('ROLE_TEACHER') !== -1) {
            this.role = 'ROLE_TEACHER';
            localStorage.setItem('rol', 'ROLE_TEACHER');
        }
        if (this.user.roles.indexOf('ROLE_STUDENT') !== -1) {
            this.role = 'ROLE_STUDENT';
            localStorage.setItem('rol', 'ROLE_STUDENT');
        }
    };
    AuthenticationService.prototype.reqIsLogged = function () {
        var _this = this;
        console.log('ReqIsLogged called');
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        this.http.get(this.urlLogIn, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return _this.processLogInResponse(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error.status !== 401) {
                console.error('Error when asking if logged: ' + JSON.stringify(error));
                _this.logOut();
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
            }
        }));
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (!this.isLoggedIn()) {
            this.logOut();
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return ((this.user != null) && (this.user !== undefined));
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        return this.user;
    };
    AuthenticationService.prototype.isTeacher = function () {
        return ((this.user.roles.indexOf('ROLE_TEACHER')) !== -1) && (localStorage.getItem('rol') === 'ROLE_TEACHER');
    };
    AuthenticationService.prototype.isStudent = function () {
        return ((this.user.roles.indexOf('ROLE_STUDENT')) !== -1) && (localStorage.getItem('rol') === 'ROLE_STUDENT');
    };
    AuthenticationService.prototype.updateUserLessons = function (lessons) {
        this.getCurrentUser().lessons = lessons;
    };
    AuthenticationService.prototype.connectionBelongsToTeacher = function (connection) {
        return connection.data.indexOf('teacher@gmail.com') > -1;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}


/***/ }),

/***/ "./src/app/services/lesson.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/lesson.service.ts ***!
  \********************************************/
/*! exports provided: LessonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonService", function() { return LessonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LessonService = /** @class */ (function () {
    function LessonService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.url = 'api-lessons';
    }
    LessonService.prototype.getLessons = function (user) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.url + '/user/' + user.id, options) // Must send userId
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    LessonService.prototype.getLesson = function (lessonId) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(this.url + '/lesson/' + lessonId, options) // Must send userId
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    // POST new lesson. On success returns the created lesson
    LessonService.prototype.newLesson = function (lesson) {
        var _this = this;
        var body = JSON.stringify(lesson);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url + '/new', body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    // PUT existing lesson. On success returns the updated lesson
    LessonService.prototype.editLesson = function (lesson) {
        var _this = this;
        var body = JSON.stringify(lesson);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.url + '/edit', body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    // DELETE existing lesson. On success returns the deleted lesson (simplified version)
    LessonService.prototype.deleteLesson = function (lessonId) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.delete(this.url + '/delete/' + lessonId, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    // PUT existing lesson, modifying its attenders (adding them). On success returns the updated lesson.attenders array
    LessonService.prototype.addLessonAttenders = function (lessonId, userEmails) {
        var _this = this;
        var body = JSON.stringify(userEmails);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.url + '/edit/add-attenders/lesson/' + lessonId, body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    // PUT existing lesson, modifying its attenders (deleting them). On success returns the updated lesson.attenders array
    LessonService.prototype.deleteLessonAttenders = function (lesson) {
        var _this = this;
        var body = JSON.stringify(lesson);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put(this.url + '/edit/delete-attenders', body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    LessonService.prototype.obtainLocalLesson = function (id) {
        return this.authenticationService.getCurrentUser().lessons.find(function (lesson) { return lesson.id === id; });
    };
    LessonService.prototype.handleError = function (error) {
        console.error(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Server error (' + error.status + '): ' + error.text());
    };
    LessonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LessonService);
    return LessonService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'api-users';
    }
    UserService.prototype.newUser = function (name, pass, nickName, role) {
        var _this = this;
        var body = JSON.stringify([name, pass, nickName, role]);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url + '/new', body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    UserService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.status);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/video-session.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/video-session.service.ts ***!
  \***************************************************/
/*! exports provided: VideoSessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSessionService", function() { return VideoSessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideoSessionService = /** @class */ (function () {
    function VideoSessionService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.url = 'api-sessions';
    }
    // Returns nothing (HttpResponse)
    VideoSessionService.prototype.createSession = function (lessonId) {
        var _this = this;
        var body = JSON.stringify(lessonId);
        return this.http.post(this.url + '/create-session', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    // Returns {0: sessionId, 1: token}
    VideoSessionService.prototype.generateToken = function (lessonId) {
        var _this = this;
        var body = JSON.stringify(lessonId);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url + '/generate-token', body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    VideoSessionService.prototype.removeUser = function (lessonId) {
        var _this = this;
        var body = JSON.stringify(lessonId);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url + '/remove-user', body, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return _this.handleError(error); }));
    };
    VideoSessionService.prototype.handleError = function (error) {
        console.error(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    VideoSessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], VideoSessionService);
    return VideoSessionService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    URL_BACK: 'https://localhost:5000'
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Documents\openvidu\classroom-demo\src\angular\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map