webpackJsonp([1],{

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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_components_list_articles_list_articles_component__ = __webpack_require__("../../../../../src/app/shop/components/list-articles/list-articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shop_components_basket_basket_component__ = __webpack_require__("../../../../../src/app/shop/components/basket/basket.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    {
        path: 'products', component: __WEBPACK_IMPORTED_MODULE_2__shop_components_list_articles_list_articles_component__["a" /* ListArticlesComponent */]
    },
    {
        path: 'basket', component: __WEBPACK_IMPORTED_MODULE_3__shop_components_basket_basket_component__["a" /* BasketComponent */]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__shop_components_list_articles_list_articles_component__["a" /* ListArticlesComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-light bg-faded\">\n    <div class=\"navbar-nav mr-auto\">\n      <div class=\"row\">\n\n        <div class=\"nav-item\">\n          <div class=\"col\">\n            <a class=\"nav-link\" style=\"color: #b2b2b2\" routerLink=\"/products\" routerLinkActive=\"active\"><b>Produkte</b></a>\n          </div>\n        </div>\n        <div class=\"nav-item\">\n          <div class=\"col\">\n            <a class=\"nav-link\" style=\"color: #b2b2b2\" routerLink=\"/basket\"\n               routerLinkActive=\"active\"><b>Warenkorb</b></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nav>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shop_components_list_articles_list_articles_component__ = __webpack_require__("../../../../../src/app/shop/components/list-articles/list-articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shop_components_basket_basket_component__ = __webpack_require__("../../../../../src/app/shop/components/basket/basket.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shop_services_basket_service__ = __webpack_require__("../../../../../src/app/shop/services/basket.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__shop_components_list_articles_list_articles_component__["a" /* ListArticlesComponent */],
            __WEBPACK_IMPORTED_MODULE_5__shop_components_basket_basket_component__["a" /* BasketComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shop_services_basket_service__["a" /* BasketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/shop/components/basket/basket.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop/components/basket/basket.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>\n        Warenkorb\n      </h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <div class=\"container\">\n        <ng-container *ngIf=\"products\">\n          <ng-container *ngFor=\"let product of products\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <label>{{product.name}}</label>\n              </div>\n              <div class=\"col-4\">\n                <label>{{product.price}}€</label>\n              </div>\n            </div>\n          </ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"products\">\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <label>Summe: </label>\n            </div>\n            <div class=\"col-4\">\n              <label>{{getSum()}}€</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"btn btn-primary\" (click)=\"buyProducts()\">Kaufen</div>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shop/components/basket/basket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_basket_service__ = __webpack_require__("../../../../../src/app/shop/services/basket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasketComponent = (function () {
    function BasketComponent(httpClient, basketService) {
        this.httpClient = httpClient;
        this.basketService = basketService;
    }
    BasketComponent.prototype.ngOnInit = function () {
        this.products = this.basketService.getBasketItems();
        this.basketId = this.basketService.getBasketId();
    };
    BasketComponent.prototype.getSum = function () {
        var sum = 0;
        this.products.forEach(function (product) { return sum += product.price * product.buyNumber; });
        return sum.toFixed(2);
    };
    BasketComponent.prototype.buyProducts = function () {
        var _this = this;
        var data = {
            method: "CC"
        };
        this.httpClient.post("/payment-service/payments/" + this.basketId, data).toPromise()
            .then(function (data) {
            alert("Danke für ihren Einkauf!");
            _this.products = null;
            _this.basketId = null;
        });
    };
    return BasketComponent;
}());
BasketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-basket',
        template: __webpack_require__("../../../../../src/app/shop/components/basket/basket.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shop/components/basket/basket.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_basket_service__["a" /* BasketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_basket_service__["a" /* BasketService */]) === "function" && _b || Object])
], BasketComponent);

var _a, _b;
//# sourceMappingURL=basket.component.js.map

/***/ }),

/***/ "../../../../../src/app/shop/components/list-articles/list-articles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop/components/list-articles/list-articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>\n        Produkte\n      </h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <div class=\"container\">\n        <ng-container *ngIf=\"products\">\n          <ng-container *ngFor=\"let product of products\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <label>{{product.name}}</label>\n              </div>\n              <div class=\"col-4\">\n                <label>{{product.price}}€</label>\n              </div>\n              <div class=\"col-4\">\n                <input class=\"form-control\" type=\"number\" min=\"0\" [(ngModel)]=\"product.buyNumber\">\n              </div>\n            </div>\n          </ng-container>\n        </ng-container>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"btn btn-primary\" (click)=\"buyProducts()\">In den Warenkorb</div>\n          </div>\n        </div>\n    </div>\n  </div>\n\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/shop/components/list-articles/list-articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_basket_service__ = __webpack_require__("../../../../../src/app/shop/services/basket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListArticlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListArticlesComponent = (function () {
    function ListArticlesComponent(httpClient, basketService, router) {
        this.httpClient = httpClient;
        this.basketService = basketService;
        this.router = router;
    }
    ListArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get("/catalogue-service/articles").toPromise()
            .then(function (data) {
            _this.products = data.json();
            _this.products.forEach(function (product) { return product.buyNumber = 0; });
        });
    };
    ListArticlesComponent.prototype.buyProducts = function () {
        var _this = this;
        this.productsForBasket = this.products.filter(function (product) { return product.buyNumber > 0; });
        var items = [];
        this.productsForBasket.forEach(function (product) {
            items.push({ article: product.uuid, quantity: product.buyNumber });
        });
        var data = { customer: "41440721-19db-4a02-8fd8-b6a0f3427d46", items: items };
        this.httpClient.post("/checkout-service/checkouts", data).toPromise()
            .then(function (data) {
            console.log(data.json());
            _this.basketService.setBasket(data.json().basket, _this.productsForBasket);
            _this.router.navigate(["basket"]);
        });
    };
    return ListArticlesComponent;
}());
ListArticlesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-list-articles',
        template: __webpack_require__("../../../../../src/app/shop/components/list-articles/list-articles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shop/components/list-articles/list-articles.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_basket_service__["a" /* BasketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_basket_service__["a" /* BasketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ListArticlesComponent);

var _a, _b, _c;
//# sourceMappingURL=list-articles.component.js.map

/***/ }),

/***/ "../../../../../src/app/shop/services/basket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasketService = (function () {
    function BasketService() {
    }
    BasketService.prototype.setBasket = function (uuid, productsForBasket) {
        this.uuid = uuid;
        this.products = productsForBasket;
    };
    BasketService.prototype.getBasketId = function () {
        return this.uuid;
    };
    BasketService.prototype.getBasketItems = function () {
        return this.products;
    };
    return BasketService;
}());
BasketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BasketService);

//# sourceMappingURL=basket.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map