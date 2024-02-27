//読み取り専用のプロパティ
//readonly修飾子
//変数名の前にreadonlyを記述したプロパティは読み取り専用になる。
/*書式
class クラス名{
    アクセサ readonly 変数名:データ型 (=数値);
}
　ただし宣言時に初期値を代入しなかった場合にコンストラクタで初期化ができるように、
　コンストラクタでの再代入は可能である。*/
class Drink{
    public readonly TAX_RATE:number;//型定義のみ
    constructor(){
        this.TAX_RATE=0.1//ここで初期化してもよい
    }
}
/*コンストラクタ以外の場所では際代入できない
class Drink{
    public readonly TAX_RATE:number;
    setRate(){
        this.TAX_RATE =0.1;//コンパイルエラー
    }
}*/
const milk = new Drink;
console.log(milk.TAX_RATE);