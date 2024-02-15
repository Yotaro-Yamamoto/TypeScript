//引数の省略
//デフォルト引数の設定
/*
同じ引数を渡すことが多いと予想される場合、デフォルト引数を使うと、
呼び出すたびに引数を記憶しなくて済むので便利。
 */
function hello(message:string="Hello"){
    console.log(message);
}
hello();
hello("こんにちは");