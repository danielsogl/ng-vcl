var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nModule } from '../l10n/index';
import { VCLWormholeModule } from '../wormhole/index';
import { MetalistItem } from './metalist-item.component';
import { MetalistComponent, SelectionMode } from './metalist.component';
export { MetalistItem, MetalistComponent, SelectionMode };
var VCLMetalistModule = (function () {
    function VCLMetalistModule() {
    }
    return VCLMetalistModule;
}());
VCLMetalistModule = __decorate([
    NgModule({
        imports: [CommonModule, L10nModule, VCLWormholeModule],
        exports: [MetalistComponent, MetalistItem],
        declarations: [MetalistComponent, MetalistItem],
        providers: [],
    })
], VCLMetalistModule);
export { VCLMetalistModule };
