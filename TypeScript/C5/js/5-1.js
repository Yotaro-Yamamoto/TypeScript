//ジェネリクス
/*ジェネリクスは<T>のように記述し、Tに様々な型を受け入れる汎用的な機能(ライブラリなど)
 を作成するときに使う。次の例は、ジェネリクスを使ってどんな型の値をいくつ渡しても返す
 関数である。この関数一つで、あらゆる型の引数に対応できる。*/
function makeArray() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    return x;
}
//ジェネリクスを使用した関数を呼び出すときは、関数名の後ろにTに具体的な型の名前を記述する。
console.log(makeArray(1, 2, 3) /*number型*/);
console.log(makeArray("A", "B", "C", "D") /*string型*/);
//makeArray<Book>(book1,book2,book3);//Bookクラス型
/*<T>のTは型の名前を入れるようなものである。呼び出し時にnumberを指定すれば、コンパイラは
 残余引数のxと戻り値の配列もnumber型であることを認識する。*/
/*ジェネリクスを使わなければ、型ごとに名前が異なる関数をいくつも作らなくてはならない。
 しかし、処理内容がまったく同じ関数が増えていくと、コードの共通化ができず、保守性が
 低下ししまう。

function makeArray(...x:number)Array<number>{
    return x;
}
function makeArray(...x:string)Array<string>{
    return x;
}
function makeArray(...x:Book)Array<Book>{
    return x;
}
function makeArray(...x:Animal[])Array<Animal>{
    return x;
}

 ジェネリクスを使えば、様々な型に対応した同じ機能を1つにまとめて定義することができる。*/ 
