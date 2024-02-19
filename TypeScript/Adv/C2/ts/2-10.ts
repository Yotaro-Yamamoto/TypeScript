//オプショナルチェーンの連鎖
/*オブジェクトの連鎖の奥深くにあるオプショナルプロパティを参照するために、オプショナルチェーンを
　繋げることができる。次のコードは、食肉の値引き後価格を金額フォーマットn出力する例である。*/
type Meet = {
    name:string;//名前:必須
    price?:{//価格:任意
        base?:number;//本体価格:任意
        tax?:number;//税額:任意
        discount?:number;//値引き後の価格:任意
    };
};

const obj:Meet = {
    name:"高級肉",
    price:{
        base:1280,
    },
};
let value = obj.price?.discount?.toLocaleString();
console.log(value);//→undefined
/*discountプロパティとpriceプロパティの両方とももしくはどちらか一方が省略されていても
　コンパイルエラーは発生せず、undefinedが出力される。*/