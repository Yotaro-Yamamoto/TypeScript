//インターフェースへの応用
//音を出す機能を持つISoundインターフェースを実装したDogクラスとCatクラスを考えてみよう。
interface ISound {
    makeSound():void;
}
class Dog implements ISound {
    makeSound(): void {
        console.log("ワン");
    }
}
class Cat implements ISound {
    makeSound(): void {
        console.log("ニャー");
    }
}

/*音を出す機能を備えたクラス(ISoundインターフェースを実装しているクラス)であれば
　なんでも受け入れる関数は次のように記述できる。
function makeSound(obj:ISound):void {
    obj.makeSound();
}*/
//同じことをジェネリクスを使うと次のように記述できる。
function makeSound<T extends ISound>(obj:T):void{
    obj.makeSound();
}

/*DogとCatはスーパークラスを待たないが、ISoundインターフェースを実装しているので、
　インスタンスを関数に渡すことができる。*/
const dog = new Dog();
const cat = new Cat();
makeSound(dog);//->ワン
makeSound(cat);//ニャー
