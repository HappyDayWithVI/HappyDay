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
var http_manager_1 = require("../http/http.manager");
var UserManager = (function () {
    function UserManager(httpmanagerService) {
        this.httpmanagerService = httpmanagerService;
    }
    UserManager.prototype.getUsers = function () {
        return this.httpmanagerService.get('api/user');
    };
    UserManager.prototype.getUser = function (id) {
        return this.httpmanagerService.get('api/user/' + id);
    };
    UserManager.prototype.getUserMe = function (id) {
        return this.httpmanagerService.get('api/user/me');
    };
    UserManager.prototype.postUser = function (data) {
        return this.httpmanagerService.post(data, 'api/user');
    };
    UserManager.prototype.putUser = function (data) {
        return this.httpmanagerService.put(data, 'api/user/' + data.id);
    };
    UserManager.prototype.deleteUser = function (data) {
        return this.httpmanagerService.delete('api/user/' + data);
    };
    return UserManager;
}());
UserManager = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_manager_1.HttpManagerService])
], UserManager);
exports.UserManager = UserManager;
//# sourceMappingURL=user.manager.js.map