//クラスへの応用
//Animalクラスを継承したDogとCatを考えてみよう。
class Animal {
    walk():void{
        console.log("お散歩");
    }
}
class Dog extends Animal {}
class Cat extends Animal {}

//ここにDogを歩かせる関数とCatを歩かせる関数がある。
function walkDog(dog:Dog):void{
    dog.walk();//->お散歩
}
function walkCat(cat:Cat):void{
    cat.walk();//->お散歩
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
class Fish{} //Animalと継承関係にないクラス
const fish = new Fish();
//walkAnimal(fish);//コンパイルエラー

/*もちろんジェネリクスを使わずに引数の型注釈にスーパークラスの型を記述しても構わない。
　Dog型もCat型もAnimal型を継承しているからである。*/

function walkAnimal(animal:Animal):void{
    animal.walk();
}
const dog = new Dog();
const cat = new Cat();
walkAnimal(dog);//->お散歩
walkAnimal(cat);//->お散歩
