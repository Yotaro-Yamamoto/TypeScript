//分割代入のデフォルト引数
//掛け算関数
function multiple([a=0,b=1]: number[]=[0,0]){
    console.log(a*b);
}
multiple();
multiple([]);
multiple([2]);
multiple([2,3]);