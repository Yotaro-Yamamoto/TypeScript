//メソッド
/*メソッドはクラスの機能を定義する関数である。通常の関数と同じように引数と戻り値に型注釈を記述
　できるが、関数名の前にfinctionをつけない点に注意。
　次のコードは、Drinkクラスに別のDrinkクラスを混ぜるメソッドである。*/
class Drink {
    public _name:string;
    constructor(name:string){
        this._name=name;
    }

    mix(obj:Drink):void{
        this._name += obj._name;
    }
    //クラス内から呼び出し
    /*メソッドをクラス内から呼び出すときはthisをつける。Drinkクラスに、引数で渡した飲み物を
    　混ぜて冷やすmixCoolメソッドを追加してみよう。*/
    mixCool(obj:Drink):void{
        this._name = "冷たい" + this._name;
        this.mix(obj);
    }
}
/*プロパティと同じように、メソッドにもアクセス修飾子(private/protected/public)をつけることが
　できる。省略するとpublicを指定したことになる。*/
/*書式
アクセス修飾子 メソッド名(引数:型注釈):型注釈{}
クラスを利用する側のプログラムに公開する必要がないメソッドは、private、もしくはprotectedをつけて
保護すべし。*/

//メソッドの呼び出し
//クラスを利用する側のプログラムからメソッドを呼び出すには、次のように行う。
/*書式
オブジェクト.メソッド名(引数);
炭酸にジュースを混ぜてみよう。*/
const soda = new Drink("炭酸");
const juice= new Drink("ジュース");
soda.mix(juice);
console.log(soda._name);//->炭酸ジュース

//mixCoolメソッドを使って、炭酸ジュースを混ぜて冷やしてみよう。
soda.mixCool(juice);
console.log(soda._name);//->冷たい炭酸ジュース
