//関数によるプロパティの破壊
/*関数がオブジェクトを受け取るとき、引数の型注釈にreadonlyをつけないと
　関数ないでプロパティの書き換えができてしまう。*/
const obj = {
    price:{
        base:100,
        tax:10,
    },
}as const

function no_tax(obj:{price:{base:number,tax:number}}){
    obj.price.tax = 0;  //オブジェクトが破壊される
}

no_tax(obj);
console.log(obj);

//引数をreadonlyにすることで回避できる
/*以下、コンパイルエラー
function no_tax(obj:{price:{base:number;readonly tax:number}}){
    obj.price.tax = 
}*/
