//関数式
/*
ひとつは関数の定義を宣言してから呼び出す方法
(普通の定義方法)
*/
function hello(){
    console.log("Hello");
}
hello();

/*
もうひとつは、関数の定義を変数に代入してから呼び出す方法
*/
const sayHello = function(){
    console.log("Hello");
}
sayHello();
//代入する変数名を変えると、別の名前で呼び出すことができる。