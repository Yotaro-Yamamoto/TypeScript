//Readonly<T>
/*Readonly<T>は、T型のすべてのプロパティを読み取り専用にしたい型を作り出す。例として、学生オブジェクト
　の配列を引数で受け取り、学生一覧を表示する関数をk名が得てみよう。*/
//学生型
type Student = {
    id:number;//学生番号
    name:string;//名前
};
//読み取り専用の学生型
type ReadOnlyStudent = Readonly<Student>;
//学生情報
const list = [
    {id:1,name:"太郎"},
    {id:2,name:"次郎"},
];
//学生一覧を表示する関数
function showList(list:Array<ReadOnlyStudent>):void{
    list.forEach((student) => {
        console.log(student.id,student.name);
    });
}
//引数の配列要素をReadonlyにすると、関数内で誤って学生情報を書き換えてしまう事故を防ぐことができる。

showList(list);