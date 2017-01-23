"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var icon_module_1 = require("./../icon/icon.module");
var checkbox_component_1 = require("./checkbox.component");
exports.CheckboxComponent = checkbox_component_1.CheckboxComponent;
var VCLCheckboxModule = (function () {
    function VCLCheckboxModule() {
    }
    return VCLCheckboxModule;
}());
VCLCheckboxModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, icon_module_1.VCLIconModule],
        exports: [checkbox_component_1.CheckboxComponent],
        declarations: [checkbox_component_1.CheckboxComponent]
    })
], VCLCheckboxModule);
exports.VCLCheckboxModule = VCLCheckboxModule;