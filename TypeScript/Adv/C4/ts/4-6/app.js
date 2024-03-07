"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Animalという名前の機能(クラス)を読み込む
var animal_js_1 = require("./class/animal.js");
var cat = new animal_js_1.Animal();
cat.walk();
/*app.tsにAnimalクラスを定義しているのと実質同じである。
class Animal{...}
const cat = new Animal();
cat.walk();*/ 
