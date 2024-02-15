var x = 10; //受験者数
var y = 600; //全員の合計点
try {
    var x_1 = 0;
    //⓵変数をチェック
    if (x_1 === 0) {
        throw new Error("受験者数に0が入っています");
    }
    //⓶平均点を出力
    var avg = y / x_1;
    console.log("平均点：" + avg);
}
catch (e) {
    //⓷受験者数を出力
    console.log("受験者数：" + x); //let x:number = 10;を参照
}
