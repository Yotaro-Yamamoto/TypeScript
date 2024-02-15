//アロー関数
//従来の関数定義
function hello(message){
    console.log("Hello");
}
hello("Hello");

//従来の関数式
const sayHello = function(message){
    console.log("Hello");
}
hello("Hello");

//アロー関数
const hello = message => console.log(message);
                        //↑上記のように1行で処理が済む場合は{}は省略できる。
hello("Hello");

/*
アロー関数はキーワードfunctionを省略するだけでなく、
新しい記号「=>(アロー演算子)」が登場したり、場合によっては関数の
範囲を表す{}や戻り値を返すキーワードreturnも省略できる
など、従来の関数式とは異なる点がいくつもある。
ただし、引数が2個以上ある場合は引数を囲む()は省略不可。
*/