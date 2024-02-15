var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//関数に複数のデータを渡す
//残余引数を使う
/*
残余引数 ==> 配列の引数の後に...をつけると、その位置にある残りの引数
            すべて配列に詰め込まれて関数に引き渡される。
 */
function mixer(a) {
    var x = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        x[_i - 1] = arguments[_i];
    }
    var juice = a;
    if (x.length > 0) {
        juice += "と" + x.join("と");
    }
    juice += "のジュース";
    return juice;
}
//ミックスジュースを作る
var material = [];
material.push("ケール");
material.push("大麦");
material.push("モロヘイヤ");
//材料を関数に渡して実行
var greenJuice = mixer.apply(void 0, __spreadArray([material], material, false));
console.log(greenJuice); //青汁ができる!
//=>ケールと大麦とモロヘイヤのジュース
