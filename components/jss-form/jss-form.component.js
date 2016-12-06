"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var rxjs_1 = require('rxjs');
var Validator = require('jsonschema').Validator; // TODO use import { Validator } from 'jsonschema'; when typings available
var VALIDATOR;
var JssFormObjectComponent = (function () {
    function JssFormObjectComponent() {
        this.parentPath = '';
        this.fieldErrors = {};
        this.subs = [];
    }
    JssFormObjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.schema.properties) {
            Object.keys(this.schema.properties)
                .map(function (key) {
                var sub = _this.error
                    .do(function () { return delete _this.fieldErrors[key]; })
                    .filter(function (errAr) { return errAr != null; })
                    .map(function (errAr) { return errAr.filter(function (er) { return er.property == 'instance.' + _this.parentPath + key; }); })
                    .map(function (errAr) {
                    if (errAr.length == 0)
                        return null;
                    else
                        return errAr.pop().message;
                })
                    .subscribe(function (errMsg) { return _this.fieldErrors[key] = errMsg; });
                _this.subs.push(sub);
            });
        }
    };
    JssFormObjectComponent.prototype.ngOnDestroy = function () {
        this.subs.map(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * if no formType is given, this will guess the right one
     */
    JssFormObjectComponent.prototype.formType = function (schemaObj) {
        if (schemaObj.formType)
            return schemaObj.formType;
        if (schemaObj.type == 'string') {
            if (schemaObj.enum) {
                return 'select';
            }
            return 'text';
        }
        if (schemaObj.type == 'number')
            return 'number';
        if (schemaObj.type == 'boolean')
            return 'switch';
    };
    JssFormObjectComponent.prototype.keys = function (obj) {
        return Object.keys(obj);
    };
    JssFormObjectComponent.prototype.keyErrors = function (parentPath, key) {
        if (!this.error)
            return null;
        return this.error
            .map(function (errAr) { return errAr
            .filter(function (er) { return er.property.startsWith('instance.' + parentPath + key); }); })
            .map(function (errAr) {
            if (errAr.length == 0)
                return null;
            else
                return errAr.pop().message;
        });
    };
    JssFormObjectComponent.prototype.keyErrors$ = function (parentPath, key) {
        return rxjs_1.Observable.from(this.keyErrors(parentPath, key));
    };
    JssFormObjectComponent.prototype.name = function (parentPath, key) {
        var name = parentPath + '.' + key;
        while (name.charAt(0) === '.')
            name = name.substr(1);
        return name;
    };
    JssFormObjectComponent.prototype.placeholder = function (schemaObj) {
        if (typeof schemaObj.placeholder !== "undefined")
            return schemaObj.placeholder;
        return '';
    };
    JssFormObjectComponent.prototype.radioOptions = function (schemaObj) {
        var opts = schemaObj.enum.map(function (str) {
            return {
                label: str,
                value: str
            };
        });
        return opts;
    };
    JssFormObjectComponent.prototype.selectItems = function (schemaObj) {
        if (!schemaObj.items) {
            // use .enum
            return schemaObj.enum.map(function (str) {
                return {
                    label: str,
                    value: str
                };
            });
        }
        else {
            // use .items
            return schemaObj.items.map(function (item) {
                var ret = {
                    value: item.value
                };
                ret['label'] = item.label ? item.label : item.value;
                return ret;
            });
        }
    };
    JssFormObjectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-jss-form-object',
                    templateUrl: 'jss-form-object.component.html',
                },] },
    ];
    /** @nocollapse */
    JssFormObjectComponent.ctorParameters = [];
    JssFormObjectComponent.propDecorators = {
        'schema': [{ type: core_1.Input, args: ['schema',] },],
        'parentPath': [{ type: core_1.Input, args: ['parentPath',] },],
        'formGroup': [{ type: core_1.Input, args: ['formGroup',] },],
        'error': [{ type: core_1.Input, args: ['error',] },],
    };
    return JssFormObjectComponent;
}());
exports.JssFormObjectComponent = JssFormObjectComponent;
var JssFormComponent = (function () {
    function JssFormComponent(fb) {
        this.fb = fb;
        this.value = {};
        this.error = new core_1.EventEmitter();
    }
    JssFormComponent.prototype.ngOnInit = function () {
        this.form = this.formGroupFromSchema(this.schema);
        this.value && this.form.patchValue(this.value);
    };
    JssFormComponent.prototype.keys = function (obj) {
        return Object.keys(obj);
    };
    /**
     * create the formGroup for the given schema
     */
    JssFormComponent.prototype.formGroupFromSchema = function (schemaObj) {
        var _this = this;
        var ret = {};
        // non-objects
        Object.keys(schemaObj.properties)
            .filter(function (k) { return schemaObj.properties[k].type != 'object'; })
            .map(function (k) { return ret[k] = ['']; });
        // objects
        Object.keys(schemaObj.properties)
            .filter(function (k) { return schemaObj.properties[k].type == 'object'; })
            .map(function (k) { return ret[k] = _this.formGroupFromSchema(schemaObj.properties[k]); });
        return this.fb.group(ret, {
            validator: function (c) {
                var errors = _this.jsonSchemaValidate(c.value, schemaObj);
                return errors;
            }
        });
    };
    /**
     * validate if value matches schema
     * @return {?any[]} error-array or null if no errors
     */
    JssFormComponent.prototype.jsonSchemaValidate = function (obj, schema) {
        if (schema === void 0) { schema = this.schema; }
        if (!VALIDATOR)
            VALIDATOR = new Validator();
        var valid = VALIDATOR.validate(obj, schema);
        //  console.log('errrrrrors:');
        //  console.dir(valid.errors);
        if (valid.errors.length == 0) {
            this.error.emit(null);
            return null;
        }
        this.error.emit(valid.errors);
        return valid.errors;
    };
    JssFormComponent.prototype.ngAfterViewInit = function () {
    };
    JssFormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vcl-jss-form',
                    templateUrl: 'jss-form.component.html'
                },] },
    ];
    /** @nocollapse */
    JssFormComponent.ctorParameters = [
        { type: forms_1.FormBuilder, },
    ];
    JssFormComponent.propDecorators = {
        'schema': [{ type: core_1.Input, args: ['schema',] },],
        'value': [{ type: core_1.Input, args: ['value',] },],
        'error': [{ type: core_1.Output, args: ['error',] },],
    };
    return JssFormComponent;
}());
exports.JssFormComponent = JssFormComponent;