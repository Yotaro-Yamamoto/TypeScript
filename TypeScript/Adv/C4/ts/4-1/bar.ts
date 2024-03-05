import {flavor} from "./foo.js";
console.log(flavor);
/*export文とimport文の構文は、import文でモジュールのパスを指定する際、foo.tsでなくfoo.tsを
　指定することに注意する。foo.tsはfoo.tsへ、bar.tsはbar.tsへコンパイルされるので、bar.ts
　からfoo.tsを利用する形にしなければならないからである。*/