//列挙型
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sun"] = 0] = "Sun";
    DayOfWeek[DayOfWeek["Mon"] = 1] = "Mon";
    DayOfWeek[DayOfWeek["Tue"] = 2] = "Tue";
    DayOfWeek[DayOfWeek["Wed"] = 3] = "Wed";
    DayOfWeek[DayOfWeek["Tur"] = 4] = "Tur";
    DayOfWeek[DayOfWeek["Fri"] = 5] = "Fri";
    DayOfWeek[DayOfWeek["Sat"] = 6] = "Sat";
})(DayOfWeek || (DayOfWeek = {}));
var oneDay = "Fri"; //いずれの曜日のみ代入可能
console.log(oneDay);
