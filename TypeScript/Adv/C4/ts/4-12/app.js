"use strict";
//惑星モジュールだけを扱う場合は問題ないが...
/*import { Earth } from "./planet/satellite.js";
console.log(Earth.satellites);*/
Object.defineProperty(exports, "__esModule", { value: true });
var satellite_js_1 = require("./planet/satellite.js");
console.log(satellite_js_1.Earth.satellites); //->["月"]
