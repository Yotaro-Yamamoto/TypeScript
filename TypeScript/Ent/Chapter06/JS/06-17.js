//分割代入のデフォルト引数
//掛け算関数
function multiple(_a) {
    var _b = _a === void 0 ? [0, 0] : _a, _c = _b[0], a = _c === void 0 ? 0 : _c, _d = _b[1], b = _d === void 0 ? 1 : _d;
    console.log(a * b);
}
multiple();
multiple([]);
multiple([2]);
multiple([2, 3]);
