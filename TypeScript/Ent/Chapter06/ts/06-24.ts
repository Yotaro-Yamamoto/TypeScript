//スコープ
function hello(message:string){
    let message:string = "Hello";
    console.log(message);
}
//↑上記は、messageを二度宣言しているので、エラーが出る。

const apple:string = "りんご";
function appleJuicer(apple:string){
    console.log(apple+"ジュース");
}
appleJuicer(apple);
/*↑appleのスコープが異なるので別の変数とみなされる。*/