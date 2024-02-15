//リテラル型
let hello: "おはよう" | "こんにちは" | "こんばんは";
hello = "おはよう";     //OK
hello = "こんにちは";   //OK
hello = "こんばんは";   //OK
hello = "Good Morning!";    //エラー