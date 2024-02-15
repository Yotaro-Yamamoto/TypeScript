//関数の方注釈
///引数と戻り値の型注釈
function scoring(score:number/*←引数*/):string/*←戻り値*/{
    if(score>=80){
        return "合格です";
    }else{
        return "不合格です";
    }
}

console.log(scoring(70));