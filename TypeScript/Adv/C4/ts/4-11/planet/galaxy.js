"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Galaxy = void 0;
/*名前空間はネストすることもあるが、exportもネストしなくてはならないので、
 ネストが深くなるようであれば無理に統合せずにモジュールを分けたほうがよい。*/
var Galaxy;
(function (Galaxy) {
    var Solar;
    (function (Solar) {
        var Earth;
        (function (Earth) {
            Earth.RADIUS = 6378.1;
        })(Earth = Solar.Earth || (Solar.Earth = {}));
    })(Solar = Galaxy.Solar || (Galaxy.Solar = {}));
})(Galaxy || (exports.Galaxy = Galaxy = {}));
