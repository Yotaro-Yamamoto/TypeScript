let x:number = 10;  //受験者数
let y:number = 600; //全員の合計点
try{
    let x:number = 0;
    //⓵変数をチェック
    if(x===0){
        throw new Error("受験者数に0が入っています");
    }
    //⓶平均点を出力
    let avg:number = y/x;
    console.log("平均点："+avg);
}catch(e){
    //⓷受験者数を出力
    console.log("受験者数："+x);  //let x:number = 10;を参照
}