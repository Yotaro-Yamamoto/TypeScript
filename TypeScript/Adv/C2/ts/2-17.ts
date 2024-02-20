//分割代入のデフォルト値
/*「=」の後ろにデフォルト値を指定すると、代入するプロパティが
　undefinedの場合にデフォルト値が代入される。次の例は、オプショナル
　プロパティを分割代入する際のデフォルト値を指定している。*/
type Meet = {
    name:string;
    price:{
        base:number;//本体価格
        tax?:number; //税額
        discount?:number;//値引き価格
    };
};

const obj:Meet = {
    name:"高級肉",
    price:{
        base:1280,
    },
};

const {base,tax=0,discount=base} = obj.price;

console.log(base);      //->1280
console.log(tax);       //->0
console.log(discount);  //->1280

/*baseにはobj.priceの中にある同じ名前のプロパティ(basse)の値が
　代入されるが、obj.priceの中にはtaxとdiscountプロパティが存在
　しない(オプショナルなので省略されている)ので、代わりにデフォルト値が
　代入されている。
　同じことを分割代入を使わずに記述すると次のようになる。*/
/*const base = obj.price.base;
const tax = obj.price.tax;
const discount = obj.price.discount;*/