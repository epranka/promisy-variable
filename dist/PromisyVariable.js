"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var PromisyObject_1 = require("./PromisyObject");
var PromisyVariable = /** @class */ (function () {
    /**
     * Creates an instance of PromisyVariable.
     * @param {*} value Initial value
     * @memberof PromisyVariable
     */
    function PromisyVariable(value) {
        this.promisyObject = new PromisyObject_1.PromisyObject({ value: value });
    }
    /**
     * Returns current variable value
     *
     * @returns {*} Current variable value
     * @memberof PromisyVariable
     */
    PromisyVariable.prototype.get = function () {
        return this.promisyObject.get("value");
    };
    /**
     * Set variable value
     *
     * @param {*} value New variable value
     * @memberof PromisyVariable
     */
    PromisyVariable.prototype.set = function (value) {
        this.promisyObject.set("value", value);
    };
    /**
     * Wait for the value *expected* within *timeout*
     *
     * @param {*} expected Expected value
     * @param {number} [timeout=0] If timeout reached, but *key* value is not as *expected* promise rejects. Set timeout to 0 (default) for infinite waiting.
     * @returns {Promise<void>}
     * @memberof PromisyVariable
     */
    PromisyVariable.prototype.waitFor = function (expected, timeout) {
        if (timeout === void 0) { timeout = 0; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.promisyObject.waitFor("value", expected, timeout)];
            });
        });
    };
    return PromisyVariable;
}());
exports.PromisyVariable = PromisyVariable;
exports.PVar = PromisyVariable;
