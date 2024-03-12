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
/*ISoundインターフェースをDogクラスが直接実装するのではなく、ISoundインターフェースを実装
 したスーパークラスや抽象クラスをDogクラスが継承した場合もmakeSound関数は動作する、*/
//抽象クラス
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
//具象クラス
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //ISoundインターフェースを実装
    Dog.prototype.makeSound = function () {
        console.log("ワン");
    };
    return Dog;
}(Animal));
function makeSound(obj) {
    obj.makeSound();
}
var dog = new Dog();
makeSound(dog); //->ワン
