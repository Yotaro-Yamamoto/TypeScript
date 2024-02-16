//制限の違い
/*readonly修飾子は、付与したプロパティのみ読み取り専用にする。
　なお、以下例は、priceプロパティよりも下層にあるプロパティは
　読み取り専用にならないことを示す。*/
type Juice_price = {
    readonly price:{
        base: number; //本体価格
        tax: number;  //税額
    };
};
const obj3: Juice_price = {
    price:{
        base: 100,
        tax: 10,
    },
};
console.log(obj3);
//以下、コンパイルエラー
/*
obj.price = {
    base: 200,
    tax: 20,
}
*/

obj3.price.base = 120;  //←書き換え可能
console.log(obj3);


//書式2 constアサーション
/*as constを付与したオブジェクトは、オブジェクトのプロパティを再帰的に読み取り専用にする。
　つまり、プロパティがオブジェクトである場合、そのプロパティも読み取り専用になる。
　以下例は、priceプロパティだけでなく、priceオブジェクトのプロパティも読み取り専用になることを示す。*/
let obj4 = {
    price:{
        base:100,
        tax:10,
    },    
} as const;
console.log(obj4);
//↓コンパイルエラー
/*
obj price ={
    base:200,
    tax:20,
};
*/
//obj.price.base = 120; ←コンパイルエラー

/*ただし、obj4自体はletで宣言しているため、obj4には新しいオブジェクトを代入できてしまう。
　これを防ぎ、プロパティもオブジェクトも完全に読み取り専用にするためには、const宣言と、as const
　を併用する。*/
const obj5 = {
    price:{
        base: 100,
        tax: 10,
    },
} as const;
//以下、コンパイルエラー
/*obj5.price = {
    base:200,
    tax:20,
};
obj5.base = 120;
obj5 = {
    price={
        base:200,
        tax:20,
    },
};
*/
console.log(obj5);