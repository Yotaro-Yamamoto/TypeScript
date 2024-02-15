//戻り値を返さない関数
/* 
関数が戻り値を返さないことを明確にしたい場合、
void型という特別な型を使う。
*/
function hello(): void{
    console.log("Hello");
}
let result: string = hello();
hello();