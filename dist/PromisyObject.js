"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromisyObject = /** @class */ (function () {
    /**
     *Creates an instance of PromisyObject.
     * @param {T} vars Object with initial values
     * @memberof PromisyObject
     */
    function PromisyObject(vars) {
        this.vars = vars;
    }
    /**
     * Sets the *value* for *key* in the object
     *
     * @param {keyof T} key Property key
     * @param {*} value Property value
     * @memberof PromisyObject
     */
    PromisyObject.prototype.set = function (key, value) {
        this.vars[key] = value;
    };
    /**
     * Returns the value associated to the *key*
     *
     * @param {keyof T} key Object property
     * @returns {*} Value of property *key*
     * @memberof PromisyObject
     */
    PromisyObject.prototype.get = function (key) {
        return this.vars[key];
    };
    /**
     * Wait for the value *expected* in property *key* within *timeout*
     *
     * @param {keyof T} key Object property
     * @param {*} expected Expected value
     * @param {number} [timeout=0] If timeout reached, but *key* value is not as *expected* promise rejects. Set timeout to 0 (default) for infinite waiting.
     * @returns {Promise<void>}
     * @memberof PromisyObject
     */
    PromisyObject.prototype.waitFor = function (key, expected, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 0; }
        var vvar = this.vars[key];
        if (vvar === expected)
            return Promise.resolve();
        return new Promise(function (resolve, reject) {
            if (timeout) {
                timeout = setTimeout(function () {
                    Object.defineProperty(_this.vars, key, {
                        value: vvar,
                        writable: true
                    });
                    reject("[PromisyVariables] waitFor timeout. Expected '" + expected + "' for '" + key + "'");
                }, timeout);
            }
            Object.defineProperty(_this.vars, key, {
                configurable: true,
                enumerable: true,
                get: function () { return vvar; },
                set: function (v) {
                    if (expected === v) {
                        if (timeout)
                            clearTimeout(timeout);
                        Object.defineProperty(_this.vars, key, {
                            value: v,
                            writable: true
                        });
                        resolve(v);
                    }
                    else {
                        vvar = v;
                    }
                }
            });
        });
    };
    return PromisyObject;
}());
exports.PromisyObject = PromisyObject;
exports.PObj = PromisyObject;
