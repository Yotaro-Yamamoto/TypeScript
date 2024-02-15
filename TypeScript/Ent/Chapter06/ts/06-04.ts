//関数
function mixer(fruits) {
    return fruits+"ジュース";
}

let apple: string = "りんご";
const juice: string = mixer(apple);    //←引数を変数で渡す
console.log(juice);