//オプショナルチェーン
/*obj.hoge.fooのようにオブジェクトの連鎖の途中に省略されたオプショナルプロパティ
  hogeがあった場合、そのプロパティであるfooを参照すると、コンパイルエラーになる。
  次のコードは、省略されたflavorプロパティ(stringオブジェクト)のlengthプロパティ
  を参照したため、エラーが発生する例である。*/
type Juice = {
    name:string;//←必須
    flavor?:string;//←任意
};

const obj:Juice = {
    name:"缶ジュース",
};
//↓コンパイルエラー
//console.log(obj.flavor?.length);

/*オプショナルプロパティ演算子「?.」を使うと、プロパティが省略されていた場合に
　undefinedが返され、コンパイルエラーは発生しない。*/
console.log(obj.flavor?.length);