//インターフェース
//インターフェースとは
/*インターフェースは、複数のオブジェクトに共通する「ふるまい」をクラスから抜き出して
　定義したものである。*/
/*書式
interface インターフェース名{...}*/
//次のコードは、「歩く」というふるまいをインターフェースとして定義している。
interface IWalkable{
    walk():void;//publicになる
}
/*インターフェースに定義したふるまいは自動的にpublicになる。privateやprotected
　などのアクセス修飾子をつけるとコンパイルエラーになる。*/

//インターフェースの実装
/*インターフェースをクラスに実装するにはimplementsを使う。次のコードは、「歩く」
　インターフェースを実装した猫クラスと、猫クラスを継承したペルシャ猫クラスである。*/
class Cat implements IWalkable{
    walk(): void{
        console.log("猫歩き")
    }
    /*protected walk():void{
        console.log("猫歩き");//コンパイルエラー
    }*/
}
class Persian extends Cat{}
/*ペルシャ猫クラスは猫クラスのメソッドを継承しているので、インターフェースの実装を
　記述する必要はない。インターフェースの内容がすべての猫に共通するものであれば、
　スーパークラスに実装するとよい。
　なお、インターフェースはpublicなので、walkメソッドをprivateやprotectedにする
　ことはできない*/
const tama = new Cat();
tama.walk();