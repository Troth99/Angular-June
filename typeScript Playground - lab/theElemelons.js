"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Melon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Melon.prototype.toString = function () { };
    return Melon;
}());
exports.Melon = Melon;
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Watermelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Watermelon.prototype.toString = function () {
        return "Element: Water\nSort: ".concat(this.melonSort, "\nElement index: ").concat(this.elementIndex);
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Firemelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Firemelon.prototype.toString = function () {
        return "Element: Fire\nSort: ".concat(this.melonSort, "\nElement index: ").concat(this.elementIndex);
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Earthmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Earthmelon.prototype.toString = function () {
        return "Element: Earth\nSort: ".concat(this.melonSort, "\nElement index: ").concat(this.elementIndex);
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Airmelon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Airmelon.prototype.toString = function () {
        return "Element: Air\nSort: ".concat(this.melonSort, "\nElement index: ").concat(this.elementIndex);
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elements = ["Fire", "Earth", "Air", "Water"];
        _this.currentIndex = 0;
        return _this;
    }
    Object.defineProperty(Melolemonmelon.prototype, "element", {
        get: function () {
            return this.elements[this.currentIndex];
        },
        enumerable: false,
        configurable: true
    });
    Melolemonmelon.prototype.morph = function () {
        this.currentIndex = (this.currentIndex + 1) % this.elements.length;
    };
    Melolemonmelon.prototype.toString = function () {
        return "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement index: ").concat(this.elementIndex);
    };
    return Melolemonmelon;
}(Watermelon));
// let test : Melon = new Melon(100, "Test");
// //Throws error
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
var melon = new Melolemonmelon(10, 'Mega');
melon.morph();
console.log(melon.toString());
melon.morph();
console.log(melon.toString());
melon.morph();
console.log(melon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100
