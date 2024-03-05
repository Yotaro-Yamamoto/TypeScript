//宣言後に公開
//変数のエクスポート
let price2:number=150;
const flavor2:string="いちご味";

export { price2, flavor2 };

//関数のエクスポート
function coffee_break2():void{
    console.log("ちょっと一休み");
}
export {coffee_break2};

//クラスのエクスポート
class Drink{
    public name:string;
    public flavor:string;
}
export {Drink};

//インターフェースのエクスポート
interface IRunnable{
    run();
}
export{IRunnable};

//型エイリアスのエクスポート
type NUmberOrNull = number|null;
export { NUmberOrNull };