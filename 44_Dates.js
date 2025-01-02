//Date objects = Objects that contains calues that represent dates and times.
//               These date objects can be changes and formatted

// Date(year, month, day, hour, minute, second, ms)

const date = new Date();

console.log(date);
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
const DayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(min);
console.log(sec);
console.log(DayOfWeek);
console.log(`\n`);

//Date(year, month, day, hour, minute, second, millisecond)
const date2 = new Date(2024, 9, 26, 11, 56, 42);

console.log(date2);
console.log(`\n`);

const date3 = new Date("2024-09-26T11:58:24Z")

console.log(date3);
console.log(`\n`);

const date4 = new Date(69000000) //Since the epic day(Unix epoch)

console.log(date4);
console.log(`\n`);

const date5 = new Date();

date5.setFullYear(2024);
date5.setMonth(9);
date5.setDate(26);
date5.setHours(12);
date5.setMinutes(11);
date5.setSeconds(16);

console.log(date4);
console.log(`\n`);

if(date2 > date){
    console.log("You Growing!!");
}  

    