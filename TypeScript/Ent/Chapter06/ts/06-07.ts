//関数に複数のデータを渡す
//残余引数を使う
/*
残余引数 ==> 配列の引数の後に...をつけると、その位置にある残りの引数
            すべて配列に詰め込まれて関数に引き渡される。
 */
function mixer(a,...x){
    let juice: string = a;
    if(x.length>0){
        juice+="と"+x.join("と");
    }
    juice+="のジュース";
    return juice;
}
//ミックスジュースを作る
let material: string[] = [];
material.push("ケール");
material.push("大麦");
material.push("モロヘイヤ");
//材料を関数に渡して実行
const greenJuice: string = mixer(material, ...material);
console.log(greenJuice);    //青汁ができる!
//=>ケールと大麦とモロヘイヤのジュース