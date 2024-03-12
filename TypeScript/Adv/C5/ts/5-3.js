var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.makeSound = function () {
        console.log("ワン");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.makeSound = function () {
        console.log("ニャー");
    };
    return Cat;
}());
/*音を出す機能を備えたクラス(ISoundインターフェースを実装しているクラス)であれば
 なんでも受け入れる関数は次のように記述できる。
function makeSound(obj:ISound):void {
    obj.makeSound();
}*/
//同じことをジェネリクスを使うと次のように記述できる。
function makeSound(obj) {
    obj.makeSound();
}
/*DogとCatはスーパークラスを待たないが、ISoundインターフェースを実装しているので、
 インスタンスを関数に渡すことができる。*/
var dog = new Dog();
var cat = new Cat();
makeSound(dog); //->ワン
makeSound(cat); //ニャー
