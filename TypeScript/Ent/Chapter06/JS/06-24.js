//スコープ
function hello(message) {
    var message = "Hello";
    console.log(message);
}
//↑上記は、messageを二度宣言しているので、エラーが出る。
var apple = "りんご";
function appleJuicer(apple) {
    console.log(apple + "ジュース");
}
appleJuicer(apple);
/*↑appleのスコープが異なるので別の変数とみなされる。*/ 
