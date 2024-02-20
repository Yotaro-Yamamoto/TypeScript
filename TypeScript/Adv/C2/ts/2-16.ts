//入れ子構造の分割代入
/*{}を入れ子にして、代入するオブジェクトと同じ構造にすると、階層の
　異なるプロパティを分割代入することができる。次の例は、オブジェクト内
　の異なる階層にある3つのプロパティから値を取り出している。*/
const obj = {
    name:"高級肉",
    price:{
        base: 1280,//本体価格
        tax:128,//税額
        discount:1000//値引き価格
    },
};

const{
    name:meetName,
    price:{base,discount},
} = obj;

console.log(meetName);//->高級肉
console.log(base);    //->1280
console.log(discount);//->1000