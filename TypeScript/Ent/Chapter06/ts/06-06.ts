//関数に複数のデータを渡す
//データを配列に詰め込んで渡す
function mixer(x){
    return x.join("と")+"のジュース";
}
//ミックスジュースを作る
let material: string[] = [];
material.push("ケール");
material.push("大麦");
material.push("モロヘイヤ");
//材料を関数に渡して実行
const greenJuice: string = mixer(material);
console.log(greenJuice);    //青汁ができる!
//=>ケールと大麦とモロヘイヤのジュース