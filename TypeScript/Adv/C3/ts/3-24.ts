//インターフェースの継承
//クラスの継承と同様に、extendsを使うとインターフェース同士で継承することができる
/*書式
interface インターフェース名 extends インターフェース名{...}*/
//「歩く」インターフェースを継承して「走る」インターフェースを定義してみよう。
interface IWalkable{
    walk():void;//publicになる
}
interface IRunnable extends IWalkable{
    run():void;
}
//猫は歩くだけでなく走ることもできるので、走るインターフェースを自走するよう変更する。
class Cat implements IRunnable{
    walk():void{
        console.log('猫歩き');
    }
    run():void{
        console.log("猫ダッシュ");
    }
}
/*こうすることで、種類によらずすべての猫がwalkとrunメソッドを持つことを強制することが
　できる。*/
const tama = new Cat();
tama.walk();
tama.run();