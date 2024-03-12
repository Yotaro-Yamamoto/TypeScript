//Record<K,T>
/*Record<K,T>は、Kがプログラムで値がTとなる型(レコード型)を作り出す。
　Kをstring、TをPersonにすると、husband(夫)wife(妻)のように任意の文字列を
　プロパティとし、値にPerson型のオブジェクトを持ったオブジェクトペアをFamily型
　として定義できる。*/
//人型
type Person = {
    name:string;
    age:number;
};
//家族型
type Family = Record<string, Person>;
//家族(夫と妻)
const myFamily:Family = {
    husband:{name:"太郎",age:45},
    wife:{name:"花子",age:45},
};
//犬の親子(母と子)
const dogFamily = {
    mother:{name:"母犬",age:7},
    child:{name:"子犬",age:1},
};

//動作確認
console.log(myFamily);
console.log(dogFamily);