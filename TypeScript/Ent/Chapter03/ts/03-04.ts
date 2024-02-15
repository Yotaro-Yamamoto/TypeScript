//列挙型 => ユニオン型に変換

//列挙型
enum DayOfWeek {
    Sun,    //日曜日:0
    Mon,    //月曜日:1
    Tue,    //火曜日:2
    Wed,    //水曜日:3
    Tur,    //木曜日:4
    Fri,    //金曜日:5
    Sat,    //土曜日:6
}
//ユニオン型に変換
//type Week = "Sun" | "Mon" | "Tue" | "Wed" | "Tur" | "Fri" | "Sat" と同じ
type Week = keyof typeof DayOfWeek;
const oneDay: Week = "Fri"; //いずれの曜日のみ代入可能

console.log(oneDay);