//関数に複数のデータを渡す
//引数をカンマで区切る
function mixer(a,b){
    return a+"と"+b+"のジュース";
}
//ミックスジュースを作る
const mixJuice: string = mixer("りんご","メロン");
console.log(mixJuice);