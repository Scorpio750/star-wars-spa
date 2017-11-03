webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_character_character_component__ = __webpack_require__("../../../../../src/app/components/character/character.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_character_service__ = __webpack_require__("../../../../../src/app/services/character.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_character_character_component__["a" /* CharacterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_character_service__["a" /* CharacterService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__components_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<characters></characters>"

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/components/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/character/character.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#char-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    width: 100%;\n    list-style: none;\n    padding: 1em 0;\n}\n\nli {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    opacity: 0.7;\n    transition: 0.3s all ease-in-out;\n}\nli:hover {\n    opacity: 1;\n}\n\n.img-container {\n    cursor: pointer;\n}\n\nimg {\n    width: 16vw;\n    transition: 0.5s all ease-in-out;\n}\n\nh2 {\n    /* font-size: 2em; */\n}\n\n.selected img {\n    width: 18vw;\n}\n\n.movie {\n    font-size: 18px;\n    color: seashell;\n    font-family: monospace;\n    text-shadow: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/character/character.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"char-list\">\n  <li *ngFor=\"let character of characters\"\n    [class.selected]=\"character === selectedCharacter\"\n    (click)=\"onSelect(character)\">\n    <div class=\"img-container\">\n      <img src=\"{{character.imgUrl}}\" alt=\"\">\n    </div>\n    <h2>{{character.name}}</h2>\n    <ul id=\"movie-list\">\n      <li *ngFor=\"let movie of character.movies\">\n        <span class=\"movie\">{{movie}}</span>\n      </li>\n    </ul>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/character/character.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_character_service__ = __webpack_require__("../../../../../src/app/services/character.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharacterComponent = (function () {
    function CharacterComponent(characterService, http) {
        this.characterService = characterService;
        this.http = http;
    }
    // onInit lifecycle hook
    CharacterComponent.prototype.ngOnInit = function () {
        this.getCharacters();
    };
    CharacterComponent.prototype.getCharacters = function () {
        var _this = this;
        this.characterService.getCharacters()
            .then(function (characters) { return _this.characters = characters; });
    };
    CharacterComponent.prototype.onSelect = function (selectedCharacter) {
        var _this = this;
        // clear previously selected character's movies
        this.movieLinks = [];
        if (this.selectedCharacter) {
            this.selectedCharacter.movies = [];
        }
        if (this.selectedCharacter === selectedCharacter) {
            this.selectedCharacter = undefined;
            return;
        }
        this.selectedCharacter = selectedCharacter;
        this.characterService
            .getMovieEndpoints(this.selectedCharacter.url)
            .then(function (movieLinks) {
            _this.parseMovieEndpoints(movieLinks);
        });
    };
    CharacterComponent.prototype.parseMovieEndpoints = function (movieLinks) {
        var _this = this;
        for (var _i = 0, movieLinks_1 = movieLinks; _i < movieLinks_1.length; _i++) {
            var link = movieLinks_1[_i];
            this.characterService
                .getMovie(link)
                .then(function (res) {
                // parse title and release date
                var movieData = 'Title:\t' + res['title'] + ' | Release Date:\t' + res['release_date'];
                _this.movieLinks.push(movieData);
            });
        }
        this.selectedCharacter.movies = this.movieLinks;
    };
    CharacterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'characters',
            template: __webpack_require__("../../../../../src/app/components/character/character.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/character/character.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_character_service__["a" /* CharacterService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CharacterComponent);
    return CharacterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/characterSeed.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHARACTERS; });
//TODO: pull img urls from src side
var CHARACTERS = [
    {
        name: "Luke Skywalker",
        imgUrl: "../../assets/img/Luke Skywalker.png",
        url: "https://swapi.co/api/people/1/",
        movies: []
    },
    {
        name: "Darth Vader",
        imgUrl: "../../assets/img/Darth Vader.png",
        url: "https://swapi.co/api/people/4/",
        movies: []
    },
    {
        name: "Obi-wan Kenobi",
        imgUrl: "../../assets/img/Obi-wan Kenobi.png",
        url: "https://swapi.co/api/people/unknown/",
        movies: []
    },
    {
        name: "R2-D2",
        imgUrl: "../../assets/img/R2-D2.png",
        url: "https://swapi.co/api/people/3/",
        movies: []
    }
];


/***/ }),

/***/ "../../../../../src/app/services/character.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_characterSeed__ = __webpack_require__("../../../../../src/app/models/characterSeed.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterService = (function () {
    function CharacterService(http) {
        this.http = http;
    }
    CharacterService.prototype.getCharacters = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__models_characterSeed__["a" /* CHARACTERS */]);
    };
    CharacterService.prototype.getMovieEndpoints = function (url) {
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json()['films']; })
            .catch(this.handleError);
    };
    CharacterService.prototype.getMovie = function (url) {
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    CharacterService.prototype.handleError = function (error) {
        alert('Sorry, we couldn\'t retrieve movie data for that character.');
        console.error('An error occurred' + error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CharacterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CharacterService);
    return CharacterService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map