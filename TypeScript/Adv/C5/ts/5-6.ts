//Required<T>
/*Required<T>は、T型のすべてのプロパティを必須にした新しい型を作り出す。Partial<T>とは逆のイメージである。
　名前だけが必須の一般的なユーザ型があったとする。パスワードは必要なときだけ設定すればよいオプショナルプロパティである。*/
//一般的なユーザー型
type User = {
    name:string;//名前
    password?:string;//パスワード
};
//システム利用者型
type SystemUser = Required<User>;

/*すると、SystemUser型のオブジェクトには名前とパスワードが必ず設定されているので、次の関数は
　プロパティの存在を信じて実装することができる。*/
//システムにユーザーを登録する関数
function registerUser(user:User):void{
    //名前とパスワードを登録する処理
}