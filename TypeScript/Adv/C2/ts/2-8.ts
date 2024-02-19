//オプショナルプロパティ 省略可能なメソッド
//メソッドの場合はメソッド名の後ろに「?」を付与する。
type Cat = {
    meows?():void;
};
//これにより、meowsメソッドを持たないCatオブジェクトを利用できるようになる。
const tama:Cat = {

};
console.log(tama);
//実行結果 →　$ {}