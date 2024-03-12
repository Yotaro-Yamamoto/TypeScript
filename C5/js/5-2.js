var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//クラスへの応用
//Animalクラスを継承したDogとCatを考えてみよう。
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        console.log("お散歩");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
//ここにDogを歩かせる関数とCatを歩かせる関数がある。
function walkDog(dog) {
    dog.walk(); //->お散歩
}
function walkCat(cat) {
    cat.walk(); //->お散歩
}
/*ジェネリクスを使って2つの関数を1つにまとめると、walkメソッドがコンパイルエラーになる。
 理由は、TにAnimal(およびAnimalを継承したサブクラス)以外の型が指定された場合にwalkメソッド
 が存在しないからである。
function walkAnimal<T>(animal:T):void{
    animal.walk();//プロパティ'walk'は型'T'に存在しません
}
 そこで、Tに指定できる型をAnimalを継承した型(Animal型自身も含む)に限定するためにextendsを使うと、
 エラーが解消する*/
/*function walkAnimal<T extends Animal>(animal:T):void{
    animal.walk();//Tは必ずAnimalを継承しなければならない。
}*/
/*これで、walkAnimal関数は引数にAnimal型(及びAnimalを継承したサブクラス)ならばどんな動物をしても
 動作する汎用的な関数になった。*/
/*const dog = new Dog();
const cat = new Cat();
walkAnimal(dog);//->お散歩
walkAnimal(cat);//->お散歩*/
//また、Animalと継承関係にない型をTに指定すると、コンパイルエラーになるので、型の安全性も確保される。
var Fish = /** @class */ (function () {
    function Fish() {
    }
    return Fish;
}()); //Animalと継承関係にないクラス
var fish = new Fish();
//walkAnimal(fish);//コンパイルエラー
/*もちろんジェネリクスを使わずに引数の型注釈にスーパークラスの型を記述しても構わない。
 Dog型もCat型もAnimal型を継承しているからである。*/
function walkAnimal(animal) {
    animal.walk();
}
var dog = new Dog();
var cat = new Cat();
walkAnimal(dog); //->お散歩
walkAnimal(cat); //->お散歩
