//メソッドチェーン
//メソッドの連鎖
/*インスタンスの状態(プロパティ)に変化を与える複数のメソッドを順番に実行したいとき、インスタンス
　を返すようにメソッドを実装しておくと、連鎖的にメソッドを呼び出すことができる。
　砂糖とミルクの量をプロパティに持つDrinkクラスを考えてみよう*/
class Drink{
    private _name:string;
    private _suger:number;//砂糖の量
    private _milk:number;//ミルクの量
    constructor(name:string){
        this._name=name;
        this._suger=0;
        this._milk=0;
    }
    /*砂糖とミルクを追加するメソッドを追加する。プロパティの値を更新するだけでなく、
    　インスタンスを戻り値として返す。*/
    set name(name:string){
        this._name=name;
    }
    addSuger(suger:number):Drink{
        this._suger+=suger;//砂糖を追加
        return this;//インスタンスを返す
    }
    addMilk(milkk:number):Drink{
        this._milk=milkk;//ミルクを追加
        return this;//インスタンスを返す
    }
    /*こうすると、「砂糖の追加」「ミルクの追加」「名前の変更」の3つの処理を1行につなげて簡潔に
    　記述することができる。*/
}

const coffee = new Drink("ブラックコーヒー");
//console.log(Drink)
coffee.addMilk(3).addSuger(5).name="カフェラテ";
console.log(coffee)
coffee.addMilk(3);
coffee.addSuger(5);
coffee.name="カフェモカ";
console.log(coffee);