/*次のコードは、残余引数を利用して、name以外の付属情報をいくつでも
　渡せるようにしている。*/
class Drink {
    private _name:string;
    private _param:string[];
    constructor(name:string,...param:string[]){
        this._name=name;
        this._param = param; //第二引数以降が配列に格納される。
    }
}

const tea = new Drink("お茶","緑茶","静岡産");
console.log(tea);

//残余引数
/*残余引数はJSの構文である。関数の引数に「...」をつけると、
　呼び出し側から実引数を「,」で区切っていくつでも渡せるようになる。
　「...」をつけた残余引数には実引数が配列要素として格納される。
　ただし、残余引数は一番最後の引数にしか使えない。
　なお、関数内で配列に似た組み込みオブジェクトargumentsを使用すると、
　arguments[0]は1番目、arguments[1]は2番目の引数を指すが、argumentsは
　配列ではないので、forEachなどArrayクラスのメソッドを使うことができない。
　一方残余引数はArrayなので、param.lengthやparam.forEach(...)が使える。*/
