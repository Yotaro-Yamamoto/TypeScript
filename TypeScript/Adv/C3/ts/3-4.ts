//インスタンスの生成
/*new演算子をつけたクラス名を関数のように呼び出すと、コンストラクタが
　実行され、インスタンスが返される。*/
/*書式
const obj = new クラス名(引数);
*/

//次のコードはDrinkクラスのインスタンスを生成する例である。
//const tea = new Drink("紅茶","ダージリン");

/*型エイリアスを利用してコンストラクタの引数をイブジェクトとして
　定義しておくと、コンストラクタに渡すオブジェクトのプロパティを
　記述する順番を意識する必要がなく、引数の変更に強いプログラムに
　なる。*/
//コンストラクタ引数の型
type DrinkParams = {
    name: string; //名前
    flavor: string;//味
    sugar:number;  //砂糖の量
};
//Drinkクラスの定義
class Drink {
    private _name:string;
    private _flavor:string;
    private _suger:number;
    constructor(params:DrinkParams){
        this._name=params.name;
        this._flavor=params.flavor;
        this._suger=params.sugar;
    }
}
//プロパティの順番を気にしなくてもよい
const tea = new Drink({
    sugar:10,
    flavor:"ダージリン",
    name:"紅茶",
});

console.log(tea);
