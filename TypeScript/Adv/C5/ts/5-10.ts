//Omit<T,K>
/*Omit<T,K>は既存のT型からKで指定した一部のプロパティを取り除いた新しい型を作り出す。Pickと逆のイメージである。
　先ほどのResult型を利用して、テスト結果を表示する関数を考えてみよう。ただし、学籍番号は表示する必要がない。*/
type Result = {
    id:number;//学籍番号
    name:string;//名前
    score:number;//点数
};
//山田さんと鈴木さんのテスト結果
const yamada:Result = {
    id:10,
    name:"山田太郎",
    score:79,
};
const suzuki:Result = {
    id:11,
    name:"鈴木次郎",
    score:80,
};
//テスト結果を表示する関数
/*function showResult(result:Result):void{
    console.log("名前:"+result.name);
    console.log("点数"+result.score);
}*/
//この関数は学籍番号を必要としないので、引数にResult型から学籍番号を除外した型を指定できるようにしてみよう。
function showResult(result:Omit<Result,"id">):void{
    console.log("名前:"+result.name);
    console.log("点数"+result.score);
}
//動作確認
showResult(yamada);
showResult(suzuki);
//複数のプロパティを除外したい場合hプロパティを|で連結する。
type Score = Omit<Result,"id"|"name">;
function showResult2(result:Result):void{
    console.log("名前:"+result.name);
    console.log("点数"+result.score);
}
//動作確認
showResult2(yamada);
showResult2(suzuki);