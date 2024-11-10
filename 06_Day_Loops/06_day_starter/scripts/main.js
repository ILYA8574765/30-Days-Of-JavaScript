const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya"
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

i = 10;
do {
    console.log(i);
    i--;
} while (i >= 0);

const n = 5; 
for (let i = 0; i <= n; i++) {
    console.log(i);
}

let pattern = '';
for (let i = 0; i <= 6; i++) {
    pattern += '#';
    console.log(pattern);
}


for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

console.log('i    i^2   i^3');
for (let i = 0; i <= 10; i++) {
    console.log(`${i}    ${i ** 2}    ${i ** 3}`);
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers is ${sum}.`);

let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
console.log(`The sum of all evens is ${sumEven}. And the sum of all odds is ${sumOdd}.`);

sumEven = 0;
sumOdd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
console.log([sumEven, sumOdd]);

const randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
}
console.log(randomArray);

const randomArray2 = [];
for (let i = 0; i < 5; i++) {
    randomArray2.push(Math.floor(Math.random() * 100));
}
console.log(randomArray2);

function generateRandomId() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
console.log(generateRandomId());

// Создайте небольшой скрипт, который последовательно выводит количество символов случайного идентификатора
function generateRandomId(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
console.log(generateRandomId(6).length);

// Напишите скрипт, который случайное число цветов RGB
function generateRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
console.log(generateRandomRGB());

// Произведите получение массива стран, создайте новый массив
const upperCaseCountries = countries.map(country => country.toUpperCase());
console.log(upperCaseCountries);

// Используйте приведенный выше массив стран, создайте массив для длины страны
const countryLengths = countries.map(country => country.length);
console.log(countryLengths);

// Используйте массив стран для создания следующего массива массивов
const countryArray = countries.map(country => [country, country.slice(0, 3).toUpperCase(), country.length]);
console.log(countryArray);

// В приведенном выше массиве стран проверьте, существует ли страна или страна, содержащая слово «земля»
const landCountries = countries.filter(country => country.includes('land'));
if (landCountries.length > 0) {
    console.log(landCountries);
} else {
    console.log('All these are countries without land');
}

// В приведенном выше массиве стран проверьте, существует ли страна или страна, заканчивающаяся на «ia»
const iaCountries = countries.filter(country => country.endsWith('ia'));
if (iaCountries.length > 0) {
    console.log(iaCountries);
} else {
    console.log('These are countries which ends without ia');
}

// Используем приведенный выше массив стран, при въезде в страну, содержащий максимальное количество символов
let longestCountry = countries[0];
for (let i = 1; i < countries.length; i++) {
    if (countries[i].length > longestCountry.length) {
        longestCountry = countries[i];
    }
}
console.log(longestCountry);

// Приведен приведенный выше массив стран, посещающих страну, содержащий всего 5 символов
const fiveCharCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        fiveCharCountries.push(countries[i]);
    }
}
console.log(fiveCharCountries);

// Найдите самое длинное слово в массиве webTechs
let longestWebTech = webTechs[0];
for (let i = 1; i < webTechs.length; i++) {
    if (webTechs[i].length > longestWebTech.length) {
        longestWebTech = webTechs[i];
    }
}
console.log(longestWebTech);

// Используйте webTechs для создания следующих массивов массивов
const webTechsArray = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechsArray.push([webTechs[i], webTechs[i].length]);
}
console.log(webTechsArray);

// Приложение, созданное с использованием MongoDB, Express, React и Node, называется стеком MERN. Создайте аббревиатуру MERN с помощью массива mernStack
let mern = '';
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i][0];
}
console.log(mern);

// Итерируйте по массиву, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] используя цикл for или цикл for of печати из предметов
const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (let i = 0; i < techs.length; i++) {
    console.log(techs[i]);
}

// Этот массив фруктов ['banana', 'orange', 'mango', 'lemon'] измените порядок, используя цикл, без использования обратного метода
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

// Распечатайте все элементы массива, как показано ниже
const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"]
];

for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j].toUpperCase());
    }
}