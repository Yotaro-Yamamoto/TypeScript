class Drink {
    public _name:string;
    public _flavor:string;
    public _sugar?:number;
    constructor(name:string,flavor:string,sugar:number){
        this._name=name;
        this._flavor = flavor; //第二引数以降が配列に格納される。
        this._sugar = sugar
    }

    get name():string{
        return this._name;
    }

    /*プロパティに不適切な値が代入されないように防ぐ処理をsetterに実装すれば、インスタンスの保護
    　に役立つ。次のコードは、飲み物ならばtrueを返す架空のisDrink関数を利用して、nameに飲み物以
    　外が渡された場合にインスタンスが飲み物以外のオブジェクトにならないように保護している。*/
    set name(name:string){
        //飲み物かどうか判定
        if(isDrink(name)){
            this._name = name;
        }
    }

    //範囲チェック
    /*数値型のプロパティが取り得る値を適切な範囲に制限する場面にもsetterがよく使われる。*/
    set sugar(sugar:number){
        //0以上の値しか受け付けない
        //0未満の値が渡された場合に0にする
        this._sugar = (sugar>=0)?sugar:0;
    }    
}

function isDrink(name){
    return (name="高級茶");
}

const tea = new Drink("","",0);

//こうすれば、飲み物ではない名前を代入しても名前が変わらない。
tea._name = "高級茶";
console.log(tea._name);//->高級茶(名前が変わる)
tea._name = "猫";
console.log(tea._name);//->高級茶(名前が変わらない)


//sugerの動作確認
tea._sugar = 100;
console.log(tea._sugar);