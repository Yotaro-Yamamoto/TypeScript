//アクセサ
//プロパティへの安全なアクセス
/*クラスを利用する側のプログラムでプロパティを自由に書き換えできてしまうと、インスタンスの性質が
　不適切な内容に変わったり、誤動作の原因になる。
例：
const tea = new Drink("紅茶","ダージリン");
tea.name="アイスクリーム";
tea.flavor="チョコミント"*/
/*Drinkは飲み物を表すつもりで定義されたクラスだが、プロパティになんでも代入できてしまうと、
　もはや飲み物では無くなってしまう。
　このような誤用を防ぎ、インスタンスを保護するには、クラスの外部から直接的にプロパティを参照
　できないよう隠蔽し、クラス側が用意したメソッドを介して間接的にプロパティにアクセスさせること
　が有効である。そのような役割を担う特別なメソッドがアクセサである。*/

class Drink {
    private _name:string;
    private _flavor:string;
    constructor(name:string,flavor){
        this._name=name;
        this._flavor = flavor; //第二引数以降が配列に格納される。
    }

    //読み取り専用のアクセサ(getter)
    /*プロパティの値を読み取る(戻り値として返す)アクセサをgetter(ゲッター)と呼ぶ。
    　関数と同じように、戻り値の型注釈を記述する。*/
    get name():string{
        return this._name;
    }

    //書き込み専用のアクセサ(setter)
    /*プロパティに値を書き込むアクセサをsetter(セッター)と呼ぶ。
    　関数と同じように、引数で値を受け取る。*/
    set name(name:string){
        this._name = name;
    }
}

const tea = new Drink("紅茶","ダージリン");

/*getterは関数の形をしているが、クラスを利用する側のプログラムでは普通のプロパティと同じよう
　に記述する*/
console.log(tea.name);
/*関数のように()をつけて呼び出すとコンパイルエラーになる。
console.log(tea.name());*/

/*単純にプロパティの値を返すだけでなく、加工して返すこともできる。
get name():string{
    return "【"+this.name+"】";
}
console.log(tea.name);//->【紅茶】*/

/*setterは関数のような形をしているが、クラスを利用する側のプログラムでは普通のプロパティと同じよう
　に記述する。*/
tea.name = "高級茶";
/*関数のように()をつけて呼び出すとコンパイルエラーになる。
tea.name("高級茶");//コンパイルエラー*/
console.log(tea.name);




