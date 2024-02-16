//オブジェクトのメソッド
//書式1 通常のメソッド定義
const obj = {
    hello:function(){
        console.log("Hello");
    }
}
obj.hello();

//書式2 コロンtfunctionを省略した定義方法
const obj2 = {
    hello(){
        console.log("Hello");
    }
}
obj2.hello();

//書式3 アロー関数の場合
const obj3 = {
    hello: ()=>{
        console.log("Hello");
    }
}
obj3.hello();