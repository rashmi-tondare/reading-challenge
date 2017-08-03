webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper -->\n<div id=\"wrapper\">\n\n  <!-- Header -->\n  <header id=\"header\">\n    <div class=\"logo\">\n      <span class=\"icon fa-heart\"></span>\n    </div>\n    <div class=\"content\">\n      <div class=\"inner\">\n        <h1>The Reading Challenge!</h1>\n        <p>\n          <!--[-->For all you bibliophiles out there,\n          <!--]--><br />\n          <!--[-->Take the challenge and read from genres that you've never read before!\n          <!--]-->\n        </p>\n      </div>\n    </div>\n    <nav>\n      <ul *ngIf=\"!loggedInUser\">\n        <li><a href=\"#sign-in\">Sign in</a></li>\n      </ul>\n      <ul *ngIf=\"loggedInUser\">\n        <li><a href=\"#challenge-list\" (click)=\"initChallengeList()\">Start Now</a></li>\n        <li><a href=\"#create\">Build Now</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <!-- Main -->\n  <div id=\"main\">\n\n    <!-- Sign In -->\n    <article id=\"sign-in\">\n      <app-sign-in></app-sign-in>\n    </article>\n\n    <!-- View list -->\n    <article id=\"challenge-list\">\n      <app-challenge-list #challengeList ></app-challenge-list>\n    </article>\n\n    <!-- Create challenge -->\n    <article id=\"create\">\n      <app-build-now></app-build-now>\n    </article>\n\n    <article id=\"book-details\">\n      <app-book-details></app-book-details>\n    </article>\n\n  </div>\n\n  <!-- Footer -->\n  <footer id=\"footer\">\n    <p class=\"copyright\">&copy; Ministry of Magic\n  </footer>\n\n</div>\n\n<!-- BG -->\n<div id=\"bg\"></div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_challenge_list_challenge_list_component__ = __webpack_require__("../../../../../src/app/components/challenge-list/challenge-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService) {
        var _this = this;
        authService.initUser()
            .subscribe(function (auth) {
            _this.loggedInUser = auth;
            _this.challengeListComponent.initList();
        });
    }
    AppComponent.prototype.initChallengeList = function () {
        this.challengeListComponent.initList();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* ViewChild */])('challengeList'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__components_challenge_list_challenge_list_component__["a" /* ChallengeListComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__components_challenge_list_challenge_list_component__["a" /* ChallengeListComponent */]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "challengeListComponent", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_book_details_book_details_component__ = __webpack_require__("../../../../../src/app/components/book-details/book-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_challenge_list_challenge_list_component__ = __webpack_require__("../../../../../src/app/components/challenge-list/challenge-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widgets_confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/widgets/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_material_datepicker__ = __webpack_require__("../../../../angular2-material-datepicker/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_build_now_build_now_component__ = __webpack_require__("../../../../../src/app/components/build-now/build-now.component.ts");
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















// Must export the config
var firebaseConfig = {
    apiKey: 'AIzaSyC_6BaHE4QuLraLMmABgGOnyC8v7_1BnAM',
    authDomain: 'reading-challenge-f91af.firebaseapp.com',
    databaseURL: 'https://reading-challenge-f91af.firebaseio.com',
    storageBucket: 'reading-challenge-f91af.appspot.com',
    messagingSenderId: '1092016231214'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_5__widgets_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_challenge_list_challenge_list_component__["a" /* ChallengeListComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_book_details_book_details_component__["a" /* BookDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_build_now_build_now_component__["a" /* BuildNowComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__widgets_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_material_datepicker__["a" /* DatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["MaterialModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_utility_service__["a" /* UtilityService */],
                __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_0__services_app_service__["a" /* AppService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/book-details/book-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/book-details/book-details.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<input type=\"text\" placeholder=\"Book Name\" [(ngModel)]=\"appService.completedChallenge.book_name\">\n<br>\n<input type=\"text\" placeholder=\"Book Author\" [(ngModel)]=\"appService.completedChallenge.book_author\">\n<br>\n<table style=\"table-layout: fixed; width: 100%;\">\n  <tr style=\"background: transparent; border: 0px;\">\n    <td>\n      <material-datepicker placeholder=\"Start Date\" [(date)]=\"appService.completedChallenge.start_date_object\" [dateFormat]=\"dateFormat\"></material-datepicker>\n    </td>\n    <td>\n      <material-datepicker placeholder=\"End Date\" [(date)]=\"appService.completedChallenge.end_date_object\" [dateFormat]=\"dateFormat\"></material-datepicker>\n    </td>\n  </tr>\n</table>\n<button class=\"center-button\" (click)=\"saveBookDetails()\">Save</button>"

/***/ }),

/***/ "../../../../../src/app/components/book-details/book-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_completed_challenge_model__ = __webpack_require__("../../../../../src/app/models/completed-challenge.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookDetailsComponent = (function () {
    function BookDetailsComponent(appService, authService, af, snackbar) {
        this.appService = appService;
        this.authService = authService;
        this.af = af;
        this.snackbar = snackbar;
        this.dateFormat = "DD-MM-YYYY";
    }
    BookDetailsComponent.prototype.ngOnInit = function () { };
    BookDetailsComponent.prototype.saveBookDetails = function () {
        var _this = this;
        var bookDetails = this.appService.completedChallenge;
        bookDetails.user_id = this.authService.loggedInUser.uid;
        if (bookDetails.start_date_object)
            bookDetails.start_date = bookDetails.start_date_object.toString();
        if (bookDetails.end_date_object)
            bookDetails.end_date = bookDetails.end_date_object.toString();
        var data = this.appService.completedChallenges.find(function (temp) { return temp.challenge_id === bookDetails.challenge_id; });
        var observable = this.af.database.list(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* QueryConstants */].LIST_COMPLETED_CHALLENGES);
        if (data) {
            observable.update(data.$key, {
                book_name: bookDetails.book_name,
                book_author: bookDetails.book_author,
                start_date: bookDetails.start_date,
                end_date: bookDetails.end_date,
                challenge_id: bookDetails.challenge_id,
                user_id: bookDetails.user_id
            })
                .then(function () {
                _this.snackbar.open('Updated details!', null, {
                    duration: 2000,
                });
                _this.appService.completedChallenge = new __WEBPACK_IMPORTED_MODULE_0__models_completed_challenge_model__["a" /* CompletedChallenge */]();
                window.location.href = '/#challenge-list';
            });
        }
        else {
            observable
                .push(bookDetails)
                .then(function () {
                _this.snackbar.open('Congrats! You completed another milestone!', null, {
                    duration: 2000,
                });
                _this.appService.completedChallenge = new __WEBPACK_IMPORTED_MODULE_0__models_completed_challenge_model__["a" /* CompletedChallenge */]();
                window.location.href = '/#challenge-list';
            });
        }
    };
    BookDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["l" /* Component */])({
            selector: 'app-book-details',
            template: __webpack_require__("../../../../../src/app/components/book-details/book-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/book-details/book-details.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_app_service__["a" /* AppService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["MdSnackBar"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_material__["MdSnackBar"]) === 'function' && _d) || Object])
    ], BookDetailsComponent);
    return BookDetailsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/book-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/build-now/build-now.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/build-now/build-now.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Coming soon!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/build-now/build-now.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildNowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuildNowComponent = (function () {
    function BuildNowComponent() {
    }
    BuildNowComponent.prototype.ngOnInit = function () {
    };
    BuildNowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-build-now',
            template: __webpack_require__("../../../../../src/app/components/build-now/build-now.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/build-now/build-now.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], BuildNowComponent);
    return BuildNowComponent;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/build-now.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/challenge-list/challenge-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/challenge-list/challenge-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-list>\n  <div *ngFor=\"let item of items\">\n    <md-checkbox (change)=\"changeStatus($event, item)\" [(checked)]=\"item.completed\">\n      {{item.book_prompt}}\n    </md-checkbox>\n    <br><a *ngIf=\"item.completed\" (click)=\"viewMore(item)\" style=\"color: white\">View More</a>\n    <br><br>\n  </div>\n</md-list>"

/***/ }),

/***/ "../../../../../src/app/components/challenge-list/challenge-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_completed_challenge_model__ = __webpack_require__("../../../../../src/app/models/completed-challenge.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChallengeListComponent = (function () {
    function ChallengeListComponent(af, authService, appService, snackbar) {
        this.af = af;
        this.authService = authService;
        this.appService = appService;
        this.snackbar = snackbar;
    }
    ChallengeListComponent.prototype.initList = function () {
        var _this = this;
        this.af.database.list(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* QueryConstants */].LIST_CHALLENGES)
            .subscribe(function (challenges) {
            _this.items = challenges;
            _this.af.database.list(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* QueryConstants */].LIST_COMPLETED_CHALLENGES)
                .subscribe(function (items) {
                _this.appService.completedChallenges = items;
                if (_this.appService.completedChallenges && _this.appService.completedChallenges.length > 0) {
                    var _loop_1 = function(completedChallenge) {
                        var index = _this.items.findIndex(function (temp) { return completedChallenge.user_id === _this.authService.loggedInUser.uid &&
                            temp.id === completedChallenge.challenge_id; });
                        if (index > -1) {
                            _this.items[index].completed = true;
                        }
                    };
                    for (var _i = 0, _a = _this.appService.completedChallenges; _i < _a.length; _i++) {
                        var completedChallenge = _a[_i];
                        _loop_1(completedChallenge);
                    }
                }
            });
        });
    };
    ChallengeListComponent.prototype.changeStatus = function (e, challenge) {
        var _this = this;
        if (e.checked) {
            // prompt to enter details of book
            this.appService.completedChallenge = new __WEBPACK_IMPORTED_MODULE_2__models_completed_challenge_model__["a" /* CompletedChallenge */]();
            this.appService.completedChallenge.challenge_id = challenge.id;
            window.location.href = '/#book-details';
        }
        else {
            // confirm if mark as unread
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.id === challenge.id) {
                    item.completed = false;
                    var bookDetails = this.appService.completedChallenges.find(function (temp) { return temp.challenge_id === challenge.id; });
                    this.af.database.object(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* QueryConstants */].LIST_COMPLETED_CHALLENGES + '/' + bookDetails.$key)
                        .remove()
                        .then(function () {
                        _this.snackbar.open('Marked as unread', null, {
                            duration: 2000,
                        });
                    });
                }
            }
        }
    };
    ChallengeListComponent.prototype.viewMore = function (item) {
        this.appService.completedChallenge = this.appService.completedChallenges.find(function (temp) { return temp.challenge_id === item.id; });
        if (this.appService.completedChallenge.start_date)
            this.appService.completedChallenge.start_date_object = new Date(this.appService.completedChallenge.start_date);
        if (this.appService.completedChallenge.end_date)
            this.appService.completedChallenge.end_date_object = new Date(this.appService.completedChallenge.end_date);
        window.location.href = '/#book-details';
    };
    ChallengeListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["l" /* Component */])({
            selector: 'app-challenge-list',
            template: __webpack_require__("../../../../../src/app/components/challenge-list/challenge-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/challenge-list/challenge-list.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["MdSnackBar"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_material__["MdSnackBar"]) === 'function' && _d) || Object])
    ], ChallengeListComponent);
    return ChallengeListComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/challenge-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".email-sign-in {\n  border-right: white solid 1px;\n  padding: 1.5rem 1.5rem 1rem 0;\n}\n\n.social-sign-in .email-sign-in {\n  width: 50%;\n  max-width: 50%;\n}\n\n.sign-in-row {\n  background: transparent;\n  border: 0px;\n}\n\n.sign-in-table {\n  table-layout: fixed;\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"sign-in-table\">\n  <tr class=\"sign-in-row\">\n    <td class=\"email-sign-in\">\n      <input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\">\n      <br>\n      <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\n      <br>\n      <button class=\"center-button\" (click)=\"signIn(emailPassword)\">Sign In</button>\n    </td>\n    <td class=\"social-sign-in\">\n      <button class=\"center-button\" (click)=\"signIn(facebook)\">Facebook</button>\n      <br>\n      <button class=\"center-button\" (click)=\"signIn(google)\">Google</button>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = (function () {
    function SignInComponent(authService) {
        this.authService = authService;
        this.emailPassword = 'email_password';
        this.facebook = 'facebook';
        this.google = 'google';
    }
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent.prototype.signIn = function (method) {
        switch (method) {
            case this.emailPassword:
                this.authService.signIn(this.email, this.password);
                break;
            case this.facebook:
                this.authService.facebookSignIn();
                break;
            case this.google:
                this.authService.googleSignIn();
                break;
        }
    };
    SignInComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("../../../../../src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sign-in/sign-in.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], SignInComponent);
    return SignInComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QueryConstants; });
var AuthConstants = (function () {
    function AuthConstants() {
    }
    AuthConstants.USER_NOT_FOUND = 'auth/user-not-found';
    return AuthConstants;
}());
var QueryConstants = (function () {
    function QueryConstants() {
    }
    QueryConstants.LIST_CHALLENGES = '/challenges';
    QueryConstants.LIST_COMPLETED_CHALLENGES = '/completed-challenges';
    QueryConstants.CREATED_BY_ADMIN = 'admin';
    return QueryConstants;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/constants.js.map

/***/ }),

/***/ "../../../../../src/app/models/completed-challenge.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedChallenge; });
var CompletedChallenge = (function () {
    function CompletedChallenge() {
    }
    return CompletedChallenge;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/completed-challenge.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_completed_challenge_model__ = __webpack_require__("../../../../../src/app/models/completed-challenge.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = (function () {
    function AppService() {
        this.completedChallenge = new __WEBPACK_IMPORTED_MODULE_0__models_completed_challenge_model__["a" /* CompletedChallenge */]();
        this.completedChallenges = new Array();
    }
    AppService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/app.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("../../../../../src/app/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(af, utilityService) {
        var _this = this;
        this.af = af;
        this.utilityService = utilityService;
        this.initUser().subscribe(function (auth) {
            _this.loggedInUser = auth;
        });
    }
    AuthService.prototype.initUser = function () {
        return this.af.auth;
    };
    AuthService.prototype.signIn = function (email, password) {
        var _this = this;
        this.af.auth.login({
            email: email,
            password: password,
        }, {
            provider: __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* AuthProviders */].Password,
            method: __WEBPACK_IMPORTED_MODULE_3_angularfire2__["c" /* AuthMethods */].Password,
        })
            .then(function (a) {
            window.location.href = '/';
        })
            .catch(function (e) {
            console.error('failed', e);
            if (__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* AuthConstants */].USER_NOT_FOUND.localeCompare(e['code']) === 0) {
                _this.signUp(email, password);
            }
            else {
                _this.utilityService.displayErrorDialog(e.message);
            }
        });
    };
    AuthService.prototype.signUp = function (email, password) {
        var _this = this;
        this.af.auth.createUser({
            email: email,
            password: password
        })
            .then(function (a) {
            window.location.href = '/';
        })
            .catch(function (e) {
            _this.utilityService.displayErrorDialog(e.message);
        });
    };
    AuthService.prototype.facebookSignIn = function () {
        var _this = this;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* AuthProviders */].Facebook,
            method: __WEBPACK_IMPORTED_MODULE_3_angularfire2__["c" /* AuthMethods */].Popup,
        })
            .then(function (a) {
            window.location.href = '/';
        })
            .catch(function (e) {
            _this.utilityService.displayErrorDialog(e.message);
        });
    };
    AuthService.prototype.googleSignIn = function () {
        var _this = this;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_3_angularfire2__["c" /* AuthMethods */].Popup,
        })
            .then(function (a) {
            window.location.href = '/';
            console.log('success', a);
        })
            .catch(function (e) {
            _this.utilityService.displayErrorDialog(e.message);
        });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__utility_service__["a" /* UtilityService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__utility_service__["a" /* UtilityService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_confirmation_dialog_confirmation_dialog_component__ = __webpack_require__("../../../../../src/app/widgets/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilityService = (function () {
    function UtilityService(dialog) {
        this.dialog = dialog;
    }
    UtilityService.prototype.displayErrorDialog = function (message, confirmationAction) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__widgets_confirmation_dialog_confirmation_dialog_component__["a" /* ConfirmationDialogComponent */]);
        var dialogInstance = dialogRef.componentInstance;
        dialogInstance.title = 'Oops!';
        dialogInstance.message = message;
        dialogInstance.option1 = 'Ok';
        if (confirmationAction) {
            dialogInstance.option1Action = confirmationAction;
        }
    };
    UtilityService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_material__["MdDialog"]) === 'function' && _a) || Object])
    ], UtilityService);
    return UtilityService;
    var _a;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/utility.service.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/confirmation-dialog/confirmation-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog-text-color {\n  color: black\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/confirmation-dialog/confirmation-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title class=\"dialog-text-color\">{{title}}</h1>\n<div md-dialog-content class=\"dialog-text-color\">{{message}}</div>\n<div md-dialog-actions>\n  <button md-button *ngIf=\"option1\" (click)=\"option1Click()\">\n    <span class=\"dialog-text-color\">{{option1}}</span>\n  </button>\n  <button md-button *ngIf=\"option2\" (click)=\"option2Click()\">\n    <span class=\"dialog-text-color\">{{option2}}</span>\n  </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/widgets/confirmation-dialog/confirmation-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationDialogComponent = (function () {
    function ConfirmationDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmationDialogComponent.prototype.option1Click = function () {
        if (this.option1Action) {
            this.option1Action();
        }
        this.dialogRef.close(this.option1);
    };
    ConfirmationDialogComponent.prototype.option2Click = function () {
        if (this.option2Action) {
            this.option2Action();
        }
        this.dialogRef.close(this.option2);
    };
    ConfirmationDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__("../../../../../src/app/widgets/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/widgets/confirmation-dialog/confirmation-dialog.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdDialogRef"]) === 'function' && _a) || Object])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/confirmation-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/Rashmi/Projects/reading-challenge/src/polyfills.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map