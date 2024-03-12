interface ISound {
    makeSound():void;
}
/*ISoundインターフェースをDogクラスが直接実装するのではなく、ISoundインターフェースを実装
　したスーパークラスや抽象クラスをDogクラスが継承した場合もmakeSound関数は動作する、*/
//抽象クラス
abstract class Animal implements ISound {
    abstract makeSound():void;
}
//具象クラス
class Dog extends Animal {
    //ISoundインターフェースを実装
    makeSound(): void {
        console.log("ワン");
    }
}

function makeSound<T extends ISound>(obj:T):void{
    obj.makeSound();
}

const dog = new Dog();
makeSound(dog);//->ワン
/*この場合、ジェネリクスの型パラメータTはDogであるが、DogはAnimalを継承しており、
　AnimalはISoundを実装しているので、makeSound関数に渡すことができる。*/