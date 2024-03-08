"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sun = exports.Earth = void 0;
//地球
var Earth;
(function (Earth) {
    Earth.RADIUS = 6378.1; //地球の半径(km)
})(Earth || (exports.Earth = Earth = {}));
//太陽
var Sun;
(function (Sun) {
    Sun.RADIUS = 696340; //太陽の半径
})(Sun || (exports.Sun = Sun = {}));
