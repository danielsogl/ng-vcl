(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '@angular/core', '../../services/icon.service'], factory);
    }
})(function (require, exports) {
    "use strict";
    var core_1 = require('@angular/core');
    var icon_service_1 = require('../../services/icon.service');
    /**
    Icon which can be based on glyphs from icon fonts, inline svg and bitmaps.
    The `label` is never displayed, it is only for accessibility with screen
    readers.
    The `hidden` attribute is only reflected in the `aria-hidden` property which
    allows to hide the icon to screen readers, if it is only of presentational character.
    See http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html for details.
    
    Usage:
    
    ```html
    <vcl-icon icon="fa:chevron-right" label="chevron right" hidden="false"></vcl-icon>
    ```
    or
    ```html
    <vcl-icon src="..."></vcl-icon>
    ```
    or
    ```html
    <vcl-icon svguse="..."></vcl-icon>
    ````
    
    @param    src             optional      URL of a graphics resource
    @param    svguse          optional      Generates an SVG `use` tag referencing the value
    @param    icon            optional      Icon generator lookup via icon provider registered in the meta facility
    @param    iconClass       optional      Additional class
    @param    label           optional      `aria-label`
    */
    var IconComponent = (function () {
        function IconComponent(_iconService) {
            this._iconService = _iconService;
        }
        Object.defineProperty(IconComponent.prototype, "fontIconClass", {
            get: function () {
                if (this.icon) {
                    return this._iconService.lookup(this.icon);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IconComponent.prototype, "mergedIconClass", {
            get: function () {
                return (this.fontIconClass || '') + " " + (this.iconClass || '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IconComponent.prototype, "isAriaHidden", {
            // Do not hide from aria when a label is provided
            get: function () {
                return !this.label;
            },
            enumerable: true,
            configurable: true
        });
        IconComponent.decorators = [
            { type: core_1.Component, args: [{
                        selector: 'vcl-icon',
                        templateUrl: 'icon.component.html',
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        /** @nocollapse */
        IconComponent.ctorParameters = [
            { type: icon_service_1.IconService, },
        ];
        IconComponent.propDecorators = {
            'src': [{ type: core_1.Input },],
            'svguse': [{ type: core_1.Input },],
            'iconClass': [{ type: core_1.Input },],
            'icon': [{ type: core_1.Input },],
            'label': [{ type: core_1.Input },],
        };
        return IconComponent;
    }());
    exports.IconComponent = IconComponent;
});
