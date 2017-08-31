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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var message_manager_1 = require("../../shared/services/message/message.manager");
var message_models_1 = require("../../shared/models/message/message.models");
//import { HistoActiviteModels } from '../../shared/models/histoActivite/histoActivite.models';
var movie_manager_1 = require("../../shared/services/movie/movie.manager");
var movie_models_1 = require("../../shared/models/movie/movie.models");
var platform_browser_1 = require("@angular/platform-browser");
var MainComponent = (function () {
    function MainComponent(MessageManage, MovieManage, sanitizer, router) {
        this.MessageManage = MessageManage;
        this.MovieManage = MovieManage;
        this.sanitizer = sanitizer;
        this.router = router;
        this.error = "";
        this.titleModal = "";
        this.messModal = new message_models_1.MessageModels();
        this.typeModal = 1;
        this.arrayMessage = [];
        this.mess = new message_models_1.MessageModels();
        this.mess_result_id = new message_models_1.MessageModels();
        this.numero = 0;
        this.movie = new movie_models_1.MovieModels();
        this.movieModal = new movie_models_1.MovieModels();
        this.arrayMovie = [];
        this.myForm = new forms_1.FormGroup({
            message: new forms_1.FormControl(''),
        });
    }
    MainComponent.prototype.showAddModal = function (id) {
        var _this = this;
        this.MovieManage.getMovie(id)
            .subscribe(function (data) { return _this.setSuccessMovie(data); }, function (err) { return _this.setError(err.json()); });
    };
    MainComponent.prototype.afficher = function (data) {
        var _this = this;
        this.MessageManage.getMessage(data)
            .subscribe(function (data) { return _this.setSuccess(data); }, function (err) { return _this.setError(err.json()); });
    };
    //
    MainComponent.prototype.setSuccess = function (data) {
        if (!data.error) {
            // météo <ville>
            if (data.id == "1-1") {
                this.numero = 2;
                this.mess = data.result;
            }
            else if (data.id == "1-2") {
                this.numero = 3;
                this.mess = data.result;
                this.arrayMessage = data.result.week;
            }
            else if (data.id == "2-1" || data.id == "2-2") {
                this.numero = 4;
                this.mess = data.result;
                this.arrayMessage = data.result.shows;
            }
            else if (data.id == "2-3") {
                this.numero = 5;
                this.mess = data.result.serie_data;
                this.arrayMessage = data.result.character_data;
            }
            else if (data.id == "import { Sanitize } from 'angular-sanitize';2-4") {
                this.numero = 6;
                this.mess = data.result;
                this.arrayMessage = data.result.role_data;
            }
            else if (data.id == "3-1" || data.id == "3-4" || data.id == "3-5") {
                this.numero = 7;
                this.arrayMessage = data.result;
                //this.mess_result_id = data.result.id;
            }
            else if (data.id == "3-2") {
                this.numero = 8;
                this.mess = data.result.movie_data;
                this.arrayMessage = data.result.character_data;
            }
            else if (data.id == "3-3") {
                this.numero = 9;
                this.mess = data.result;
                this.arrayMessage = data.result.role_data;
            }
        }
        else {
            this.setError(data);
        }
    };
    //
    MainComponent.prototype.setError = function (err) {
        this.error = err.message;
    };
    MainComponent.prototype.setSuccessMovie = function (data) {
        this.movieModal.name = data.result.name;
        this.movieModal.image = data.result.image;
        this.movieModal.resume = data.result.resume;
        this.movieModal.video = data.result.video;
        this.movieModal.rating = data.result.rating;
        this.movieModal.year = data.result.year;
        this.movieModal.runtime = data.result.runtime;
        this.movieModal.genre = data.result.genre;
    };
    MainComponent.prototype.cleanURL = function (oldURL) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-main',
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.scss'],
        providers: [message_manager_1.MessageManager, movie_manager_1.MovieManager]
    }),
    __metadata("design:paramtypes", [message_manager_1.MessageManager, movie_manager_1.MovieManager, platform_browser_1.DomSanitizer, router_1.Router])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map