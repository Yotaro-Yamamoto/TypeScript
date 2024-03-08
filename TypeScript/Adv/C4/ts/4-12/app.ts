//惑星モジュールだけを扱う場合は問題ないが...
/*import { Earth } from "./planet/satellite.js";
console.log(Earth.satellites);*/

//惑星モジュールも扱う場合はasで別名をつけて名前の衝突を回避する必要がある。
import { Earth } from "./planet/solar.js";
import { Earth as EarthInfo} from "./planet/satellite.js";
console.log(EarthInfo.satellites);//->["月"]