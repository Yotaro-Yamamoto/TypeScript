//分割代入のデフォルト引数
//足し算関数
function addition([a=0,b=0,c=0]: number[]){
    console.log(a+b+c);
}
addition([]);
addition([1]);
addition([1,5]);
addition([1,5,10]);