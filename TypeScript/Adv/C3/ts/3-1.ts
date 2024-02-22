//クラス
/*オブジェクトが持つ性質(プロパティやメソッド)を定義したものをクラスと呼ぶ。
　クラスはオブジェクト指向の設計書を指す。
　Typescriptでは次のようにクラスを定義する。*/
/*
class クラス名{
    //⓵プロパティ
    プロパティ名:型注釈;
    プロパティ名:型注釈;
    ．．．
    //⓶コンストラクタ
    constructor(引数:型注釈){
        ．．．
    }
    //⓷アクセサ
    get プロパティ名():型注釈{
        ．．．
    }
    //⓸メソッド
    メソッド名(引数:型注釈):型注釈{
        ．．．
    }
}
*/

//型定義としてのクラス
/*TypeScriptの区明日は型定義としての意味も持つ。関数にDrink型の引数を渡すと、
　関数内でオブジェクトのプロパティを参照できる。*/
//飲み物クラスの定義
class Drink{
    name:string;
    flavor:string;
    constructor(name:string,flavor:string){
        this.name = name;
        this.flavor = flavor;
    }
}
//飲み物を注文する関数
function order(obj:Drink):void{
    console.log(`${obj.name}を注文しました。`);
}
//飲み物を飲む関数
function drink(obj:Drink):void{
    console.log(`${obj.flavor}の味がします。`);
}
//飲み物のインスタンスを生成
const appleJuice = new Drink("ジュース","りんご");//->インスタンス化
//関数を実行
order(appleJuice);
drink(appleJuice);