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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/timer");
require("rxjs/add/observable/fromEvent");
var core_1 = require("@angular/core");
var OffClickDirective = (function () {
    function OffClickDirective(elem) {
        this.elem = elem;
        this.offClick = new core_1.EventEmitter();
    }
    OffClickDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof document !== 'undefined') {
            // Add a small delay, so the current click does not trigger the off-click
            var delay$ = Observable_1.Observable.timer(50).first();
            this.sub = Observable_1.Observable.fromEvent(document, 'click')
                .skipUntil(delay$)
                .subscribe(function (ev) {
                var me = _this.elem.nativeElement;
                // Check if the target is the off-clicks element or an sub element 
                if (ev.target && me !== ev.target && !me.contains(ev.target)) {
                    _this.offClick.emit();
                }
            });
        }
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        this.sub && this.sub.unsubscribe();
    };
    return OffClickDirective;
}());
__decorate([
    core_1.Output('off-click'),
    __metadata("design:type", Object)
], OffClickDirective.prototype, "offClick", void 0);
OffClickDirective = __decorate([
    core_1.Directive({
        selector: '[off-click]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], OffClickDirective);
exports.OffClickDirective = OffClickDirective;
