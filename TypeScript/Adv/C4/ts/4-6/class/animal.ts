//宣言と同時に名前付きエクスポート
export class Animal{                        
    walk():void{
        console.log('猫が歩く');
    }
}

/*または
class Animal{...}
export { Animal };*/