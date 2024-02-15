//型ガード
//typeofを型判定のための関数に置き換える。(isString、isNnumber)
function isString(x: string|number){
    return typeof x === "string";   //文字列ならtrueを返す
}
function isNumber(x: string|number){
    return typeof x === "number";
}

function order(x: string|number){
   if(isString(x)){
        console.log(x+"を注文しました。");
   }else if(isNumber(x)){
    console.log(x+"番のメニューを注文しました。");
   }
}

order("パンケーキ");
order(17);