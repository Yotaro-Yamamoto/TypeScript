//分割代入のデフォルト引数
//実行エラー例
function addition([a,b,c]: number[]){
    console.log(a+b+c);
}
addition([1,5]);    //=>NaM
//↑数値とundefinedを計算するとNaN(Not-a-Number)となる。