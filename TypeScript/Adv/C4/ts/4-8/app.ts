/*次のコードは、animal.tsが公開しているすべての機能をMyFamilyという名前空間をつけて
　インポートする例である。*/
import * as MyFamily from "./class/animal.js";
const cat = new MyFamily.Cat();
const dog = new MyFamily.Dog();

/*インポートした機能を利用するときは、asでつけた名前を使って「MyFamily.機能名」のように記述する。
　これは、Animalは名前空間という一種のオブジェクトであり、インポートした機能がAnimalオブジェクトの
　プロパティになることを意味している。*/
