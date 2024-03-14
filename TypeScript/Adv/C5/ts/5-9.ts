//Pick<T,K>
/*Pick<T,K>は既存のT型からプロパティKだけを部分的に抜き出した新しい型を作り出す。
　例として、ある学校で実施されたテスト結果をReault型として、学生2名のテスト結果を次のように返してみよう。*/
//テスト結果型
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

//もし、テストの合格点が80点だった場合、テスト結果を受け取って合否の結果を返す関数を次のように実装できる。
//合否を判定する関数
/*function isPass(result:Result):boolean {
    return result.score>=80;
}
console.log(isPass(yamada));
console.log(isPass(suzuki));*/

/*ところで、関数であるisPassはscoreしか参照していないにもかかわらず、呼び出すとき必ずReault型のオブジェクトを
　用意しなければならないので少し不便。
　そこで、Pickを使って引数の型を「Result型の中からscoreプロパティだけを抜き出したオブジェクト」に変更すると
　scoreプロパティだけを持ったシンプルなオブジェクトを渡せるようになる。*/
function isPass(result:Pick<Result,"score">):boolean{
    return result.score>=80;
}
console.log(isPass({score:80}));//->True

//複数のプロパティを抜き出したい場合は|で連結する。次の関数は動作に必要なプロパティだけを受け取る。
type Examinee = Pick<Result, "id"|"name">;
function showExaminee(student:Examinee):void{
    console.log(student.id+":"+student.name);
}
showExaminee(yamada);
