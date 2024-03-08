import { Earth, Sun } from "./planet/solar.js";
console.log(Earth.RADIUS);
console.log(Sun.RADIUS);

/*こうすると、インポート側で次のように名前を付けることができるので、
　インポート側で同じ名前の変数を宣言しても名前が衝突しない。*/

/*import { Solar } from "./planet/solar.js";
console.log(Solar.Sun.RADIUS);
const Sun = "日曜日";//名前が衝突しない*/

import { Galaxy } from "./planet/galaxy.js"
console.log(Galaxy.Solar.Earth.RADIUS);