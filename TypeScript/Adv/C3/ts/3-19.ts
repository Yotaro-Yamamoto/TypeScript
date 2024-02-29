//メソッドの拡張
/*スーパークラスのメソッドを利用しつつ、サブクラス固有の処理を加えたい場合は、オーバーライドした
　メソッド内でスーパークラスのメソッドを呼び出す。
　次のコードは、価格を取得するgetPriceメソッドを、セール対象の飲料を表すSaleDrinkクラスで
　オーバーライドする。*/
class Drink{
    protected _price:number;
    getPrice():number{return this._price}
}

class SaleDrink extends Drink{
    getPrice():number{//半額で提供
        return Math.floor(super.getPrice() / 2);
    }
}

const drink = new Drink();
console.log(drink);