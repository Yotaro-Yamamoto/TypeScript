class Drink{
    protected _amount:number;//分量
    constructor(amount:number){
        this._amount=amount;
    }
    get amount():number{
        return this._amount;
    }
}
class Coffee extends Drink{
    private _suger:number;//砂糖の量
    constructor(amount:number,suger:number=0){
        super(amount);//Drinkクラスのコンストラクタを呼び出す
        this._suger=suger;
    }

    get amount():number{
        return this._amount+this._suger;
    }
    showAmount():void{//分量を出力するメソッド
        console.log(this._amount);
    }
}
class Wine extends Drink{

}
//クラスの判定
//型の判定
/*JSのtypeof演算子をクラスのインスタンスに適応すると、"object"(データ型を文字列で表現したもの)が得られる。どのクラスのインスタンスかを判定
　することはできないが、その変数が数値や文字列などのプリミティブ型なのかw大雑把に判定したい場面で使う。*/
const coffee = new Coffee(500);
console.log(typeof coffee==="object");//->true

//どのクラスのインスタンスなのかを判定したい場合はinstanceof演算子を使う。
console.log(coffee instanceof Coffee);//->true
console.log(coffee instanceof Drink);//->true

/*サブクラスはスーパークラスを継承しているため、演算子の左辺がサブクラスのインスタンスの場合、右辺にスーパークラスの名前を指定しても判定結果が
  trueになる。
  
  演算子の左辺がスーパークラスのインスタンスの場合は、右辺にサブクラスの名前を指定すると判定結果がtrueになる。*/
const juice = new Drink(350);
console.log(typeof juice==="object");//->true
console.log(juice instanceof Drink);//->true
console.log(juice instanceof Drink);//->true

//次のコードは、指定されたオブジェクトがCoffeeクラスのインスタンスかどうかを判定する関数である。
function isCoffee(drink:Drink):boolean{
    return drink instanceof Coffee;
}
//この関数は引数がスーパークラスのDrink型なので、Drinkクラスのインスタンスだけでなくサブクラスのインスタンスも受け取ることができる。

console.log(isCoffee(new Coffee(100)));//->true
console.log(isCoffee(new Drink(100)));//->false

//次のコードはサブクラスによって処理の内容が変わる関数である。
//飲み物を注ぐ関数
function pour(drink:Drink):void{
    if(drink instanceof Coffee){
        console.log("カップに注ぐ")
    }else if(drink instanceof Wine){
        console.log("グラスに注ぐ")
    }
}