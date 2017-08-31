"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HttpManagerService = (function () {
    function HttpManagerService(http) {
        this.http = http;
        //public url:string = "http://192.168.1.115:8000";
        //public url:string = "http://localhost:8080";
        this.url = "http://api.tutosweb.dev";
        //public clientSecret:string = 'CDJlZYPbdvcRCapMdYy3uscavSEcGThCfmbct61B';
        this.headers = new http_1.Headers();
        this.headers.set('Content-Type', 'application/json');
        //this.headers.set('Access-Control-Allow-Origin', '*');
        this.headers.set("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
        //this.headers.set("Access-Control-Allow-Methods", "GET, PUT, POST");
        this.headers.set("Access-Control-Allow-Credentials", "true");
    }
    // tokenHeader(){
    //   if(localStorage.getItem('token') != undefined && localStorage.getItem('token') != null && localStorage.getItem('token') != ""){
    //     this.headers.set('authorization', 'Bearer '+localStorage.getItem('token'));
    //   }
    // }
    // CRUD API
    HttpManagerService.prototype.get = function (chaineUrl) {
        //this.tokenHeader();
        this.headers.set('Access-Control-Allow-Methods', 'GET');
        return this.http.get(this.url + "/" + chaineUrl, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    HttpManagerService.prototype.put = function (creds, chaineUrl) {
        //this.tokenHeader();
        this.headers.set('Access-Control-Allow-Methods', 'PUT');
        return this.http.put(this.url + "/" + chaineUrl, creds, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    HttpManagerService.prototype.post = function (creds, chaineUrl) {
        //this.tokenHeader();
        this.headers.set('Access-Control-Allow-Methods', 'POST');
        return this.http.post(this.url + "/" + chaineUrl, creds, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    HttpManagerService.prototype.delete = function (chaineUrl) {
        //this.tokenHeader();
        this.headers.set('Access-Control-Allow-Methods', 'DELETE');
        return this.http.delete(this.url + "/" + chaineUrl, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    return HttpManagerService;
}());
HttpManagerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpManagerService);
exports.HttpManagerService = HttpManagerService;
//# sourceMappingURL=http.manager.js.map