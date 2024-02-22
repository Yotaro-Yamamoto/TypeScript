//コンストラクタの柔軟性
/*TSやJSでは、引数の異なるコンストラクタを複数実装することができない。
　そのため、デフォルト引数や残余引数を利用して、コンストラクタに柔軟性
　を持たせるとよい。
　次のコードは、flavorを省略可能にしている。*/
class Drink {
    private _name:string;
    private _flavor:string;
    constructor(name:string,flavor:string = ""){
        this._name=name;
        this._flavor=flavor; //省略すると空文字列がセットされる。
    }
}
//nameだけを指定してインスタンスが生成できるようになる。
const milk = new Drink("牛乳");
console.log(milk);