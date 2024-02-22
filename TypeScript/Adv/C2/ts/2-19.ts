//for-of構文を使ったループ
/*JSのfor-of構文を使ってプロパティを繰り返し参照するには、
　ofの右辺に反復可能なオブジェクトを指定する。ただし、Object.
  entriesとObject.valuesメソッドはES2017を要求するので、
  下記の①と②を使う場合はtscコマンドのtargetオプションでes2017
　以降のバージョンを指定する必要がある。*/
//①プロパティメイト値を両方参照
/*Object.entries()は、引数に与えたオブジェクトが持つプロパティの名前
　と値からなる配列を返す。この配列の要素を分割代入で変数keyとvalueに受けると、
　ループ内で使用できる。*/
for(const [key, value] of Object.entries(obj)){
    console.log(key,value);//objのプロパティの名前と値が出力される
}

//②プロパティの値だけ参照
/*Object.values()は、引数に与えたオブジェクトが持つプロパティの値から
　なる配列を返す。*/
for(const value of Object.values(obj)){
    console.log(value);//objのプロパティの値が出力される
}

//③プロパティの名前だけ参照
/*Object.keys()は、引数にあたえたオブジェクトが持つプロパティの名前から
　なる配列を返す。*/
for(const key of Object.keys(obj)){
  console.log(key);//objのプロパティの名前が出力される
}

//JSのforEach構文を使う方法もある
Object.entries(obj).forEach(function([key,value])){
  console.log(key,value);//①
}
Object.values(obj).forEach(function(value)){
  console.log(value);//②
}
Object.keys(obj).forEach(function(key)){
  console.log(key);//③
}