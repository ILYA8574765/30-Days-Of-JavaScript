alert('Open the browser console whenever you work on JavaScript')
alert('Open the browser console whenever you work on JavaScript')
let userAge = prompt("vvedite svoi vozrast:");
userAge = parseInt(userAge);
if (userAge>=18){
    console.log("you can drive");
}
else
{console.log(`vam ostalos ${18 - userAge} let do vojdenia.`)}
let myAge = 25;
let yourAge = prompt("write your age:");
yourAge = parseInt(yourAge);
if (yourAge > myAge) {
    console.log(`you art older on ${yourAge - myAge} at me.`);
} else if (yourAge < myAge) {
    console.log(`you art younger on ${myAge - yourAge} at me.`);
} else {
    console.log("we are the same age.");
}

let c = 4;
let d = 3;
if (c>d){
    console.log(`${c} bolshe ${d}`);
}
else{
    console.log(`${c} menshe ${d}`);
}

let a = 4;
let b = 3;

console.log(a > b ? `${a} bolshe ${b}` : `${a} menshe ${b}`);

let number = prompt("vvedite chislo:");

number = parseInt(number);

if (number % 2 === 0) {
    console.log(`${number} — chetnoe.`);
} else {
    console.log(`${number} — nechetnoe.`);
}

//lvl 2
let score = prompt("Введите балл студента:");
score = parseInt(score);
let grade;
if (score >= 80 && score <= 100) {
    grade = 'A';
} else if (score >= 70 && score <= 89) {
    grade = 'B';
} else if (score >= 60 && score <= 69) {
    grade = 'C';
} else if (score >= 50 && score <= 59) {
    grade = 'D';
} else if (score >= 0 && score <= 49) {
    grade = 'F';
} else {
    grade = 'Неверный балл';
}
console.log("Оценка студента: " + grade);

let month = prompt("Введите месяц:");
month = month.toLowerCase();
let season;
if (month === 'september' || month === 'october' || month === 'november') {
    season = 'Autumn';
} else if (month === 'december' || month === 'january' || month === 'february') {
    season = 'Winter';
} else if (month === 'march' || month === 'april' || month === 'may') {
    season = 'Spring';
} else if (month === 'june' || month === 'july' || month === 'august') {
    season = 'Summer';
} else {
    season = 'Неверный месяц';
}

console.log("Сезон: " + season);

let day = prompt("Какой сегодня день?");
day = day.toLowerCase();
let dayType;
if (day === 'saturday' || day === 'sunday') {
    dayType = 'weekend';
} else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
    dayType = 'working day';
} else {
    dayType = 'Неверный день';
}

console.log(day + " is a " + dayType + ".");

//lvl 3
let month2 = prompt("Введите месяц:");
month2 = month2.toLowerCase();
let year = parseInt(prompt("Введите год:"));
let daysInMonth;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
if (month2 === 'january') {
    daysInMonth = 31;
} else if (month2 === 'february') {
    if (isLeapYear) {
        daysInMonth = 29;
    } else {
        daysInMonth = 28;
    }
} else if (month2 === 'march') {
    daysInMonth = 31;
} else if (month2 === 'april') {
    daysInMonth = 30;
} else if (month2 === 'may') {
    daysInMonth = 31;
} else if (month2 === 'june') {
    daysInMonth = 30;
} else if (month2 === 'july') {
    daysInMonth = 31;
} else if (month2 === 'august') {
    daysInMonth = 31;
} else if (month2 === 'september') {
    daysInMonth = 30;
} else if (month2 === 'october') {
    daysInMonth = 31;
} else if (month2 === 'november') {
    daysInMonth = 30;
} else if (month2 === 'december') {
    daysInMonth = 31;
} else {
    daysInMonth = 'Неверный месяц';
}

if (daysInMonth !== 'Неверный месяц') {
    console.log(month2.charAt(0).toUpperCase() + month2.slice(1) + " has " + daysInMonth + " days.");
} else {
    console.log(daysInMonth);
}