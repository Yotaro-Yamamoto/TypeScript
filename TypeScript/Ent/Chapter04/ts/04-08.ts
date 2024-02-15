//応用問題⓶
//仕様：九九表を出力する
let line:string ="";
for(let i:number=1;i<=9;i++){
    for(let j:number=1;j<=9;j++){
        line += (i*j).toString().padStart(3);
    }
    console.log(line);
    line="";
}