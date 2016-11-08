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
var FormComponent = (function () {
    function FormComponent() {
        this.items = [
            { label: 'item 1' },
            { label: 'item 2' },
            { label: 'item 3' },
            { label: 'item 4' },
            { label: 'item 5' },
            { label: 'item 6', sublabel: 'sublabel of item 6' },
            { label: 'item 7', sublabel: 'sublabel of item 7' },
            { label: 'item 8', sublabel: 'sublabel of item 8' },
            { label: 'item 9' },
            { label: 'item 10' }
        ];
        this.data1 = '';
    }
    FormComponent.prototype.ngOnInit = function () { };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        templateUrl: 'form.component.html'
    }),
    __metadata("design:paramtypes", [])
], FormComponent);
exports.FormComponent = FormComponent;