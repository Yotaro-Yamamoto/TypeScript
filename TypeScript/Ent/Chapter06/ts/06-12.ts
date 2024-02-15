//引数の省略
//デフォルト引数の設定
//デフォルト引数は、省略できない引数よりも右側に置かなければならない
function mixer(a:string,b:string="バナナ"){
    return a+"と"+b+"のジュース";
}
console.log(mixer("りんご"));