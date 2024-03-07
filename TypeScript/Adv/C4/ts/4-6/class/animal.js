"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
//宣言と同時に名前付きエクスポート
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        console.log('猫が歩く');
    };
    return Animal;
}());
exports.Animal = Animal;
/*または
class Animal{...}
export { Animal };*/ 
