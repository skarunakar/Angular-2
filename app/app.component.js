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
var core_1 = require("@angular/core");
var data_service_1 = require("./Render/data.service");
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    }
    AppComponent.prototype.requestJson = function (id) {
        var _this = this;
        this.dataService.getProduct(id)
            .subscribe(function (trow) { return _this.trow = trow.var; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n     <div class=\"ang-poc\">\n         <div class=\"nav-bar\">\n         <div class=\"nav-menu\">\n        <div class=\"nav-item\" (click)=\"requestJson(1)\">Render 1 record</div>\n        <div class=\"nav-item\" (click)=\"requestJson(10)\">Render 10 records</div>\n        <div class=\"nav-item\" (click)=\"requestJson(100)\">Render 100 records</div>\n        <div class=\"nav-item\" (click)=\"requestJson(1000)\">Render 1000 records</div>\n        <div class=\"nav-item\" (click)=\"requestJson(10000)\">Render 10000 records</div>\n        <div class=\"nav-item\" (click)=\"requestJson(100000)\">Render 100000 records</div>\n         </div>\n         </div>\n         <div class='container'> \n           <table>\n           <tr>\n                                        <th>Id</th>\n                                        <th>Name</th>\n                                        <th>Gender</th>\n                                        <th>Age</th>\n                                        <th>Marks</th>\n            </tr>\n            <tbody>\n             <tr *ngFor='let trow of trow'>\n                                        <td>{{trow._id}}</td>\n                                        <td> {{trow.name}}</td>\n                                        <td>{{trow.gender}}</td>\n                                        <td>{{trow.age}}</td>\n                                        <td>{{trow.marks}}</td>\n            </tr>\n            </tbody>\n            </table>\n        </div>\n     </div>\n    ",
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map