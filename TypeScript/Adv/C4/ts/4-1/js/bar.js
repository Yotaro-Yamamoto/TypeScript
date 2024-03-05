"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var foo_js_1 = require("./foo.js");
console.log(foo_js_1.flavor);
/*export文とimport文の構文は、import文でモジュールのパスを指定する際、foo.tsでなくfoo.tsを
 指定することに注意する。foo.tsはfoo.tsへ、bar.tsはbar.tsへコンパイルされるので、bar.ts
 からfoo.tsを利用する形にしなければならないからである。*/ 
