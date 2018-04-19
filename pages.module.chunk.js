webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/components/pages-plain/login-form/login.form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-4\">\n        <div class=\"card-group mb-0\">\n          <div class=\"card p-4\">\n            <form (ngSubmit)=\"loginSubmit(loginForm)\" #loginForm=\"ngForm\">\n              <div class=\"card-body\">\n                <h1>เข้าสู่ระบบ</h1>\n                <p class=\"text-muted\">เข้าสู่ระบบการขาย</p>\n                <div class=\"error-message no-padding float-lef \" name=\"required-field\" *ngIf=\"errorMessage\">\n                  {{errorMessage}}\n                </div>\n                <div class=\"input-group mb-3\">\n                  <span class=\"input-group-addon\">\n                    <i class=\"icon-user\"></i>\n                  </span>\n                  <input type=\"text\" class=\"form-control\" name=\"username\" ngModel [(ngModel)]=\"username\" placeholder=\"ชื่อผู้ใช้\">\n                </div>\n                <div class=\"input-group mb-4\">\n                  <span class=\"input-group-addon\">\n                    <i class=\"icon-lock\"></i>\n                  </span>\n                  <input type=\"password\" class=\"form-control\" name=\"password\" ngModel [(ngModel)]=\"password\" placeholder=\"รหัสผ่น\">\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <button type=\"submit\" class=\"btn btn-primary px-4\">เข้าสู่ระบบ</button>\n                  </div>\n                  <!-- <div class=\"col-6 text-right\">\n                    <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n                  </div> -->\n                </div>\n              </div>\n            </form>\n          </div>\n          <!-- <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n            <div class=\"card-body text-center\">\n              <div>\n                <h2>Sign up</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                  magna aliqua.</p>\n                <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n              </div>\n            </div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages-plain/login-form/login.form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages-plain/login-form/login.form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_login_model_login_model__ = __webpack_require__("../../../../../src/app/containers/login/model/login.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent() {
        this.login = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LoginFormComponent.prototype.loginSubmit = function (data) {
        var loginModel = new __WEBPACK_IMPORTED_MODULE_1__containers_login_model_login_model__["a" /* LoginModel */](data.value.username, data.value.password);
        this.login.emit(loginModel);
    };
    return LoginFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], LoginFormComponent.prototype, "login", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LoginFormComponent.prototype, "errorMessage", void 0);
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-component',
        template: __webpack_require__("../../../../../src/app/components/pages-plain/login-form/login.form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/pages-plain/login-form/login.form.component.scss")]
    })
], LoginFormComponent);

var _a;
//# sourceMappingURL=login.form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pages-plain/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_login_login_component__ = __webpack_require__("../../../../../src/app/containers/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pages_plain_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/components/pages-plain/login-form/login.form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_barcode__ = __webpack_require__("../../../../ngx-barcode/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__containers_login_login_component__["a" /* LoginComponent */],
                data: {
                    title: 'Login Page'
                }
            }
        ]
    }
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_barcode__["a" /* NgxBarcodeModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__containers_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_pages_plain_login_form_login_form_component__["a" /* LoginFormComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/containers/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    <app-login-component [(errorMessage)]=\"errorMessage\" (login)=\"loginSubmit($event)\"></app-login-component>\n</p>"

/***/ }),

/***/ "../../../../../src/app/containers/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_login_service__ = __webpack_require__("../../../../../src/app/containers/login/service/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.loginSubmit = function (event) {
        var _this = this;
        // this.loginService.loginApi(event);
        this.errorMessage = "";
        this.loginService.loginApi2(event).catch(function (res) {
            _this.setErrorLoginMessage(res);
        });
    };
    LoginComponent.prototype.setErrorLoginMessage = function (res) {
        if (res.status === 401) {
            this.errorMessage = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
        }
        else if (res.status === 404 || res.status === 0) {
            this.errorMessage = "ไม่พบการเชื่อมต่อ";
        }
        else if (res.status === 400 ||
            res.status === 422 ||
            res.status === 500 ||
            res.status === 403) {
            this.errorMessage = "พบข้อผิดพลาด กรุณาติดต่อผู้ดูแลระบบ";
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* LoginService */]],
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/containers/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/containers/login/model/login.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = (function () {
    function LoginModel(username, password) {
        this.username = username;
        this.password = password;
    }
    return LoginModel;
}());

//# sourceMappingURL=login.model.js.map

/***/ }),

/***/ "../../../../../src/app/containers/login/service/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_authentication_service_service__ = __webpack_require__("../../../../../src/app/services/user/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    LoginService.prototype.loginApi = function (data) {
        return this.authenticationService.login(data.username, data.password);
    };
    LoginService.prototype.loginApi2 = function (data) {
        return this.authenticationService.login2(data.username, data.password);
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map