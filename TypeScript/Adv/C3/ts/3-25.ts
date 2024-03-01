interface IWalkable{
    walk():void;//publicになる
}
interface IRunnable extends IWalkable{
    run():void;
}
interface ISleepable{
    sleep():void;
}
interface IJumpable{
    jump():void;
}
interface IFlyable{
    fly():void;
}
//インターフェースの多重実現
/*implementsの後ろにインターフェース名を「,」で区切って並べると、複数のインターフェースを一つの
　クラスに実装することができる。*/
/*implements インターフェース名,インターフェース名*/
/*たとえば、「飛び上がる」「眠る」インターフェースを定義したとしよう。猫はこれらすべてのふるまいを
　備えているので、次のように複数のインターフェースを実装する。*/
class Cat implements IRunnable,ISleepable,IJumpable{
    walk(): void {
        console.log("猫歩き");
    }
    run(): void {
        console.log("猫走り");
    }
    jump(): void {
        console.log("飛び上がる");
    }
    sleep(): void {
        console.log("寝転んで寝る");
    }
}

//一方、鳥のハトは走ったりジャンプしたしないが、飛ぶことはできる。
class Pegion implements IFlyable,ISleepable{
    fly(): void {
        console.log("羽ばたいて飛ぶ");
    }
    sleep(): void {
        console.log("木の枝に止まって寝る");
    }
}

/*インターフェースを見れば、そのクラスがどういったふるまいをするのかを(クラスのコードを全部解読
　しなくても)直感的に理解しやすくなり、プログラムの可読性が高まる。*/

//動作確認
const cat = new Cat();
console.log(cat);
cat.walk();
cat.run();
cat.jump();
cat.sleep();

const pegion = new Pegion();
console.log(pegion);
pegion.fly();
pegion.sleep();