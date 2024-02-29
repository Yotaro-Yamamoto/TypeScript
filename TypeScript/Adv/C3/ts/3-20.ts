class Drink{
  protected _price:number;
  getPrice():number{return this._price}
}
/*たとえばDrinkクラスのgetPriceメソッドが返す価格が税別に変わったとしても、SaleDrinkクラスの
　getPriceメソッドは常にその半額を返す。つまり、スーパークラスの機能を利用しつつ、サブクラス独自の
　処理を加えた形になる。
　目的に合わせてスーパークラスとサブクラスのメソッドを使い分けできた方が良い場合は、オーバーライド
　しなくても構わない
　次のコードは、元の価格を取得したいときgetHalfPriceメソッド、半額の価格を取得したいときはgetHalf
  Priceメソッドを使い分けできるようにサブクラスを実装する。*/
  class SaleDrink extends Drink{
    getHalfPrice():number{//半額で提供
        return Math.floor(super.getPrice()/2);
    }
}

const drink = new SaleDrink();
drink.getPrice();//スーパークラスのメソッド
drink.getHalfPrice();//サブクラスのメソッド
console.log(drink);