//Animalという名前の機能(クラス)を読み込む
import { Animal } from "./class/animal.js";
const cat = new Animal();
cat.walk();

/*app.tsにAnimalクラスを定義しているのと実質同じである。
class Animal{...}
const cat = new Animal();
cat.walk();*/