"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*export  defaultで公開された動物クラスを、AnimalではなくCreatureという
 クラス名に置き換えてインポートする例を示す。*/
var animal_js_1 = require("./class/animal.js");
var cat = new animal_js_1.default();
cat.run();
