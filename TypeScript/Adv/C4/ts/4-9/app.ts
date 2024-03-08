/*export  defaultで公開された動物クラスを、AnimalではなくCreatureという
　クラス名に置き換えてインポートする例を示す。*/
import Creature from "./class/animal.js";
const cat = new Creature();
cat.run();