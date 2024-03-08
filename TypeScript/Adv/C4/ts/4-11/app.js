"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var solar_js_1 = require("./planet/solar.js");
console.log(solar_js_1.Earth.RADIUS);
console.log(solar_js_1.Sun.RADIUS);
/*こうすると、インポート側で次のように名前を付けることができるので、
 インポート側で同じ名前の変数を宣言しても名前が衝突しない。*/
/*import { Solar } from "./planet/solar.js";
console.log(Solar.Sun.RADIUS);
const Sun = "日曜日";//名前が衝突しない*/
var galaxy_js_1 = require("./planet/galaxy.js");
console.log(galaxy_js_1.Galaxy.Solar.Earth.RADIUS);
