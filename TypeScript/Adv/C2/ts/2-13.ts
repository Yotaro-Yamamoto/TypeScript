//オプショナルプロパティとデフォルト値

type Juice = {
    price?:{
        discount?:number;
    };
    tax?:number;
};

const obj:Juice = {};

/*オプショナルチェーンの先にあるプロパティを代入した変数は、そのプロパティの型と
　undefinedのユニオン型になる。
　次のコードのvalueは、discountが存在すれは数値型になり、存在しなければundefined型になる*/
//let value = obj.price?.discount;// number | undefined

/*そのため、後に続くプログラムでvalueを数値型とみなして計算すると、valueがundefinedだった
　場合に計算結果がNaNになってしまう。*/
//100円引きにする
//console.log(value - 100); //NaN

/*そこで、JavaScriptのNull合体演算子「??」を組み合わせると、プロパティが存在しなかった場合の
　デフォルト値を返す簡潔なコードが記述できる。*/
let value = obj.price?.discount?? 1000;// number
//100円引きにする
console.log(value - 100);//900



