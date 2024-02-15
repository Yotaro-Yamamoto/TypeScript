//分割代入のデフォルト引数
//足し算関数
function addition(_a) {
    var _b = _a[0], a = _b === void 0 ? 0 : _b, _c = _a[1], b = _c === void 0 ? 0 : _c, _d = _a[2], c = _d === void 0 ? 0 : _d;
    console.log(a + b + c);
}
addition([]);
addition([1]);
addition([1, 5]);
addition([1, 5, 10]);
