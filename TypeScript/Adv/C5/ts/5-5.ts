//ユーティリティ型
/*ユーティリティ型とは、既存の型を利用して新しい型を作り出すことができるように
　TypeScriptが提供している型である。新規のプログラムで、既存の型を再利用して
　新しい型を定義したい場面で役立つ。
　ユーティリティ型は、様々な型に適用できるようにジェネリクスを使って記述する。*/

//Partial<T>
/*partial<T>は、T型オブジェクトのすべてにプロパティをオプショナルにした新しい型を作り出す。
　特定のオブジェクトの任意のプロパティを更新したり、任意のプロパティを条件とする検索処理を
　実装する場面で役に立つ。
　2つのプロパティを持つ動物オブジェクトの配列animalsがあったとする。*/
type Animal = {
    type:string;//種類
    age:number;// 年齢
};
//動物オブジェクトの配列
const animals = [
    {type:"犬",age:6},
    {type:"犬",age:3},
    {type:"猫",age:3},
]

/*配列animalsの中から、犬だけを検索したり、猫だけを検索したり、あるいは年齢を条件として検索できる
　汎用的な関数を作るにはどうすればよいだろうか？*/

//種類で検索する関数
//function searchByType(type:string):Animal[]{}
//年齢で検索する関数
//function searchByAge(age:number):Animal[]{}

//このようにプロパティごとに関数を用意しなくても、Partialを使うと1つの関数にまとめることができる。
//任意のプロパティで検索できる関数
function search(param:Partial<Animal>):Animal[]{
    //種類で検索した場合(paramにtypeプロパティが含まれる)
    if("type" in param){
        return animals.filter((obj) => obj.type === param.type);
    }
    //年齢で検索した場合(paramにageプロパティが含まれる)
    if("age" in param){
        return animals.filter((obj) => obj.age === param.age);
    }
    //検索条件が指定されなかった場合
    return [];
}

//Partialのおかげで、paramにはAnimal型のプロパティを全部指定する必要がないので、汎用的なsearch関数が作れる。
console.log(search({}));//->[]
console.log(search({type:'犬'}));//->[type:'犬',age:3}]
console.log(search({age:3}));//->[{type:'犬',age:3},{type:'猫',age:3}]