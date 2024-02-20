//代入する変数名の指定
/*オブジェクトのプロパティ名とは異なる名前の変数に取り出したいときは、
　変数名の後ろに「:変数名」を記述する。*/
/*書式
　{プロパティ名,プロパティ名,...}=オブジェクト*/
/*次のコードは、baseプロパティの値をbaseValueに受け取り、taxプロパティ
　の値をtaxValueに受け取る。*/
const {base:baseValue,tax:taxValue} = obj.price;
/*これは、次のコードと等価である。
　const baseValue = obj.price.value;
　const taxValue = obj.price.tax;*/