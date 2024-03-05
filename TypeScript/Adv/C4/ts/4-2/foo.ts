//宣言と同時に公開
//変数のエクスポート
export let price:number=150;
export const flavor:string="いちご味";

//関数のエクスポート
export function coffee_break():void{
    console.log("ちょっと一休み");
}

//クラスのエクスポート
class Drink{
    public name:string;
    public flavor:string;
}
export{Drink};

//インターフェースのエクスポート
export interface IRunnable{
    run();
}

//型エイリアスのエクスポート
export type NUmberOrNull = number|null;