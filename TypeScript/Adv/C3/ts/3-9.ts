class Drink {
    private _name:string;
    private _flavor:string;
    constructor(name:string,flavor:string){
        this._name=name;//飲み物しか生成されないように保護
        this._flavor = flavor;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }

    /*flavorプロパティも同様に、風味を表す文字列かどうかを判定するロジックを備えたsetterを用意
    　すれば、プロパティの保護に役立つ。*/
    set flavor(flavor:string){
        //風味かどうか判定
        if(isFlavor(flavor)){
            this._flavor = flavor;
        }
    }
}

function isFlavor(flavor){
    return (flavor="りんご");
}

//クラス内からのアクセス
/*クラス内ではアクセサを使わずに直接プロパティにアクセスできるが、アクセサを使ったほうが良い場合も
　ある。たとえば複数名で開発を分業する場合、メンバー全員が全てのクラスの正しい用途を理解していると
　は限らない。
Aさんは、りんご味のジュースが生成されることを期待して次のコードを記述した。*/
//const juice = new Drink("りんご");
//一見すると正しいように見えるが、このコードは間違い。正しくは次のように記述する
const juice = new Drink("ジュース","りんご");
/*Drinkクラスの第一引数は飲料の種類、第二引数は風味を指定するものだからである。Aさんのコードでは
　「りんご」という名前の飲み物が生成されてしまうが、りんご自体は飲料ではないので、論理的には間違っ
　たコードである。
　そこで、Drinkクラスの各プロパティにsetterを定義して、コンストラクタでsetteを使ってプロパティ
　を初期化すれば、論理的に誤ったオブジェクトが生成されることを防ぐことができる。*/
console.log(juice);

