/*
Alternating row color

Optionally an alternating row color can be defined by using the modifier vclAltRowColor.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { TableService } from '../services/table.service';
var AltRowColorDirective = (function () {
    function AltRowColorDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AltRowColorDirective.prototype.ngOnChanges = function (changes) {
        if (changes.alt) {
            this.alt = this.tableService.ClassToggle('vclAltRowColor', this.alt, 'table');
        }
    };
    return AltRowColorDirective;
}());
__decorate([
    Input('altrow'),
    __metadata("design:type", Object)
], AltRowColorDirective.prototype, "alt", void 0);
AltRowColorDirective = __decorate([
    Directive({
        selector: '[altrow]',
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef])
], AltRowColorDirective);
export { AltRowColorDirective };
