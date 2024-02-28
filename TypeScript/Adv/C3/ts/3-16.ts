//継承
//継承とは
/*既存のクラスの性質(プロパティとメソッド)を引き継いで、新しいクラスを作成することを継承と呼ぶ。
　たとえばDrinkクラスを継承してコーヒークラスやワインクラスを作成すると、それらはDrinkクラスの
　性質を引き継ぐ。*/
/*継承もとをスーパークラス(または親クラス/基底クラス)、継承先をサブクラス(または子クラス/派生
　クラス)と呼ぶ。*/

//継承のメリット
/*継承の最大のメリットは、既存のクラスの再利用性が高まることである。サブクラスへ引き継いだ性質は、
　スーパークラスを修正すればサブクラスにも自動的に反映される。また、サブクラスだけが備えるべき性質
　はサブクラスに追加すればよいので、保守性を維持しつつ拡張性の高いプログラムが作成できる。*/

//継承の書式
//クラスの継承はextendsw使う。
/*書式
class サブクラス名 extends スーパークラス名{}*/
//Drinkクラスを継承してCoffeeクラスを定義してみよう。
class Drink{
    private _amount:number;//分量
    constructor(amount:number){
        this._amount=amount;
    }
    get amount():number{
        return this._amount;
    }
}
class Coffee extends Drink{
}
const coffee = new Coffee(500);
console.log(coffee.amount);//->500
